import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma.service';

@Injectable()
export class LanguagesService {
  constructor(private prisma: PrismaService) {}

  async getLanguagesList(): Promise<any> {
    return await this.prisma.languages.findMany({
      select: { id: true, name: true },
    });
  }

  async generateRandomIdSchema(lang_id): Promise<any> {
    const wordCount = await this.prisma.languages_words.count({
      where: { language_id: { equals: parseInt(lang_id) } },
    });

    const randomIdSchema = [];
    for (let i = 0; i < 10; i++) {
      const wronganswers = [];
      for (let i = 0; i < 3; i++) {
        wronganswers.push(Math.floor(Math.random() * wordCount) + 1);
      }
      randomIdSchema.push({
        rightQuestion: Math.floor(Math.random() * wordCount) + 1,
        wrongAnswers: wronganswers,
      });
    }

    return randomIdSchema;
  }

  async generateQuiz(ids: Array<any>) {
    const map = new Map();

    const idList = [];
    ids.map((obj) => {
      idList.push(obj.rightQuestion);
      obj.wrongAnswers.map((wrong) => {
        idList.push(wrong);
      });
    });
    const languages_words = await this.prisma.languages_words.findMany({
      select: { id: true, word: true, meaning: true },
      where: { id: { in: idList } },
    });

    languages_words.forEach((word) => {
      map.set(word.id, { word: word.word, meaning: word.meaning });
    });
    console.log(map.get(1));
    return languages_words;
  }
}
