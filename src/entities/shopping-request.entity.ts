import {
    Entity,
    PrimaryGeneratedColumn,
    Column,
    CreateDateColumn,
    UpdateDateColumn,
  } from 'typeorm';

@Entity({
    name: 'shoppingRequest',
  })
export class ShoppingRequest {

    @PrimaryGeneratedColumn({
        unsigned: true,
      })
      id?: number;

    @CreateDateColumn()
     createdAt?: Date;
    
    @Column()
     requestShoppingStatus: string;   
      
      

}
