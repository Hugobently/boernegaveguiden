import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Privatlivspolitik',
  description: 'Læs om hvordan Børnegaveguiden behandler dine personlige oplysninger.',
};

export default function PrivacyPolicyPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <article className="prose prose-lg max-w-none">
        <div className="text-center space-y-4 mb-12">
          <span className="text-6xl">🔒</span>
          <h1 className="text-4xl font-bold text-text-primary">
            Privatlivspolitik
          </h1>
          <p className="text-text-secondary">
            Sidst opdateret: Januar 2026
          </p>
        </div>

        <div className="space-y-8 text-text-primary">
          <section className="bg-cream rounded-3xl p-8">
            <h2 className="text-2xl font-bold mb-4">Hvem er vi?</h2>
            <p className="text-text-secondary leading-relaxed">
              Børnegaveguiden er en dansk hjemmeside der hjælper forældre og andre med at finde
              gaver til børn. Denne privatlivspolitik forklarer, hvordan vi indsamler, bruger
              og beskytter dine personlige oplysninger, når du besøger vores hjemmeside.
            </p>
          </section>

          <section className="bg-mint-light/30 rounded-3xl p-8">
            <h2 className="text-2xl font-bold mb-4">Hvilke data indsamler vi?</h2>
            <p className="text-text-secondary leading-relaxed mb-4">
              Vi indsamler følgende typer af information:
            </p>
            <ul className="space-y-3 text-text-secondary">
              <li className="flex items-start gap-3">
                <span className="text-mint-dark">•</span>
                <span><strong>Søgeforespørgsler:</strong> De søgninger du foretager på siden for at forbedre vores søgefunktion</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-mint-dark">•</span>
                <span><strong>Anonyme brugsdata:</strong> Sidevisninger og interaktioner (via cookies) for at forbedre brugeroplevelsen</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-mint-dark">•</span>
                <span><strong>Tekniske data:</strong> Browsertype, enhedstype og IP-adresse (anonymiseret)</span>
              </li>
            </ul>
            <p className="text-text-secondary leading-relaxed mt-4">
              Vi indsamler <strong>ikke</strong> personligt identificerbare oplysninger som navn,
              email eller adresse, medmindre du selv vælger at kontakte os.
            </p>
          </section>

          <section className="bg-sky-light/30 rounded-3xl p-8">
            <h2 className="text-2xl font-bold mb-4">Hvordan bruger vi dine data?</h2>
            <ul className="space-y-3 text-text-secondary">
              <li className="flex items-start gap-3">
                <span className="text-sky-dark">•</span>
                <span>At forbedre vores søgefunktion og gaveanbefalinger</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-sky-dark">•</span>
                <span>At analysere hvordan besøgende bruger siden (anonymt)</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-sky-dark">•</span>
                <span>At sikre sidens tekniske funktionalitet</span>
              </li>
            </ul>
          </section>

          <section className="bg-lavender-light/30 rounded-3xl p-8">
            <h2 className="text-2xl font-bold mb-4">Affiliate-links og tredjeparter</h2>
            <p className="text-text-secondary leading-relaxed">
              Vores side indeholder affiliate-links til danske webshops. Når du klikker på
              disse links, vil du blive sendt til den pågældende webshop, som har deres
              egen privatlivspolitik. Vi modtager en kommission ved køb, men vi deler
              ikke dine personlige oplysninger med disse partnere.
            </p>
          </section>

          <section className="bg-sunflower-light/30 rounded-3xl p-8">
            <h2 className="text-2xl font-bold mb-4">Dine rettigheder</h2>
            <p className="text-text-secondary leading-relaxed mb-4">
              I henhold til GDPR har du følgende rettigheder:
            </p>
            <ul className="space-y-3 text-text-secondary">
              <li className="flex items-start gap-3">
                <span className="text-sunflower-dark">•</span>
                <span>Ret til indsigt i dine data</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-sunflower-dark">•</span>
                <span>Ret til at få rettet eller slettet dine data</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-sunflower-dark">•</span>
                <span>Ret til at gøre indsigelse mod behandling af dine data</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-sunflower-dark">•</span>
                <span>Ret til dataportabilitet</span>
              </li>
            </ul>
          </section>

          <section className="bg-coral-light/30 rounded-3xl p-8">
            <h2 className="text-2xl font-bold mb-4">Kontakt</h2>
            <p className="text-text-secondary leading-relaxed">
              Har du spørgsmål om vores privatlivspolitik eller ønsker du at udøve dine
              rettigheder, er du velkommen til at kontakte os via vores kontaktside.
            </p>
          </section>
        </div>
      </article>
    </div>
  );
}
