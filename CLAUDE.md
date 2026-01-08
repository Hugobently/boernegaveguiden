# Børnegaveguiden - Project Context

## Overview
**Børnegaveguiden** er en dansk hjemmeside der hjælper forældre og andre med at finde kvalitetsgaver til børn. Siden har ærlige anmeldelser med fokus på kvalitet, pædagogisk værdi og børnenes glæde.

**Language:** Danish only
**Target Audience:** Danish parents, grandparents, gift-givers for children 0-15 years

---

## Tech Stack

| Technology | Version | Purpose |
|------------|---------|---------|
| Next.js | 14.2.x | Framework (App Router) |
| React | 18 | UI Library |
| TypeScript | 5 | Type Safety |
| PostgreSQL | - | Database (Vercel hosted) |
| Prisma | 5.x | ORM |
| TailwindCSS | 3.4.x | Styling |

---

## Project Structure

```
/boernegaveguiden
├── /app
│   ├── /api
│   │   ├── /gifts/route.ts           # GET gaver med filtre
│   │   ├── /gifts/[slug]/route.ts    # GET enkelt gave
│   │   ├── /categories/route.ts      # GET kategorier
│   │   └── /search/route.ts          # Søgning
│   │
│   ├── page.tsx                      # Forside
│   ├── /gaver/                       # Alle gaver
│   │   ├── page.tsx
│   │   └── /[slug]/page.tsx
│   ├── /kategori/[category]/page.tsx # Kategori-liste
│   ├── /alder/[age]/page.tsx         # Gaver efter alder
│   ├── /konfirmation/page.tsx        # Konfirmationsgaver
│   ├── /soeg/page.tsx                # Søgeside
│   └── /om/page.tsx                  # Om siden
│
├── /components
│   ├── /ui/                          # Base UI components
│   ├── /layout/                      # Header, Footer
│   └── /gifts/                       # Gift-specific components
│
├── /lib
│   ├── db.ts                         # Prisma client
│   ├── types.ts                      # TypeScript types
│   └── utils.ts                      # Hjælpefunktioner
│
├── /prisma
│   ├── schema.prisma                 # Database schema
│   └── seed.ts                       # Seed script
│
└── /data
    └── gifts-seed.ts                 # Gave-data til seeding
```

---

## Database Schema

### Gift Model (Hovedmodel)
- `id`, `title`, `slug` (unique)
- `description`, `shortDescription`
- `minAge`, `maxAge`, `ageGroup`
- `category`, `subcategories` (JSON), `tags` (JSON)
- `targetGender` (alle/drenge/piger)
- `price`, `priceClass`
- `affiliateLinks` (JSON), `primaryBuyUrl`
- `rating`, `pros` (JSON), `cons` (JSON), `parentTip`
- `details` (JSON), `imageUrl`, `additionalImages` (JSON)
- `brand`, `manufacturer`
- `featured`, `editorChoice`, `isConfirmationGift`, `isSustainable`, `isDanishBrand`
- `metaTitle`, `metaDescription`
- `createdAt`, `updatedAt`

---

## Age Groups

| Age Group | Label | Color | Emoji |
|-----------|-------|-------|-------|
| `0-2` | 0-2 år | #FFD1DC (pink) | 👶 |
| `3-5` | 3-5 år | #BAFFC9 (green) | 🧒 |
| `6-9` | 6-9 år | #BAE1FF (blue) | 🎒 |
| `10-12` | 10-12 år | #E8D5FF (purple) | 📚 |
| `13-15` | 13-15 år | #FFE4B5 (gold) | 🎓 |

---

## Categories

| Category | Slug | Icon |
|----------|------|------|
| Legetøj | `legetoej` | 🧸 |
| Bøger | `boeger` | 📖 |
| Kreative sæt | `kreativ` | 🎨 |
| Udstyr | `udstyr` | 🚴 |
| Oplevelser | `oplevelser` | 🎢 |
| Elektronik | `elektronik` | 🎮 |
| Tøj & mode | `mode` | 👕 |

---

## Price Classes

| Class | Range (DKK) |
|-------|-------------|
| `budget` | Under 100 |
| `mellem-lav` | 100-300 |
| `mellem` | 300-500 |
| `mellem-hoej` | 500-1.000 |
| `premium` | 1.000-2.000 |
| `luksus` | 2.000+ |

---

## Commands

```bash
# Development
npm run dev              # Start dev server
npm run build            # Production build
npm run lint             # Run ESLint

# Database
npx prisma studio        # Database GUI
npx prisma db push       # Push schema changes
npx prisma generate      # Regenerate client
npm run db:seed          # Seed database
```

---

## Review Guidelines

