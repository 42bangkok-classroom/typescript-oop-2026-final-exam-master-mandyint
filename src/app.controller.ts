import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';
import { ApiResponse } from './interfaces/response.interface';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello() {
    const ans = this.appService.getHello();
    return {
      success: true,
      data: {
        service: 'purchase-api',
        version: '1.0.0',
      },
      message: `${ans}`,
    };
  }
}
