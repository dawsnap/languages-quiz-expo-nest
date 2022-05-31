import { PrismaClient } from '@prisma/client';
import { languages } from './languages';
import { languages_words } from './languages_words';
const prisma = new PrismaClient();

const load = async () => {
  try {
    await prisma.languages.deleteMany();
    console.log('Truncated languages table');

    await prisma.languages_words.deleteMany();
    console.log('Truncated languages_words table');

    // Quiz results data should be persisted so it won't be affected by the seeding

    await prisma.languages.createMany({
      data: languages,
    });
    console.log('Imported languages data');
    await prisma.languages_words.createMany({
      data: languages_words,
    });
    console.log('Imported languages words data');

    console.log('Seeding is completed 🏃');
  } catch (e) {
    console.error(e);
    process.exit(1);
  } finally {
    await prisma.$disconnect();
    process.exit(0);
  }
};

load();
