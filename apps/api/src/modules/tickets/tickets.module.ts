import { Module } from '@nestjs/common';
import { TicketsController } from './tickets.controller';
import { TicketsService } from './tickets.service';
import { MockModule } from '../mock/mock.module';
import { PaymentService } from '../../services/payment.service';
import { NFTService } from '../../services/nft.service';
import { QRService } from '../../services/qr.service';
import { AuthModule } from '../auth/auth.module';

@Module({
  imports: [MockModule, AuthModule],
  controllers: [TicketsController],
  providers: [TicketsService, PaymentService, NFTService, QRService],
  exports: [TicketsService],
})
export class TicketsModule {} 