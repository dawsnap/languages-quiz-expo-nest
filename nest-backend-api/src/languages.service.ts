import { Injectable, InternalServerErrorException } from '@nestjs/common';
import { PrismaService } from 'src/prisma.service';

@Injectable()
export class LanguagesService {
  constructor(private prisma: PrismaService) {}

  async getLanguagesList(): Promise<any> {
    try {
      return await this.prisma.languages.findMany({
        select: { id: true, name: true },
      });
    } catch (error) {
      console.log(error);
      throw new InternalServerErrorException(error);
    }
  }

  async getRandomWords(lang_id): Promise<any> {
    let wordCount;
    try {
      wordCount = await this.prisma.languages_words.count({
        where: { language_id: { equals: parseInt(lang_id) } },
      });
    } catch (error) {
      console.log(error);
      throw new InternalServerErrorException(error);
    }

    let firstWord;
    try {
      firstWord = await this.prisma.languages_words.findFirst({
        select: { id: true },
        where: { language_id: { equals: parseInt(lang_id) } },
      });
    } catch (error) {
      console.log(error);
      throw new InternalServerErrorException(error);
    }

    const idList = [];
    // generate 40 unique ids
    while (idList.length < 40) {
      const r = Math.floor(Math.random() * wordCount) + firstWord.id;
      if (idList.indexOf(r) === -1) idList.push(r);
    }

    try {
      const languages_words = await this.prisma.languages_words.findMany({
        select: { id: true, word: true, meaning: true },
        where: { id: { in: idList } },
      });

      return languages_words;
    } catch (error) {
      console.log(error);
      throw new InternalServerErrorException(error);
    }
  }

  async generateQuiz(words: Array<any>) {
    const randomQuizSchema = [];
    for (let i = 0; i < 10; i++) {
      const wronganswers = [];
      for (let i = 0; i < 3; i++) {
        wronganswers.push(
          words[Math.floor(Math.random() * (words.length - 1))],
        );
      }
      randomQuizSchema.push({
        rightQuestion: words[Math.floor(Math.random() * (words.length - 1))],
        wrongAnswers: wronganswers,
      });
    }

    return randomQuizSchema;
  }

  checkDuplicates(quiz: Array<any>, words: Array<any>) {
    // Deleting ids in right questions so they won't be reassigned if duplicated
    const rightIds = [];
    quiz.forEach((question) => rightIds.push(question.rightQuestion.id));
    const filteredWords = words.filter(function (item) {
      return rightIds.indexOf(item.id) === -1;
    });

    const finalQuiz = quiz.map((question) => {
      return {
        rightQuestion: question.rightQuestion,
        wrongAnswers: question.wrongAnswers.map((wrong) => {
          if (wrong.id === question.rightQuestion.id) {
            //check if there is any right with a duplicated word in the wrong ones
            return filteredWords[
              Math.floor(Math.random() * (words.length - 1))
            ];
          }
          return wrong;
        }),
      };
    });

    return finalQuiz;
  }

  async saveNewScore(selectedQuizId, score, rawQuiz, nickname) {
    try {
      if (!nickname) nickname = 'Sin nombre';
      nickname = nickname.substring(0, 15);
      return await this.prisma.quiz_results.create({
        data: {
          username: nickname,
          score: score,
          raw_quiz: rawQuiz,
          finish_time: undefined,
          language_id: selectedQuizId,
        },
      });
    } catch (error) {
      console.log(error);
      throw new InternalServerErrorException(error);
    }
  }

  async getRankingList(languageId) {
    try {
      return await this.prisma.quiz_results.findMany({
        select: {
          id: true,
          score: true,
          username: true,
          finish_time: true,
        },
        where: {
          language_id: Number(languageId),
        },
        orderBy: {
          score: 'desc',
        },
      });
    } catch (error) {
      console.log(error);
      throw new InternalServerErrorException(error);
    }
  }
}
