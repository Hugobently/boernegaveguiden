import { Metadata } from 'next';
import prisma from '@/lib/db';
import { GiftGrid } from '@/components/gifts/GiftGrid';
import { transformGift, type GiftFromDb } from '@/lib/types';

export const metadata: Metadata = {
  title: 'Alle gaver',
  description: 'Udforsk vores komplette samling af kvalitetsgaver til børn i alle aldre.',
};

async function getAllGifts() {
  try {
    const gifts = await prisma.gift.findMany({
      orderBy: [
        { editorChoice: 'desc' },
        { featured: 'desc' },
        { rating: 'desc' },
      ],
    });
    return gifts.map((gift) => transformGift(gift as unknown as GiftFromDb));
  } catch {
    return [];
  }
}

export default async function GiftsPage() {
  const gifts = await getAllGifts();

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="space-y-8">
        <div className="text-center space-y-4">
          <h1 className="text-4xl font-bold text-text-primary">
            Alle gaver
          </h1>
          <p className="text-text-secondary max-w-2xl mx-auto">
            Udforsk vores komplette samling af kvalitetsgaver til børn.
            {gifts.length > 0 && ` Vi har ${gifts.length} gaver at vælge imellem.`}
          </p>
        </div>

        <GiftGrid gifts={gifts} columns={4} />
      </div>
    </div>
  );
}
