# Børnegaveguiden

En dansk hjemmeside der hjælper forældre med at finde kvalitetsgaver til børn i alle aldre.

## Tech Stack

- **Framework:** Next.js 14 (App Router)
- **Database:** PostgreSQL (Vercel Postgres)
- **ORM:** Prisma
- **Styling:** Tailwind CSS
- **Language:** TypeScript
- **Hosting:** Vercel

## Features

- Gaveanbefalinger organiseret efter alder (0-2, 3-5, 6-9, 10-12, 13-15 år)
- Kategorier: Legetøj, Bøger, Kreative sæt, Udstyr, Oplevelser, Elektronik, Tøj & mode
- Søgefunktion med autocomplete
- Affiliate-links til danske webshops
- SEO-optimeret med dansk indhold
- Mobilvenligt design

## Getting Started

### Prerequisites

- Node.js 18+
- npm/yarn/pnpm
- PostgreSQL database (eller Vercel Postgres)

### Installation

1. Klon projektet:
```bash
git clone https://github.com/Hugobently/boernegaveguiden.git
cd boernegaveguiden
```

2. Installer dependencies:
```bash
npm install
```

3. Opret `.env` fil baseret på `.env.example`:
```bash
cp .env.example .env
```

4. Konfigurer database URL i `.env`

5. Generer Prisma client og push schema:
```bash
npx prisma generate
npx prisma db push
```

6. Seed databasen:
```bash
npm run db:seed
```

7. Start udviklings-serveren:
```bash
npm run dev
```

Åbn [http://localhost:3000](http://localhost:3000) i din browser.

## Scripts

- `npm run dev` - Start udviklings-server
- `npm run build` - Byg til produktion
- `npm run start` - Start produktions-server
- `npm run lint` - Kør ESLint
- `npm run db:seed` - Seed databasen med gaver
- `npm run db:reset` - Nulstil database
- `npm run db:studio` - Åbn Prisma Studio

## Projektstruktur

```
boernegaveguiden/
├── app/                    # Next.js App Router pages
│   ├── api/               # API routes
│   ├── gaver/             # Gave-sider
│   ├── kategori/          # Kategori-sider
│   ├── alder/             # Alders-sider
│   └── ...
├── components/            # React komponenter
│   ├── ui/               # UI komponenter
│   ├── layout/           # Layout komponenter
│   └── gifts/            # Gave-komponenter
├── lib/                   # Utilities og database
├── prisma/               # Database schema og seed
├── data/                 # Seed data
└── public/               # Statiske filer
```

## Environment Variables

| Variable | Beskrivelse |
|----------|-------------|
| `DATABASE_URL` | PostgreSQL connection string |
| `DIRECT_URL` | Direct database URL (Vercel) |
| `NEXT_PUBLIC_SITE_URL` | Sidens URL (produktion) |

## Deploy

Projektet er konfigureret til Vercel. Ved push til main deployes automatisk.

Build kommandoen inkluderer automatisk `prisma generate && prisma db push`.

## License

Privat projekt - Alle rettigheder forbeholdes.
