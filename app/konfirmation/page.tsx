import { Metadata } from 'next';
import prisma from '@/lib/db';
import { GiftGrid } from '@/components/gifts/GiftGrid';
import { transformGift, type GiftFromDb } from '@/lib/types';

export const metadata: Metadata = {
  title: 'Konfirmationsgaver',
  description: 'Find den perfekte konfirmationsgave. Kvalitetsgaver til den store dag.',
};

async function getConfirmationGifts() {
  try {
    const gifts = await prisma.gift.findMany({
      where: {
        OR: [
          { isConfirmationGift: true },
          { ageGroup: '13-15' },
        ],
      },
      orderBy: [
        { isConfirmationGift: 'desc' },
        { editorChoice: 'desc' },
        { rating: 'desc' },
      ],
    });
    return gifts.map((gift) => transformGift(gift as unknown as GiftFromDb));
  } catch {
    return [];
  }
}

export default async function ConfirmationPage() {
  const gifts = await getConfirmationGifts();

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="space-y-8">
        {/* Header */}
        <div className="bg-gradient-to-r from-lavender to-lavender-light rounded-3xl p-8 text-center space-y-4">
          <span className="text-6xl">🎓</span>
          <h1 className="text-4xl font-bold text-text-primary">
            Konfirmationsgaver
          </h1>
          <p className="text-text-secondary max-w-2xl mx-auto">
            Find den perfekte gave til konfirmanden.
            Vi har samlet de bedste gaver til den store dag.
            {gifts.length > 0 && ` Se vores ${gifts.length} anbefalinger.`}
          </p>
        </div>

        {/* Info boxes */}
        <div className="grid md:grid-cols-3 gap-4">
          <div className="bg-cream rounded-2xl p-6 space-y-2">
            <span className="text-3xl">💰</span>
            <h3 className="font-semibold text-text-primary">Alle priser</h3>
            <p className="text-sm text-text-secondary">
              Fra små symbolske gaver til større milepælsgaver
            </p>
          </div>
          <div className="bg-cream rounded-2xl p-6 space-y-2">
            <span className="text-3xl">⭐</span>
            <h3 className="font-semibold text-text-primary">Kvalitet først</h3>
            <p className="text-sm text-text-secondary">
              Alle gaver er håndplukket for deres kvalitet
            </p>
          </div>
          <div className="bg-cream rounded-2xl p-6 space-y-2">
            <span className="text-3xl">🎁</span>
            <h3 className="font-semibold text-text-primary">Ærlige anmeldelser</h3>
            <p className="text-sm text-text-secondary">
              Læs fordele og ulemper ved hver gave
            </p>
          </div>
        </div>

        <GiftGrid gifts={gifts} columns={4} />
      </div>
    </div>
  );
}
