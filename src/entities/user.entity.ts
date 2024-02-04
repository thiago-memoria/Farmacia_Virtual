import {
    Entity,
    PrimaryGeneratedColumn,
    Column,
    CreateDateColumn,
    UpdateDateColumn,
    OneToOne,
    JoinColumn,
    OneToMany,
  } from 'typeorm';
import { CartEntity } from './cart.entity';
import { ShoppingEntity } from './shopping.entity';
import { ShoppingRequestEntity } from './shopping-request.entity';
import { AddressEntity } from './address.entity';
import { WalletEntity } from './wallet.entity';
  
  @Entity({
    name: 'users',
  })
  export class UserEntity {
    @PrimaryGeneratedColumn({
      unsigned: true,
    })
    id?: number;
  
    @Column({
      length: 63,
    })
    name: string;
  
    @Column({
      length: 127,
      unique: true,
    })
    email: string;
  
    @Column({
      length: 127,
    })
    password: string;
  
    @Column({
      type: 'date',
      nullable: true,
    })
    birthAt?: Date;
  
    @CreateDateColumn()
    createdAt?: Date;
  
    @UpdateDateColumn()
    updatedAt?: Date;
  
    @Column()
    role: number;

    @OneToOne(() => CartEntity, (cartEntity) => cartEntity.user,{
      eager: true
    })
    @JoinColumn({name: "cart"})
    cartEntity: CartEntity

    @OneToMany(() => ShoppingEntity, (shoppingEntity) => shoppingEntity.userEntity)
    shoppingEntity: ShoppingEntity[];

    @OneToMany(() => ShoppingRequestEntity, (shoppingRequestEntity) => shoppingRequestEntity.userEntity)
    shoppingRequestEntity: ShoppingRequestEntity[];
    
    @OneToMany(() => AddressEntity, (addressEntity) => addressEntity.userEntity)
    addressEntity: AddressEntity[];

    @OneToOne(() => WalletEntity, (walletEntity) => walletEntity.userEntity)
    walletEntity: WalletEntity
  }
