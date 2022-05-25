import { Module } from '@nestjs/common';
import { AppService } from './app.service';
import { LanguagesModule } from './languages/languages.module';

@Module({
  imports: [LanguagesModule],
  controllers: [],
  providers: [AppService],
})
export class AppModule {}
