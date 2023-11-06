import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { CreateCompra2Dto } from 'src/dto/shopping/create-compra2.dto';
import { UpdateCompra2Dto } from 'src/dto/shopping/update-compra2.dto';
import { Compra2Service } from 'src/services/shopping.service';


@ApiTags('compra')
@Controller('compra2')
export class Compra2Controller {
  constructor(private readonly compra2Service: Compra2Service) {}

  @Post()
  create(@Body() createCompra2Dto: CreateCompra2Dto) {
    return this.compra2Service.create(createCompra2Dto);
  }

  @Get()
  findAll() {
    return this.compra2Service.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.compra2Service.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateCompra2Dto: UpdateCompra2Dto) {
    return this.compra2Service.update(+id, updateCompra2Dto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.compra2Service.remove(+id);
  }
}
