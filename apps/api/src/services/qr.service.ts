import { Injectable } from '@nestjs/common';
import * as QRCode from 'qrcode';
import * as fs from 'fs';
import * as path from 'path';

export interface QRData {
  ticketId: string;
  eventId: string;
  userId: string;
  timestamp: number;
}

@Injectable()
export class QRService {
  private readonly qrDir = path.join(process.cwd(), 'tmp', 'qr');

  constructor() {
    this.ensureQRDirectory();
  }

  private ensureQRDirectory() {
    if (!fs.existsSync(this.qrDir)) {
      fs.mkdirSync(this.qrDir, { recursive: true });
    }
  }

  async generateQRCode(ticketId: string, eventId: string, userId: string): Promise<string> {
    const qrData: QRData = {
      ticketId,
      eventId,
      userId,
      timestamp: Date.now(),
    };

    const qrContent = JSON.stringify(qrData);
    const fileName = `${ticketId}.png`;
    const filePath = path.join(this.qrDir, fileName);

    try {
      // Generate QR code as PNG
      await QRCode.toFile(filePath, qrContent, {
        errorCorrectionLevel: 'M',
        type: 'png',
        margin: 1,
        color: {
          dark: '#000000',
          light: '#FFFFFF',
        },
      });

      console.log(`📱 QR code generated: ${filePath}`);
      return filePath;
    } catch (error) {
      console.error('Failed to generate QR code:', error);
      throw new Error('Failed to generate QR code');
    }
  }

  async generateQRCodeAsDataURL(ticketId: string, eventId: string, userId: string): Promise<string> {
    const qrData: QRData = {
      ticketId,
      eventId,
      userId,
      timestamp: Date.now(),
    };

    const qrContent = JSON.stringify(qrData);

    try {
      // Generate QR code as data URL
      const dataURL = await QRCode.toDataURL(qrContent, {
        errorCorrectionLevel: 'M',
        type: 'image/png',
        margin: 1,
        color: {
          dark: '#000000',
          light: '#FFFFFF',
        },
      });

      console.log(`📱 QR code generated as data URL for ticket: ${ticketId}`);
      return dataURL;
    } catch (error) {
      console.error('Failed to generate QR code data URL:', error);
      throw new Error('Failed to generate QR code');
    }
  }

  async readQRCode(qrContent: string): Promise<QRData | null> {
    try {
      const qrData = JSON.parse(qrContent) as QRData;
      
      // Validate required fields
      if (!qrData.ticketId || !qrData.eventId || !qrData.userId || !qrData.timestamp) {
        throw new Error('Invalid QR code data');
      }

      return qrData;
    } catch (error) {
      console.error('Failed to read QR code:', error);
      return null;
    }
  }

  async getQRCodeFile(ticketId: string): Promise<string | null> {
    const filePath = path.join(this.qrDir, `${ticketId}.png`);
    
    if (fs.existsSync(filePath)) {
      return filePath;
    }
    
    return null;
  }

  async deleteQRCode(ticketId: string): Promise<boolean> {
    const filePath = path.join(this.qrDir, `${ticketId}.png`);
    
    try {
      if (fs.existsSync(filePath)) {
        fs.unlinkSync(filePath);
        console.log(`🗑️ QR code deleted: ${filePath}`);
        return true;
      }
      return false;
    } catch (error) {
      console.error('Failed to delete QR code:', error);
      return false;
    }
  }

  // Utility method to get QR directory path
  getQRDirectory(): string {
    return this.qrDir;
  }
} 