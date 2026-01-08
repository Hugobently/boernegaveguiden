import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import prisma from '@/lib/db';
import { CATEGORIES } from '@/lib/utils';
import { GiftGrid } from '@/components/gifts/GiftGrid';
import { transformGift, type GiftFromDb } from '@/lib/types';

interface Props {
  params: Promise<{ category: string }>;
}

async function getGiftsByCategory(category: string) {
  const gifts = await prisma.gift.findMany({
    where: { category },
    orderBy: [
      { editorChoice: 'desc' },
      { featured: 'desc' },
      { rating: 'desc' },
    ],
  });
  return gifts.map((gift) => transformGift(gift as unknown as GiftFromDb));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { category } = await params;
  const cat = CATEGORIES.find(c => c.slug === category);

  if (!cat) {
    return { title: 'Kategori ikke fundet' };
  }

  return {
    title: `${cat.name} til børn`,
    description: `Find de bedste ${cat.name.toLowerCase()} til børn. ${cat.description}`,
  };
}

export default async function CategoryPage({ params }: Props) {
  const { category } = await params;
  const cat = CATEGORIES.find(c => c.slug === category);

  if (!cat) {
    notFound();
  }

  const gifts = await getGiftsByCategory(category);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="space-y-8">
        <div className="text-center space-y-4">
          <span className="text-6xl">{cat.icon}</span>
          <h1 className="text-4xl font-bold text-text-primary">
            {cat.name}
          </h1>
          <p className="text-text-secondary max-w-2xl mx-auto">
            {cat.description}
            {gifts.length > 0 && ` Vi har ${gifts.length} gaver i denne kategori.`}
          </p>
        </div>

        <GiftGrid gifts={gifts} columns={4} />
      </div>
    </div>
  );
}

export async function generateStaticParams() {
  return CATEGORIES.map((cat) => ({
    category: cat.slug,
  }));
}
