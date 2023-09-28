import { PartialType } from '@nestjs/mapped-types';
import { CreateGetdocDto } from './create-getdoc.dto';

export class UpdateGetdocDto extends PartialType(CreateGetdocDto) {}
