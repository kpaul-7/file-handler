import { Injectable } from '@nestjs/common';
import { CreateGetdocDto } from './dto/create-getdoc.dto';
import { UpdateGetdocDto } from './dto/update-getdoc.dto';
import { createReadStream } from 'fs';
import { join } from 'path';
import {BadRequestException} from "@nestjs/common"
import * as fs from 'fs'

@Injectable()
export class GetdocsService {
  create(createGetdocDto: CreateGetdocDto) {
    return 'This action adds a new getdoc';
  }

  findAll() {
    return `This action returns all getdocs`;
  }

  findOne(res: any,id: string) {
    const docsPath = join(__dirname,'..','..','uploads',id)
    const file = createReadStream(docsPath)
    file.pipe(res)
  }

  update(id: number, updateGetdocDto: UpdateGetdocDto) {
    return `This action updates a #${id} getdoc`;
  }

  remove(id: string) {
    try{
      const filePath = join(__dirname,"..","..","uploads",id)
      fs.unlink(filePath,null)
    }catch(err){
        throw new BadRequestException('something went wrong',{
          cause: new Error(),
          description: 'something went wrong'
        })
    }
  }
}
