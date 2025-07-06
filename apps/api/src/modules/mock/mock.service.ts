import { Injectable } from '@nestjs/common';
import * as fs from 'fs';
import * as path from 'path';

export interface MockUser {
  id: string;
  username: string;
  email: string;
  password: string; // In real app, this would be hashed
  role: 'organiser' | 'attendee';
  createdAt: Date;
}

export interface MockEvent {
  id: string;
  name: string;
  description: string;
  venue: string;
  datetime: string;
  price: number;
  supply: number;
  sold: number;
  organiserId: string;
  createdAt: Date;
  status: 'active' | 'cancelled' | 'completed';
}

export interface MockTicket {
  id: string;
  ticketId: string;
  nftId: string;
  eventId: string;
  userId: string;
  status: 'unused' | 'used' | 'cancelled';
  qrPath: string;
  purchasedAt: Date;
  usedAt?: Date;
}

export interface MockPayment {
  id: string;
  ticketId: string;
  amount: number;
  status: 'pending' | 'completed' | 'failed';
  createdAt: Date;
}

@Injectable()
export class MockService {
  private mockData = {
    users: [] as MockUser[],
    events: [] as MockEvent[],
    tickets: [] as MockTicket[],
    payments: [] as MockPayment[],
  };

  private readonly mockDataPath = path.join(process.cwd(), 'tmp', 'mock-data.json');

  constructor() {
    this.loadMockData();
  }

  private loadMockData() {
    try {
      if (fs.existsSync(this.mockDataPath)) {
        const data = fs.readFileSync(this.mockDataPath, 'utf8');
        this.mockData = JSON.parse(data);
        
        // Convert date strings back to Date objects
        this.mockData.users.forEach(user => {
          user.createdAt = new Date(user.createdAt);
        });
        this.mockData.events.forEach(event => {
          event.createdAt = new Date(event.createdAt);
        });
        this.mockData.tickets.forEach(ticket => {
          ticket.purchasedAt = new Date(ticket.purchasedAt);
          if (ticket.usedAt) {
            ticket.usedAt = new Date(ticket.usedAt);
          }
        });
        this.mockData.payments.forEach(payment => {
          payment.createdAt = new Date(payment.createdAt);
        });
      }
    } catch (error) {
      console.log('No existing mock data found, starting fresh');
    }
  }

  private saveMockData() {
    try {
      // Ensure tmp directory exists
      const tmpDir = path.dirname(this.mockDataPath);
      if (!fs.existsSync(tmpDir)) {
        fs.mkdirSync(tmpDir, { recursive: true });
      }
      
      fs.writeFileSync(this.mockDataPath, JSON.stringify(this.mockData, null, 2));
    } catch (error) {
      console.error('Failed to save mock data:', error);
    }
  }

  // User methods
  createUser(userData: Omit<MockUser, 'id' | 'createdAt'>): MockUser {
    const user: MockUser = {
      ...userData,
      id: this.generateId(),
      createdAt: new Date(),
    };
    this.mockData.users.push(user);
    this.saveMockData();
    return user;
  }

  findUserById(id: string): MockUser | undefined {
    return this.mockData.users.find(user => user.id === id);
  }

  findUserByUsername(username: string): MockUser | undefined {
    return this.mockData.users.find(user => user.username === username);
  }

  findUserByEmail(email: string): MockUser | undefined {
    return this.mockData.users.find(user => user.email === email);
  }

  // Event methods
  createEvent(eventData: Omit<MockEvent, 'id' | 'createdAt' | 'sold'>): MockEvent {
    const event: MockEvent = {
      ...eventData,
      id: this.generateId(),
      sold: 0,
      createdAt: new Date(),
    };
    this.mockData.events.push(event);
    this.saveMockData();
    return event;
  }

  findEventById(id: string): MockEvent | undefined {
    return this.mockData.events.find(event => event.id === id);
  }

  findEventsByOrganiser(organiserId: string): MockEvent[] {
    return this.mockData.events.filter(event => event.organiserId === organiserId);
  }

  updateEventSupply(eventId: string, sold: number): MockEvent | undefined {
    const event = this.findEventById(eventId);
    if (event) {
      event.sold = sold;
      this.saveMockData();
    }
    return event;
  }

  // Ticket methods
  createTicket(ticketData: Omit<MockTicket, 'id' | 'purchasedAt'>): MockTicket {
    const ticket: MockTicket = {
      ...ticketData,
      id: this.generateId(),
      purchasedAt: new Date(),
    };
    this.mockData.tickets.push(ticket);
    this.saveMockData();
    return ticket;
  }

  findTicketById(id: string): MockTicket | undefined {
    return this.mockData.tickets.find(ticket => ticket.id === id);
  }

  findTicketByTicketId(ticketId: string): MockTicket | undefined {
    return this.mockData.tickets.find(ticket => ticket.ticketId === ticketId);
  }

  findTicketsByUser(userId: string): MockTicket[] {
    return this.mockData.tickets.filter(ticket => ticket.userId === userId);
  }

  findTicketsByEvent(eventId: string): MockTicket[] {
    return this.mockData.tickets.filter(ticket => ticket.eventId === eventId);
  }

  updateTicketStatus(ticketId: string, status: MockTicket['status'], usedAt?: Date): MockTicket | undefined {
    const ticket = this.findTicketByTicketId(ticketId);
    if (ticket) {
      ticket.status = status;
      if (usedAt) {
        ticket.usedAt = usedAt;
      }
      this.saveMockData();
    }
    return ticket;
  }

  // Payment methods
  createPayment(paymentData: Omit<MockPayment, 'id' | 'createdAt'>): MockPayment {
    const payment: MockPayment = {
      ...paymentData,
      id: this.generateId(),
      createdAt: new Date(),
    };
    this.mockData.payments.push(payment);
    this.saveMockData();
    return payment;
  }

  findPaymentByTicketId(ticketId: string): MockPayment | undefined {
    return this.mockData.payments.find(payment => payment.ticketId === ticketId);
  }

  // Utility methods
  private generateId(): string {
    return Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15);
  }

  // Reset all mock data
  resetAllData() {
    this.mockData = {
      users: [],
      events: [],
      tickets: [],
      payments: [],
    };
    this.saveMockData();
    
    // Clean up QR files
    const qrDir = path.join(process.cwd(), 'tmp', 'qr');
    if (fs.existsSync(qrDir)) {
      fs.rmSync(qrDir, { recursive: true, force: true });
    }
  }

  // Get all data for debugging
  getAllData() {
    return this.mockData;
  }
} 