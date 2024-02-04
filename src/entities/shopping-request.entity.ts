import {
    Entity,
    PrimaryGeneratedColumn,
    Column,
    CreateDateColumn,
    UpdateDateColumn,
    OneToOne,
    JoinColumn,
    ManyToMany,
    JoinTable,
    ManyToOne,
  } from 'typeorm';
import { ShoppingEntity } from './shopping.entity';
import { ProductEntity } from './product.entity';
import { UserEntity } from './user.entity';

@Entity({
    name: 'shoppingRequest',
  })
export class ShoppingRequestEntity {

    @PrimaryGeneratedColumn({
        unsigned: true,
      })
      id?: number;

    @CreateDateColumn()
     createdAt?: Date;
    
    @Column()
     requestShoppingStatus: string;   
    
    @OneToOne(() => ShoppingEntity)
    @JoinColumn()
     shoppingEntity: ShoppingEntity

    @ManyToMany(() => ProductEntity, (productEntity) => productEntity.shoppingRequestEntity,{
      eager: true,
    })
    @JoinTable()
     productEntity: ProductEntity[]

    @ManyToOne(() => UserEntity, (userEntity) => userEntity.shoppingRequestEntity,{
      eager: true
    })
     userEntity: UserEntity 
      

}
