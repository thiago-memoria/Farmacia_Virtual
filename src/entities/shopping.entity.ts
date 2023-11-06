import {
    Entity,
    PrimaryGeneratedColumn,
    Column
  } from 'typeorm';

@Entity({
    name: 'shoppings',
})
export class Compra2 {

    @PrimaryGeneratedColumn({
        unsigned: true,
      })
      id?: number;

    @Column()
    valor: number;
    
    @Column()
    enderecoLoja: string;

    @Column()
    enderecoEntrega: string;

    @Column()
    tempoDeEntrega: number;
}
