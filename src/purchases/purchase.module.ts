import { Module } from '@nestjs/common';
import { APP_FILTER } from '@nestjs/core';
import { PurchaseService } from './purchase.service';
import { ApiExceptionFilter } from 'src/common/api-exception.filter';
import { PurchaseController } from './purchase.controller';

@Module({
  imports: [],
  controllers: [PurchaseController],
  providers: [
    PurchaseService,
    {
      provide: APP_FILTER,
      useClass: ApiExceptionFilter,
    },
  ],
})
export class PurchaseModule {}
