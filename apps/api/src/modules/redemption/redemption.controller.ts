import { Controller, Post, Body } from '@nestjs/common';
import { RedemptionService } from './redemption.service';

@Controller('redeem')
export class RedemptionController {
  constructor(private readonly redemptionService: RedemptionService) {}

  @Post()
  redeem(@Body('qrPayload') qrPayload: string) {
    return this.redemptionService.redeemTicket(qrPayload);
  }
} 