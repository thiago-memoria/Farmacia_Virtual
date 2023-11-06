import {
    Entity,
    PrimaryGeneratedColumn,
    Column
  } from 'typeorm';

@Entity({
    name: 'cart',
  })
export class CarroEntity {

    @PrimaryGeneratedColumn({
        unsigned: true,
      })
      id?: number;

      @Column()
      valor: number;  

}
