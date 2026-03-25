import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ProductModule } from './products/product.module';
import { PurchaseModule } from './purchases/purchase.module';

@Module({
  imports: [ProductModule, PurchaseModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
