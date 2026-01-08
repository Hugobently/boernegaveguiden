import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import prisma from '@/lib/db';
import { GiftDetail } from '@/components/gifts/GiftDetail';
import { GiftGrid } from '@/components/gifts/GiftGrid';
import { transformGift, type GiftFromDb } from '@/lib/types';

interface Props {
  params: Promise<{ slug: string }>;
}

async function getGift(slug: string) {
  const gift = await prisma.gift.findUnique({
    where: { slug },
  });
  return gift ? transformGift(gift as unknown as GiftFromDb) : null;
}

async function getRelatedGifts(gift: { category: string; ageGroup: string; id: string }) {
  const gifts = await prisma.gift.findMany({
    where: {
      OR: [
        { category: gift.category },
        { ageGroup: gift.ageGroup },
      ],
      NOT: { id: gift.id },
    },
    orderBy: { rating: 'desc' },
    take: 4,
  });
  return gifts.map((g) => transformGift(g as unknown as GiftFromDb));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const gift = await getGift(slug);

  if (!gift) {
    return { title: 'Gave ikke fundet' };
  }

  return {
    title: gift.metaTitle || gift.title,
    description: gift.metaDescription || gift.shortDescription,
    openGraph: {
      title: gift.title,
      description: gift.shortDescription,
      images: gift.imageUrl ? [{ url: gift.imageUrl }] : [],
    },
  };
}

export default async function GiftPage({ params }: Props) {
  const { slug } = await params;
  const gift = await getGift(slug);

  if (!gift) {
    notFound();
  }

  const relatedGifts = await getRelatedGifts(gift);

  return (
    <div className="py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <GiftDetail gift={gift} />

        {relatedGifts.length > 0 && (
          <section className="mt-16">
            <h2 className="text-2xl font-bold text-text-primary mb-8">
              Lignende gaver
            </h2>
            <GiftGrid gifts={relatedGifts} columns={4} />
          </section>
        )}
      </div>
    </div>
  );
}
