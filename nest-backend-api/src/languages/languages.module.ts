import { PrismaService } from './../prisma.service';
import { Module } from '@nestjs/common';
import { LanguagesController } from './languages.controller';
import { LanguagesService } from './languages.service';

@Module({
  controllers: [LanguagesController],
  providers: [LanguagesService, PrismaService],
})
export class LanguagesModule {}
