import { Controller, Delete } from '@nestjs/common';
import { MockService } from './mock.service';

@Controller('mock')
export class MockController {
  constructor(private readonly mockService: MockService) {}

  @Delete('reset')
  resetAll() {
    this.mockService.resetAllData();
    return { success: true };
  }
} 