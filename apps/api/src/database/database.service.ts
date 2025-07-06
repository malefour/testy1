import { Injectable, OnModuleInit } from '@nestjs/common';
import * as path from 'path';

// Import better-sqlite3 with any type to avoid TypeScript issues
const Database = require('better-sqlite3');

export interface User {
  id: number;
  username: string;
  password: string;
  email: string;
  created_at: string;
  updated_at: string;
}

export interface Event {
  id: string;
  organiserId: number;
  name: string;
  venue: string;
  dateTime: string;
  price: number;
  supply: number;
  createdAt: string;
}

@Injectable()
export class DatabaseService implements OnModuleInit {
  private db: any;

  onModuleInit() {
    this.initializeDatabase();
  }

  private initializeDatabase() {
    const dbPath = path.join(process.cwd(), 'local.db');
    this.db = new Database(dbPath);
    
    // Create users table if it doesn't exist
    this.db.exec(`
      CREATE TABLE IF NOT EXISTS users (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        username TEXT UNIQUE NOT NULL,
        password TEXT NOT NULL,
        email TEXT UNIQUE NOT NULL,
        created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
        updated_at DATETIME DEFAULT CURRENT_TIMESTAMP
      )
    `);

    // Create events table if it doesn't exist
    this.db.exec(`
      CREATE TABLE IF NOT EXISTS events (
        id TEXT PRIMARY KEY,
        organiserId INTEGER NOT NULL,
        name TEXT NOT NULL,
        venue TEXT NOT NULL,
        dateTime TEXT NOT NULL,
        price REAL NOT NULL,
        supply INTEGER NOT NULL,
        createdAt DATETIME DEFAULT CURRENT_TIMESTAMP,
        FOREIGN KEY (organiserId) REFERENCES users (id)
      )
    `);
  }

  async createUser(username: string, hashedPassword: string, email: string): Promise<User | null> {
    const stmt = this.db.prepare(`
      INSERT INTO users (username, password, email)
      VALUES (?, ?, ?)
    `);
    
    const result = stmt.run(username, hashedPassword, email);
    
    return this.getUserById(result.lastInsertRowid as number);
  }

  async getUserByUsername(username: string): Promise<User | null> {
    const stmt = this.db.prepare('SELECT * FROM users WHERE username = ?');
    const user = stmt.get(username) as User | undefined;
    return user || null;
  }

  async getUserByEmail(email: string): Promise<User | null> {
    const stmt = this.db.prepare('SELECT * FROM users WHERE email = ?');
    const user = stmt.get(email) as User | undefined;
    return user || null;
  }

  async getUserById(id: number): Promise<User | null> {
    const stmt = this.db.prepare('SELECT * FROM users WHERE id = ?');
    const user = stmt.get(id) as User | undefined;
    return user || null;
  }

  async updateUser(id: number, updates: Partial<Omit<User, 'id' | 'created_at'>>): Promise<User | null> {
    const fields = Object.keys(updates).map(key => `${key} = ?`).join(', ');
    const values = Object.values(updates);
    
    const stmt = this.db.prepare(`
      UPDATE users 
      SET ${fields}, updated_at = CURRENT_TIMESTAMP 
      WHERE id = ?
    `);
    
    const result = stmt.run(...values, id);
    
    if (result.changes > 0) {
      return this.getUserById(id);
    }
    
    return null;
  }

  async deleteUser(id: number): Promise<boolean> {
    const stmt = this.db.prepare('DELETE FROM users WHERE id = ?');
    const result = stmt.run(id);
    return result.changes > 0;
  }

  async getAllUsers(): Promise<User[]> {
    const stmt = this.db.prepare('SELECT * FROM users ORDER BY created_at DESC');
    return stmt.all() as User[];
  }

  async createEvent(eventData: Omit<Event, 'createdAt'>): Promise<Event | null> {
    const stmt = this.db.prepare(`
      INSERT INTO events (id, organiserId, name, venue, dateTime, price, supply)
      VALUES (?, ?, ?, ?, ?, ?, ?)
    `);
    
    const result = stmt.run(
      eventData.id,
      eventData.organiserId,
      eventData.name,
      eventData.venue,
      eventData.dateTime,
      eventData.price,
      eventData.supply
    );
    
    return this.getEventById(eventData.id);
  }

  async getEventById(id: string): Promise<Event | null> {
    const stmt = this.db.prepare('SELECT * FROM events WHERE id = ?');
    const event = stmt.get(id) as Event | undefined;
    return event || null;
  }

  async getEventsByOrganiser(organiserId: number): Promise<Event[]> {
    const stmt = this.db.prepare('SELECT * FROM events WHERE organiserId = ? ORDER BY createdAt DESC');
    return stmt.all(organiserId) as Event[];
  }

  async getAllEvents(): Promise<Event[]> {
    const stmt = this.db.prepare('SELECT * FROM events ORDER BY createdAt DESC');
    return stmt.all() as Event[];
  }

  async updateEvent(id: string, updates: Partial<Omit<Event, 'id' | 'createdAt'>>): Promise<Event | null> {
    const fields = Object.keys(updates).map(key => `${key} = ?`).join(', ');
    const values = Object.values(updates);
    
    const stmt = this.db.prepare(`
      UPDATE events 
      SET ${fields}
      WHERE id = ?
    `);
    
    const result = stmt.run(...values, id);
    
    if (result.changes > 0) {
      return this.getEventById(id);
    }
    
    return null;
  }

  async deleteEvent(id: string): Promise<boolean> {
    const stmt = this.db.prepare('DELETE FROM events WHERE id = ?');
    const result = stmt.run(id);
    return result.changes > 0;
  }
} 