import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';




import { TypeOrmModule } from '@nestjs/typeorm';
import { CarroModule } from './modules/cart.module';
import { Compra2Module } from './modules/shopping.module';
import { UsersModule } from './modules/users.module';
import { ShoppingRequestModule } from './modules/shopping-request.module';
import { MercadoriaModule } from './modules/product.module';



@Module({
  imports: [ CarroModule, MercadoriaModule, Compra2Module, UsersModule, ShoppingRequestModule  
  ],
  controllers: [AppController],
  providers: [AppService],
  exports: [AppService]
})
export class AppModule {}
