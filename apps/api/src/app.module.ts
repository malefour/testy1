import { Module } from '@nestjs/common';
import { ConfigModule } from './config/config.module';
import { AuthModule } from './modules/auth/auth.module';
import { DatabaseModule } from './database/database.module';

@Module({
  imports: [ConfigModule, DatabaseModule, AuthModule],
})
export class AppModule {} 