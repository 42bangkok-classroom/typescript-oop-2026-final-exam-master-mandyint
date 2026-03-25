import { Controller, Get } from '@nestjs/common';
import { ProductService } from './product.service';

@Controller()
export class ProductController {
  constructor(private readonly productService: ProductService) {}

  @Get('products')
  findAll() {
    const user = this.productService.findAll();
    return {
      success: true,
      data: {
        user,
      },
      message: 'Fetched products successfully',
    };
  }
}
