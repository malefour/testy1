import React, { useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, User, LogOut, Settings } from 'lucide-react';
import { Button } from './ui/button';
import { cn } from '@openticket/ui';
import { motion, AnimatePresence } from 'framer-motion';
import { useAuth } from '../contexts/AuthContext';

const menuItems = [
    { name: 'Function', href: '/how-it-works' },
    { name: 'Pricing', href: '/pricing' },
    { name: 'Fans', href: '/for-fans' },
    { name: 'Organizers', href: '/for-organizers' },
    { name: 'Investors', href: '/investors' },
];

const featuresDropdown = [
  { name: 'Anti-Scalping Technology', href: '/solutions/anti-scalping' },
  { name: 'Secure Resale', href: '/solutions/secure-resale' },
  { name: 'Ensuring Authenticity', href: '/solutions/ensuring-authenticity' },
  { name: 'Collectibles', href: '/collectibles' },
];

const Navbar = () => {
    const [menuState, setMenuState] = React.useState(false);
    const [isScrolled, setIsScrolled] = React.useState(false);
    const [solutionsOpen, setSolutionsOpen] = React.useState(false);
    const [accountOpen, setAccountOpen] = React.useState(false);
    const dropdownTimeout = useRef<NodeJS.Timeout | null>(null);
    const accountTimeout = useRef<NodeJS.Timeout | null>(null);
    const location = useLocation();
    const { user, logout } = useAuth();

    React.useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const isActive = (path: string) => location.pathname === path;

    const handleLogout = () => {
        logout();
        setAccountOpen(false);
    };

    return (
        <header className="w-full">
            <nav
                data-state={menuState && 'active'}
                className="fixed z-20 w-full px-4 group">
                <div className={cn(
                    'mx-auto mt-2 max-w-6xl transition-all duration-300 lg:px-8', 
                    isScrolled && 'bg-secondary/80 max-w-4xl rounded-xl border border-primary backdrop-blur-xl lg:px-6 shadow-lg'
                )}>
                    <div className="relative flex items-center justify-between gap-6 py-3 lg:gap-0 lg:py-4">
                        {/* Logo */}
                        <div className="flex-shrink-0">
                            <Link
                                to="/"
                                aria-label="home"
                                className="flex items-center space-x-2">
                                <Logo />
                            </Link>
                        </div>

                        {/* Mobile menu button */}
                        <button
                            onClick={() => setMenuState(!menuState)}
                            aria-label={menuState == true ? 'Close Menu' : 'Open Menu'}
                            className="relative z-20 -m-2.5 block cursor-pointer p-2.5 lg:hidden">
                            <Menu className="in-data-[state=active]:rotate-180 group-data-[state=active]:scale-0 group-data-[state=active]:opacity-0 m-auto size-6 duration-200" />
                            <X className="group-data-[state=active]:rotate-0 group-data-[state=active]:scale-100 group-data-[state=active]:opacity-100 absolute inset-0 m-auto size-6 -rotate-180 scale-0 opacity-0 duration-200" />
                        </button>

                        {/* Desktop Navigation - Centered */}
                        <div className="hidden lg:flex lg:flex-1 lg:justify-center">
                            <ul className={cn(
                                "flex items-center text-sm nav-gap-transition",
                                isScrolled ? "nav-gap-scrolled" : "nav-gap-default"
                            )}>
                                {/* How It Works */}
                                <li>
                                    <Link
                                        to="/how-it-works"
                                        className={cn(
                                            "px-4 py-2 rounded-lg text-sm font-medium transition-all duration-150 text-white hover:text-accent hover:bg-accent-light",
                                            isActive('/how-it-works') && "active"
                                        )}
                                    >
                                        <span>Function</span>
                                    </Link>
                                </li>
                                {/* Features Dropdown */}
                                <li className="relative flex justify-center min-w-0"
                                    onMouseEnter={() => {
                                        if (dropdownTimeout.current) clearTimeout(dropdownTimeout.current);
                                        setSolutionsOpen(true);
                                    }}
                                    onMouseLeave={() => {
                                        dropdownTimeout.current = setTimeout(() => setSolutionsOpen(false), 220);
                                    }}>
                                    <button
                                        className={cn(
                                            "px-4 py-2 rounded-lg text-sm font-medium transition-all duration-150 text-white hover:text-accent hover:bg-accent-light",
                                            solutionsOpen && "active"
                                        )}
                                        aria-haspopup="true"
                                        aria-expanded={solutionsOpen}
                                        type="button"
                                    >
                                        Features
                                    </button>
                                    <AnimatePresence>
                                        {solutionsOpen && (
                                            <motion.ul
                                                initial={{ opacity: 0, y: 10, scale: 0.95 }}
                                                animate={{ opacity: 1, y: 0, scale: 1 }}
                                                exit={{ opacity: 0, y: 10, scale: 0.95 }}
                                                transition={{ duration: 0.15, ease: "easeOut" }}
                                                className="absolute top-full mt-2 w-64 rounded-xl border border-primary bg-secondary/95 backdrop-blur-xl p-2 shadow-xl z-30 text-left"
                                                onMouseEnter={() => {
                                                    if (dropdownTimeout.current) clearTimeout(dropdownTimeout.current);
                                                    setSolutionsOpen(true);
                                                }}
                                                onMouseLeave={() => {
                                                    dropdownTimeout.current = setTimeout(() => setSolutionsOpen(false), 220);
                                                }}
                                            >
                                                {featuresDropdown.map((item, idx) => (
                                                    <li key={idx}>
                                                        <Link
                                                            to={item.href}
                                                            className="block px-4 py-3 text-sm text-white hover:text-accent hover:bg-accent-light rounded-lg transition-all duration-150"
                                                            onClick={() => setSolutionsOpen(false)}
                                                        >
                                                            {item.name}
                                                        </Link>
                                                    </li>
                                                ))}
                                            </motion.ul>
                                        )}
                                    </AnimatePresence>
                                </li>
                                {/* Pricing */}
                                <li>
                                    <Link
                                        to="/pricing"
                                        className={cn(
                                            "px-4 py-2 rounded-lg text-sm font-medium transition-all duration-150 text-white hover:text-accent hover:bg-accent-light",
                                            isActive('/pricing') && "active"
                                        )}
                                    >
                                        <span>Pricing</span>
                                    </Link>
                                </li>
                                {/* Divider */}
                                <li aria-hidden="true" className="mx-2 h-6 border-l border-primary" style={{ minWidth: '1px' }} />
                                {/* For Fans */}
                                <li>
                                    <Link
                                        to="/for-fans"
                                        className={cn(
                                            "px-4 py-2 rounded-lg text-sm font-medium transition-all duration-150 text-white hover:text-accent hover:bg-accent-light",
                                            isActive('/for-fans') && "active"
                                        )}
                                    >
                                        <span>Fans</span>
                                    </Link>
                                </li>
                                {/* For Organizers */}
                                <li>
                                    <Link
                                        to="/for-organizers"
                                        className={cn(
                                            "px-4 py-2 rounded-lg text-sm font-medium transition-all duration-150 text-white hover:text-accent hover:bg-accent-light",
                                            isActive('/for-organizers') && "active"
                                        )}
                                    >
                                        <span>Organizers</span>
                                    </Link>
                                </li>
                                {/* Investors */}
                                <li>
                                    <Link
                                        to="/investors"
                                        className={cn(
                                            "px-4 py-2 rounded-lg text-sm font-medium transition-all duration-150 text-white hover:text-accent hover:bg-accent-light",
                                            isActive('/investors') && "active"
                                        )}
                                    >
                                        <span>Investors</span>
                                    </Link>
                                </li>
                            </ul>
                        </div>

                        {/* Right side - Theme toggle and account */}
                        <div className="flex items-center gap-3">
                            
                            {/* Account Button/Dropdown */}
                            {user ? (
                                <div className="relative"
                                    onMouseEnter={() => {
                                        if (accountTimeout.current) clearTimeout(accountTimeout.current);
                                        setAccountOpen(true);
                                    }}
                                    onMouseLeave={() => {
                                        accountTimeout.current = setTimeout(() => setAccountOpen(false), 220);
                                    }}>
                                    <button
                                        className={cn(
                                            "flex items-center space-x-2 px-3 py-2 rounded-lg text-sm font-medium transition-all duration-150",
                                            "text-white hover:text-accent hover:bg-accent-light",
                                            accountOpen && "bg-accent-light text-accent"
                                        )}
                                    >
                                        <div className="w-7 h-7 bg-gradient-subtle rounded-full flex items-center justify-center shadow-md">
                                            <User className="h-4 w-4 text-white" />
                                        </div>
                                        <span className="hidden lg:inline font-medium">{user.username}</span>
                                    </button>
                                    
                                    <AnimatePresence>
                                        {accountOpen && (
                                            <motion.div
                                                initial={{ opacity: 0, y: 10, scale: 0.95 }}
                                                animate={{ opacity: 1, y: 0, scale: 1 }}
                                                exit={{ opacity: 0, y: 10, scale: 0.95 }}
                                                transition={{ duration: 0.15, ease: "easeOut" }}
                                                className="absolute top-full right-0 mt-2 w-56 rounded-xl border border-primary bg-secondary/95 backdrop-blur-xl shadow-xl z-30"
                                            >
                                                <div className="px-4 py-3 border-b border-primary">
                                                    <p className="text-sm font-semibold text-white">{user.username}</p>
                                                    <p className="text-xs text-muted capitalize flex items-center">
                                                        <span className={cn(
                                                            "w-2 h-2 rounded-full mr-2",
                                                            user.role === 'organiser' ? 'bg-purple-500' : 'bg-accent'
                                                        )}></span>
                                                        {user.role}
                                                    </p>
                                                </div>
                                                <div className="p-2">
                                                    <Link
                                                        to="/dashboard"
                                                        className="flex items-center px-3 py-2 text-sm text-white hover:text-accent hover:bg-accent-light rounded-lg transition-all duration-150"
                                                        onClick={() => setAccountOpen(false)}
                                                    >
                                                        <Settings className="h-4 w-4 mr-3" />
                                                        Dashboard
                                                    </Link>
                                                    <button
                                                        onClick={handleLogout}
                                                        className="w-full flex items-center px-3 py-2 text-sm text-primary dark:text-slate-300 hover:text-red-600 dark:hover:text-red-400 hover:bg-red-50 dark:hover:bg-red-950/20 rounded-lg transition-all duration-150"
                                                    >
                                                        <LogOut className="h-4 w-4 mr-3" />
                                                        Sign Out
                                                    </button>
                                                </div>
                                            </motion.div>
                                        )}
                                    </AnimatePresence>
                                </div>
                            ) : (
                                <Button
                                    asChild
                                    size="sm"
                                    className="hidden lg:inline-flex btn-primary">
                                    <Link to="/signin">
                                        <span>Sign In</span>
                                    </Link>
                                </Button>
                            )}
                        </div>

                        {/* Mobile menu */}
                        <div className="bg-secondary/95 backdrop-blur-xl group-data-[state=active]:block lg:group-data-[state=active]:flex mb-6 hidden w-full flex-wrap items-center justify-end space-y-8 rounded-xl border border-primary p-6 shadow-xl md:flex-nowrap lg:m-0 lg:flex lg:w-fit lg:gap-2 lg:space-y-0 lg:border-transparent lg:bg-transparent lg:p-0 lg:shadow-none">
                            <div className="lg:hidden">
                                <ul className="space-y-6 text-base">
                                    {menuItems.map((item, index) => (
                                        <li key={index}>
                                            <Link
                                                to={item.href}
                                                className={cn(
                                                    "text-secondary hover:text-accent block duration-150 font-medium",
                                                    isActive(item.href) && "text-accent"
                                                )}
                                                onClick={() => setMenuState(false)}>
                                                <span>{item.name}</span>
                                            </Link>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                            <div className="flex w-full flex-col space-y-3 sm:flex-row sm:gap-3 sm:space-y-0 md:w-fit items-center">
                                {!user && (
                                    <Button
                                        asChild
                                        size="sm"
                                        className="lg:hidden btn-primary">
                                        <Link to="/signin">
                                            <span>Sign In</span>
                                        </Link>
                                    </Button>
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            </nav>
        </header>
    );
};

const Logo = ({ className }: { className?: string }) => {
    return (
        <svg
            viewBox="0 0 78 18"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className={cn('h-5 w-auto', className)}>
            <path
                d="M3 0H5V18H3V0ZM13 0H15V18H13V0ZM18 3V5H0V3H18ZM0 15V13H18V15H0Z"
                fill="url(#logo-gradient)"
            />
            <path
                d="M27.06 7.054V12.239C27.06 12.5903 27.1393 12.8453 27.298 13.004C27.468 13.1513 27.7513 13.225 28.148 13.225H29.338V14.84H27.808C26.9353 14.84 26.2667 14.636 25.802 14.228C25.3373 13.82 25.105 13.157 25.105 12.239V7.054H24V5.473H25.105V3.144H27.06V5.473H29.338V7.054H27.06ZM30.4782 10.114C30.4782 9.17333 30.6709 8.34033 31.0562 7.615C31.4529 6.88967 31.9855 6.32867 32.6542 5.932C33.3342 5.524 34.0822 5.32 34.8982 5.32C35.6349 5.32 36.2752 5.46733 36.8192 5.762C37.3745 6.04533 37.8165 6.40233 38.1452 6.833V5.473H40.1002V14.84H38.1452V13.446C37.8165 13.888 37.3689 14.2563 36.8022 14.551C36.2355 14.8457 35.5895 14.993 34.8642 14.993C34.0595 14.993 33.3229 14.789 32.6542 14.381C31.9855 13.9617 31.4529 13.3837 31.0562 12.647C30.6709 11.899 30.4782 11.0547 30.4782 10.114ZM38.1452 10.148C38.1452 9.502 38.0092 8.941 37.7372 8.465C37.4765 7.989 37.1309 7.62633 36.7002 7.377C36.2695 7.12767 35.8049 7.003 35.3062 7.003C34.8075 7.003 34.3429 7.12767 33.9122 7.377C33.4815 7.615 33.1302 7.972 32.8582 8.448C32.5975 8.91267 32.4672 9.468 32.4672 10.114C32.4672 10.76 32.5975 11.3267 32.8582 11.814C33.1302 12.3013 33.4815 12.6753 33.9122 12.936C34.3542 13.1853 34.8189 13.31 35.3062 13.31C35.8049 13.31 36.2695 13.1853 36.7002 12.936C37.1309 12.6867 37.4765 12.324 37.7372 11.848C38.0092 11.3607 38.1452 10.794 38.1452 10.148ZM43.6317 4.232C43.2803 4.232 42.9857 4.113 42.7477 3.875C42.5097 3.637 42.3907 3.34233 42.3907 2.991C42.3907 2.63967 42.5097 2.345 42.7477 2.107C42.9857 1.869 43.2803 1.75 43.6317 1.75C43.9717 1.75 44.2607 1.869 44.4987 2.107C44.7367 2.345 44.8557 2.63967 44.8557 2.991C44.8557 3.34233 44.7367 3.637 44.4987 3.875C44.2607 4.113 43.9717 4.232 43.6317 4.232ZM44.5837 5.473V14.84H42.6457V5.473H44.5837ZM49.0661 2.26V14.84H47.1281V2.26H49.0661ZM50.9645 10.114C50.9645 9.17333 51.1572 8.34033 51.5425 7.615C51.9392 6.88967 52.4719 6.32867 53.1405 5.932C53.8205 5.524 54.5685 5.32 55.3845 5.32C56.1212 5.32 56.7615 5.46733 57.3055 5.762C57.8609 6.04533 58.3029 6.40233 58.6315 6.833V5.473H60.5865V14.84H58.6315V13.446C58.3029 13.888 57.8552 14.2563 57.2885 14.551C56.7219 14.8457 56.0759 14.993 55.3505 14.993C54.5459 14.993 53.8092 14.789 53.1405 14.381C52.4719 13.9617 51.9392 13.3837 51.5425 12.647C51.1572 11.899 50.9645 11.0547 50.9645 10.114ZM58.6315 10.148C58.6315 9.502 58.4955 8.941 58.2235 8.465C57.9629 7.989 57.6172 7.62633 57.1865 7.377C56.7559 7.12767 56.2912 7.003 55.7925 7.003C55.2939 7.003 54.8292 7.12767 54.3985 7.377C53.9679 7.615 53.6165 7.972 53.3445 8.448C53.0839 8.91267 52.9535 9.468 52.9535 10.114C52.9535 10.76 53.0839 11.3267 53.3445 11.814C53.6165 12.3013 53.9679 12.6753 54.3985 12.936C54.8405 13.1853 55.3052 13.31 55.7925 13.31C56.2912 13.31 56.7559 13.1853 57.1865 12.936C57.6172 12.6867 57.9629 12.324 58.2235 11.848C58.4955 11.3607 58.6315 10.794 58.6315 10.148ZM65.07 6.833C65.3533 6.357 65.7273 5.98867 66.192 5.728C66.668 5.456 67.229 5.32 67.875 5.32V7.326H67.382C66.6227 7.326 66.0447 7.51867 65.648 7.904C65.2627 8.28933 65.07 8.958 65.07 9.91V14.84H63.132V5.473H65.07V6.833ZM73.3624 10.165L77.6804 14.84H75.0624L71.5944 10.811V14.84H69.6564V2.26H71.5944V9.57L74.9944 5.473H77.6804L73.3624 10.165Z"
                fill="currentColor"
            />
            <defs>
                <linearGradient
                    id="logo-gradient"
                    x1="10"
                    y1="0"
                    x2="10"
                    y2="20"
                    gradientUnits="userSpaceOnUse">
                    <stop stopColor="var(--color-accent)" />
                    <stop
                        offset="1"
                        stopColor="#9945FF"
                    />
                </linearGradient>
            </defs>
        </svg>
    );
};

export default Navbar;