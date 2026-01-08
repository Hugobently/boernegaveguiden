import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import prisma from '@/lib/db';
import { AGE_GROUPS, getAgeGroupColor } from '@/lib/utils';
import { GiftGrid } from '@/components/gifts/GiftGrid';
import { transformGift, type GiftFromDb } from '@/lib/types';

interface Props {
  params: Promise<{ age: string }>;
}

async function getGiftsByAge(ageGroup: string) {
  const gifts = await prisma.gift.findMany({
    where: { ageGroup },
    orderBy: [
      { editorChoice: 'desc' },
      { featured: 'desc' },
      { rating: 'desc' },
    ],
  });
  return gifts.map((gift) => transformGift(gift as unknown as GiftFromDb));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { age } = await params;
  const ageGroup = AGE_GROUPS.find(a => a.slug === age);

  if (!ageGroup) {
    return { title: 'Aldersgruppe ikke fundet' };
  }

  return {
    title: `Gaver til ${ageGroup.label}`,
    description: `Find de bedste gaver til ${ageGroup.description.toLowerCase()}. Kvalitetsgaver til børn ${ageGroup.label}.`,
  };
}

export default async function AgePage({ params }: Props) {
  const { age } = await params;
  const ageGroup = AGE_GROUPS.find(a => a.slug === age);

  if (!ageGroup) {
    notFound();
  }

  const gifts = await getGiftsByAge(age);
  const ageColor = getAgeGroupColor(age);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="space-y-8">
        {/* Header with age color */}
        <div
          className="rounded-3xl p-8 text-center space-y-4"
          style={{ backgroundColor: ageColor }}
        >
          <span className="text-6xl">{ageGroup.emoji}</span>
          <h1 className="text-4xl font-bold text-text-primary">
            Gaver til {ageGroup.label}
          </h1>
          <p className="text-text-secondary max-w-2xl mx-auto">
            {ageGroup.description}
            {gifts.length > 0 && ` - Vi har ${gifts.length} gaver til denne aldersgruppe.`}
          </p>
        </div>

        <GiftGrid gifts={gifts} columns={4} />
      </div>
    </div>
  );
}

export async function generateStaticParams() {
  return AGE_GROUPS.map((age) => ({
    age: age.slug,
  }));
}