### Description (600-900 characters)
1. **Opening** - What is this product?
2. **Features** - What makes it special?
3. **Educational value** - What does the child learn?
4. **Quality** - Materials, durability
5. **Closing** - Who is this for?

### Writing Style
- Natural Danish language
- Honest and balanced
- Parent perspective
- Avoid: "fantastisk", "perfekt", excessive superlatives

### Rating Scale (1-5)
- **5.0:** Exceptional
- **4.5:** Excellent
- **4.0:** Very good
- **3.5:** Good
- **3.0:** Okay
- **2.5:** Mediocre
- **2.0:** Below average

---

## Color Palette

```
Primary Colors:
  coral:      #FFB5A7
  mint:       #B8E0D2
  sky:        #A2D2FF
  sunflower:  #FFE66D
  lavender:   #CDB4DB

Background Colors:
  paper:      #FFFCF7
  cream:      #FFF9F0
  peach:      #FFF0E8

Text Colors:
  primary:    #4A4A4A
  secondary:  #7A7A7A
  muted:      #9CA3AF
```

---

## Affiliate Setup

**Networks:** Partner-ads (primary), Adtraction, Amazon Associates

**Disclosure required on all pages with affiliate links.**

---

## Image Guidelines

### Primary Source: Unsplash
All product images use free, royalty-free images from [Unsplash](https://unsplash.com). No attribution required.

**URL Format:**
```
https://images.unsplash.com/photo-{ID}?w=800&q=80
```

### Category-Specific Image URLs

Use these Unsplash images based on product category/type:

| Type | Unsplash URL |
|------|--------------|
| **Baby/Rangle** | `photo-1515488042361-ee00e0ddd4e4` |
| **Trælegetøj/Stableklodser** | `photo-1558907353-ceb54f3882ed` |
| **Xylofon/Musik** | `photo-1514649923863-ceaf75b7ec40` |
| **Toniebox/Lydafspiller** | `photo-1598653222000-6b7b7a552625` |
| **Tablet/iPad** | `photo-1544652478-6653e09f18a2` |
| **Høretelefoner** | `photo-1505740420928-5e560c06d30e` |
| **Nintendo Switch/Gaming** | `photo-1578303512597-81e6cc155b3e` |
| **Bøger** | `photo-1512820790803-83ca734da794` |
| **Sangbøger** | `photo-1507842217343-583bb7270b66` |
| **LEGO/DUPLO** | `photo-1587654780291-39c9404d746b` |
| **Kreativ/Maling** | `photo-1513364776144-60967b0f800f` |
| **Fingerfarve/Modellervoks** | `photo-1560421683-6856ea585c78` |
| **Perler/Hama** | `photo-1558618666-fcd25c85cd64` |
| **Cykel** | `photo-1532330393533-443990a51d10` |
| **Løbehjul** | `photo-1558618047-3c8c76ca7d13` |
| **Brætspil** | `photo-1610890716171-6b1bb98ffd09` |
| **Kortspil** | `photo-1529480780361-ba7fde9e3233` |
| **Puslespil** | `photo-1494059980473-813e73ee784b` |
| **Robot/Kodning** | `photo-1485827404703-89b55fcc595e` |
| **Videnskab/STEM** | `photo-1532094349884-543bc11b234d` |
| **Dinosaurer** | `photo-1519331379826-f10be5486c6f` |
| **Dukker** | `photo-1558060370-d644479cb6f7` |
| **Rygsæk/Taske** | `photo-1553062407-98eeb64c6a62` |
| **Oplevelser** | `photo-1527529482837-4698179dc6ce` |
| **Zoo/Dyr** | `photo-1534567153574-2b12153a87f0` |
| **Sølv/Smykker** | `photo-1603796846097-bee99e4a601f` |
| **Ur/Watch** | `photo-1523275335684-37898b6baf30` |
| **Default/Legetøj** | `photo-1596461404969-9ae70f2830c1` |

### Finding New Images

1. Go to [unsplash.com](https://unsplash.com)
2. Search for relevant terms (e.g., "wooden toys", "children books")
3. Copy the photo ID from the URL: `unsplash.com/photos/{PHOTO_ID}`
4. Format: `https://images.unsplash.com/photo-{ID}?w=800&q=80`

### Alternative Image Sources

If Unsplash doesn't have suitable images:

1. **Pexels** - [pexels.com](https://pexels.com) (free, no attribution)
2. **Pixabay** - [pixabay.com](https://pixabay.com) (free, no attribution)
3. **Brand websites** - Official product images (check usage rights)

### Image Best Practices

- Always use `?w=800&q=80` for optimal size and quality
- Prefer images showing the product in use or context
- Avoid images with visible brand logos (unless it's the actual brand)
- Use neutral, clean backgrounds when possible
- Match image style across similar products
