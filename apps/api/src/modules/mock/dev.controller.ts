import { Controller, Get } from '@nestjs/common';
import { MockService } from './mock.service';

@Controller('dev')
export class DevController {
  constructor(private readonly mockService: MockService) {}

  @Get('test-flow')
  async testFlow() {
    // 1. Create organiser
    const organiser = this.mockService.createUser({
      username: 'organiser1',
      email: 'org1@example.com',
      password: 'password',
      role: 'organiser',
    });
    // 2. Create event
    const event = this.mockService.createEvent({
      name: 'Test Event',
      description: 'A test event',
      venue: 'Test Venue',
      datetime: new Date().toISOString(),
      price: 50,
      supply: 100,
      organiserId: organiser.id,
      status: 'active',
    });
    // 3. Create attendee
    const attendee = this.mockService.createUser({
      username: 'attendee1',
      email: 'attendee1@example.com',
      password: 'password',
      role: 'attendee',
    });
    // 4. Mock 2 ticket purchases
    const ticket1 = this.mockService.createTicket({
      ticketId: 'TICKET1',
      nftId: 'NFT1',
      eventId: event.id,
      userId: attendee.id,
      status: 'unused',
      qrPath: '/tmp/qr/TICKET1.png',
    });
    const ticket2 = this.mockService.createTicket({
      ticketId: 'TICKET2',
      nftId: 'NFT2',
      eventId: event.id,
      userId: attendee.id,
      status: 'unused',
      qrPath: '/tmp/qr/TICKET2.png',
    });
    // 5. Redeem one
    this.mockService.updateTicketStatus(ticket1.ticketId, 'used', new Date());
    // 6. Log result
    return {
      organiser,
      event,
      attendee,
      tickets: [ticket1, ticket2],
      redeemed: ticket1.ticketId,
      ticketsAfter: this.mockService.findTicketsByUser(attendee.id),
    };
  }
} 