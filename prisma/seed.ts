import { PrismaClient } from '@prisma/client';
import { allGifts } from '../data/gifts-seed';

const prisma = new PrismaClient();

async function main() {
  console.log('Seeding database...');

  // Clear existing data
  await prisma.gift.deleteMany();
  await prisma.category.deleteMany();
  await prisma.brand.deleteMany();

  console.log('Cleared existing data');

  // Seed categories
  const categories = [
    { name: 'Legetøj', slug: 'legetoej', description: 'Traditionelt, pædagogisk, udendørs legetøj', icon: '🧸', sortOrder: 1 },
    { name: 'Bøger', slug: 'boeger', description: 'Billedbøger, læsebøger, fagbøger', icon: '📖', sortOrder: 2 },
    { name: 'Kreative sæt', slug: 'kreativ', description: 'Hobbyartikler, byggesæt, kunst', icon: '🎨', sortOrder: 3 },
    { name: 'Udstyr', slug: 'udstyr', description: 'Cykler, løbehjul, sportsgrej', icon: '🚴', sortOrder: 4 },
    { name: 'Oplevelser', slug: 'oplevelser', description: 'Gavekort, årskort, aktiviteter', icon: '🎢', sortOrder: 5 },
    { name: 'Elektronik', slug: 'elektronik', description: 'Tablets, høretelefoner, spilkonsoller', icon: '🎮', sortOrder: 6 },
    { name: 'Tøj & mode', slug: 'mode', description: 'Kvalitetstøj, accessories', icon: '👕', sortOrder: 7 },
  ];

  for (const category of categories) {
    await prisma.category.create({ data: category });
  }

  console.log(`Seeded ${categories.length} categories`);

  // Seed gifts
  for (const gift of allGifts) {
    await prisma.gift.create({
      data: {
        title: gift.title,
        slug: gift.slug,
        description: gift.description,
        shortDescription: gift.shortDescription,
        minAge: gift.minAge,
        maxAge: gift.maxAge,
        ageGroup: gift.ageGroup,
        category: gift.category,
        subcategories: JSON.stringify(gift.subcategories),
        tags: JSON.stringify(gift.tags),
        targetGender: gift.targetGender,
        price: gift.price,
        priceClass: gift.priceClass,
        affiliateLinks: JSON.stringify(gift.affiliateLinks),
        primaryBuyUrl: gift.primaryBuyUrl,
        rating: gift.rating,
        pros: JSON.stringify(gift.pros),
        cons: JSON.stringify(gift.cons),
        parentTip: gift.parentTip,
        details: JSON.stringify(gift.details),
        imageUrl: gift.imageUrl,
        additionalImages: JSON.stringify(gift.additionalImages),
        brand: gift.brand,
        manufacturer: gift.manufacturer,
        featured: gift.featured,
        editorChoice: gift.editorChoice,
        isConfirmationGift: gift.isConfirmationGift,
        isSustainable: gift.isSustainable,
        isDanishBrand: gift.isDanishBrand,
      },
    });
  }

  console.log(`Seeded ${allGifts.length} gifts`);

  console.log('Seeding complete!');
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
