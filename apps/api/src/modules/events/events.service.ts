import { Injectable, NotFoundException, BadRequestException } from '@nestjs/common';
import { MockService } from '../mock/mock.service';
import { CreateEventDto, EventResponseDto } from './dto/event.dto';

@Injectable()
export class EventsService {
  constructor(private readonly mockService: MockService) {}

  createEvent(dto: CreateEventDto, organiserId: string): EventResponseDto {
    const event = this.mockService.createEvent({
      ...dto,
      organiserId,
      status: 'active',
    });
    return this.mapEventToResponse(event);
  }

  getEventById(eventId: string): EventResponseDto {
    const event = this.mockService.findEventById(eventId);
    if (!event) throw new NotFoundException('Event not found');
    return this.mapEventToResponse(event);
  }

  getAllEvents(): EventResponseDto[] {
    return this.mockService.getAllData().events.map(this.mapEventToResponse);
  }

  getOrganiserEvents(organiserId: string): EventResponseDto[] {
    return this.mockService.findEventsByOrganiser(organiserId).map(this.mapEventToResponse);
  }

  private mapEventToResponse = (event: any): EventResponseDto => ({
    id: event.id,
    name: event.name,
    description: event.description,
    venue: event.venue,
    datetime: event.datetime,
    price: event.price,
    supply: event.supply,
    sold: event.sold,
    organiserId: event.organiserId,
    status: event.status,
    createdAt: event.createdAt,
  });
} 