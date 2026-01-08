'use client';

import Link from 'next/link';
import { cn } from '@/lib/utils';
import { AGE_GROUPS, CATEGORIES } from '@/lib/utils';

// ============================================================================
// FOOTER WAVE SVG
// ============================================================================

function FooterWave() {
  return (
    <svg
      className="absolute -top-px left-0 w-full h-8 md:h-12"
      viewBox="0 0 1440 48"
      fill="none"
      preserveAspectRatio="none"
    >
      <path
        d="M0 48V24C120 8 240 0 360 8C480 16 600 32 720 32C840 32 960 16 1080 8C1200 0 1320 8 1440 24V48H0Z"
        fill="#4A4A4A"
      />
    </svg>
  );
}

// ============================================================================
// FOOTER LOGO
// ============================================================================

function FooterLogo() {
  return (
    <Link href="/" className="flex items-center gap-3 group">
      <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-[#FFB5A7] to-[#F8A99B] flex items-center justify-center shadow-[0_4px_0_0_#E8958A] group-hover:shadow-[0_2px_0_0_#E8958A] group-hover:translate-y-0.5 transition-all">
        <span className="text-2xl">🎁</span>
      </div>
      <div>
        <span className="font-bold text-xl text-white block">
          Børnegaveguiden
        </span>
        <span className="text-sm text-[#9CA3AF]">
          Find den perfekte gave
        </span>
      </div>
    </Link>
  );
}

// ============================================================================
// FOOTER LINK SECTION
// ============================================================================

interface FooterLinkSectionProps {
  title: string;
  emoji: string;
  titleColor: string;
  links: Array<{
    href: string;
    label: string;
    emoji?: string;
    hoverColor?: string;
  }>;
}

function FooterLinkSection({ title, emoji, titleColor, links }: FooterLinkSectionProps) {
  return (
    <div>
      <h4 className={cn('font-bold text-lg mb-4 flex items-center gap-2', titleColor)}>
        <span>{emoji}</span>
        <span>{title}</span>
      </h4>
      <ul className="space-y-3">
        {links.map((link) => (
          <li key={link.href}>
            <Link
              href={link.href}
              className={cn(
                'text-[#9CA3AF] hover:text-white transition-colors text-sm flex items-center gap-2',
                link.hoverColor
              )}
            >
              {link.emoji && <span>{link.emoji}</span>}
              <span>{link.label}</span>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

// ============================================================================
// CATEGORY ICONS
// ============================================================================

function CategoryIcons() {
  return (
    <div className="flex items-center gap-3">
      {CATEGORIES.slice(0, 5).map((cat, index) => (
        <Link
          key={cat.slug}
          href={`/kategori/${cat.slug}`}
          className="text-2xl cursor-pointer hover:scale-125 transition-transform"
          style={{ animationDelay: `${index * 100}ms` }}
          title={cat.name}
        >
          {cat.icon}
        </Link>
      ))}
    </div>
  );
}

// ============================================================================
// FOOTER COMPONENT
// ============================================================================

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative bg-[#4A4A4A] text-white mt-20">
      <FooterWave />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Brand & description */}
          <div className="lg:col-span-1">
            <FooterLogo />
            <p className="text-[#9CA3AF] text-sm mt-4 leading-relaxed">
              Vi hjælper dig med at finde de bedste gaver til børn i alle aldre.
              Ærlige anmeldelser med fokus på kvalitet og pædagogisk værdi.
            </p>
            {/* Affiliate disclosure */}
            <p className="text-[#9CA3AF] text-xs mt-4 leading-relaxed">
              Denne side indeholder affiliate-links. Hvis du køber via vores links,
              modtager vi en lille kommission uden ekstra omkostning for dig.
            </p>
          </div>

          {/* Age groups */}
          <FooterLinkSection
            title="Efter alder"
            emoji="👶"
            titleColor="text-[#A2D2FF]"
            links={AGE_GROUPS.map((age) => ({
              href: `/alder/${age.slug}`,
              label: age.label,
              emoji: age.emoji,
            }))}
          />

          {/* Categories */}
          <FooterLinkSection
            title="Kategorier"
            emoji="🎁"
            titleColor="text-[#FFE66D]"
            links={CATEGORIES.slice(0, 5).map((cat) => ({
              href: `/kategori/${cat.slug}`,
              label: cat.name,
              emoji: cat.icon,
            }))}
          />

          {/* Quick links */}
          <FooterLinkSection
            title="Information"
            emoji="📋"
            titleColor="text-[#FFB5A7]"
            links={[
              { href: '/om', label: 'Om os', emoji: '👋' },
              { href: '/kontakt', label: 'Kontakt', emoji: '✉️' },
              { href: '/privatlivspolitik', label: 'Privatlivspolitik', emoji: '🔒' },
              { href: '/cookiepolitik', label: 'Cookiepolitik', emoji: '🍪' },
            ]}
          />
        </div>

        {/* Divider */}
        <div className="border-t border-white/10 pt-8">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className="text-[#9CA3AF] text-sm text-center sm:text-left">
              © {currentYear} Børnegaveguiden. Alle rettigheder forbeholdes.
            </p>
            <CategoryIcons />
          </div>
        </div>

        {/* Decorative elements */}
        <div className="mt-8 flex justify-center gap-4 opacity-30">
          <div className="w-2 h-2 rounded-full bg-[#FFB5A7]" />
          <div className="w-2 h-2 rounded-full bg-[#B8E0D2]" />
          <div className="w-2 h-2 rounded-full bg-[#A2D2FF]" />
          <div className="w-2 h-2 rounded-full bg-[#FFE66D]" />
          <div className="w-2 h-2 rounded-full bg-[#CDB4DB]" />
        </div>
      </div>
    </footer>
  );
}
