import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Cookiepolitik',
  description: 'Læs om hvordan Børnegaveguiden bruger cookies på vores hjemmeside.',
};

export default function CookiePolicyPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <article className="prose prose-lg max-w-none">
        <div className="text-center space-y-4 mb-12">
          <span className="text-6xl">🍪</span>
          <h1 className="text-4xl font-bold text-text-primary">
            Cookiepolitik
          </h1>
          <p className="text-text-secondary">
            Sidst opdateret: Januar 2026
          </p>
        </div>

        <div className="space-y-8 text-text-primary">
          <section className="bg-cream rounded-3xl p-8">
            <h2 className="text-2xl font-bold mb-4">Hvad er cookies?</h2>
            <p className="text-text-secondary leading-relaxed">
              Cookies er små tekstfiler, der gemmes på din computer, tablet eller smartphone,
              når du besøger en hjemmeside. Cookies bruges til at få hjemmesiden til at fungere
              korrekt, til at huske dine præferencer og til at samle statistik om brugen af siden.
            </p>
          </section>

          <section className="bg-mint-light/30 rounded-3xl p-8">
            <h2 className="text-2xl font-bold mb-4">Hvilke cookies bruger vi?</h2>

            <div className="space-y-6">
              <div>
                <h3 className="text-lg font-semibold mb-2 text-mint-dark">Nødvendige cookies</h3>
                <p className="text-text-secondary leading-relaxed">
                  Disse cookies er nødvendige for at hjemmesiden kan fungere korrekt.
                  De bruges til at huske dine indstillinger under dit besøg og kan ikke slås fra.
                </p>
              </div>

              <div>
                <h3 className="text-lg font-semibold mb-2 text-mint-dark">Statistik cookies</h3>
                <p className="text-text-secondary leading-relaxed">
                  Vi bruger statistik cookies til at forstå, hvordan besøgende bruger
                  vores hjemmeside. Disse data er anonymiserede og hjælper os med at
                  forbedre sidens indhold og funktionalitet.
                </p>
              </div>

              <div>
                <h3 className="text-lg font-semibold mb-2 text-mint-dark">Præference cookies</h3>
                <p className="text-text-secondary leading-relaxed">
                  Disse cookies husker dine valg og præferencer, så du får en mere
                  personlig oplevelse, når du vender tilbage til siden.
                </p>
              </div>
            </div>
          </section>

          <section className="bg-sky-light/30 rounded-3xl p-8">
            <h2 className="text-2xl font-bold mb-4">Tredjepartscookies</h2>
            <p className="text-text-secondary leading-relaxed mb-4">
              Vores hjemmeside kan indeholde indhold fra tredjeparter, som kan sætte deres
              egne cookies. Dette kan inkludere:
            </p>
            <ul className="space-y-3 text-text-secondary">
              <li className="flex items-start gap-3">
                <span className="text-sky-dark">•</span>
                <span><strong>Affiliate-partnere:</strong> Når du klikker på links til webshops, kan disse sætte cookies for at spore dit køb</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-sky-dark">•</span>
                <span><strong>Analytiske tjenester:</strong> Vi kan bruge tjenester til at analysere trafik på siden</span>
              </li>
            </ul>
          </section>

          <section className="bg-sunflower-light/30 rounded-3xl p-8">
            <h2 className="text-2xl font-bold mb-4">Sådan administrerer du cookies</h2>
            <p className="text-text-secondary leading-relaxed mb-4">
              Du kan til enhver tid ændre eller tilbagekalde dit samtykke til cookies via
              din browsers indstillinger. Sådan gør du i de mest populære browsere:
            </p>
            <ul className="space-y-3 text-text-secondary">
              <li className="flex items-start gap-3">
                <span className="text-sunflower-dark">•</span>
                <span><strong>Chrome:</strong> Indstillinger → Privatliv og sikkerhed → Cookies</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-sunflower-dark">•</span>
                <span><strong>Firefox:</strong> Indstillinger → Privatliv og sikkerhed → Cookies</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-sunflower-dark">•</span>
                <span><strong>Safari:</strong> Præferencer → Privatliv → Cookies</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-sunflower-dark">•</span>
                <span><strong>Edge:</strong> Indstillinger → Cookies og webstedstilladelser</span>
              </li>
            </ul>
            <p className="text-text-secondary leading-relaxed mt-4">
              Bemærk at nogle funktioner på hjemmesiden muligvis ikke fungerer korrekt,
              hvis du deaktiverer cookies.
            </p>
          </section>

          <section className="bg-lavender-light/30 rounded-3xl p-8">
            <h2 className="text-2xl font-bold mb-4">Opbevaringsperiode</h2>
            <p className="text-text-secondary leading-relaxed">
              De fleste af vores cookies udløber automatisk efter dit besøg (sessionscookies).
              Nogle cookies kan vare op til 12 måneder for at huske dine præferencer ved
              fremtidige besøg.
            </p>
          </section>

          <section className="bg-coral-light/30 rounded-3xl p-8">
            <h2 className="text-2xl font-bold mb-4">Kontakt</h2>
            <p className="text-text-secondary leading-relaxed">
              Har du spørgsmål til vores brug af cookies, er du velkommen til at kontakte os.
              Du kan læse mere om dine rettigheder i vores privatlivspolitik.
            </p>
          </section>
        </div>
      </article>
    </div>
  );
}
