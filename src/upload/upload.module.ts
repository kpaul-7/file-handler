import { Module } from '@nestjs/common';
import { UploadService } from './upload.service';
import { UploadController } from './upload.controller';
import { MulterModule } from '@nestjs/platform-express';
import {UnsupportedMediaTypeException} from '@nestjs/common'
import { diskStorage } from 'multer';
import { fileStorage } from 'src/utils/filestorage';

@Module({
  imports: [MulterModule.register(
    {
      ...fileStorage
    }
  )],
  controllers: [UploadController],
  providers: [UploadService],
})
export class UploadModule {}
