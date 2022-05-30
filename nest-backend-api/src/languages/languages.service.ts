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

  async getRandomWords(lang_id): Promise<any> {
    const wordCount = await this.prisma.languages_words.count({
      where: { language_id: { equals: parseInt(lang_id) } },
    });

    const idList = [];
    // generate 40 unique ids
    while (idList.length < 40) {
      const r = Math.floor(Math.random() * wordCount) + 1;
      if (idList.indexOf(r) === -1) idList.push(r);
    }

    const languages_words = await this.prisma.languages_words.findMany({
      select: { id: true, word: true, meaning: true },
      where: { id: { in: idList } },
    });

    return languages_words;
  }

  async generateQuiz(words: Array<any>) {
    const randomQuizSchema = [];
    for (let i = 0; i < 10; i++) {
      const wronganswers = [];
      for (let i = 0; i < 3; i++) {
        wronganswers.push(words[Math.floor(Math.random() * words.length) + 1]);
      }
      randomQuizSchema.push({
        rightQuestion: words[Math.floor(Math.random() * words.length) + 1],
        wrongAnswers: wronganswers,
      });
    }

    return randomQuizSchema;
  }
}
