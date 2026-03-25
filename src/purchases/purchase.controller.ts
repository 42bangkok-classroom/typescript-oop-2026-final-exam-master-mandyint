import { Controller, Get, Param } from '@nestjs/common';
import { PurchaseService } from './purchase.service';

@Controller()
export class PurchaseController {
  constructor(private readonly purchaseService: PurchaseService) {}

  //   @Get('purchases')
  //   findAll(
  //     @Query('customerName') customerName?: string,
  //     @Query('purchaseDate') purchaseDate?: Date,
  //   ) {
  //     return this.purchaseService.findAll(customerName, purchaseDate);
  //   }

  @Get('purchases')
  findAll() {
    return this.purchaseService.findAll();
  }

  @Get('purchases/:id')
  findOne(@Param('id') id: number) {
    const data = this.purchaseService.findOne(id);
    return {
      success: true,
      data: { data },
      message: 'Fetched Purchase Successfully',
    };
  }
}
