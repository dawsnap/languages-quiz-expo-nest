import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { LanguagesService } from './languages.service';

@Controller()
export class LanguagesController {
  constructor(private readonly languagesService: LanguagesService) {}

  @Get('languageslist')
  async getLanguagesList(): Promise<any> {
    return await this.languagesService.getLanguagesList();
  }

  @Get('listOfWords/:languageId')
  async generateQuizQuestions(@Param() params: any): Promise<any> {
    const { languageId } = params;
    const words = await this.languagesService.getRandomWords(languageId);
    const structure = await this.languagesService.generateQuiz(words);
    const quiz = this.languagesService.checkDuplicates(structure, words);

    return quiz;
  }

  @Post('newscore')
  async saveNewScore(@Body() body): Promise<any> {
    const { selectedQuizId, score, rawQuiz, nickname } = body;
    this.languagesService.saveNewScore(
      selectedQuizId,
      score,
      rawQuiz,
      nickname,
    );
    return 'OK';
  }

  @Get('viewRanking/:languageId')
  async viewRanking(@Param() params: any): Promise<any> {
    const { languageId } = params;
    const rankingArray = await this.languagesService.getRankingList(languageId);

    return rankingArray;
  }

  @Get('')
  async health(): Promise<any> {
    return 'La API Rest funciona!';
  }
}
