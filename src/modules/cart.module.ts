import { Module } from '@nestjs/common';
import { CarroController } from 'src/controllers/cart.controller';
import { CarroService } from 'src/services/cart.service';



@Module({
  controllers: [CarroController],
  providers: [CarroService],
  imports: [],
  exports: []
})
export class CarroModule {}
