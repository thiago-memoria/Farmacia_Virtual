import { Injectable } from '@nestjs/common';
import { CreateMercadoriaDto } from 'src/dto/produto/create-mercadoria.dto';
import { UpdateMercadoriaDto } from 'src/dto/produto/update-mercadoria.dto';



@Injectable()
export class MercadoriaService {
  create(createMercadoriaDto: CreateMercadoriaDto) {
    return 'This action adds a new mercadoria';
  }

  findAll() {
    return `This action returns all mercadoria`;
  }

  findOne(id: number) {
    return `This action returns a #${id} mercadoria`;
  }

  update(id: number, updateMercadoriaDto: UpdateMercadoriaDto) {
    return `This action updates a #${id} mercadoria`;
  }

  remove(id: number) {
    return `This action removes a #${id} mercadoria`;
  }
}
