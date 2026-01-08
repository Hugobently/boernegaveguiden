'use client';

import { cn } from '@/lib/utils';
import { HTMLAttributes, forwardRef } from 'react';

interface RatingProps extends HTMLAttributes<HTMLDivElement> {
  value: number;
  max?: number;
  size?: 'sm' | 'md' | 'lg';
  showValue?: boolean;
  showMax?: boolean;
}

const sizeStyles = {
  sm: { star: 'text-base', text: 'text-xs' },
  md: { star: 'text-xl', text: 'text-sm' },
  lg: { star: 'text-2xl', text: 'text-base' },
};

export const Rating = forwardRef<HTMLDivElement, RatingProps>(
  (
    {
      className,
      value,
      max = 5,
      size = 'md',
      showValue = true,
      showMax = false,
      ...props
    },
    ref
  ) => {
    const fullStars = Math.floor(value);
    const hasHalfStar = value % 1 >= 0.5;
    const emptyStars = max - fullStars - (hasHalfStar ? 1 : 0);

    return (
      <div
        ref={ref}
        className={cn('inline-flex items-center gap-1', className)}
        {...props}
      >
        <div className={cn('flex items-center', sizeStyles[size].star)}>
          {/* Full stars */}
          {Array.from({ length: fullStars }).map((_, i) => (
            <span key={`full-${i}`} className="text-sunflower">
              ★
            </span>
          ))}
          {/* Half star */}
          {hasHalfStar && (
            <span className="relative">
              <span className="text-gray-300">★</span>
              <span className="absolute inset-0 overflow-hidden w-1/2 text-sunflower">
                ★
              </span>
            </span>
          )}
          {/* Empty stars */}
          {Array.from({ length: emptyStars }).map((_, i) => (
            <span key={`empty-${i}`} className="text-gray-300">
              ★
            </span>
          ))}
        </div>
        {showValue && (
          <span className={cn('font-medium text-text-primary', sizeStyles[size].text)}>
            {value.toFixed(1)}
            {showMax && `/${max}`}
          </span>
        )}
      </div>
    );
  }
);

Rating.displayName = 'Rating';

export default Rating;
