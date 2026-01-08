'use client';

import Link from 'next/link';
import Image from 'next/image';
import { cn, getAgeGroupColor, formatPrice, CATEGORIES } from '@/lib/utils';
import { Rating } from '@/components/ui/Rating';
import { Badge, AgeBadge, FeatureBadge } from '@/components/ui/Badge';
import type { Gift } from '@/lib/types';

interface GiftCardProps {
  gift: Gift;
  className?: string;
}

export function GiftCard({ gift, className }: GiftCardProps) {
  const category = CATEGORIES.find(c => c.slug === gift.category);
  const ageColor = getAgeGroupColor(gift.ageGroup);

  return (
    <Link href={`/gaver/${gift.slug}`} className={cn('group block', className)}>
      <article className="relative bg-paper rounded-3xl overflow-hidden shadow-card hover:shadow-card-hover transition-all duration-300 hover:-translate-y-1">
        {/* Image container */}
        <div className="relative aspect-square overflow-hidden bg-cream">
          {gift.imageUrl ? (
            <Image
              src={gift.imageUrl}
              alt={gift.title}
              fill
              className="object-cover transition-transform duration-500 group-hover:scale-105"
              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
            />
          ) : (
            <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-cream to-peach">
              <span className="text-6xl">{category?.icon || '🎁'}</span>
            </div>
          )}

          {/* Age indicator */}
          <div
            className="absolute top-3 left-3 px-3 py-1.5 rounded-full text-sm font-semibold text-text-primary flex items-center gap-1.5"
            style={{ backgroundColor: ageColor }}
          >
            <span>{gift.ageGroup} år</span>
          </div>

          {/* Featured badge */}
          {gift.editorChoice && (
            <div className="absolute top-3 right-3">
              <Badge variant="solid" color="sunflower" size="sm">
                <span>⭐</span>
              </Badge>
            </div>
          )}

          {/* Hover overlay with quick info */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <div className="absolute bottom-4 left-4 right-4">
              <div className="flex flex-wrap gap-1.5">
                {gift.isDanishBrand && (
                  <Badge variant="solid" color="sky" size="sm">
                    <span>🇩🇰</span>
                  </Badge>
                )}
                {gift.isSustainable && (
                  <Badge variant="solid" color="mint" size="sm">
                    <span>🌱</span>
                  </Badge>
                )}
                {gift.isConfirmationGift && (
                  <Badge variant="solid" color="lavender" size="sm">
                    <span>🎓</span>
                  </Badge>
                )}
              </div>
            </div>
          </div>
        </div>

        {/* Content */}
        <div className="p-4 space-y-3">
          {/* Category */}
          <div className="flex items-center gap-2">
            <span className="text-sm">{category?.icon}</span>
            <span className="text-xs font-medium text-text-secondary uppercase tracking-wide">
              {category?.name || gift.category}
            </span>
          </div>

          {/* Title */}
          <h3 className="font-semibold text-text-primary text-lg leading-tight line-clamp-2 group-hover:text-coral-dark transition-colors">
            {gift.title}
          </h3>

          {/* Short description */}
          <p className="text-sm text-text-secondary line-clamp-2">
            {gift.shortDescription}
          </p>

          {/* Rating & Price */}
          <div className="flex items-center justify-between pt-2">
            <Rating value={gift.rating} size="sm" />
            <span className="font-bold text-text-primary">
              {formatPrice(gift.price)}
            </span>
          </div>

          {/* Brand */}
          {gift.brand && (
            <p className="text-xs text-text-muted">
              {gift.brand}
            </p>
          )}
        </div>

        {/* Decorative corner blob */}
        <div
          className="absolute -bottom-4 -right-4 w-16 h-16 rounded-full opacity-20 transition-transform duration-300 group-hover:scale-150"
          style={{ backgroundColor: ageColor }}
        />
      </article>
    </Link>
  );
}
