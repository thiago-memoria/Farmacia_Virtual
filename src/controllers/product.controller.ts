import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { CreateMercadoriaDto } from 'src/dto/produto/create-mercadoria.dto';
import { UpdateMercadoriaDto } from 'src/dto/produto/update-mercadoria.dto';
import { MercadoriaService } from 'src/services/product.service';


@ApiTags('produto')
@Controller('mercadoria')
export class MercadoriaController {
  constructor(private readonly mercadoriaService: MercadoriaService) {}

  @Post()
  create(@Body() createMercadoriaDto: CreateMercadoriaDto) {
    return this.mercadoriaService.create(createMercadoriaDto);
  }

  @Get()
  findAll() {
    return this.mercadoriaService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.mercadoriaService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateMercadoriaDto: UpdateMercadoriaDto) {
    return this.mercadoriaService.update(+id, updateMercadoriaDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.mercadoriaService.remove(+id);
  }
}
