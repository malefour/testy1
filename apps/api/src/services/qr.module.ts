import { Module } from '@nestjs/common';
import { QRService } from './qr.service';
import { QRController } from './qr.controller';

@Module({
  providers: [QRService],
  controllers: [QRController],
  exports: [QRService],
})
export class QRModule {} 