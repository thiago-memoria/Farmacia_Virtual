import { Module } from '@nestjs/common';
import { ShoppingRequestController } from 'src/controllers/shopping-request.controller';
import { ShoppingRequestService } from 'src/services/shopping-request.service';


@Module({
  controllers: [ShoppingRequestController],
  providers: [ShoppingRequestService],
})
export class ShoppingRequestModule {}
