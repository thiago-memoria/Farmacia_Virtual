import { Injectable } from '@nestjs/common';
import { CreateCarroDto } from 'src/dto/carro/create-carro.dto';
import { UpdateCarroDto } from 'src/dto/carro/update-carro.dto';


@Injectable()
export class CarroService {
  create(createCarroDto: CreateCarroDto) {
    return 'This action adds a new carro';
  }

  findAll() {
    return `This action returns all carro`;
  }

  findOne(id: number) {
    return `This action returns a #${id} carro`;
  }

  update(id: number, updateCarroDto: UpdateCarroDto) {
    return `This action updates a #${id} carro`;
  }

  remove(id: number) {
    return `This action removes a #${id} carro`;
  }
}
