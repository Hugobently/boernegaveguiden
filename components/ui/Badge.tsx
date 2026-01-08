'use client';

import { cn } from '@/lib/utils';
import { HTMLAttributes, forwardRef, type ReactNode } from 'react';
import { AGE_GROUPS, CATEGORIES } from '@/lib/utils';

type BadgeVariant = 'solid' | 'soft' | 'outline' | 'dot';
type BadgeColor =
  | 'neutral'
  | 'coral'
  | 'mint'
  | 'sky'
  | 'sunflower'
  | 'lavender'
  | 'success'
  | 'warning'
  | 'error';
type BadgeSize = 'sm' | 'md' | 'lg';

interface BadgeProps extends HTMLAttributes<HTMLSpanElement> {
  variant?: BadgeVariant;
  color?: BadgeColor;
  size?: BadgeSize;
  icon?: ReactNode;
  dot?: boolean;
  removable?: boolean;
  onRemove?: () => void;
}

const variantColorStyles: Record<BadgeVariant, Record<BadgeColor, string>> = {
  solid: {
    neutral: 'bg-[#7A7A7A] text-white',
    coral: 'bg-[#FFB5A7] text-[#6B3A2E]',
    mint: 'bg-[#B8E0D2] text-[#2D6A4F]',
    sky: 'bg-[#A2D2FF] text-[#1D4E89]',
    sunflower: 'bg-[#FFE66D] text-[#7D6608]',
    lavender: 'bg-[#CDB4DB] text-[#5B4670]',
    success: 'bg-[#77DD77] text-[#1B5E20]',
    warning: 'bg-[#FFD97D] text-[#8B6914]',
    error: 'bg-[#FF9AA2] text-[#8B2635]',
  },
  soft: {
    neutral: 'bg-[#F5F5F5] text-[#4A4A4A]',
    coral: 'bg-[#FFB5A7]/20 text-[#B4564A]',
    mint: 'bg-[#B8E0D2]/20 text-[#2D6A4F]',
    sky: 'bg-[#A2D2FF]/20 text-[#1D4E89]',
    sunflower: 'bg-[#FFE66D]/20 text-[#8B7300]',
    lavender: 'bg-[#CDB4DB]/20 text-[#5B4670]',
    success: 'bg-[#77DD77]/20 text-[#1B5E20]',
    warning: 'bg-[#FFD97D]/20 text-[#8B6914]',
    error: 'bg-[#FF9AA2]/20 text-[#8B2635]',
  },
  outline: {
    neutral: 'bg-transparent border-2 border-[#E0E0E0] text-[#4A4A4A]',
    coral: 'bg-transparent border-2 border-[#FFB5A7] text-[#B4564A]',
    mint: 'bg-transparent border-2 border-[#B8E0D2] text-[#2D6A4F]',
    sky: 'bg-transparent border-2 border-[#A2D2FF] text-[#1D4E89]',
    sunflower: 'bg-transparent border-2 border-[#FFE66D] text-[#8B7300]',
    lavender: 'bg-transparent border-2 border-[#CDB4DB] text-[#5B4670]',
    success: 'bg-transparent border-2 border-[#77DD77] text-[#1B5E20]',
    warning: 'bg-transparent border-2 border-[#FFD97D] text-[#8B6914]',
    error: 'bg-transparent border-2 border-[#FF9AA2] text-[#8B2635]',
  },
  dot: {
    neutral: 'bg-[#FFFCF7] text-[#4A4A4A]',
    coral: 'bg-[#FFFCF7] text-[#4A4A4A]',
    mint: 'bg-[#FFFCF7] text-[#4A4A4A]',
    sky: 'bg-[#FFFCF7] text-[#4A4A4A]',
    sunflower: 'bg-[#FFFCF7] text-[#4A4A4A]',
    lavender: 'bg-[#FFFCF7] text-[#4A4A4A]',
    success: 'bg-[#FFFCF7] text-[#4A4A4A]',
    warning: 'bg-[#FFFCF7] text-[#4A4A4A]',
    error: 'bg-[#FFFCF7] text-[#4A4A4A]',
  },
};

const dotColorStyles: Record<BadgeColor, string> = {
  neutral: 'bg-[#7A7A7A]',
  coral: 'bg-[#FFB5A7]',
  mint: 'bg-[#B8E0D2]',
  sky: 'bg-[#A2D2FF]',
  sunflower: 'bg-[#FFE66D]',
  lavender: 'bg-[#CDB4DB]',
  success: 'bg-[#77DD77]',
  warning: 'bg-[#FFD97D]',
  error: 'bg-[#FF9AA2]',
};

const sizeStyles: Record<BadgeSize, string> = {
  sm: 'px-2 py-0.5 text-xs',
  md: 'px-3 py-1 text-sm',
  lg: 'px-4 py-1.5 text-base',
};

