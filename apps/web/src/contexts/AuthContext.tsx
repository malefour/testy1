import React, { createContext, useContext, useEffect, useState } from 'react';

interface User {
  id: number;
  username: string;
  email: string;
  role: 'fan' | 'organizer';
  created_at: string;
  updated_at: string;
}

interface AuthContextType {
  user: User | null;
  login: (credentials: LoginCredentials) => Promise<void>;
  register: (userData: RegisterData) => Promise<void>;
  logout: () => void;
  loading: boolean;
  error: string | null;
}

interface LoginCredentials {
  username: string;
  password: string;
  role: 'fan' | 'organizer';
}

interface RegisterData {
  username: string;
  email: string;
  password: string;
  role: 'fan' | 'organizer';
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};

interface AuthProviderProps {
  children: React.ReactNode;
}

export const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    // Check for existing session on app load
    const token = localStorage.getItem('auth_token');
    if (token) {
      fetchUserProfile(token);
    } else {
      setLoading(false);
    }
  }, []);

  const fetchUserProfile = async (token: string) => {
    try {
      const response = await fetch('/api/auth/profile', {
        headers: {
          'Authorization': `Bearer ${token}`,
        },
      });

      if (response.ok) {
        const userData = await response.json();
        setUser({ ...userData, role: userData.role || 'fan' });
      } else {
        localStorage.removeItem('auth_token');
      }
    } catch (error) {
      console.error('Failed to fetch user profile:', error);
      localStorage.removeItem('auth_token');
    } finally {
      setLoading(false);
    }
  };

  const handleApiResponse = async (response: Response) => {
    console.log('handleApiResponse called with status:', response.status);
    console.log('Response URL:', response.url);
    
    if (!response.ok) {
      let errorMessage = 'Request failed';
      
      // Check if response has content
      const contentType = response.headers.get('content-type');
      console.log('Error response content-type:', contentType);
      
      if (contentType && contentType.includes('application/json')) {
        try {
          const errorData = await response.json();
          console.log('Error response JSON:', errorData);
          errorMessage = errorData.message || errorMessage;
        } catch (jsonError) {
          console.error('Failed to parse error JSON:', jsonError);
          errorMessage = response.statusText || errorMessage;
        }
      } else {
        // Response is not JSON, use status text
        console.log('Error response status text:', response.statusText);
        errorMessage = response.statusText || `HTTP ${response.status}`;
      }
      
      throw new Error(errorMessage);
    }

    // Check if response has content for successful responses
    const contentType = response.headers.get('content-type');
    console.log('Success response content-type:', contentType);
    
    if (contentType && contentType.includes('application/json')) {
      try {
        const data = await response.json();
        console.log('Success response JSON:', data);
        return data;
      } catch (jsonError) {
        console.error('Failed to parse success JSON:', jsonError);
        throw new Error('Invalid response format');
      }
    } else {
      throw new Error('Expected JSON response');
    }
  };

  const login = async (credentials: LoginCredentials) => {
    setLoading(true);
    setError(null);

    try {
      console.log('Attempting to login user:', { username: credentials.username });
      
      const response = await fetch('/api/auth/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          username: credentials.username,
          password: credentials.password,
        }),
      });

      console.log('Login response status:', response.status);
      console.log('Login response headers:', Object.fromEntries(response.headers.entries()));

      const data = await handleApiResponse(response);
      console.log('Login successful:', data);
      
      localStorage.setItem('auth_token', data.access_token);
      setUser({ ...data.user, role: credentials.role });
    } catch (error) {
      console.error('Login error:', error);
      const errorMessage = error instanceof Error ? error.message : 'Login failed';
      setError(errorMessage);
      throw error;
    } finally {
      setLoading(false);
    }
  };

  const register = async (userData: RegisterData) => {
    setLoading(true);
    setError(null);

    try {
      console.log('Attempting to register user:', { username: userData.username, email: userData.email });
      
      const response = await fetch('/api/auth/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          username: userData.username,
          email: userData.email,
          password: userData.password,
        }),
      });

      console.log('Registration response status:', response.status);
      console.log('Registration response headers:', Object.fromEntries(response.headers.entries()));

      const data = await handleApiResponse(response);
      console.log('Registration successful:', data);
      
      localStorage.setItem('auth_token', data.access_token);
      setUser({ ...data.user, role: userData.role });
    } catch (error) {
      console.error('Registration error:', error);
      const errorMessage = error instanceof Error ? error.message : 'Registration failed';
      setError(errorMessage);
      throw error;
    } finally {
      setLoading(false);
    }
  };

  const logout = () => {
    localStorage.removeItem('auth_token');
    setUser(null);
    setError(null);
  };

  return (
    <AuthContext.Provider value={{ user, login, register, logout, loading, error }}>
      {children}
    </AuthContext.Provider>
  );
};