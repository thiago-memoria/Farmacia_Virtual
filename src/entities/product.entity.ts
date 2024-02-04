import {
    Entity,
    PrimaryGeneratedColumn,
    Column,
    CreateDateColumn,
    UpdateDateColumn,
    ManyToOne,
    ManyToMany,
  } from 'typeorm';
import { CartEntity } from './cart.entity';
import { ShoppingEntity } from './shopping.entity';
import { ShoppingRequestEntity } from './shopping-request.entity';


  @Entity({
    name: 'product',
  })  
export class ProductEntity {

    @PrimaryGeneratedColumn({
        unsigned: true,
      })
      id?: number;

    @Column()
    description: string;
    
    @Column()
    price: string;

    @Column()
    kind: string;

    @Column()
    discount: boolean;

    @ManyToMany(() => ShoppingEntity, (shoppingEntity) => shoppingEntity.userEntity)
    shoppingEntity: ShoppingEntity[]

    @ManyToMany(() => ShoppingRequestEntity, (shoppingRequestEntity) => shoppingRequestEntity.userEntity)
    shoppingRequestEntity: ShoppingRequestEntity[]
     
}
