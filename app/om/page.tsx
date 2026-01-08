import { Metadata } from 'next';
import Link from 'next/link';
import { Button } from '@/components/ui/Button';

export const metadata: Metadata = {
  title: 'Om os',
  description: 'Læs om Børnegaveguiden - hvem vi er og hvorfor vi laver dette.',
};

export default function AboutPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <article className="prose prose-lg max-w-none">
        <div className="text-center space-y-4 mb-12">
          <span className="text-6xl">🎁</span>
          <h1 className="text-4xl font-bold text-text-primary">
            Om Børnegaveguiden
          </h1>
        </div>

        <div className="space-y-8 text-text-primary">
          <section className="bg-cream rounded-3xl p-8">
            <h2 className="text-2xl font-bold mb-4">Vores mission</h2>
            <p className="text-text-secondary leading-relaxed">
              Børnegaveguiden er skabt for at hjælpe forældre, bedsteforældre og alle andre
              med at finde kvalitetsgaver til børn. Vi tror på, at gode gaver ikke bare
              handler om prisen, men om glæden de bringer og den værdi de tilfører barnets liv.
            </p>
          </section>

          <section className="bg-mint-light/30 rounded-3xl p-8">
            <h2 className="text-2xl font-bold mb-4">Hvordan vi vælger gaver</h2>
            <ul className="space-y-3 text-text-secondary">
              <li className="flex items-start gap-3">
                <span className="text-mint-dark">✓</span>
                <span><strong>Kvalitet først:</strong> Vi anbefaler kun produkter vi selv ville give til vores børn</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-mint-dark">✓</span>
                <span><strong>Ærlige anmeldelser:</strong> Vi nævner både fordele og ulemper ved hver gave</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-mint-dark">✓</span>
                <span><strong>Pædagogisk værdi:</strong> Vi vurderer hvad barnet kan lære af gaven</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-mint-dark">✓</span>
                <span><strong>Holdbarhed:</strong> Vi foretrækker gaver der holder i længden</span>
              </li>
            </ul>
          </section>

          <section className="bg-sky-light/30 rounded-3xl p-8">
            <h2 className="text-2xl font-bold mb-4">Affiliate-links</h2>
            <p className="text-text-secondary leading-relaxed">
              Børnegaveguiden indeholder affiliate-links. Det betyder, at hvis du køber
              en gave via et af vores links, modtager vi en lille kommission fra forhandleren.
              Dette sker uden ekstra omkostning for dig og hjælper os med at drive og
              vedligeholde siden.
            </p>
            <p className="text-text-secondary leading-relaxed mt-4">
              Vores anbefalinger er altid baseret på produktets kvalitet - ikke på
              hvilken kommission vi modtager.
            </p>
          </section>

          <section className="bg-sunflower-light/30 rounded-3xl p-8">
            <h2 className="text-2xl font-bold mb-4">Kontakt os</h2>
            <p className="text-text-secondary leading-relaxed">
              Har du spørgsmål, forslag til gaver vi bør anmelde, eller vil du samarbejde
              med os? Vi vil meget gerne høre fra dig.
            </p>
            <div className="mt-6">
              <Link href="/kontakt">
                <Button variant="sunflower">
                  Kontakt os
                </Button>
              </Link>
            </div>
          </section>
        </div>
      </article>
    </div>
  );
}
