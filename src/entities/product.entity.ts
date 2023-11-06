import {
    Entity,
    PrimaryGeneratedColumn,
    Column,
    CreateDateColumn,
    UpdateDateColumn,
  } from 'typeorm';


  @Entity({
    name: 'product',
  })  
export class Mercadoria {

    @PrimaryGeneratedColumn({
        unsigned: true,
      })
      id?: number;

    @Column()
    descricao: string;
    
    @Column()
    preco: number;

    @Column()
    tipo: number;
}
