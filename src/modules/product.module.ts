import { Module } from '@nestjs/common';
import { MercadoriaController } from 'src/controllers/product.controller';
import { MercadoriaService } from 'src/services/product.service';



@Module({
  controllers: [MercadoriaController],
  providers: [MercadoriaService],
  imports: [],
  exports: []
})
export class MercadoriaModule {}
