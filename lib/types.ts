// Gift types

export interface AffiliateLink {
  provider: string;
  merchantName: string;
  url: string;
  price?: number;
  inStock?: boolean;
  lastChecked?: string;
}

// Category-specific detail types
export interface ToyDetails {
  material?: string;
  batteryRequired?: boolean;
  assemblyRequired?: boolean;
  dimensions?: string;
  safetyAge?: number;
}

export interface BookDetails {
  author?: string;
  illustrator?: string;
  pages?: number;
  isbn?: string;
  publisher?: string;
  language?: string;
  format?: string;
}

export interface CreativeDetails {
  contents?: string[];
  projectCount?: number;
  skillLevel?: string;
  messLevel?: string;
}

export interface EquipmentDetails {
  sizeRange?: string;
  weightCapacity?: number;
  adjustable?: boolean;
  color?: string;
  warranty?: string;
}

export interface ExperienceDetails {
  location?: string;
  validityPeriod?: string;
  participants?: string;
  duration?: string;
  bookingRequired?: boolean;
}

export interface ElectronicsDetails {
  batteryLife?: string;
  connectivity?: string[];
  storage?: string;
  screenSize?: string;
  parentalControls?: boolean;
}

export interface FashionDetails {
  sizes?: string[];
  material?: string;
  careInstructions?: string;
  sustainableMaterial?: boolean;
}

export type GiftDetails =
  | ToyDetails
  | BookDetails
  | CreativeDetails
  | EquipmentDetails
  | ExperienceDetails
  | ElectronicsDetails
  | FashionDetails;

// Main Gift type (matches Prisma model)
export interface Gift {
  id: string;
  title: string;
  slug: string;
  description: string;
  shortDescription: string;
  minAge: number;
  maxAge: number;
  ageGroup: string;
  category: string;
  subcategories: string[];
  tags: string[];
  targetGender: string;
  price: number | null;
  priceClass: string;
  affiliateLinks: AffiliateLink[];
  primaryBuyUrl: string | null;
  rating: number;
  pros: string[];
  cons: string[];
  parentTip: string | null;
  details: GiftDetails;
  imageUrl: string | null;
  additionalImages: string[];
  brand: string | null;
  manufacturer: string | null;
  featured: boolean;
  editorChoice: boolean;
  isConfirmationGift: boolean;
  isSustainable: boolean;
  isDanishBrand: boolean;
  metaTitle: string | null;
  metaDescription: string | null;
  createdAt: Date;
  updatedAt: Date;
}

// Gift from database (with JSON strings)
export interface GiftFromDb {
  id: string;
  title: string;
  slug: string;
  description: string;
  shortDescription: string;
  minAge: number;
  maxAge: number;
  ageGroup: string;
  category: string;
  subcategories: string;
  tags: string;
  targetGender: string;
  price: number | null;
  priceClass: string;
  affiliateLinks: string;
  primaryBuyUrl: string | null;
  rating: number;
  pros: string;
  cons: string;
  parentTip: string | null;
  details: string;
  imageUrl: string | null;
  additionalImages: string;
  brand: string | null;
  manufacturer: string | null;
  featured: boolean;
  editorChoice: boolean;
  isConfirmationGift: boolean;
  isSustainable: boolean;
  isDanishBrand: boolean;
  metaTitle: string | null;
  metaDescription: string | null;
  createdAt: Date;
  updatedAt: Date;
}

// Helper to transform DB gift to typed gift
export function transformGift(dbGift: GiftFromDb): Gift {
  return {
    ...dbGift,
    subcategories: JSON.parse(dbGift.subcategories),
    tags: JSON.parse(dbGift.tags),
    affiliateLinks: JSON.parse(dbGift.affiliateLinks),
    pros: JSON.parse(dbGift.pros),
    cons: JSON.parse(dbGift.cons),
    details: JSON.parse(dbGift.details),
    additionalImages: JSON.parse(dbGift.additionalImages),
  };
}

// API Response types
export interface ApiResponse<T> {
  success: boolean;
  data?: T;
  error?: string;
  pagination?: {
    total: number;
    limit: number;
    offset: number;
    hasMore: boolean;
  };
}

// Filter types
export interface GiftFilters {
  ageGroup?: string;
  minAge?: number;
  maxAge?: number;
  category?: string;
  priceClass?: string;
  targetGender?: string;
  featured?: boolean;
  editorChoice?: boolean;
  isConfirmationGift?: boolean;
  isSustainable?: boolean;
  isDanishBrand?: boolean;
  search?: string;
  sort?: 'rating' | 'price' | 'title' | 'createdAt';
  order?: 'asc' | 'desc';
  limit?: number;
  offset?: number;
}

// Category type
export interface Category {
  id: string;
  name: string;
  slug: string;
  description: string | null;
  icon: string | null;
  sortOrder: number;
}

// Brand type
export interface Brand {
  id: string;
  name: string;
  slug: string;
  description: string | null;
  logoUrl: string | null;
  websiteUrl: string | null;
  isDanish: boolean;
}
