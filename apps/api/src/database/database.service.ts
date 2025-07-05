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
} 