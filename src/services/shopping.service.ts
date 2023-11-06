import { Injectable } from '@nestjs/common';
import { CreateCompra2Dto } from 'src/dto/shopping/create-compra2.dto';
import { UpdateCompra2Dto } from 'src/dto/shopping/update-compra2.dto';



@Injectable()
export class Compra2Service {
  create(createCompra2Dto: CreateCompra2Dto) {
    return 'This action adds a new compra2';
  }

  findAll() {
    return `This action returns all compra2`;
  }

  findOne(id: number) {
    return `This action returns a #${id} compra2`;
  }

  update(id: number, updateCompra2Dto: UpdateCompra2Dto) {
    return `This action updates a #${id} compra2`;
  }

  remove(id: number) {
    return `This action removes a #${id} compra2`;
  }
}
