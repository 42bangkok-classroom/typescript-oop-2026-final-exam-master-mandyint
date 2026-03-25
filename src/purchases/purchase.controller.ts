import { Controller, Get, Param, Query } from '@nestjs/common';
import { PurchaseService } from './purchase.service';

@Controller()
export class PurchaseController {
    constructor(private readonly purchaseService: PurchaseService){}

    @Get('purchases')
    findAll(@Query('customerName') customerName?: string, @Query('purchaseDate') purchaseDate?: Date){
        return this.purchaseService.findAll(customerName, purchaseDate);
    }

    @Get('purchases/:id')
    findOne(
        @Param('id') id: number
    ){
        return this.purchaseService.findOne(id);
    }
}