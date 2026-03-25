import { NotFoundException } from '@nestjs/common';
import { Purchase } from './purchase.interface';
import * as fs from 'fs';
import { SourceCode } from 'eslint';

export class PurchaseService {
  findAll(): Purchase {
    const file: string = fs.readFileSync('./data/purchases.json', 'utf-8');
    const datas: Purchase = JSON.parse(file);
    return datas;
  }

  findOne(id: number) {
    const file = fs.readFileSync('./data/purchases.json', 'utf-8');
    const datas: Purchase[] = JSON.parse(file);
    const userData = [...datas];
    const result = [];

    for (let i = 0; i < userData.length; i++) {
      if (userData[i].id == id) {
        result.push(userData[i]);
      }else{
        return ({
          success: false,
          data: null,
          message: `Purchase with id ${id} not found`
        })
      }
      return result;
    }
  }
}
