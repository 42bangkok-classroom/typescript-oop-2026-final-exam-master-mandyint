import { Controller, Get, HttpStatus } from '@nestjs/common';
import { ProductService } from './product.service';
import { ApiResponse } from 'src/interfaces/response.interface';

@Controller()
export class ProductController {
    constructor(private readonly productService: ProductService){}

    @Get('products')
    findAll(){
        const user = this.productService.findAll();
        return ({
            status: 'success',
            data: {
                user,
            },
            message: "Fetched products successfully"
        })
    }
}