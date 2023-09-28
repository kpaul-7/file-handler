import { Controller, Get, Post, Body, Patch, Param, Delete, Res } from '@nestjs/common';
import { GetdocsService } from './getdocs.service';
import { CreateGetdocDto } from './dto/create-getdoc.dto';
import { UpdateGetdocDto } from './dto/update-getdoc.dto';

@Controller('getdocs')
export class GetdocsController {
  constructor(private readonly getdocsService: GetdocsService) {}

  @Post()
  create(@Body() createGetdocDto: CreateGetdocDto) {
    return this.getdocsService.create(createGetdocDto);
  }

  @Get()
  findAll() {
    return this.getdocsService.findAll();
  }

  @Get(':id')
  findOne(@Res() res,@Param('id') id: string) {
     this.getdocsService.findOne(res,id);
    // return this.getdocsService.findOne(res,id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateGetdocDto: UpdateGetdocDto) {
    return this.getdocsService.update(+id, updateGetdocDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.getdocsService.remove(id);
  }
}
