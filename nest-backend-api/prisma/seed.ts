import { PrismaClient } from '@prisma/client';
import { languages } from './languages';
import { languages_words } from './languages_words';
const prisma = new PrismaClient();

const load = async () => {
  try {
    await prisma.languages.deleteMany();
    console.log('Truncated languages table');

    // await prisma.languages_words.deleteMany();
    // console.log('Truncated languages_words tabñe');

    // Quiz results data should be persisted so it won't be affected by the seeding

    await prisma.$queryRaw`ALTER SEQUENCE languages_id_seq RESTART WITH 1`;
    console.log('Reset languages table auto_increment to 1');

    await prisma.languages.createMany({
      data: languages,
    });
    console.log('Imported languages data');
    await prisma.languages_words.createMany({
      data: languages_words,
    });
    console.log('Imported languages data');

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
