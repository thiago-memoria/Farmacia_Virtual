import {
    Entity,
    PrimaryGeneratedColumn,
    Column,
    ManyToOne,
    OneToOne,
    ManyToMany,
    JoinTable
  } from 'typeorm';
import { ProductEntity } from './product.entity';
import { UserEntity } from './user.entity';
import { ShoppingRequestEntity } from './shopping-request.entity';

@Entity({
    name: 'shoppings',
})
export class ShoppingEntity{

    @PrimaryGeneratedColumn({
        unsigned: true,
      })
      id?: number;

    @Column()
    value: string;
    
    @Column()
    storeAddress: string;

    @Column()
    deliveryAddress: string;

    @Column()
    deliveryTime: string;

    @ManyToMany(() => ProductEntity, (productEntity) => productEntity.shoppingEntity,{
      eager: true
    })
    @JoinTable()
    productEntity: ProductEntity[]

    @ManyToOne(() => UserEntity, (userEntity) => userEntity.shoppingEntity,{
      eager: true
    })
    userEntity: UserEntity

    @OneToOne(() => ShoppingRequestEntity)
    shoppingEntity: ShoppingRequestEntity
}
