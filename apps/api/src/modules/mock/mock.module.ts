import { Module } from '@nestjs/common';
import { MockService } from './mock.service';
import { MockController } from './mock.controller';
import { DevController } from './dev.controller';

@Module({
  providers: [MockService],
  controllers: [MockController, DevController],
  exports: [MockService],
})
export class MockModule {} 