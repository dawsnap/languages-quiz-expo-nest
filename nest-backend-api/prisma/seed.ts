import { PrismaClient } from '@prisma/client';
import { languages } from './languages';
const prisma = new PrismaClient();

const load = async () => {
  try {
    await prisma.languages.deleteMany();
    console.log('Truncated languages table');

    // await prisma.languages_words.deleteMany();
    // console.log('Truncated languages_words tabñe');

    // Quiz results data should be persisted so it won't be affected by the seeding

    await prisma.$queryRaw`ALTER TABLE Languages AUTO_INCREMENT = 1`;
    console.log('reset category auto increment to 1');

    await prisma.languages.createMany({
      data: languages,
    });
    console.log('Imported languages data');
  } catch (e) {
    console.error(e);
    process.exit(1);
  } finally {
    await prisma.$disconnect();
  }
};

load();
