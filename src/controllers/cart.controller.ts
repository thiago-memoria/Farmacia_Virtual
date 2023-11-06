import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { CreateCarroDto } from 'src/dto/carro/create-carro.dto';
import { UpdateCarroDto } from 'src/dto/carro/update-carro.dto';
import { CarroService } from 'src/services/cart.service';


@ApiTags('carro')
@Controller('carro')
export class CarroController {
  constructor(private readonly carroService: CarroService) {}

  @Post()
  create(@Body() createCarroDto: CreateCarroDto) {
    return this.carroService.create(createCarroDto);
  }

  @Get()
  findAll() {
    return this.carroService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.carroService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateCarroDto: UpdateCarroDto) {
    return this.carroService.update(+id, updateCarroDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.carroService.remove(+id);
  }
}
