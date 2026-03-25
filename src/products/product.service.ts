import { Product } from './product.interface';
import * as fs from 'fs';

export class ProductService{
    findAll(){
        const file = fs.readFileSync('./data/products.json', 'utf-8');
        const datas: Product = JSON.parse(file);

        return datas;
    }
}