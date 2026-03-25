import { NotFoundException } from '@nestjs/common';
import { Purchase } from './purchase.interface';
import * as fs from 'fs';

export class PurchaseService {
  findAll(customerName?: string, purchaseDate?: Date) {
    const file = fs.readFileSync('./data/purchases.json', 'utf-8');
    const datas: Purchase[] = JSON.parse(file);
    return datas;
  }

  findOne(id: number) {
    const file = fs.readFileSync('./data/purchases.json', 'utf-8');
    const datas: Purchase[] = JSON.parse(file);
    let result;

    for (const data of datas) {
      if (data.id === id) {
        result = data;
      }
    }

    return result;
  }
}
