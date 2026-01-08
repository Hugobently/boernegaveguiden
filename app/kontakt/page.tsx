import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Kontakt os',
  description: 'Kontakt Børnegaveguiden - vi vil gerne høre fra dig!',
};

export default function ContactPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <article className="prose prose-lg max-w-none">
        <div className="text-center space-y-4 mb-12">
          <span className="text-6xl">✉️</span>
          <h1 className="text-4xl font-bold text-text-primary">
            Kontakt os
          </h1>
          <p className="text-text-secondary max-w-2xl mx-auto">
            Har du spørgsmål, forslag eller vil du samarbejde med os?
            Vi vil meget gerne høre fra dig!
          </p>
        </div>

        <div className="space-y-8 text-text-primary">
          <section className="bg-cream rounded-3xl p-8">
            <h2 className="text-2xl font-bold mb-4">Skriv til os</h2>
            <p className="text-text-secondary leading-relaxed mb-4">
              Du kan kontakte os på følgende email:
            </p>
            <a
              href="mailto:kontakt@boernegaveguiden.dk"
              className="inline-flex items-center gap-3 bg-coral text-white px-6 py-3 rounded-2xl font-semibold hover:bg-coral-dark transition-colors"
            >
              <span>📧</span>
              <span>kontakt@boernegaveguiden.dk</span>
            </a>
          </section>

          <section className="bg-mint-light/30 rounded-3xl p-8">
            <h2 className="text-2xl font-bold mb-4">Forslag til gaver</h2>
            <p className="text-text-secondary leading-relaxed">
              Kender du en fantastisk gave, som vi bør anmelde? Vi er altid på udkig
              efter nye kvalitetsprodukter til vores guide. Send os en email med dit
              forslag, og vi kigger på det.
            </p>
            <ul className="mt-4 space-y-2 text-text-secondary">
              <li className="flex items-start gap-3">
                <span className="text-mint-dark">✓</span>
                <span>Beskriv produktet og hvorfor du synes det er en god gave</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-mint-dark">✓</span>
                <span>Angiv aldersgruppe og pris</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-mint-dark">✓</span>
                <span>Del gerne et link til produktet</span>
              </li>
            </ul>
          </section>

          <section className="bg-sky-light/30 rounded-3xl p-8">
            <h2 className="text-2xl font-bold mb-4">Samarbejde</h2>
            <p className="text-text-secondary leading-relaxed">
              Er du producent, forhandler eller PR-bureau og ønsker at samarbejde med
              Børnegaveguiden? Vi er åbne for partnerskaber med brands, der deler
              vores værdier om kvalitet og ærlighed.
            </p>
            <p className="text-text-secondary leading-relaxed mt-4">
              <strong>Bemærk:</strong> Vi anmelder kun produkter, vi finder relevante
              for vores læsere, og vores vurderinger er altid ærlige og uafhængige.
            </p>
          </section>

          <section className="bg-sunflower-light/30 rounded-3xl p-8">
            <h2 className="text-2xl font-bold mb-4">Fejl eller rettelser</h2>
            <p className="text-text-secondary leading-relaxed">
              Har du fundet en fejl på siden, eller er der information der bør opdateres?
              Vi sætter stor pris på din hjælp med at holde guiden aktuel og korrekt.
            </p>
          </section>

          <section className="bg-lavender-light/30 rounded-3xl p-8">
            <h2 className="text-2xl font-bold mb-4">Svartid</h2>
            <p className="text-text-secondary leading-relaxed">
              Vi bestræber os på at svare på alle henvendelser inden for 2-3 hverdage.
              I travle perioder kan svartiden være lidt længere.
            </p>
          </section>
        </div>

        <div className="mt-12 text-center">
          <Link
            href="/om"
            className="text-coral hover:text-coral-dark transition-colors font-medium"
          >
            ← Læs mere om os
          </Link>
        </div>
      </article>
    </div>
  );
}
