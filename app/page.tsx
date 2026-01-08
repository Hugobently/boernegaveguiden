import Link from 'next/link';
import prisma from '@/lib/db';
import { AGE_GROUPS, CATEGORIES, cn } from '@/lib/utils';
import { GiftGrid } from '@/components/gifts/GiftGrid';
import { Button } from '@/components/ui/Button';
import { transformGift, type GiftFromDb } from '@/lib/types';
import { Search, Gift, Star, Sparkles } from 'lucide-react';

async function getFeaturedGifts() {
  try {
    const gifts = await prisma.gift.findMany({
      where: {
        OR: [{ editorChoice: true }, { featured: true }],
      },
      orderBy: { rating: 'desc' },
      take: 8,
    });
    return gifts.map((gift) => transformGift(gift as unknown as GiftFromDb));
  } catch {
    return [];
  }
}

async function getGiftCounts() {
  try {
    const counts = await Promise.all(
      AGE_GROUPS.map(async (age) => ({
        ageGroup: age.slug,
        count: await prisma.gift.count({ where: { ageGroup: age.slug } }),
      }))
    );
    return Object.fromEntries(counts.map((c) => [c.ageGroup, c.count]));
  } catch {
    return {};
  }
}

export default async function HomePage() {
  const [featuredGifts, giftCounts] = await Promise.all([
    getFeaturedGifts(),
    getGiftCounts(),
  ]);

  return (
    <div className="space-y-16 pb-16">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-b from-peach via-cream to-paper overflow-hidden">
        {/* Decorative blobs */}
        <div className="absolute top-10 left-10 w-64 h-64 rounded-full bg-coral/20 blur-3xl" />
        <div className="absolute bottom-10 right-10 w-96 h-96 rounded-full bg-sky/20 blur-3xl" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full bg-sunflower/10 blur-3xl" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
          <div className="text-center space-y-8">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/60 backdrop-blur-sm border border-coral/20 text-sm font-medium text-text-primary">
              <Sparkles className="w-4 h-4 text-sunflower" />
              <span>Find den perfekte gave</span>
            </div>

            {/* Title */}
            <h1 className="text-4xl md:text-6xl font-bold text-text-primary">
              Gaver der gør børn{' '}
              <span className="text-coral-dark">glade</span>
            </h1>

            {/* Subtitle */}
            <p className="text-lg md:text-xl text-text-secondary max-w-2xl mx-auto">
              Ærlige anbefalinger af kvalitetsgaver til børn i alle aldre.
              Fra legetøj og bøger til oplevelser og elektronik.
            </p>

            {/* Search bar */}
            <div className="max-w-xl mx-auto">
              <Link href="/soeg" className="block">
                <div className="relative group">
                  <div className="absolute inset-0 bg-gradient-to-r from-coral to-sky rounded-2xl blur-lg opacity-30 group-hover:opacity-50 transition-opacity" />
                  <div className="relative flex items-center gap-3 px-6 py-4 bg-white rounded-2xl shadow-card group-hover:shadow-card-hover transition-all">
                    <Search className="w-5 h-5 text-text-muted" />
                    <span className="text-text-muted">Søg efter gaver...</span>
                    <span className="ml-auto text-xs bg-coral/20 text-coral-dark px-2 py-1 rounded-lg">
                      Enter
                    </span>
                  </div>
                </div>
              </Link>
            </div>

            {/* Quick age links */}
            <div className="flex flex-wrap justify-center gap-3">
              {AGE_GROUPS.map((age) => (
                <Link
                  key={age.slug}
                  href={`/alder/${age.slug}`}
                  className={cn(
                    'flex items-center gap-2 px-5 py-2.5 rounded-full',
                    'font-semibold text-text-primary',
                    'shadow-soft hover:shadow-medium transition-all hover:-translate-y-0.5'
                  )}
                  style={{ backgroundColor: age.color }}
                >
                  <span className="text-lg">{age.emoji}</span>
                  <span>{age.label}</span>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Featured Gifts */}
      {featuredGifts.length > 0 && (
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 mb-10">
            <div className="inline-flex items-center gap-2 text-sunflower-dark">
              <Star className="w-5 h-5 fill-current" />
              <span className="text-sm font-semibold uppercase tracking-wide">
                Redaktørens valg
              </span>
              <Star className="w-5 h-5 fill-current" />
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-text-primary">
              Vores favoritter
            </h2>
            <p className="text-text-secondary max-w-2xl mx-auto">
              Håndplukkede gaver som vi selv ville give til vores egne børn
            </p>
          </div>
          <GiftGrid gifts={featuredGifts} columns={4} />
          <div className="text-center mt-8">
            <Link href="/gaver">
              <Button variant="outline" size="lg">
                Se alle gaver
              </Button>
            </Link>
          </div>
        </section>
      )}

      {/* Age Categories */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-4 mb-10">
          <h2 className="text-3xl md:text-4xl font-bold text-text-primary">
            Vælg alder
          </h2>
          <p className="text-text-secondary">
            Find gaver der passer perfekt til barnets udviklingstrin
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
          {AGE_GROUPS.map((age) => (
            <Link
              key={age.slug}
              href={`/alder/${age.slug}`}
              className="group relative overflow-hidden rounded-3xl p-6 transition-all hover:-translate-y-1 hover:shadow-lifted"
              style={{ backgroundColor: age.color }}
            >
              <div className="relative z-10 space-y-3">
                <span className="text-5xl">{age.emoji}</span>
                <h3 className="text-2xl font-bold text-text-primary">
                  {age.label}
                </h3>
                <p className="text-sm text-text-secondary">
                  {age.description}
                </p>
                <p className="text-xs font-medium text-text-muted">
                  {giftCounts[age.slug] || 0} gaver
                </p>
              </div>
              {/* Decorative blob */}
              <div className="absolute -bottom-8 -right-8 w-32 h-32 rounded-full bg-white/30 transition-transform group-hover:scale-150" />
            </Link>
          ))}
        </div>
      </section>

      {/* Categories */}
      <section className="bg-gradient-to-b from-paper to-cream py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 mb-10">
            <h2 className="text-3xl md:text-4xl font-bold text-text-primary">
              Kategorier
            </h2>
            <p className="text-text-secondary">
              Udforsk gaver efter type
            </p>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-7 gap-4">
            {CATEGORIES.map((category) => (
              <Link
                key={category.slug}
                href={`/kategori/${category.slug}`}
                className="group flex flex-col items-center gap-3 p-6 bg-white rounded-2xl shadow-soft hover:shadow-medium transition-all hover:-translate-y-1"
              >
                <span className="text-4xl group-hover:scale-110 transition-transform">
                  {category.icon}
                </span>
                <span className="font-semibold text-text-primary text-center text-sm">
                  {category.name}
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative overflow-hidden bg-gradient-to-r from-coral to-coral-dark rounded-3xl p-8 md:p-12 text-center">
          {/* Decorative elements */}
          <div className="absolute top-4 left-4 text-4xl opacity-20">🎁</div>
          <div className="absolute bottom-4 right-4 text-4xl opacity-20">🎉</div>
          <div className="absolute top-1/2 left-8 text-2xl opacity-20">⭐</div>
          <div className="absolute top-1/2 right-8 text-2xl opacity-20">✨</div>

          <div className="relative z-10 space-y-6">
            <Gift className="w-12 h-12 text-white mx-auto" />
            <h2 className="text-2xl md:text-3xl font-bold text-white">
              Kan du ikke finde det rigtige?
            </h2>
            <p className="text-white/90 max-w-xl mx-auto">
              Prøv vores søgefunktion eller browse efter alder og kategori.
              Vi tilføjer løbende nye gaver til guiden.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link href="/gaver">
                <Button variant="sunflower" size="lg">
                  Se alle gaver
                </Button>
              </Link>
              <Link href="/konfirmation">
                <Button variant="ghost" size="lg" className="text-white hover:bg-white/20 hover:text-white">
                  Konfirmationsgaver
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
