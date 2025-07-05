declare module 'better-sqlite3' {
  export interface Database {
    exec(sql: string): void;
    prepare(sql: string): Statement;
    close(): void;
  }

  export interface Statement {
    run(...params: any[]): RunResult;
    get(...params: any[]): any;
    all(...params: any[]): any[];
  }

  export interface RunResult {
    changes: number;
    lastInsertRowid: number;
  }

  export default function Database(filename: string): Database;
} 