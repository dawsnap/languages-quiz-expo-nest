import { Controller, Get, Param } from '@nestjs/common';
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
    const ids = await this.languagesService.generateRandomIdSchema(languageId);
  }
}
