import { Injectable, BadRequestException, NotFoundException } from '@nestjs/common';
import { MockService } from '../mock/mock.service';
import { PaymentService } from '../../services/payment.service';
import { NFTService } from '../../services/nft.service';
import { QRService } from '../../services/qr.service';
import { BuyTicketDto, TicketResponseDto } from './dto/ticket.dto';

@Injectable()
export class TicketsService {
  constructor(
    private readonly mockService: MockService,
    private readonly paymentService: PaymentService,
    private readonly nftService: NFTService,
    private readonly qrService: QRService,
  ) {}

  async buyTicket(buyTicketDto: BuyTicketDto, userId: string): Promise<TicketResponseDto> {
    // 1. Validate event exists and has available tickets
    const event = this.mockService.findEventById(buyTicketDto.eventId);
    if (!event) {
      throw new NotFoundException('Event not found');
    }

    if (event.sold >= event.supply) {
      throw new BadRequestException('Event is sold out');
    }

    if (event.status !== 'active') {
      throw new BadRequestException('Event is not active for ticket sales');
    }

    // 2. Process payment
    const paymentResult = await this.paymentService.processPayment({
      amount: event.price,
      currency: 'USD',
      paymentMethod: buyTicketDto.paymentMethod,
      description: `Ticket for ${event.name}`,
      metadata: {
        eventId: event.id,
        userId: userId,
      },
    });

    if (paymentResult.status !== 'succeeded') {
      throw new BadRequestException(`Payment failed: ${paymentResult.error}`);
    }

    // 3. Mint NFT
    const nftResult = await this.nftService.mintTicket(event.name, event.id, userId);

    // 4. Generate QR code
    const qrPath = await this.qrService.generateQRCode(
      nftResult.ticketId,
      event.id,
      userId
    );

    // 5. Create ticket record
    const ticket = this.mockService.createTicket({
      ticketId: nftResult.ticketId,
      nftId: nftResult.nftId,
      eventId: event.id,
      userId: userId,
      status: 'unused',
      qrPath: qrPath,
    });

    // 6. Create payment record
    this.mockService.createPayment({
      ticketId: nftResult.ticketId,
      amount: event.price,
      status: 'completed',
    });

    // 7. Update event sold count
    this.mockService.updateEventSupply(event.id, event.sold + 1);

    // 8. Return ticket response
    return this.mapTicketToResponse(ticket, event, nftResult.metadata);
  }

  async getUserTickets(userId: string): Promise<TicketResponseDto[]> {
    const tickets = this.mockService.findTicketsByUser(userId);
    
    return tickets.map(ticket => {
      const event = this.mockService.findEventById(ticket.eventId);
      return this.mapTicketToResponse(ticket, event);
    });
  }

  async getTicketById(ticketId: string, userId: string): Promise<TicketResponseDto> {
    const ticket = this.mockService.findTicketByTicketId(ticketId);
    if (!ticket) {
      throw new NotFoundException('Ticket not found');
    }

    // Only allow access to own tickets
    if (ticket.userId !== userId) {
      throw new BadRequestException('Access denied');
    }

    const event = this.mockService.findEventById(ticket.eventId);
    return this.mapTicketToResponse(ticket, event);
  }

  async getTicketQR(ticketId: string, userId: string): Promise<string> {
    const ticket = this.mockService.findTicketByTicketId(ticketId);
    if (!ticket) {
      throw new NotFoundException('Ticket not found');
    }

    if (ticket.userId !== userId) {
      throw new BadRequestException('Access denied');
    }

    const qrDataUrl = await this.qrService.generateQRCodeAsDataURL(
      ticket.ticketId,
      ticket.eventId,
      ticket.userId
    );

    return qrDataUrl;
  }

  private mapTicketToResponse(
    ticket: any,
    event?: any,
    nftMetadata?: any
  ): TicketResponseDto {
    return {
      id: ticket.id,
      ticketId: ticket.ticketId,
      nftId: ticket.nftId,
      eventId: ticket.eventId,
      userId: ticket.userId,
      status: ticket.status,
      qrPath: ticket.qrPath,
      purchasedAt: ticket.purchasedAt,
      usedAt: ticket.usedAt,
      event: event ? {
        name: event.name,
        venue: event.venue,
        datetime: event.datetime,
      } : undefined,
      nftMetadata: nftMetadata,
    };
  }
} 