import { PartialType } from '@nestjs/swagger';
import { CreateCompra2Dto } from './create-compra2.dto';

export class UpdateCompra2Dto extends PartialType(CreateCompra2Dto) {}
