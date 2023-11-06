import { Module } from '@nestjs/common';
import { Compra2Controller } from 'src/controllers/shopping.controller';
import { Compra2Service } from 'src/services/shopping.service';



@Module({
  controllers: [Compra2Controller],
  providers: [Compra2Service],
})
export class Compra2Module {}
