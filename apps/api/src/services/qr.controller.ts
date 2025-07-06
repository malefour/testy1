import { Controller, Get, Param, Res, NotFoundException } from '@nestjs/common';
import { Response } from 'express';
import { QRService } from './qr.service';
import * as fs from 'fs';

@Controller('qr')
export class QRController {
  constructor(private readonly qrService: QRService) {}

  @Get(':ticketId')
  async getQrPng(@Param('ticketId') ticketId: string, @Res() res: Response) {
    const filePath = await this.qrService.getQRCodeFile(ticketId);
    if (!filePath || !fs.existsSync(filePath)) {
      throw new NotFoundException('QR code not found');
    }
    res.setHeader('Content-Type', 'image/png');
    fs.createReadStream(filePath).pipe(res);
  }
} 