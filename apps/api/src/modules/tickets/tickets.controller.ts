import { Controller, Post, Get, Body, Param, UseGuards, Request } from '@nestjs/common';
import { TicketsService } from './tickets.service';
import { BuyTicketDto, TicketResponseDto } from './dto/ticket.dto';
import { JwtAuthGuard } from '../auth/jwt-auth.guard';

@Controller('tickets')
@UseGuards(JwtAuthGuard)
export class TicketsController {
  constructor(private readonly ticketsService: TicketsService) {}

  @Post('buy')
  async buyTicket(
    @Body() buyTicketDto: BuyTicketDto,
    @Request() req: any
  ): Promise<TicketResponseDto> {
    return this.ticketsService.buyTicket(buyTicketDto, req.user.userId);
  }

  @Get('my-tickets')
  async getUserTickets(@Request() req: any): Promise<TicketResponseDto[]> {
    return this.ticketsService.getUserTickets(req.user.userId);
  }

  @Get(':ticketId')
  async getTicketById(
    @Param('ticketId') ticketId: string,
    @Request() req: any
  ): Promise<TicketResponseDto> {
    return this.ticketsService.getTicketById(ticketId, req.user.userId);
  }

  @Get(':ticketId/qr')
  async getTicketQR(
    @Param('ticketId') ticketId: string,
    @Request() req: any
  ): Promise<{ qrDataUrl: string }> {
    const qrDataUrl = await this.ticketsService.getTicketQR(ticketId, req.user.userId);
    return { qrDataUrl };
  }
} 