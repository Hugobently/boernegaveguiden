import { Metadata } from 'next';
import { Suspense } from 'react';
import prisma from '@/lib/db';
import { GiftGrid } from '@/components/gifts/GiftGrid';
import { transformGift, type GiftFromDb } from '@/lib/types';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Søgeresultater',
  description: 'Søg efter gaver til børn på Børnegaveguiden.',
};

interface SearchPageProps {
  searchParams: Promise<{ q?: string }>;
}

async function searchGifts(query: string) {
  if (!query || query.trim().length < 2) {
    return [];
  }

  const searchTerm = query.trim().toLowerCase();

  try {
    const gifts = await prisma.gift.findMany({
      where: {
        OR: [
          { title: { contains: searchTerm, mode: 'insensitive' } },
          { description: { contains: searchTerm, mode: 'insensitive' } },
          { shortDescription: { contains: searchTerm, mode: 'insensitive' } },
          { brand: { contains: searchTerm, mode: 'insensitive' } },
          { category: { contains: searchTerm, mode: 'insensitive' } },
          { tags: { contains: searchTerm, mode: 'insensitive' } },
        ],
      },
      orderBy: [
        { editorChoice: 'desc' },
        { featured: 'desc' },
        { rating: 'desc' },
      ],
    });

    // Track search query for analytics
    await prisma.searchQuery.upsert({
      where: { query: searchTerm },
      update: {
        count: { increment: 1 },
        updatedAt: new Date(),
      },
      create: {
        query: searchTerm,
        count: 1,
      },
    });

    return gifts.map((gift) => transformGift(gift as unknown as GiftFromDb));
  } catch {
    return [];
  }
}

async function SearchResults({ query }: { query: string }) {
  const gifts = await searchGifts(query);

  if (!query || query.trim().length < 2) {
    return (
      <div className="text-center py-12">
        <span className="text-6xl block mb-4">🔍</span>
        <h2 className="text-2xl font-bold text-text-primary mb-2">
          Indtast en søgning
        </h2>
        <p className="text-text-secondary">
          Brug søgefeltet ovenfor for at finde gaver.
        </p>
      </div>
    );
  }

  if (gifts.length === 0) {
    return (
      <div className="text-center py-12">
        <span className="text-6xl block mb-4">😕</span>
        <h2 className="text-2xl font-bold text-text-primary mb-2">
          Ingen resultater for &ldquo;{query}&rdquo;
        </h2>
        <p className="text-text-secondary mb-6">
          Prøv at søge på noget andet, eller udforsk vores kategorier.
        </p>
        <div className="flex flex-wrap justify-center gap-3">
          <Link
            href="/kategori/legetoej"
            className="bg-coral text-white px-4 py-2 rounded-full text-sm font-medium hover:bg-coral-dark transition-colors"
          >
            🧸 Legetøj
          </Link>
          <Link
            href="/kategori/boeger"
            className="bg-sky text-white px-4 py-2 rounded-full text-sm font-medium hover:bg-sky-dark transition-colors"
          >
            📖 Bøger
          </Link>
          <Link
            href="/kategori/kreativ"
            className="bg-sunflower text-text-primary px-4 py-2 rounded-full text-sm font-medium hover:bg-sunflower-dark transition-colors"
          >
            🎨 Kreative sæt
          </Link>
          <Link
            href="/kategori/elektronik"
            className="bg-lavender text-white px-4 py-2 rounded-full text-sm font-medium hover:bg-lavender-dark transition-colors"
          >
            🎮 Elektronik
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      <p className="text-text-secondary">
        Fandt {gifts.length} {gifts.length === 1 ? 'gave' : 'gaver'} for &ldquo;{query}&rdquo;
      </p>
      <GiftGrid gifts={gifts} columns={4} />
    </div>
  );
}

export default async function SearchPage({ searchParams }: SearchPageProps) {
  const params = await searchParams;
  const query = params.q || '';

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="space-y-8">
        <div className="text-center space-y-4">
          <h1 className="text-4xl font-bold text-text-primary">
            {query ? `Søgeresultater` : 'Søg efter gaver'}
          </h1>
          {query && (
            <p className="text-text-secondary">
              Søgning efter: <span className="font-semibold">{query}</span>
            </p>
          )}
        </div>

        <Suspense
          fallback={
            <div className="text-center py-12">
              <div className="animate-spin text-4xl">🎁</div>
              <p className="text-text-secondary mt-4">Søger...</p>
            </div>
          }
        >
          <SearchResults query={query} />
        </Suspense>
      </div>
    </div>
  );
}
