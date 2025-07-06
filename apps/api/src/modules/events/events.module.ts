import { Module } from '@nestjs/common';
import { EventsService } from './events.service';
import { EventsController } from './events.controller';
import { MockModule } from '../mock/mock.module';
import { AuthModule } from '../auth/auth.module';

@Module({
  imports: [MockModule, AuthModule],
  providers: [EventsService],
  controllers: [EventsController],
  exports: [EventsService],
})
export class EventsModule {} 