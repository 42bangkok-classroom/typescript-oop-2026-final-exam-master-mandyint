import { Module } from '@nestjs/common';
import { APP_FILTER } from '@nestjs/core';
import { ProductController } from './product.controller';
import { ProductService } from './product.service';
import { ApiExceptionFilter } from 'src/common/api-exception.filter.ts';

@Module({
  imports: [],
  controllers: [ProductController],
  providers: [
    ProductService,
    {
      provide: APP_FILTER,
      useClass: ApiExceptionFilter,
    },
  ],
})
export class ProductModule {}
