'use client';

import { cn } from '@/lib/utils';
import { GiftCard } from './GiftCard';
import type { Gift } from '@/lib/types';

interface GiftGridProps {
  gifts: Gift[];
  className?: string;
  columns?: 1 | 2 | 3 | 4;
}

export function GiftGrid({ gifts, className, columns = 4 }: GiftGridProps) {
  const columnClasses = {
    1: 'grid-cols-1',
    2: 'grid-cols-1 sm:grid-cols-2',
    3: 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-3',
    4: 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4',
  };

  if (gifts.length === 0) {
    return (
      <div className="text-center py-16">
        <div className="text-6xl mb-4">🎁</div>
        <h3 className="text-xl font-semibold text-text-primary mb-2">
          Ingen gaver fundet
        </h3>
        <p className="text-text-secondary">
          Prøv at ændre dine filtre eller søgekriterier
        </p>
      </div>
    );
  }

  return (
    <div className={cn('grid gap-6', columnClasses[columns], className)}>
      {gifts.map((gift, index) => (
        <div
          key={gift.id}
          className="animate-fade-in"
          style={{ animationDelay: `${index * 50}ms` }}
        >
          <GiftCard gift={gift} />
        </div>
      ))}
    </div>
  );
}

interface FeaturedGiftGridProps {
  gifts: Gift[];
  title?: string;
  subtitle?: string;
  className?: string;
}

export function FeaturedGiftGrid({ gifts, title, subtitle, className }: FeaturedGiftGridProps) {
  return (
    <section className={cn('space-y-8', className)}>
      {(title || subtitle) && (
        <div className="text-center space-y-2">
          {title && (
            <h2 className="text-3xl font-bold text-text-primary">
              {title}
            </h2>
          )}
          {subtitle && (
            <p className="text-text-secondary max-w-2xl mx-auto">
              {subtitle}
            </p>
          )}
        </div>
      )}
      <GiftGrid gifts={gifts} columns={4} />
    </section>
  );
}
