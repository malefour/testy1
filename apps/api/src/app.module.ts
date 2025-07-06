import { Module } from '@nestjs/common';
import { ConfigModule } from './config/config.module';
import { AuthModule } from './modules/auth/auth.module';
import { EventsModule } from './modules/events/events.module';
import { TicketsModule } from './modules/tickets/tickets.module';
import { DatabaseModule } from './database/database.module';
import { RedemptionModule } from './modules/redemption/redemption.module';

@Module({
  imports: [ConfigModule, DatabaseModule, AuthModule, EventsModule, TicketsModule, RedemptionModule],
})
export class AppModule {} 