import { Injectable, BadRequestException, NotFoundException } from '@nestjs/common';
import { MockService } from '../mock/mock.service';

@Injectable()
export class RedemptionService {
  constructor(private readonly mockService: MockService) {}

  redeemTicket(qrPayload: string): { success: boolean; reason?: string } {
    // Parse QR payload (should be JSON with ticketId, eventId, userId, timestamp)
    let qrData: any;
    try {
      qrData = JSON.parse(qrPayload);
    } catch (e) {
      throw new BadRequestException('Invalid QR payload');
    }
    if (!qrData.ticketId) {
      throw new BadRequestException('QR payload missing ticketId');
    }
    const ticket = this.mockService.findTicketByTicketId(qrData.ticketId);
    if (!ticket) {
      return { success: false, reason: 'Ticket not found' };
    }
    if (ticket.status === 'used') {
      return { success: false, reason: 'Ticket already used' };
    }
    if (ticket.status === 'cancelled') {
      return { success: false, reason: 'Ticket cancelled' };
    }
    // Mark as used
    this.mockService.updateTicketStatus(qrData.ticketId, 'used', new Date());
    return { success: true };
  }
} 