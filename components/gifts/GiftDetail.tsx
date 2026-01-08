'use client';

import Image from 'next/image';
import Link from 'next/link';
import { cn, getAgeGroupColor, formatPrice, CATEGORIES, AGE_GROUPS, PRICE_CLASSES } from '@/lib/utils';
import { Button } from '@/components/ui/Button';
import { Rating } from '@/components/ui/Rating';
import { Badge, AgeBadge, FeatureBadge } from '@/components/ui/Badge';
import { ExternalLink, Check, X, Lightbulb, ShoppingCart } from 'lucide-react';
import type { Gift, AffiliateLink } from '@/lib/types';

interface GiftDetailProps {
  gift: Gift;
}

export function GiftDetail({ gift }: GiftDetailProps) {
  const category = CATEGORIES.find(c => c.slug === gift.category);
  const ageGroup = AGE_GROUPS.find(a => a.slug === gift.ageGroup);
  const priceClass = PRICE_CLASSES.find(p => p.slug === gift.priceClass);
  const ageColor = getAgeGroupColor(gift.ageGroup);

  return (
    <article className="max-w-6xl mx-auto">
      {/* Breadcrumb */}
      <nav className="mb-6 text-sm">
        <ol className="flex items-center gap-2 text-text-secondary">
          <li>
            <Link href="/" className="hover:text-coral-dark transition-colors">
              Forside
            </Link>
          </li>
          <li>/</li>
          <li>
            <Link href="/gaver" className="hover:text-coral-dark transition-colors">
              Gaver
            </Link>
          </li>
          <li>/</li>
          <li>
            <Link
              href={`/kategori/${gift.category}`}
              className="hover:text-coral-dark transition-colors"
            >
              {category?.name}
            </Link>
          </li>
          <li>/</li>
          <li className="text-text-primary font-medium truncate max-w-[200px]">
            {gift.title}
          </li>
        </ol>
      </nav>

      <div className="grid lg:grid-cols-2 gap-8 lg:gap-12">
        {/* Left column - Image */}
        <div className="space-y-4">
          <div className="relative aspect-square rounded-3xl overflow-hidden bg-cream shadow-card">
            {gift.imageUrl ? (
              <Image
                src={gift.imageUrl}
                alt={gift.title}
                fill
                className="object-cover"
                priority
              />
            ) : (
              <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-cream to-peach">
                <span className="text-9xl">{category?.icon || '🎁'}</span>
              </div>
            )}

            {/* Badges overlay */}
            <div className="absolute top-4 left-4 flex flex-wrap gap-2">
              {gift.editorChoice && (
                <FeatureBadge feature="editorChoice" variant="solid" />
              )}
              {gift.isDanishBrand && (
                <FeatureBadge feature="danishBrand" variant="solid" />
              )}
              {gift.isSustainable && (
                <FeatureBadge feature="sustainable" variant="solid" />
              )}
            </div>
          </div>

          {/* Additional images */}
          {gift.additionalImages.length > 0 && (
            <div className="flex gap-3 overflow-x-auto pb-2">
              {gift.additionalImages.map((img, index) => (
                <div
                  key={index}
                  className="relative w-20 h-20 flex-shrink-0 rounded-xl overflow-hidden bg-cream shadow-soft"
                >
                  <Image
                    src={img}
                    alt={`${gift.title} billede ${index + 2}`}
                    fill
                    className="object-cover"
                  />
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Right column - Content */}
        <div className="space-y-6">
          {/* Header */}
          <div className="space-y-3">
            <div className="flex items-center gap-3 flex-wrap">
              <span
                className="px-4 py-1.5 rounded-full text-sm font-semibold text-text-primary"
                style={{ backgroundColor: ageColor }}
              >
                {ageGroup?.emoji} {gift.ageGroup} år
              </span>
              <Badge variant="soft" color="coral">
                {category?.icon} {category?.name}
              </Badge>
            </div>

            <h1 className="text-3xl lg:text-4xl font-bold text-text-primary">
              {gift.title}
            </h1>

            {gift.brand && (
              <p className="text-text-secondary">
                af <span className="font-medium">{gift.brand}</span>
              </p>
            )}

            <div className="flex items-center gap-4">
              <Rating value={gift.rating} size="lg" />
            </div>
          </div>

          {/* Price & Buy */}
          <div className="bg-gradient-to-r from-peach to-cream rounded-2xl p-6 space-y-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-text-secondary mb-1">Vejledende pris</p>
                <p className="text-3xl font-bold text-text-primary">
                  {formatPrice(gift.price)}
                </p>
                {priceClass && (
                  <p className="text-sm text-text-muted mt-1">
                    {priceClass.description}
                  </p>
                )}
              </div>
            </div>

            {gift.primaryBuyUrl && (
              <Button
                variant="primary"
                size="lg"
                fullWidth
                rightIcon={<ExternalLink className="w-5 h-5" />}
                onClick={() => window.open(gift.primaryBuyUrl!, '_blank')}
              >
                Se pris og køb
              </Button>
            )}

            {/* Multiple affiliate links */}
            {gift.affiliateLinks.length > 1 && (
              <div className="pt-2 border-t border-coral/20">
                <p className="text-sm text-text-secondary mb-2">Se også hos:</p>
                <div className="flex flex-wrap gap-2">
                  {gift.affiliateLinks.slice(1).map((link, index) => (
                    <a
                      key={index}
                      href={link.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm text-coral-dark hover:underline"
                    >
                      {link.merchantName}
                      {link.price && ` (${link.price} kr)`}
                    </a>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Description */}
          <div className="prose prose-lg max-w-none">
            <p className="text-text-primary leading-relaxed">
              {gift.description}
            </p>
          </div>

          {/* Pros & Cons */}
          <div className="grid sm:grid-cols-2 gap-4">
            <div className="bg-mint-light/30 rounded-2xl p-5">
              <h3 className="font-semibold text-text-primary mb-3 flex items-center gap-2">
                <Check className="w-5 h-5 text-mint-dark" />
                Fordele
              </h3>
              <ul className="space-y-2">
                {gift.pros.map((pro, index) => (
                  <li key={index} className="text-sm text-text-primary flex items-start gap-2">
                    <span className="text-mint-dark mt-0.5">+</span>
                    {pro}
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-coral-light/30 rounded-2xl p-5">
              <h3 className="font-semibold text-text-primary mb-3 flex items-center gap-2">
                <X className="w-5 h-5 text-coral-dark" />
                Ulemper
              </h3>
              <ul className="space-y-2">
                {gift.cons.map((con, index) => (
                  <li key={index} className="text-sm text-text-primary flex items-start gap-2">
                    <span className="text-coral-dark mt-0.5">-</span>
                    {con}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Parent tip */}
          {gift.parentTip && (
            <div className="bg-sunflower-light/30 rounded-2xl p-5">
              <h3 className="font-semibold text-text-primary mb-2 flex items-center gap-2">
                <Lightbulb className="w-5 h-5 text-sunflower-dark" />
                Tip til forældre
              </h3>
              <p className="text-sm text-text-primary">
                {gift.parentTip}
              </p>
            </div>
          )}

          {/* Tags */}
          {gift.tags.length > 0 && (
            <div className="flex flex-wrap gap-2">
              {gift.tags.map((tag, index) => (
                <Badge key={index} variant="outline" color="neutral" size="sm">
                  {tag}
                </Badge>
              ))}
            </div>
          )}
        </div>
      </div>

      {/* Affiliate disclosure */}
      <div className="mt-12 p-4 bg-mist rounded-xl text-center">
        <p className="text-xs text-text-muted">
          Denne side indeholder affiliate-links. Hvis du køber via vores links,
          modtager vi en lille kommission uden ekstra omkostning for dig.
          Dette hjælper os med at drive siden.
        </p>
      </div>
    </article>
  );
}
