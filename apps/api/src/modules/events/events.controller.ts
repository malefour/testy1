import { Controller, Post, Get, Param, Body, UseGuards, Request } from '@nestjs/common';
import { EventsService } from './events.service';
import { CreateEventDto, EventResponseDto } from './dto/event.dto';
import { JwtAuthGuard } from '../auth/jwt-auth.guard';

@Controller('events')
export class EventsController {
  constructor(private readonly eventsService: EventsService) {}

  @Post('create')
  @UseGuards(JwtAuthGuard)
  createEvent(@Body() dto: CreateEventDto, @Request() req: any): EventResponseDto {
    return this.eventsService.createEvent(dto, req.user.userId);
  }

  @Get(':id')
  getEventById(@Param('id') id: string): EventResponseDto {
    return this.eventsService.getEventById(id);
  }

  @Get()
  getAllEvents(): EventResponseDto[] {
    return this.eventsService.getAllEvents();
  }

  @Get('organiser/my-events')
  @UseGuards(JwtAuthGuard)
  getOrganiserEvents(@Request() req: any): EventResponseDto[] {
    return this.eventsService.getOrganiserEvents(req.user.userId);
  }
} 