export const Badge = forwardRef<HTMLSpanElement, BadgeProps>(
  (
    {
      className,
      variant = 'soft',
      color = 'neutral',
      size = 'md',
      icon,
      dot = false,
      removable = false,
      onRemove,
      children,
      ...props
    },
    ref
  ) => {
    const showDot = variant === 'dot' || dot;

    return (
      <span
        ref={ref}
        className={cn(
          'inline-flex items-center gap-1.5 rounded-full font-medium',
          'transition-all duration-200',
          variantColorStyles[variant][color],
          sizeStyles[size],
          className
        )}
        {...props}
      >
        {showDot && (
          <span
            className={cn(
              'w-2 h-2 rounded-full animate-pulse',
              dotColorStyles[color]
            )}
          />
        )}
        {icon && !showDot && (
          <span className="flex-shrink-0 -ml-0.5">{icon}</span>
        )}
        {children}
        {removable && (
          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              onRemove?.();
            }}
            className={cn(
              'flex-shrink-0 -mr-1 ml-0.5 p-0.5 rounded-full',
              'hover:bg-black/10 transition-colors',
              'focus:outline-none focus-visible:ring-2 focus-visible:ring-current'
            )}
            aria-label="Fjern"
          >
            <svg
              className="w-3 h-3"
              viewBox="0 0 12 12"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
            >
              <path d="M3 3l6 6M9 3l-6 6" />
            </svg>
          </button>
        )}
      </span>
    );
  }
);

Badge.displayName = 'Badge';

// Age badge for gift age groups
interface AgeBadgeProps extends Omit<BadgeProps, 'color' | 'children'> {
  ageGroup: '0-2' | '3-5' | '6-9' | '10-12' | '13-15';
}

const ageGroupColorMap: Record<string, BadgeColor> = {
  '0-2': 'coral',
  '3-5': 'mint',
  '6-9': 'sky',
  '10-12': 'lavender',
  '13-15': 'sunflower',
};

export const AgeBadge = forwardRef<HTMLSpanElement, AgeBadgeProps>(
  ({ ageGroup, variant = 'soft', ...props }, ref) => {
    const group = AGE_GROUPS.find(g => g.slug === ageGroup);
    const color = ageGroupColorMap[ageGroup] || 'neutral';

    return (
      <Badge ref={ref} variant={variant} color={color} {...props}>
        <span>{group?.emoji || '👦'}</span>
        <span>{group?.label || ageGroup}</span>
      </Badge>
    );
  }
);
AgeBadge.displayName = 'AgeBadge';

// Category badge
interface CategoryBadgeProps extends Omit<BadgeProps, 'children'> {
  category: string;
}

export const CategoryBadge = forwardRef<HTMLSpanElement, CategoryBadgeProps>(
  ({ category, variant = 'soft', color = 'coral', ...props }, ref) => {
    const cat = CATEGORIES.find(c => c.slug === category);
    return (
      <Badge ref={ref} variant={variant} color={color} {...props}>
        {cat?.icon && <span>{cat.icon}</span>}
        <span>{cat?.name || category}</span>
      </Badge>
    );
  }
);
CategoryBadge.displayName = 'CategoryBadge';

// Price badge
interface PriceBadgeProps extends Omit<BadgeProps, 'children'> {
  price: number | null;
  priceClass?: string;
}

export const PriceBadge = forwardRef<HTMLSpanElement, PriceBadgeProps>(
  ({ price, priceClass, variant = 'soft', ...props }, ref) => {
    const label = price ? `${price.toLocaleString('da-DK')} kr` : 'Pris varierer';
    return (
      <Badge ref={ref} variant={variant} color="sunflower" {...props}>
        <span>💰</span>
        <span>{label}</span>
      </Badge>
    );
  }
);
PriceBadge.displayName = 'PriceBadge';

// Feature badges for gifts
interface FeatureBadgeProps extends Omit<BadgeProps, 'children'> {
  feature: 'editorChoice' | 'sustainable' | 'danishBrand' | 'confirmation';
}

const featureConfig = {
  editorChoice: { label: 'Redaktørens valg', icon: '⭐', color: 'coral' as BadgeColor },
  sustainable: { label: 'Bæredygtig', icon: '🌱', color: 'mint' as BadgeColor },
  danishBrand: { label: 'Dansk', icon: '🇩🇰', color: 'sky' as BadgeColor },
  confirmation: { label: 'Konfirmationsgave', icon: '🎓', color: 'lavender' as BadgeColor },
};

export const FeatureBadge = forwardRef<HTMLSpanElement, FeatureBadgeProps>(
  ({ feature, variant = 'soft', ...props }, ref) => {
    const config = featureConfig[feature];
    return (
      <Badge ref={ref} variant={variant} color={config.color} {...props}>
        <span>{config.icon}</span>
        <span>{config.label}</span>
      </Badge>
    );
  }
);
FeatureBadge.displayName = 'FeatureBadge';

export default Badge;
