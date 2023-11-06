import { PartialType } from '@nestjs/swagger';
import { CreateMercadoriaDto } from './create-mercadoria.dto';

export class UpdateMercadoriaDto extends PartialType(CreateMercadoriaDto) {}
