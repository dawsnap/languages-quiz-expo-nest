import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma.service';

@Injectable()
export class LanguagesService {
  constructor(private prisma: PrismaService) {}

  async getLanguagesList(): Promise<any> {
    return await this.prisma.languages.findMany({
      select: { id: true, name: true, icon: true },
    });
  }
}
