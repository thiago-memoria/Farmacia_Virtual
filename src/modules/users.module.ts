import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UsersController } from 'src/controllers/users.controller';
import { UserEntity } from 'src/entities/user.entity';
import { UsersService } from 'src/services/users.service';
import { CartModule } from './cart.module';
import { CartEntity } from 'src/entities/cart.entity';


@Module({
  imports: [
    TypeOrmModule.forFeature([UserEntity])
  ],

  controllers: [UsersController],
  providers: [UsersService],
  exports: [UsersService],
})
export class UsersModule {}
