import { Controller, Get } from '@nestjs/common';
import { LanguagesService } from './languages.service';

@Controller()
export class LanguagesController {
  constructor(private readonly languagesService: LanguagesService) {}

  @Get('languageslist')
  async getLanguagesList(): Promise<any> {
    return await this.languagesService.getLanguagesList();
  }
}
