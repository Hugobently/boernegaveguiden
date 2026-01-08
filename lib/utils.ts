import { type ClassValue, clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function getAgeLabel(minAge: number, maxAge: number): string {
  if (minAge === maxAge) return `${minAge} år`;
  if (maxAge >= 99) return `${minAge}+ år`;
  return `${minAge}-${maxAge} år`;
}

export function getAgeGroup(age: number): string {
  if (age <= 2) return '0-2';
  if (age <= 5) return '3-5';
  if (age <= 9) return '6-9';
  if (age <= 12) return '10-12';
  return '13-15';
}

export function slugify(text: string): string {
  return text
    .toLowerCase()
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/(^-|-$)/g, '');
}

export function formatPrice(price: number | null): string {
  if (!price) return 'Pris varierer';
  return `${price.toLocaleString('da-DK')} kr`;
}

// Age group definitions for Børnegaveguiden
export const AGE_GROUPS = [
  { slug: '0-2', label: '0-2 år', emoji: '👶', description: 'Baby & småbørn', color: '#FFD1DC' },
  { slug: '3-5', label: '3-5 år', emoji: '🧒', description: 'Børnehavebørn', color: '#BAFFC9' },
  { slug: '6-9', label: '6-9 år', emoji: '🎒', description: 'Indskoling', color: '#BAE1FF' },
  { slug: '10-12', label: '10-12 år', emoji: '📚', description: 'Mellemtrin', color: '#E8D5FF' },
  { slug: '13-15', label: '13-15 år', emoji: '🎓', description: 'Teenager/Konfirmation', color: '#FFE4B5' },
] as const;

export const AGE_GROUP_COLORS: Record<string, string> = {
  '0-2': '#FFD1DC',
  '3-5': '#BAFFC9',
  '6-9': '#BAE1FF',
  '10-12': '#E8D5FF',
  '13-15': '#FFE4B5',
};

export function getAgeGroupColor(ageGroup: string): string {
  return AGE_GROUP_COLORS[ageGroup] || AGE_GROUP_COLORS['6-9'];
}

// Category definitions
export const CATEGORIES = [
  { slug: 'legetoej', name: 'Legetøj', icon: '🧸', description: 'Traditionelt, pædagogisk, udendørs' },
  { slug: 'boeger', name: 'Bøger', icon: '📖', description: 'Billedbøger, læsebøger, fagbøger' },
  { slug: 'kreativ', name: 'Kreative sæt', icon: '🎨', description: 'Hobbyartikler, byggesæt, kunst' },
  { slug: 'udstyr', name: 'Udstyr', icon: '🚴', description: 'Cykler, løbehjul, sportsgrej' },
  { slug: 'oplevelser', name: 'Oplevelser', icon: '🎢', description: 'Gavekort, årskort, aktiviteter' },
  { slug: 'elektronik', name: 'Elektronik', icon: '🎮', description: 'Tablets, høretelefoner, spilkonsoller' },
  { slug: 'mode', name: 'Tøj & mode', icon: '👕', description: 'Kvalitetstøj, accessories' },
] as const;

// Price class definitions
export const PRICE_CLASSES = [
  { slug: 'budget', label: 'Under 100 kr', range: [0, 100], description: 'Småting, tilbehør' },
  { slug: 'mellem-lav', label: '100-300 kr', range: [100, 300], description: 'Hverdagsgaver' },
  { slug: 'mellem', label: '300-500 kr', range: [300, 500], description: 'Fødselsdagsgaver' },
  { slug: 'mellem-hoej', label: '500-1.000 kr', range: [500, 1000], description: 'Større gaver' },
  { slug: 'premium', label: '1.000-2.000 kr', range: [1000, 2000], description: 'Julegaver, særlige anledninger' },
  { slug: 'luksus', label: '2.000+ kr', range: [2000, Infinity], description: 'Konfirmation, milepæle' },
] as const;

export function getPriceClass(price: number): string {
  if (price < 100) return 'budget';
  if (price < 300) return 'mellem-lav';
  if (price < 500) return 'mellem';
  if (price < 1000) return 'mellem-hoej';
  if (price < 2000) return 'premium';
  return 'luksus';
}

export function getPriceClassLabel(priceClass: string): string {
  const found = PRICE_CLASSES.find(p => p.slug === priceClass);
  return found?.label || priceClass;
}

// Helper to parse age group string like "3-5" or "13-15"
export function parseAgeGroup(ageGroup: string): { minAge: number; maxAge: number } {
  const parts = ageGroup.split('-');
  return {
    minAge: parseInt(parts[0], 10) || 0,
    maxAge: parseInt(parts[1], 10) || 99,
  };
}

// Parse JSON strings safely
export function parseJsonArray<T>(json: string): T[] {
  try {
    return JSON.parse(json) as T[];
  } catch {
    return [];
  }
}

export function parseJsonObject<T>(json: string): T {
  try {
    return JSON.parse(json) as T;
  } catch {
    return {} as T;
  }
}
