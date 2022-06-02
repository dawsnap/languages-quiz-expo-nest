import { Module } from '@nestjs/common';
import { LanguagesModule } from './languages.module';
import { PrismaService } from './prisma.service';

@Module({
  imports: [LanguagesModule],
  controllers: [],
  providers: [PrismaService],
})
export class AppModule {}
