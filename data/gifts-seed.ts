export interface GiftSeedData {
  title: string;
  slug: string;
  description: string;
  shortDescription: string;
  minAge: number;
  maxAge: number;
  ageGroup: '0-2' | '3-5' | '6-9' | '10-12' | '13-15';
  category: 'legetoej' | 'boeger' | 'kreativ' | 'udstyr' | 'oplevelser' | 'elektronik' | 'mode';
  subcategories: string[];
  tags: string[];
  targetGender: 'alle' | 'drenge' | 'piger';
  price: number | null;
  priceClass: 'budget' | 'mellem-lav' | 'mellem' | 'mellem-hoej' | 'premium' | 'luksus';
  affiliateLinks: { provider: string; merchantName: string; url: string; price?: number }[];
  primaryBuyUrl: string | null;
  rating: number;
  pros: string[];
  cons: string[];
  parentTip: string | null;
  details: Record<string, unknown>;
  imageUrl: string | null;
  additionalImages: string[];
  brand: string | null;
  manufacturer: string | null;
  featured: boolean;
  editorChoice: boolean;
  isConfirmationGift: boolean;
  isSustainable: boolean;
  isDanishBrand: boolean;
}

// Legetøj 0-2 år
export const legetoej0to2: GiftSeedData[] = [
  {
    title: 'BRIO Togsæt - Klassisk 8-tals Bane',
    slug: 'brio-togsat-8-tals-bane',
    description: 'BRIOs klassiske 8-tals bane er et perfekt første togsæt. De 22 dele i bøgetræ og robust plastik samles nemt af små hænder, og designet holder til intensiv leg år efter år. Banens overskuelige størrelse (ca. 55x50 cm) passer til de fleste børneværelser, og kan udvides efterhånden som interessen vokser. Togene kører manuelt, så ingen batterier er nødvendige. Det simple design uden elektronik fremmer fantasileg og finmotorik, når barnet skubber togene og bygger banen om. BRIOs magnetiske koblinger gør det nemt at sætte vogne sammen. Kvaliteten retfærdiggør prisen - mange familier bruger samme sæt til flere generationer.',
    shortDescription: 'Tidløst dansk trælegetøj der stimulerer kreativitet og finmotorik. Kompatibelt med alle BRIO-skinner.',
    minAge: 2,
    maxAge: 5,
    ageGroup: '0-2',
    category: 'legetoej',
    subcategories: ['trælegetøj', 'tog'],
    tags: ['BRIO', 'træ', 'motorik', 'klassiker'],
    targetGender: 'alle',
    price: 299,
    priceClass: 'mellem-lav',
    affiliateLinks: [],
    primaryBuyUrl: null,
    rating: 4.8,
    pros: ['Fremragende holdbarhed', 'Udvides nemt med flere sæt', 'Ingen batterier nødvendige', 'Dansk design'],
    cons: ['Relativt høj pris', 'Basis-sættet er ret lille'],
    parentTip: 'Start med dette sæt og læg mærke til hvad barnet leger mest med - så ved du om ekstra skinner eller flere tog er det rigtige næste køb.',
    details: { material: 'træ', batteryRequired: false, assemblyRequired: true },
    imageUrl: 'https://images.unsplash.com/photo-1596461404969-9ae70f2830c1?w=800&q=80',
    additionalImages: [],
    brand: 'BRIO',
    manufacturer: 'BRIO',
    featured: true,
    editorChoice: true,
    isConfirmationGift: false,
    isSustainable: true,
    isDanishBrand: false,
  },
  {
    title: 'Magnetisk Fiskespil i Træ',
    slug: 'magnetisk-fiskespil-trae',
    description: 'Dette charmerende fiskespil i træ er perfekt til at træne øje-hånd koordination hos de mindste. Sættet indeholder 10 farverige fisk i forskellige størrelser og en magnetisk fiskestang. Fiskene har tal på, så spillet kan bruges til at lære at tælle. Træet er FSC-certificeret og malet med vandbaserede farver. Spillet kan bruges både i vand og på tørt underlag, hvilket giver variation i legen. Magneterne er sikkert indkapslet, så der er ingen risiko for at de løsner sig.',
    shortDescription: 'Klassisk fiskespil der træner motorik og tålmodighed. Sikkert for små børn.',
    minAge: 1,
    maxAge: 3,
    ageGroup: '0-2',
    category: 'legetoej',
    subcategories: ['trælegetøj', 'spil'],
    tags: ['motorik', 'træ', 'læring', 'tal'],
    targetGender: 'alle',
    price: 149,
    priceClass: 'mellem-lav',
    affiliateLinks: [],
    primaryBuyUrl: null,
    rating: 4.5,
    pros: ['Træner finmotorik', 'Lærer tal', 'Bæredygtigt materiale', 'God størrelse for små hænder'],
    cons: ['Magnet kan være svær for de helt små', 'Relativt lille sæt'],
    parentTip: 'Brug spillet i badet for ekstra sjov - fiskene flyder!',
    details: { material: 'træ', batteryRequired: false },
    imageUrl: 'https://images.unsplash.com/photo-1505003098838-83ce5356c228?w=800&q=80',
    additionalImages: [],
    brand: null,
    manufacturer: null,
    featured: false,
    editorChoice: false,
    isConfirmationGift: false,
    isSustainable: true,
    isDanishBrand: false,
  },
  // BRIO Gåvogn - passer til 0-2 men bruges op til 3-5
  {
    title: 'BRIO Gåvogn - Klassisk Sort',
    slug: 'brio-gavogn-klassisk-sort',
    shortDescription: 'Den ikoniske BRIO gåvogn i tidløst design. Hjælper de mindste med de første skridt og bliver til dukkevogn senere.',
    description: `BRIO's gåvogn er måske det mest ikoniske stykke skandinavisk børnelegetøj nogensinde. I over 80 år har den hjulpet børn med de første vaklende skridt, og designet er stort set uændret fordi det virker.

Vognen er fremstillet i massivt træ med et robust metalhåndtag i den karakteristiske buede form. Hjulene har gummikant så de ikke larmer eller ridser gulvet, og der er en justerbar bremse så hastigheden kan tilpasses barnets niveau.

Det geniale er dobbeltfunktionen: Først fungerer den som støtte til at lære at gå, senere bliver den til en elsket dukkevogn eller transportmiddel for bamser og klodser. Mange børn bruger den langt op i børnehavealderen til rolleleg.

Kvaliteten er kompromisløs. Træet er FSC-certificeret, malingen er giftfri, og konstruktionen kan holde til at blive brugt af flere generationer. Der er en grund til, at BRIO gåvognen er en klassiker - den holder simpelthen.`,
    minAge: 1,
    maxAge: 4,
    ageGroup: '0-2',
    category: 'legetoej',
    subcategories: ['motorik', 'trælegetøj', 'klassiker'],
    tags: ['BRIO', 'gåvogn', 'motorik', 'klassiker', 'trælegetøj'],
    targetGender: 'alle',
    price: 599,
    priceClass: 'mellem-hoej',
    affiliateLinks: [],
    primaryBuyUrl: 'https://www.br.dk/',
    rating: 5.0,
    pros: [
      'Tidløst design der har vist sit værd i 80+ år',
      'Justerbar bremse til barnets niveau',
      'Dobbeltfunktion: gåstøtte og dukkevogn',
      'FSC-certificeret træ i topkvalitet'
    ],
    cons: [
      'Relativt dyr sammenlignet med plastik-alternativer',
      'Fylder en del i hjemmet'
    ],
    parentTip: 'Juster bremsen så vognen ikke ruller for hurtigt i starten - det giver barnet bedre kontrol og mere selvtillid.',
    details: {
      dimensions: 'Ca. 48 x 32 x 48 cm',
      material: 'Bøgetræ, metal, gummi',
      features: 'Justerbar bremse',
      certifications: 'FSC, EN 71'
    },
    imageUrl: 'https://images.unsplash.com/photo-1568828668638-b1b4014d91a2?w=800&q=80',
    additionalImages: [],
    brand: 'BRIO',
    manufacturer: 'BRIO / Ravensburger',
    featured: true,
    editorChoice: true,
    isConfirmationGift: false,
    isSustainable: true,
    isDanishBrand: false
  },
];

// Legetøj 3-5 år - NYE DETALJEREDE ANMELDELSER
export const legetoej3to5: GiftSeedData[] = [
  {
    title: 'LEGO DUPLO - Gurli Gris i Supermarkedet',
    slug: 'lego-duplo-gurli-gris-supermarked',
    shortDescription: 'Populært byggesæt med Gurli Gris-familien på indkøbstur. Perfekt til rolleleg og genkendelighed fra TV.',
    description: `Gurli Gris og familien tager på indkøb - og dit barn kan være med. Dette DUPLO-sæt kombinerer byggeleg med rolleleg på en måde, der rammer børnehavebørn lige i hjertet.

Sættet indeholder den ikoniske røde bil, et bygbart supermarked med selvbetjeningskasse, indkøbsvogn og madvarer. De fire DUPLO-figurer af Gurli, Gustav, Mor og Far giver rig mulighed for at genskabe scener fra TV-serien eller finde på helt nye historier.

DUPLO-klodserne er designet til små hænder - dobbelt så store som almindelige LEGO-klodser og helt uden skarpe kanter. Børnene kan bygge, ombygge og lege i timevis, mens de træner finmotorik og fantasi.

Særligt værdifuldt er genkendeligheden: Mange børn kender allerede Gurli Gris fra TV, hvilket gør det nemmere at komme i gang med legen. Sættet kan kombineres med andre DUPLO-sæt for endnu flere muligheder.`,
    minAge: 2,
    maxAge: 5,
    ageGroup: '3-5',
    category: 'legetoej',
    subcategories: ['byggeklodser', 'rolleleg'],
    tags: ['LEGO', 'DUPLO', 'Gurli Gris', 'rolleleg', 'byggelegetøj'],
    targetGender: 'alle',
    price: 350,
    priceClass: 'mellem',
    affiliateLinks: [],
    primaryBuyUrl: 'https://www.br.dk/',
    rating: 4.5,
    pros: [
      'Genkendeligt univers fra TV-serien',
      'Kombinerer byggeleg og rolleleg',
      'Høj LEGO-kvalitet der holder',
      'Kan udvides med andre DUPLO-sæt'
    ],
    cons: [
      'Relativt få dele til prisen',
      'Kræver interesse for Gurli Gris'
    ],
    parentTip: 'Brug legen til at tale om indkøb og madlavning - mange børn elsker at "handle ind" og efterligne forældrene.',
    details: {
      pieces: 37,
      figures: 4,
      theme: 'Gurli Gris',
      material: 'ABS plast'
    },
    imageUrl: 'https://images.unsplash.com/photo-1587654780291-39c9404d746b?w=800&q=80',
    additionalImages: [],
    brand: 'LEGO',
    manufacturer: 'LEGO Group',
    featured: true,
    editorChoice: false,
    isConfirmationGift: false,
    isSustainable: false,
    isDanishBrand: true
  },
  {
    title: 'BRIO Togbane - Klassisk Startsæt',
    slug: 'brio-togbane-klassisk-startsat',
    shortDescription: 'Tidløst trælegetøj i høj kvalitet. Det perfekte første togsæt med 22 dele til børn fra 2 år.',
    description: `Der er en grund til, at BRIO togbaner har begejstret børn i over 60 år. Dette klassiske startsæt giver den perfekte introduktion til togleg - med skinner, tog, bro og træer samlet i ét sæt.

De 22 dele i bøgetræ og robust plast samles intuitivt af små hænder. Toget kører manuelt uden batterier, hvilket fremmer aktiv leg hvor barnet selv bestemmer tempoet. Skinnerne kan lægges i forskellige formationer, så banen kan se anderledes ud hver gang.

Kvaliteten er i absolut topklasse. BRIO bruger FSC-certificeret træ fra bæredygtig skovdrift, og produkterne er designet til at holde i generationer. Mange familier oplever, at togbanen går i arv mellem søskende eller endda til næste generation.

Sættet kan udvides efterhånden som interessen vokser. Alle BRIO-skinner og tog er kompatible med hinanden, så man kan bygge videre over tid. Det gør det også til en oplagt gave, fordi man altid kan tilføje flere dele senere.`,
    minAge: 2,
    maxAge: 6,
    ageGroup: '3-5',
    category: 'legetoej',
    subcategories: ['togbaner', 'trælegetøj'],
    tags: ['BRIO', 'togbane', 'trælegetøj', 'klassiker', 'bæredygtigt'],
    targetGender: 'alle',
    price: 500,
    priceClass: 'mellem',
    affiliateLinks: [],
    primaryBuyUrl: 'https://www.br.dk/',
    rating: 4.5,
    pros: [
      'Fremragende holdbarhed - holder i generationer',
      'Kan udvides med flere sæt over tid',
      'Ingen batterier - fremmer aktiv leg',
      'FSC-certificeret træ fra bæredygtig skovdrift'
    ],
    cons: [
      'Højere pris end plastikalternativer',
      'Basis-sættet er relativt lille'
    ],
    parentTip: 'Start med dette sæt og læg mærke til hvad barnet leger mest med - så ved du om ekstra skinner eller flere tog er det rigtige næste køb.',
    details: {
      pieces: 22,
      material: 'Bøgetræ og plast',
      batteryRequired: false,
      trackLength: '115 cm total'
    },
    imageUrl: 'https://images.unsplash.com/photo-1596461404969-9ae70f2830c1?w=800&q=80',
    additionalImages: [],
    brand: 'BRIO',
    manufacturer: 'BRIO / Ravensburger',
    featured: true,
    editorChoice: true,
    isConfirmationGift: false,
    isSustainable: true,
    isDanishBrand: false
  },
  {
    title: 'Plus-Plus BIG Pastel - 100 stk',
    slug: 'plus-plus-big-pastel-100',
    shortDescription: 'Dansk designet konstruktionslegetøj i de større BIG-brikker. Perfekt til børnehavebørn der vil bygge kreativt.',
    description: `Plus-Plus er en dansk succeshistorie der har taget verden med storm. De simple plus-formede brikker kan kombineres på uendelige måder til både flade mønstre og tredimensionelle figurer.

BIG-brikkerne måler 5 cm og er designet specielt til de mindste hænder. De er godkendt fra 1+ år og store nok til at være sikre selv for børn der stadig putter ting i munden. Pastel-farverne er bløde og æstetiske - et alternativ til de mere skrigende neon-farver.

Det geniale ved Plus-Plus er den åbne legform. Der er ingen "rigtig" måde at bygge på, så børnene lærer gennem eksperimenteren. De træner finmotorik, farveforståelse og rumlig intelligens uden at vide det selv. Mange børnehaver bruger Plus-Plus som pædagogisk redskab.

Plus-Plus produceres i Danmark under strenge miljø- og sikkerhedskrav. Alt overskudsplast fra produktionen genanvendes, og brikkerne er fri for BPA, PVC og ftalater. De kan endda vaskes ved op til 90 grader hvis de bliver beskidte.`,
    minAge: 1,
    maxAge: 6,
    ageGroup: '3-5',
    category: 'legetoej',
    subcategories: ['byggeklodser', 'kreativt'],
    tags: ['Plus-Plus', 'byggelegetøj', 'dansk', 'kreativitet', 'finmotorik'],
    targetGender: 'alle',
    price: 149,
    priceClass: 'mellem-lav',
    affiliateLinks: [],
    primaryBuyUrl: 'https://legeakademiet.dk/',
    rating: 4.5,
    pros: [
      'Dansk produceret med høje sikkerhedsstandarder',
      'Uendelige byggemuligheder i 2D og 3D',
      'Store brikker sikre for små børn',
      'Kan vaskes ved høje temperaturer'
    ],
    cons: [
      '100 brikker rækker ikke til de store byggerier',
      'Mindre detaljerede end de små Mini-brikker'
    ],
    parentTip: 'Køb gerne en byggeplade med - det gør det nemmere for børnene at lave opretstående figurer og bygninger.',
    details: {
      pieces: 100,
      brickSize: '5 cm (BIG)',
      colors: 'Pastel mix',
      material: 'PE plast (fødevaregodkendt)',
      certifications: 'EN 71-1, 71-2, 71-3'
    },
    imageUrl: 'https://images.unsplash.com/photo-1587654780291-39c9404d746b?w=800&q=80',
    additionalImages: [],
    brand: 'Plus-Plus',
    manufacturer: 'Plus-Plus A/S',
    featured: false,
    editorChoice: false,
    isConfirmationGift: false,
    isSustainable: true,
    isDanishBrand: true
  },
  {
    title: 'HABA Kuglebane - Basis Startsæt',
    slug: 'haba-kuglebane-basis-startsat',
    shortDescription: 'Tysk kvalitets-kuglebane i massivt bøgetræ. Lærerigt legetøj der træner logik og tålmodighed.',
    description: `HABA har lavet kuglebaner siden 1938, og erfaringen mærkes. Dette basis-sæt giver en solid introduktion til kuglebane-verdenen med klodser, ramper, tunneler og kugler i det karakteristiske HABA-design.

Alle dele er fremstillet i massivt bøgetræ fra bæredygtig europæisk skovdrift (PEFC-certificeret). Overfladebehandlingen er giftfri og spekularsikker - selv hvis de mindste skulle finde på at putte dele i munden. Kvaliteten er simpelthen i en anden liga end billige plastik-alternativer.

Det pædagogiske aspekt er gennemtænkt. Børnene lærer om tyngdekraft, hastighed og årsag-virkning gennem leg. De skal planlægge deres bane, eksperimentere med forskellige opbygninger og fejle konstruktivt undervejs. Det træner tålmodighed og problemløsning på en sjov måde.

HABA's system er modulært, så sættet kan udvides med ekstra dele, specialklodser med lyd eller flere kugler. Mange familier bygger samlingen op over flere år og juler/fødselsdage.`,
    minAge: 3,
    maxAge: 8,
    ageGroup: '3-5',
    category: 'legetoej',
    subcategories: ['kuglebaner', 'trælegetøj', 'pædagogisk'],
    tags: ['HABA', 'kuglebane', 'trælegetøj', 'læring', 'logik'],
    targetGender: 'alle',
    price: 450,
    priceClass: 'mellem',
    affiliateLinks: [],
    primaryBuyUrl: 'https://olisan.dk/',
    rating: 4.5,
    pros: [
      'Fremragende tysk kvalitet i massivt træ',
      'Lærerigt - træner logik og tålmodighed',
      'Modulært system der kan udvides',
      'PEFC-certificeret bæredygtigt træ'
    ],
    cons: [
      'Kræver plads til opbevaring',
      'Dyrere end plastik-alternativer'
    ],
    parentTip: 'Byg gerne banen sammen med barnet de første gange - det er en fantastisk fællesaktivitet der styrker jeres relation.',
    details: {
      pieces: 42,
      material: 'Massivt bøgetræ',
      marbles: '6 glaskuler inkluderet',
      certifications: 'EN 71, PEFC'
    },
    imageUrl: 'https://images.unsplash.com/photo-1568828668638-b1b4014d91a2?w=800&q=80',
    additionalImages: [],
    brand: 'HABA',
    manufacturer: 'HABA',
    featured: false,
    editorChoice: false,
    isConfirmationGift: false,
    isSustainable: true,
    isDanishBrand: false
  },
  {
    title: 'Melissa & Doug Låsebræt',
    slug: 'melissa-doug-laasebrat',
    shortDescription: 'Træplade med 6 forskellige låse og hængsler der åbner for farverige dyrebilleder. Perfekt til nysgerrige fingre.',
    description: `Børn i 3-års alderen er fascineret af at åbne og lukke ting. Dette låsebræt fra Melissa & Doug udnytter den fascination til at træne finmotorik og problemløsning på en engagerende måde.

Brættet har 6 nummererede døre med forskellige låsemekanismer - fra simple hasper til mere udfordrende låse. Bag hver dør gemmer sig et farverigt dyrebillede, der belønner barnets indsats. Sværhedsgraden varierer, så der er udfordringer til både begyndere og øvede.

Konstruktionen er solid træ med glatte kanter og metalbeslag der kan holde til intens brug. Størrelsen (ca. 30x40 cm) er perfekt til at sidde med på gulvet eller ved et bord. Det er også kompakt nok til at tage med på en biltur eller til bedsteforældre.

Melissa & Doug er et amerikansk mærke kendt for pædagogisk trælegetøj uden batterier og skærme. Deres filosofi om "skærmfri leg" resonerer med mange forældre der søger alternativer til digitalt legetøj.`,
    minAge: 3,
    maxAge: 6,
    ageGroup: '3-5',
    category: 'legetoej',
    subcategories: ['pædagogisk', 'trælegetøj', 'motorik'],
    tags: ['Melissa & Doug', 'finmotorik', 'låse', 'trælegetøj', 'pædagogisk'],
    targetGender: 'alle',
    price: 199,
    priceClass: 'mellem-lav',
    affiliateLinks: [],
    primaryBuyUrl: 'https://monito.dk/',
    rating: 4.0,
    pros: [
      'Træner finmotorik og problemløsning',
      'Forskellige sværhedsgrader på låsene',
      'Kompakt størrelse - nem at tage med',
      'Solid træ-konstruktion'
    ],
    cons: [
      'Begrænset genspilsværdi når låsene er mestret',
      'Dyrebillederne er ret simple'
    ],
    parentTip: 'Tal om tallene på dørene mens I leger - det giver en naturlig introduktion til tal og tælling.',
    details: {
      locks: 6,
      material: 'Træ og metal',
      dimensions: 'Ca. 30 x 40 cm',
      images: 'Dyremotiver bag dørene'
    },
    imageUrl: 'https://images.unsplash.com/photo-1568828668638-b1b4014d91a2?w=800&q=80',
    additionalImages: [],
    brand: 'Melissa & Doug',
    manufacturer: 'Melissa & Doug',
    featured: false,
    editorChoice: false,
    isConfirmationGift: false,
    isSustainable: false,
    isDanishBrand: false
  },
  {
    title: 'HABA Legemad i Træ - Brødkurv',
    slug: 'haba-legemad-brodkurv',
    shortDescription: 'Realistisk legemad i træ med brød, pålæg og tilbehør. Tysk kvalitet der inviterer til fantasifuld rolleleg.',
    description: `Rolleleg med mad er en klassiker i børnehaver verden over, og HABA's legemad sætter standarden for kvalitet. Dette sæt indeholder en flettet kurv med brød, pålæg, smør og kniv - alt hvad den lille bager eller kok behøver.

Detaljerne er imponerende. Brødet kan "skæres" med velcro-sammenhæng, så børnene kan øve sig på at smøre og skære ligesom mor og far. Farverne er naturtro uden at være kedelige, og træets varme overflade er behagelig at røre ved.

HABA bruger kun giftfri vandbaseret maling på deres legemad, og alt træ er fra bæredygtig europæisk skovdrift. Det betyder, at du trygt kan lade selv de mindste lege med det - også selvom de skulle putte det i munden.

Sættet kan kombineres med HABA's andre legemad-produkter: frugt, grøntsager, kager og meget mere. Over tid kan man bygge en hel lille købmandsbutik eller restaurant op. Det gør det også til en oplagt gave, fordi man altid kan tilføje mere til samlingen.`,
    minAge: 3,
    maxAge: 8,
    ageGroup: '3-5',
    category: 'legetoej',
    subcategories: ['rolleleg', 'legemad', 'trælegetøj'],
    tags: ['HABA', 'legemad', 'rolleleg', 'trælegetøj', 'køkkenleg'],
    targetGender: 'alle',
    price: 249,
    priceClass: 'mellem-lav',
    affiliateLinks: [],
    primaryBuyUrl: 'https://olisan.dk/',
    rating: 4.5,
    pros: [
      'Høj tysk kvalitet i massivt træ',
      'Realistiske detaljer med velcro-funktion',
      'Giftfri maling - sikker for de mindste',
      'Kan udvides med andre HABA legemad-sæt'
    ],
    cons: [
      'Relativt få dele i basis-sættet',
      'Velcro kan slides over tid'
    ],
    parentTip: 'Brug legemaden som afsæt for samtaler om sund mad og måltider - børn elsker at "lave mad" ligesom de voksne.',
    details: {
      contents: 'Kurv, brød, pålæg, smør, kniv',
      material: 'Bøgetræ og stof',
      features: 'Velcro til "skæring"',
      certifications: 'EN 71, PEFC'
    },
    imageUrl: 'https://images.unsplash.com/photo-1505003098838-83ce5356c228?w=800&q=80',
    additionalImages: [],
    brand: 'HABA',
    manufacturer: 'HABA',
    featured: false,
    editorChoice: false,
    isConfirmationGift: false,
    isSustainable: true,
    isDanishBrand: false
  },
  {
    title: 'LEGO DUPLO - Brandstation med Helikopter',
    slug: 'lego-duplo-brandstation-helikopter',
    shortDescription: 'Action-pakket DUPLO-sæt med brandstation, brandbil, helikopter og tre brandmandsfigurer. Populært hos drenge og piger.',
    description: `Brandmænd fascinerer børn på tværs af køn, og dette DUPLO-sæt giver rig mulighed for at lege redningsaktioner. Sættet indeholder en brandstation i to etager, en brandbil med stige, en helikopter og tre brandmandsfigurer.

Brandstationen har en rutsjebane så brandmændene hurtigt kan komme ned til bilen når alarmen går. Det lille actionelement gør legen mere dynamisk og spændende. Både bil og helikopter har plads til figurer, og stigen på brandbilen kan hæves og sænkes.

Med 117 dele er dette et af de større DUPLO-sæt, hvilket giver god valuta for pengene. Byggeriet tager lidt tid, men vejledningen er billedbaseret så børnene kan være med. Når først stationen er bygget, er der timevis af leg i vente.

DUPLO-kvaliteten er som altid i top. Klodserne klikker solidt sammen, farverne falmer ikke, og plastikken kan tåle det meste. Sættet kan kombineres med andre DUPLO-sæt for at skabe en hel by med brandstation, hospital, politistation og boliger.`,
    minAge: 2,
    maxAge: 5,
    ageGroup: '3-5',
    category: 'legetoej',
    subcategories: ['byggeklodser', 'rolleleg', 'køretøjer'],
    tags: ['LEGO', 'DUPLO', 'brandstation', 'brandmand', 'køretøjer'],
    targetGender: 'alle',
    price: 600,
    priceClass: 'mellem-hoej',
    affiliateLinks: [],
    primaryBuyUrl: 'https://www.br.dk/',
    rating: 4.5,
    pros: [
      'Mange dele giver god valuta for pengene',
      'Tre figurer til varieret rolleleg',
      'Rutsjebane tilføjer action-element',
      'Kan kombineres med andre DUPLO-sæt'
    ],
    cons: [
      'Fylder en del når det er bygget',
      'Helikopteren er ret simpel'
    ],
    parentTip: 'Tal om brandmændenes arbejde og sikkerhed i hjemmet - det giver legen en ekstra pædagogisk dimension.',
    details: {
      pieces: 117,
      figures: 3,
      vehicles: 'Brandbil og helikopter',
      features: 'Rutsjebane, hæve/sænke stige'
    },
    imageUrl: 'https://images.unsplash.com/photo-1587654780291-39c9404d746b?w=800&q=80',
    additionalImages: [],
    brand: 'LEGO',
    manufacturer: 'LEGO Group',
    featured: false,
    editorChoice: false,
    isConfirmationGift: false,
    isSustainable: false,
    isDanishBrand: true
  },
  {
    title: 'Magna-Tiles Transparent - 32 stk',
    slug: 'magna-tiles-transparent-32',
    shortDescription: 'Magnetiske byggefliser i klare farver. Lærerigt konstruktionslegetøj der træner rumlig forståelse og kreativitet.',
    description: `Magna-Tiles er blevet et fænomen i pædagogiske kredse, og med god grund. De magnetiske fliser i gennemsigtig plastik giver børn en intuitiv forståelse for geometri og tredimensionel bygning.

Magnetterne er indkapslet i kanten af hver flise, så de klikker sammen fra alle vinkler. Børn kan bygge fladt som et puslespil eller i 3D som huse, tårne og fantasifigurer. Det transparente materiale giver smukke lyseffekter når solen skinner igennem.

Sættet med 32 dele indeholder firkanter og trekanter i forskellige størrelser - nok til at bygge simple strukturer og lære principperne. Mange familier starter her og udvider samlingen over tid, da alle Magna-Tiles er kompatible med hinanden.

Kvaliteten er høj med stærke magneter der holder sammen selv i større konstruktioner. Fliserne er lavet af fødevaregodkendt ABS-plast uden BPA eller ftalater. De kan holde til at blive smidt, trådt på og vasket af - hvilket er uundgåeligt med børn.`,
    minAge: 3,
    maxAge: 8,
    ageGroup: '3-5',
    category: 'legetoej',
    subcategories: ['magnetlegetøj', 'byggeklodser', 'pædagogisk'],
    tags: ['Magna-Tiles', 'magnetisk', 'byggelegetøj', 'STEM', 'geometri'],
    targetGender: 'alle',
    price: 499,
    priceClass: 'mellem',
    affiliateLinks: [],
    primaryBuyUrl: 'https://legeakademiet.dk/',
    rating: 4.5,
    pros: [
      'Intuitiv introduktion til geometri og 3D',
      'Stærke magneter der holder sammen',
      'Smukke lyseffekter med transparent design',
      'Kompatibelt med andre Magna-Tiles sæt'
    ],
    cons: [
      '32 dele er minimum for interessant bygning',
      'Højere pris end ikke-magnetiske alternativer'
    ],
    parentTip: 'Stil en lyskilde bag konstruktionerne - de farverige skygger fascinerer børn og lærer dem om lys og farver.',
    details: {
      pieces: 32,
      shapes: 'Firkanter og trekanter',
      material: 'ABS plast, BPA-fri',
      magnetStrength: 'N52 (stærkeste type)'
    },
    imageUrl: 'https://images.unsplash.com/photo-1587654780291-39c9404d746b?w=800&q=80',
    additionalImages: [],
    brand: 'Magna-Tiles',
    manufacturer: 'Valtech',
    featured: false,
    editorChoice: false,
    isConfirmationGift: false,
    isSustainable: false,
    isDanishBrand: false
  },
  {
    title: 'Kids Concept Legetelt - Star',
    slug: 'kids-concept-legetelt-star',
    shortDescription: 'Stilfuldt legetelt i skandinavisk design med stjerner. Skaber et hyggeligt rum til leg og drømme.',
    description: `Et legetelt er ikke bare et stykke legetøj - det er et fristed. Kids Concept har forstået det og skabt et telt der både er funktionelt og æstetisk så flot, at det kan stå fremme i stuen uden at skæmme.

Teltet er lavet i robust bomuld med et fint stjernemønster i afdæmpede farver. Rammen er af træ, og samlingen tager kun få minutter uden værktøj. Størrelsen (ca. 100 x 100 x 120 cm) giver plads til 2-3 børn eller et barn med bamser og puder.

Designet er gennemtænkt med åbning der kan rulles op og bindes fast, samt et lille vindue i siden. Indenfor kan børnene læse, lege eller bare have et sted der er "deres eget". Mange børn bruger teltet som base i lege eller som et roligt sted at trække sig tilbage.

Kids Concept er et svensk mærke kendt for skandinavisk design og god kvalitet. Teltet fås i flere farver og mønstre, så det kan tilpasses indretningen på børneværelset eller i stuen.`,
    minAge: 2,
    maxAge: 8,
    ageGroup: '3-5',
    category: 'legetoej',
    subcategories: ['legetelte', 'indretning', 'hygge'],
    tags: ['Kids Concept', 'legetelt', 'skandinavisk', 'børneværelse', 'hygge'],
    targetGender: 'alle',
    price: 599,
    priceClass: 'mellem-hoej',
    affiliateLinks: [],
    primaryBuyUrl: 'https://www.br.dk/',
    rating: 4.0,
    pros: [
      'Flot skandinavisk design',
      'Robust bomuld og træramme',
      'Nem samling uden værktøj',
      'Kan stå fremme i stuen'
    ],
    cons: [
      'Fylder når det er samlet',
      'Skal foldes sammen for opbevaring'
    ],
    parentTip: 'Læg en blød måtte eller tæppe i bunden og tilføj puder og en lyskæde - så bliver teltet det ultimative hyggehjørne.',
    details: {
      dimensions: 'Ca. 100 x 100 x 120 cm',
      material: 'Bomuld og træ',
      weight: 'Ca. 3 kg',
      assembly: 'Uden værktøj'
    },
    imageUrl: 'https://images.unsplash.com/photo-1618083286308-bb2749a877ff?w=800&q=80',
    additionalImages: [],
    brand: 'Kids Concept',
    manufacturer: 'Kids Concept AB',
    featured: false,
    editorChoice: false,
    isConfirmationGift: false,
    isSustainable: false,
    isDanishBrand: false
  },
  {
    title: 'Sandkasse-gravemaskine med Hjul',
    slug: 'sandkasse-gravemaskine-hjul',
    shortDescription: 'Robust sidde-gravemaskine til sandkassen. Drejelig kran og graveskovl giver timevis af udendørs leg.',
    description: `Få ting fascinerer børn som gravemaskiner og entreprenørmaskiner. Denne sidde-model til sandkassen lader barnet være gravemaskine-fører og flytte sand i det uendelige.

Barnet sidder på sædet og styrer den drejelige kran med to håndtag. Et håndtag drejer kranen 360 grader, det andet hæver og sænker grabben. Det kræver koordination at mestre, men når først teknikken sidder, kan der flyttes imponerende mængder sand.

Konstruktionen er robust metal og plast designet til at kunne holde til udendørs brug i al slags vejr. Hjulene gør det nemt at flytte maskinen rundt i sandkassen eller haven. Sædet har plads til børn op til ca. 6 år.

Dette er det klassiske udendørs grovmotoriske legetøj. Børnene bruger hele kroppen, får frisk luft og kan lege i timevis uden skærme. Det sociale element er også stærkt - gravemaskinen bliver ofte centrum for lege med andre børn.`,
    minAge: 3,
    maxAge: 6,
    ageGroup: '3-5',
    category: 'legetoej',
    subcategories: ['udendørs', 'sandlegetøj', 'køretøjer'],
    tags: ['sandkasse', 'gravemaskine', 'udendørs', 'grovmotorik', 'have'],
    targetGender: 'alle',
    price: 550,
    priceClass: 'mellem-hoej',
    affiliateLinks: [],
    primaryBuyUrl: 'https://www.br.dk/',
    rating: 4.0,
    pros: [
      'Timevis af udendørs leg',
      'Træner koordination og grovmotorik',
      'Robust konstruktion til udendørs brug',
      '360 graders drejefunktion'
    ],
    cons: [
      'Kræver sandkasse eller sandomrÃ¥de',
      'Fylder en del at opbevare'
    ],
    parentTip: 'Stil maskinen så barnet graver væk fra sig selv - det er mere naturligt og giver bedre kontrol over grabben.',
    details: {
      material: 'Metal og plast',
      rotation: '360 grader',
      maxWeight: 'Ca. 35 kg',
      wheels: 'Ja, kan flyttes'
    },
    imageUrl: 'https://images.unsplash.com/photo-1525298995976-d6c547e7f3f3?w=800&q=80',
    additionalImages: [],
    brand: null,
    manufacturer: 'Diverse',
    featured: false,
    editorChoice: false,
    isConfirmationGift: false,
    isSustainable: false,
    isDanishBrand: false
  },
];

// Udstyr 3-5 år (Micro Mini løbehjul)
export const udstyr3to5: GiftSeedData[] = [
  {
    title: 'Micro Mini Deluxe Løbehjul',
    slug: 'micro-mini-deluxe-lobehjul',
    shortDescription: 'Prisvindende trehjulet løbehjul til de 2-5 årige. Schweizisk kvalitet med lean-to-steer styring.',
    description: `Micro Mini Deluxe er ikke bare endnu et løbehjul - det er et gennemtænkt stykke ingeniørkunst designet specifikt til små børn. Den trehjulede konstruktion giver ekstra stabilitet, mens den unikke "lean-to-steer" styring lærer børn balance på en intuitiv måde.

Barnet læner sig i den retning, det vil dreje - præcis som på en snowboard eller skateboard. Det styrker balancen og koordinationen naturligt, uden at barnet behøver tænke over teknikken. Det lave fodbræt og de to store forhjul gør det trygt for selv de mindste at komme i gang.

Kvaliteten er i særklasse. Løbehjulet vejer kun 1,95 kg men tåler op til 50 kg, og styret kan justeres fra 49-67 cm i højden. Det betyder, at løbehjulet kan "vokse med" barnet i flere år. Hjulene er bløde PU-hjul med ABEC 9 kuglelejer for en jævn og lydsvag kørsel.

Micro tilbyder reservedele til alle modeller, så et slidt hjul eller greb nemt kan udskiftes. Det forlænger levetiden betydeligt og gør løbehjulet til en langsigtet investering.`,
    minAge: 2,
    maxAge: 5,
    ageGroup: '3-5',
    category: 'udstyr',
    subcategories: ['løbehjul', 'udendørs'],
    tags: ['løbehjul', 'motorik', 'balance', 'udendørs', 'schweizisk'],
    targetGender: 'alle',
    price: 700,
    priceClass: 'mellem-hoej',
    affiliateLinks: [],
    primaryBuyUrl: 'https://micro-scooters.dk/',
    rating: 5.0,
    pros: [
      'Fremragende stabilitet med tre hjul',
      'Lean-to-steer styrker balance naturligt',
      'Justerbar højde - vokser med barnet',
      'Reservedele tilgængelige for lang levetid'
    ],
    cons: [
      'Dyrere end mange konkurrenter',
      'Ikke foldbar (modellen Mini Deluxe)'
    ],
    parentTip: 'Invester i en hjelm fra start - det etablerer gode vaner og gør køreturene tryggere for alle.',
    details: {
      weight: '1,95 kg',
      maxLoad: '50 kg',
      handlebarHeight: '49-67 cm',
      wheels: '120mm front, 80mm bag',
      bearings: 'ABEC 9'
    },
    imageUrl: 'https://images.unsplash.com/photo-1571210764848-96a1d81aa2a5?w=800&q=80',
    additionalImages: [],
    brand: 'Micro',
    manufacturer: 'Micro Mobility Systems',
    featured: true,
    editorChoice: true,
    isConfirmationGift: false,
    isSustainable: false,
    isDanishBrand: false
  },
];

// Bøger 3-5 år
export const boeger3to5: GiftSeedData[] = [
  {
    title: 'Alfons Åberg - Samlet Kasse',
    slug: 'alfons-aberg-samlet-kasse',
    description: 'Denne samling indeholder 10 af de mest elskede Alfons Åberg-historier. Gunilla Bergströms tidløse fortællinger om den lille dreng og hans far rører ved universelle temaer som venskab, jalousi, fantasi og hverdagens små udfordringer. Illustrationerne er klassiske og varme. Bøgerne er perfekte som godnathistorier og giver anledning til gode samtaler om følelser. Kassens format gør den nem at opbevare og tage med.',
    shortDescription: '10 klassiske Alfons Åberg-bøger i smuk kassette. Tidløse fortællinger alle børn bør kende.',
    minAge: 3,
    maxAge: 6,
    ageGroup: '3-5',
    category: 'boeger',
    subcategories: ['billedbøger', 'klassikere'],
    tags: ['Alfons Åberg', 'klassiker', 'godnathistorie', 'dansk'],
    targetGender: 'alle',
    price: 349,
    priceClass: 'mellem',
    affiliateLinks: [],
    primaryBuyUrl: null,
    rating: 4.9,
    pros: ['Tidløse historier', 'Flot kassette', 'God værdi for pengene', 'Perfekt som gave'],
    cons: ['Nogle historier kan være lidt kedelige for de mindste'],
    parentTip: 'Læs en historie hver aften som fast ritual - barnet vil elske gentagelsen.',
    details: { pages: 320, format: 'indbundet', language: 'dansk' },
    imageUrl: 'https://images.unsplash.com/photo-1533561304446-88a43deb6229?w=800&q=80',
    additionalImages: [],
    brand: null,
    manufacturer: 'Gyldendal',
    featured: true,
    editorChoice: true,
    isConfirmationGift: false,
    isSustainable: false,
    isDanishBrand: true,
  },
];

// Kreativ 6-9 år
export const kreativ6to9: GiftSeedData[] = [
  {
    title: 'Aquabeads Startpakke',
    slug: 'aquabeads-startpakke',
    description: 'Aquabeads er perler der sættes sammen med vand - ingen strygejern nødvendigt. Denne startpakke indeholder over 800 perler i 24 farver, skabeloner, perleret og sprøjteflaske. Barnet placerer perlerne på skabelonen og sprøjter vand på - efter 10-20 minutter er motivet tørt og kan tages af. Systemet er sikkert og nemt at bruge selv for yngre børn. Perlerne er atoksiske og vandopløselige, så spild kan nemt tørres op.',
    shortDescription: 'Kreative perler der sættes sammen med vand. Ingen strygejern nødvendigt.',
    minAge: 6,
    maxAge: 10,
    ageGroup: '6-9',
    category: 'kreativ',
    subcategories: ['perler', 'håndarbejde'],
    tags: ['perler', 'kreativ', 'finmotorik', 'sikker'],
    targetGender: 'alle',
    price: 199,
    priceClass: 'mellem-lav',
    affiliateLinks: [],
    primaryBuyUrl: null,
    rating: 4.4,
    pros: ['Ingen strygejern nødvendigt', 'Sikkert for børn', 'Masser af farver', 'Stimulerer kreativitet'],
    cons: ['Perler skal købes løbende', 'Tørretid kan teste tålmodigheden'],
    parentTip: 'Hav en vandfast underlag klar og lad barnet eksperimentere med egne mønstre.',
    details: { contents: ['800+ perler', 'skabeloner', 'perleret', 'sprøjteflaske'], skillLevel: 'begynder' },
    imageUrl: 'https://images.unsplash.com/photo-1587654780291-39c9404d746b?w=800&q=80',
    additionalImages: [],
    brand: 'Aquabeads',
    manufacturer: 'Epoch',
    featured: false,
    editorChoice: false,
    isConfirmationGift: false,
    isSustainable: false,
    isDanishBrand: false,
  },
];

// Udstyr 6-9 år
export const udstyr6to9: GiftSeedData[] = [
  {
    title: 'Micro Maxi Deluxe Løbehjul',
    slug: 'micro-maxi-deluxe-loebehjul',
    description: 'Micro Maxi Deluxe er et af markedets bedste løbehjul til børn. Det har tre hjul for ekstra stabilitet, lean-to-steer styring der lærer barnet balance, og et robust dæk der håndterer ujævne overflader. Styret kan justeres fra 67-91 cm så det vokser med barnet. Stellet er i letvægts aluminium og tåler op til 70 kg. Løbehjulet folder nemt sammen og har en praktisk bremse på baghjulet.',
    shortDescription: 'Premium løbehjul med tre hjul og justerbart styr. Vokser med barnet.',
    minAge: 5,
    maxAge: 12,
    ageGroup: '6-9',
    category: 'udstyr',
    subcategories: ['løbehjul', 'udendørs'],
    tags: ['løbehjul', 'udendørs', 'motion', 'kvalitet'],
    targetGender: 'alle',
    price: 899,
    priceClass: 'mellem-hoej',
    affiliateLinks: [],
    primaryBuyUrl: null,
    rating: 4.8,
    pros: ['Fremragende kvalitet', 'Vokser med barnet', 'Stabil med tre hjul', 'Let at manøvrere'],
    cons: ['Høj pris', 'Kan være for lille til store børn'],
    parentTip: 'Køb en hjelm med det samme - sikkerhed først!',
    details: { weightCapacity: 70, adjustable: true, color: 'flere farver' },
    imageUrl: 'https://images.unsplash.com/photo-1571210764848-96a1d81aa2a5?w=800&q=80',
    additionalImages: [],
    brand: 'Micro',
    manufacturer: 'Micro',
    featured: true,
    editorChoice: true,
    isConfirmationGift: false,
    isSustainable: false,
    isDanishBrand: false,
  },
];

// Elektronik 10-12 år
export const elektronik10to12: GiftSeedData[] = [
  {
    title: 'Nintendo Switch Lite',
    slug: 'nintendo-switch-lite',
    description: 'Nintendo Switch Lite er den perfekte håndholdte spillekonsol til børn. Den er lettere og mere kompakt end den almindelige Switch, men spiller alle Switch-spil der understøtter håndholdt tilstand. Batteritiden er 3-7 timer afhængig af spillet. Skærmen er på 5,5 tommer med touch-funktion. Konsollen kommer i flere farver og har forældrekontrol så du kan styre spilletid og indhold.',
    shortDescription: 'Håndholdt spillekonsol perfekt til børn. Kompakt, robust og med forældrekontrol.',
    minAge: 8,
    maxAge: 15,
    ageGroup: '10-12',
    category: 'elektronik',
    subcategories: ['spilkonsol', 'Nintendo'],
    tags: ['Nintendo', 'Switch', 'spil', 'håndholdt'],
    targetGender: 'alle',
    price: 1599,
    priceClass: 'premium',
    affiliateLinks: [],
    primaryBuyUrl: null,
    rating: 4.7,
    pros: ['Kompakt og let', 'Stort spiludvalg', 'God forældrekontrol', 'Robust bygning'],
    cons: ['Kan ikke tilsluttes TV', 'Spil skal købes separat', 'Dyr'],
    parentTip: 'Opret en Nintendo-konto og aktiver forældrekontrol før du giver gaven.',
    details: { batteryLife: '3-7 timer', screenSize: '5,5 tommer', parentalControls: true },
    imageUrl: 'https://images.unsplash.com/photo-1612036781124-847f8939b154?w=800&q=80',
    additionalImages: [],
    brand: 'Nintendo',
    manufacturer: 'Nintendo',
    featured: true,
    editorChoice: false,
    isConfirmationGift: false,
    isSustainable: false,
    isDanishBrand: false,
  },
];

// Konfirmationsgaver 13-15 år
export const konfirmation13to15: GiftSeedData[] = [
  {
    title: 'Apple AirPods (3. generation)',
    slug: 'apple-airpods-3-generation',
    description: 'Apple AirPods 3. generation er de perfekte trådløse høretelefoner til teenagere. De har rumlig lyd med dynamisk head tracking, adaptiv EQ der automatisk justerer lyden, og op til 6 timers batteritid (30 timer med etui). Svederesistens gør dem velegnede til sport. De forbindes automatisk med Apple-enheder og har Siri-integration. Etuiet kan oplades trådløst eller med Lightning-kabel.',
    shortDescription: 'Premium trådløse høretelefoner med fantastisk lyd og lang batteritid.',
    minAge: 12,
    maxAge: 18,
    ageGroup: '13-15',
    category: 'elektronik',
    subcategories: ['høretelefoner', 'Apple'],
    tags: ['Apple', 'AirPods', 'musik', 'trådløs'],
    targetGender: 'alle',
    price: 1379,
    priceClass: 'premium',
    affiliateLinks: [],
    primaryBuyUrl: null,
    rating: 4.6,
    pros: ['Fantastisk lydkvalitet', 'Nem opsætning med Apple', 'Lang batteritid', 'Komfortable'],
    cons: ['Passer ikke alle ører', 'Virker bedst med Apple-produkter'],
    parentTip: 'Køb et beskyttende etui med det samme - de er nemme at tabe.',
    details: { batteryLife: '6 timer', connectivity: ['Bluetooth'], parentalControls: false },
    imageUrl: 'https://images.unsplash.com/photo-1572569511254-d8f925fe2cbb?w=800&q=80',
    additionalImages: [],
    brand: 'Apple',
    manufacturer: 'Apple',
    featured: true,
    editorChoice: true,
    isConfirmationGift: true,
    isSustainable: false,
    isDanishBrand: false,
  },
  {
    title: 'Fjällräven Kånken Rygsæk',
    slug: 'fjallraven-kanken-rygsaek',
    description: 'Fjällräven Kånken er en tidløs klassiker der aldrig går af mode. Rygsækken er lavet af slidstærkt Vinylon F-stof der er både vandafvisende og nemt at rengøre. Den rummer 16 liter og har polstrede skulderstropper, stort hovedrum, lynlåslomme foran og to sidelommer. Kånken fås i over 50 farver så der er en til enhver smag. Den holder i mange år med korrekt pleje.',
    shortDescription: 'Ikonisk skandinavisk rygsæk i holdbar kvalitet. Perfekt til skole og fritid.',
    minAge: 13,
    maxAge: 99,
    ageGroup: '13-15',
    category: 'mode',
    subcategories: ['tasker', 'rygsække'],
    tags: ['Fjällräven', 'Kånken', 'skandinavisk', 'klassiker'],
    targetGender: 'alle',
    price: 899,
    priceClass: 'mellem-hoej',
    affiliateLinks: [],
    primaryBuyUrl: null,
    rating: 4.7,
    pros: ['Tidløst design', 'Holdbar kvalitet', 'Mange farver', 'Praktisk størrelse'],
    cons: ['Skulderstropper kan være hårde uden polstring', 'Ikke den billigste'],
    parentTip: 'Lad barnet selv vælge farven - det er en personlig gave de skal bruge dagligt.',
    details: { sizes: ['16L'], material: 'Vinylon F', careInstructions: 'Vask i hånden' },
    imageUrl: 'https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=800&q=80',
    additionalImages: [],
    brand: 'Fjällräven',
    manufacturer: 'Fjällräven',
    featured: true,
    editorChoice: true,
    isConfirmationGift: true,
    isSustainable: true,
    isDanishBrand: false,
  },
];

// =============================================
// NYE PRODUKTER - Januar 2026 batch
// =============================================

// 0-2 år - nye produkter
export const nye0to2: GiftSeedData[] = [
  {
    title: 'Oball Rangle - Klassisk',
    slug: 'oball-rangle-klassisk',
    shortDescription: 'Blød rangle med huller der er nemme for små hænder at gribe.',
    description: `Oball er en simpel idé der bare virker. Bolden er lavet af blødt, fleksibelt plastik med store huller, så selv helt små babyer kan gribe den.

Fra omkring 3 måneder begynder de fleste babyer at kunne holde fast i Oball'en. Den rasler lidt når den rystes. Materialet er blødt nok til at det ikke gør ondt når babyen rammer sig selv i hovedet.

Bolden kan vaskes i opvaskemaskinen og tåler at blive bidt i, kastet og generelt mishandlet.

Et af de få stykker legetøj der faktisk bruges af babyer helt ned til 3 måneder.`,
    minAge: 0,
    maxAge: 12,
    ageGroup: '0-2',
    category: 'legetoej',
    subcategories: ['rangler', 'babylegetøj'],
    tags: ['Oball', 'rangle', 'baby', 'motorik'],
    targetGender: 'alle',
    price: 59,
    priceClass: 'budget',
    affiliateLinks: [],
    primaryBuyUrl: null,
    rating: 4.5,
    pros: ['Nem at gribe for små hænder', 'Blød og sikker', 'Kan vaskes i opvaskemaskine', 'Billig'],
    cons: ['Ikke så spændende for ældre babyer', 'Raslelyd er ret svag'],
    parentTip: 'God til at øve greb. Hæng den op i barnevognen eller autostolen.',
    details: { material: 'Fleksibelt plastik', washable: true },
    imageUrl: null,
    additionalImages: [],
    brand: 'Oball',
    manufacturer: 'Oball',
    featured: false,
    editorChoice: false,
    isConfirmationGift: false,
    isSustainable: false,
    isDanishBrand: false
  },
  {
    title: 'Fisher-Price Puttekasse',
    slug: 'fisher-price-puttekasse',
    shortDescription: 'Klassisk puttekasse med formklodser. Træner formgenkendelse og finmotorik.',
    description: `Puttekasser har eksisteret i generationer, og Fisher-Price laver en af de bedste. Ti klodser i forskellige former skal puttes i de rigtige huller.

Klodserne er store nok til at være sikre og nemme at håndtere. Farverne er klare og indbydende.

De fleste børn bruger et stykke tid på bare at tage klodserne ud og putte dem i igen uden at bekymre sig om formerne. Det er også fint. Efterhånden begynder de at forstå at trekanten skal i trekant-hullet.

God træning for fingrene og hjernen.`,
    minAge: 6,
    maxAge: 24,
    ageGroup: '0-2',
    category: 'legetoej',
    subcategories: ['puttekasser', 'motorik'],
    tags: ['Fisher-Price', 'puttekasse', 'former', 'motorik'],
    targetGender: 'alle',
    price: 149,
    priceClass: 'mellem-lav',
    affiliateLinks: [],
    primaryBuyUrl: null,
    rating: 4.0,
    pros: ['Klassisk der virker', 'Robuste klodser', 'God til formgenkendelse'],
    cons: ['Plastik kvalitet kunne være bedre', 'Klodserne forsvinder nemt'],
    parentTip: 'Lad barnet lege frit med klodserne først. De lærer formerne når de er klar.',
    details: { pieces: 10, material: 'Plastik' },
    imageUrl: null,
    additionalImages: [],
    brand: 'Fisher-Price',
    manufacturer: 'Fisher-Price',
    featured: false,
    editorChoice: false,
    isConfirmationGift: false,
    isSustainable: false,
    isDanishBrand: false
  },
  {
    title: 'Stablekasser i træ - Regnbue',
    slug: 'stablekasser-trae-regnbue',
    shortDescription: 'Seks stablekasser i regnbuefarver. Kan bruges som huse, garager eller hvad fantasien finder på.',
    description: `Stablekasser er det mest alsidige legetøj du kan købe til en baby. De kan stables, væltes, bruges som huse for små dyr, garager for biler, eller bare bankes på.

Disse kasser er i træ med regnbuefarver og kan stables inde i hinanden så de fylder minimalt.

Fordi de er så simple, holder de interessen i mange år. En 1-årig stabler dem og vælter dem. En 3-årig bygger byer med dem. En 5-årig bruger dem i rolleleg.

Træet er malet med giftfri maling og tåler lidt af hvert.`,
    minAge: 12,
    maxAge: 60,
    ageGroup: '0-2',
    category: 'legetoej',
    subcategories: ['stablelegetøj', 'trælegetøj'],
    tags: ['stablekasser', 'trælegetøj', 'regnbue', 'motorik'],
    targetGender: 'alle',
    price: 249,
    priceClass: 'mellem-lav',
    affiliateLinks: [],
    primaryBuyUrl: null,
    rating: 4.5,
    pros: ['Mange anvendelsesmuligheder', 'Holder i årevis', 'Pænt design', 'Fylder lidt når de stables'],
    cons: ['Kan støje på hårde gulve', 'Malingen kan slides over tid'],
    parentTip: 'Køb gerne et sæt små dyr eller biler der passer til kasserne.',
    details: { pieces: 6, material: 'Træ' },
    imageUrl: null,
    additionalImages: [],
    brand: null,
    manufacturer: null,
    featured: false,
    editorChoice: false,
    isConfirmationGift: false,
    isSustainable: true,
    isDanishBrand: false
  },
  {
    title: 'Toniebox Startpakke',
    slug: 'tonie-boks-startpakke',
    shortDescription: 'Lydbogsspiller for de mindste. Sæt en figur på toppen, og historien begynder.',
    description: `Toniebox er en lydbogsspiller designet til små børn. Konceptet er simpelt: sæt en lille figur på toppen af boksen, og den tilhørende historie eller musik begynder at spille.

Boksen er polstret og kan tåle at blive tabt, kastet og generelt behandlet som legetøj. Der er ingen knapper at trykke forkert på.

Figurerne (Tonies) købes separat og dækker alt fra danske børnesange til Gurli Gris og H.C. Andersen.

Ikke billigt når man tæller figurer med, men mange familier synes det er pengene værd for lydfortællinger uden skærm.`,
    minAge: 36,
    maxAge: 96,
    ageGroup: '0-2',
    category: 'elektronik',
    subcategories: ['lydafspiller', 'lydbøger'],
    tags: ['Toniebox', 'lydbøger', 'børnesange', 'skærmfri'],
    targetGender: 'alle',
    price: 999,
    priceClass: 'premium',
    affiliateLinks: [],
    primaryBuyUrl: null,
    rating: 4.5,
    pros: ['Nem for børn at betjene selv', 'Robust og holdbar', 'Ingen skærm', 'Stort udvalg af figurer'],
    cons: ['Dyr i længden med alle figurerne', 'Kræver WiFi til opsætning'],
    parentTip: 'Kreativ-Tonies er gode til at optage bedsteforældres stemmer.',
    details: { requiresWifi: true, figuresSoldSeparately: true },
    imageUrl: null,
    additionalImages: [],
    brand: 'Tonies',
    manufacturer: 'Tonies',
    featured: true,
    editorChoice: false,
    isConfirmationGift: true,
    isSustainable: false,
    isDanishBrand: false
  },
  {
    title: 'Halfdans ABC',
    slug: 'halfdans-abc',
    shortDescription: 'Klassisk dansk ABC-bog med rim og illustrationer.',
    description: `Halfdans ABC er en af de mest kendte danske børnebøger. Halfdan Rasmussens rim til hvert bogstav er blevet klassikere der går i arv fra generation til generation.

Illustrationerne er farverige og lidt gammeldags på en charmerende måde. Bogen er solid nok til at overleve mange gennemlæsninger, og rimene er sjove at læse højt.

De fleste børn begynder at sætte pris på bogen omkring 2-årsalderen og fortsætter med at vende tilbage til den langt op i skolealderen.

En klassiker der hører til i enhver dansk børnebogsreol.`,
    minAge: 24,
    maxAge: 72,
    ageGroup: '0-2',
    category: 'boeger',
    subcategories: ['billedbøger', 'klassikere'],
    tags: ['Halfdan Rasmussen', 'ABC', 'rim', 'klassiker'],
    targetGender: 'alle',
    price: 149,
    priceClass: 'mellem-lav',
    affiliateLinks: [],
    primaryBuyUrl: null,
    rating: 5.0,
    pros: ['Tidløs klassiker', 'Sjove rim', 'God til højtlæsning', 'Holder i mange år'],
    cons: ['Illustrationerne er lidt daterede', 'Nogle rim er svære for små børn'],
    parentTip: 'Læs rimene med indlevelse og lav stemmer. Børnene elsker det.',
    details: { pages: 64, language: 'Dansk' },
    imageUrl: null,
    additionalImages: [],
    brand: null,
    manufacturer: null,
    featured: false,
    editorChoice: true,
    isConfirmationGift: false,
    isSustainable: false,
    isDanishBrand: true
  },
  {
    title: 'Mimbo Jimbo - Billedbog',
    slug: 'mimbo-jimbo-billedbog',
    shortDescription: 'Historier om den lille blå elefant. Enkle, sjove fortællinger med flotte illustrationer.',
    description: `Jakob Martin Strid har skabt en af de mest elskede danske børnebogsfigurer i Mimbo Jimbo. Den lille blå elefant oplever ting der både er sjove og lidt skæve.

Illustrationerne er fantastiske. Strids stil er unik og genkendelig, og der er masser af detaljer at opdage ved gentagne læsninger.

Historierne er korte nok til godnat-læsning men lange nok til at der sker noget. Sproget er enkelt uden at være kedeligt.

Der findes flere Mimbo Jimbo-bøger, så hvis barnet bliver glad for den første, er der mere at komme efter.`,
    minAge: 24,
    maxAge: 72,
    ageGroup: '0-2',
    category: 'boeger',
    subcategories: ['billedbøger', 'danske forfattere'],
    tags: ['Mimbo Jimbo', 'Jakob Martin Strid', 'elefant', 'dansk'],
    targetGender: 'alle',
    price: 169,
    priceClass: 'mellem-lav',
    affiliateLinks: [],
    primaryBuyUrl: null,
    rating: 4.5,
    pros: ['Fantastiske illustrationer', 'Sjove historier', 'Serie med flere bøger'],
    cons: ['Kan være lidt surrealistisk for de mindste', 'Dyrere end gennemsnittet'],
    parentTip: 'Lad barnet kigge på illustrationerne. Der er mange sjove detaljer.',
    details: { language: 'Dansk', author: 'Jakob Martin Strid' },
    imageUrl: null,
    additionalImages: [],
    brand: null,
    manufacturer: null,
    featured: true,
    editorChoice: false,
    isConfirmationGift: false,
    isSustainable: false,
    isDanishBrand: true
  },
  {
    title: 'De Små Synger - Sangbog',
    slug: 'de-smaa-synger-sangbog',
    shortDescription: 'Klassisk dansk sangbog med børnesange. Noder og tekster til alle de kendte sange.',
    description: `De Små Synger er den danske sangbog par excellence. Den indeholder alle de klassiske danske børnesange - fra "Lille Peter Edderkop" til "I en sal på hospitalet".

Bogen har både tekster og noder, så hvis du kan spille klaver eller guitar, kan du akkompagnere. Men den fungerer også fint bare til at synge fra.

Illustrationerne er klassiske og passer til sangenes stemning. Bogen er robust nok til daglig brug.

En gave der bruges i mange år, fra de første vuggeviser til sangtime i skolen.`,
    minAge: 0,
    maxAge: 96,
    ageGroup: '0-2',
    category: 'boeger',
    subcategories: ['sangbøger', 'klassikere'],
    tags: ['sangbog', 'børnesange', 'klassiker', 'noder'],
    targetGender: 'alle',
    price: 249,
    priceClass: 'mellem-lav',
    affiliateLinks: [],
    primaryBuyUrl: null,
    rating: 5.0,
    pros: ['Alle de klassiske sange', 'Noder inkluderet', 'Holdbar kvalitet'],
    cons: ['Tung at slæbe rundt', 'Nogle sange er lidt gammeldags'],
    parentTip: 'Syng for dit barn fra de er helt små. De lærer sproget hurtigere.',
    details: { songs: '200+', includesNotes: true },
    imageUrl: null,
    additionalImages: [],
    brand: null,
    manufacturer: null,
    featured: false,
    editorChoice: true,
    isConfirmationGift: true,
    isSustainable: false,
    isDanishBrand: true
  },
  {
    title: 'Skip Hop Aktivitetstæppe',
    slug: 'skip-hop-aktivitetstaeppe',
    shortDescription: 'Blødt legetæppe med aftagelige legetøj og spejl. God til maven-tid.',
    description: `Skip Hop laver et af de pænere aktivitetstæpper på markedet. Det har et moderne design i neutrale farver og aftagelige legetøj der hænger ned over barnet.

Tæppet er blødt og polstret, så det er behageligt at ligge på. Der er et spejl barnet kan kigge i, og legetøjene kan flyttes rundt eller tages helt af.

Når barnet bliver større og ikke længere ligger under buen, fungerer tæppet stadig som et blødt underlag til leg på gulvet.

Kan vaskes i maskinen, hvilket er praktisk.`,
    minAge: 0,
    maxAge: 12,
    ageGroup: '0-2',
    category: 'udstyr',
    subcategories: ['aktivitetstæpper', 'babylegetøj'],
    tags: ['Skip Hop', 'aktivitetstæppe', 'legemåtte', 'baby'],
    targetGender: 'alle',
    price: 699,
    priceClass: 'mellem-hoej',
    affiliateLinks: [],
    primaryBuyUrl: null,
    rating: 4.5,
    pros: ['Pænt design', 'Aftagelige legetøj', 'Maskinvaskbart', 'Blødt og behageligt'],
    cons: ['Dyrere end mange andre', 'Buen kan være ustabil'],
    parentTip: 'Brug det til maven-tid fra barnet er helt lille. Spejlet gør det sjovere.',
    details: { machineWashable: true, includesMirror: true },
    imageUrl: null,
    additionalImages: [],
    brand: 'Skip Hop',
    manufacturer: 'Skip Hop',
    featured: false,
    editorChoice: false,
    isConfirmationGift: false,
    isSustainable: false,
    isDanishBrand: false
  },
  {
    title: 'Georg Jensen Sølvske med Gravering',
    slug: 'georg-jensen-solvske-gravering',
    shortDescription: 'Klassisk dansk sølvske til dåb. Kan graveres med navn og dato.',
    description: `En sølvske til dåb er en klassisk dansk tradition. Georg Jensen har lavet dem i over 100 år, og kvaliteten er i særklasse.

Skeen kan graveres med barnets navn og dåbsdato, så den bliver en personlig erindring der varer hele livet.

Sølv patinerer smukt over tid og kan altid pudses op til at se ny ud. En gave der holder i generationer.

Leveres i flot æske.`,
    minAge: 0,
    maxAge: 0,
    ageGroup: '0-2',
    category: 'udstyr',
    subcategories: ['dåbsgaver', 'sølv'],
    tags: ['dåb', 'sølv', 'gravering', 'tradition'],
    targetGender: 'alle',
    price: 899,
    priceClass: 'premium',
    affiliateLinks: [],
    primaryBuyUrl: null,
    rating: 5.0,
    pros: ['Klassisk dansk kvalitet', 'Kan graveres', 'Holder hele livet'],
    cons: ['Dyr', 'Kræver pleje'],
    parentTip: 'Bestil i god tid hvis du vil have gravering.',
    details: { material: 'Sølv', engravingAvailable: true },
    imageUrl: null,
    additionalImages: [],
    brand: 'Georg Jensen',
    manufacturer: 'Georg Jensen',
    featured: true,
    editorChoice: true,
    isConfirmationGift: false,
    isSustainable: true,
    isDanishBrand: true
  }
];

// 3-5 år - nye produkter
export const nye3to5: GiftSeedData[] = [
  {
    title: 'Djeco Fingerfarve - 6 farver',
    slug: 'djeco-fingerfarve-6-farver',
    shortDescription: 'Fingerfarve i pæne farver fra Djeco. Vaskbar og sikker for børn.',
    description: `Fingerfarve er rod, men det er også sjovt - og Djeco laver noget af den bedste. Farverne er flotte, og det kan vaskes af.

Sættet har seks farver der kan blandes. Bøtterne er nemme for børnehænder at åbne.

Djeco bruger ikke skadelige stoffer, så det er ikke katastrofalt når barnet putter fingrene i munden.

God til at lade børn eksperimentere frit med farver og former.`,
    minAge: 18,
    maxAge: 72,
    ageGroup: '3-5',
    category: 'kreativ',
    subcategories: ['maling', 'fingerfarve'],
    tags: ['Djeco', 'fingerfarve', 'maling', 'kreativ'],
    targetGender: 'alle',
    price: 129,
    priceClass: 'mellem-lav',
    affiliateLinks: [],
    primaryBuyUrl: null,
    rating: 4.5,
    pros: ['Vaskbar', 'Giftfri', 'Flotte farver', 'Gode bøtter'],
    cons: ['Roder alligevel en del', 'Tørrer ud hvis låget ikke lukkes'],
    parentTip: 'Læg et stort stykke karton eller gammelt lagen ud.',
    details: { colors: 6, nonToxic: true, washable: true },
    imageUrl: null,
    additionalImages: [],
    brand: 'Djeco',
    manufacturer: 'Djeco',
    featured: false,
    editorChoice: false,
    isConfirmationGift: false,
    isSustainable: false,
    isDanishBrand: false
  },
  {
    title: 'SES Creative Modellervoks - Øko',
    slug: 'ses-creative-modellervoks-oko',
    shortDescription: 'Modellervoks lavet af 94% naturlige materialer. Tørrer ikke ud.',
    description: `SES har lavet en modellervoks der faktisk er lavet af ordentlige materialer. 94% naturligt indhold, ingen skadelige stoffer.

Voksen føles lidt anderledes end plastik-modellervoks - mere blød. Den store fordel er at den ikke tørrer ud.

Fire farver i sættet: rød, grøn, gul og blå. Kan blandes til andre farver.

Produceres i Holland med kort transport til Danmark.`,
    minAge: 18,
    maxAge: 72,
    ageGroup: '3-5',
    category: 'kreativ',
    subcategories: ['modellervoks', 'øko'],
    tags: ['SES', 'modellervoks', 'øko', 'bæredygtig'],
    targetGender: 'alle',
    price: 79,
    priceClass: 'budget',
    affiliateLinks: [],
    primaryBuyUrl: null,
    rating: 4.0,
    pros: ['Naturlige materialer', 'Tørrer ikke ud', 'Genbrugelig emballage', 'Allergivenlig'],
    cons: ['Lidt blødere end traditionel modellervoks', 'Kun fire farver'],
    parentTip: 'Opbevar i de originale bøtter med låg.',
    details: { colors: 4, naturalContent: '94%' },
    imageUrl: null,
    additionalImages: [],
    brand: 'SES Creative',
    manufacturer: 'SES Creative',
    featured: false,
    editorChoice: false,
    isConfirmationGift: false,
    isSustainable: true,
    isDanishBrand: false
  },
  {
    title: 'Sol over Indre By - Historien om en Ilder',
    slug: 'sol-over-indre-by-ilder',
    shortDescription: 'Årets bedste børnebog 2023. Om pigen Sol der virkelig gerne vil have et kæledyr.',
    description: `Sol bor i en lejlighed i København og vil gerne have en hund. Mor siger nej. Men Sol har det med regler som hun har det med tandlægen: helst undgå dem.

Bogen vandt Årets Bedste Børnebog i 2023, og det er fortjent. Historien er sjov og genkendelig, og Sol er en karakter man kommer til at holde af.

Første bog i en serie, så der er flere historier at læse.

Perfekt til højtlæsning fra 3 år og selvlæsning for lidt ældre børn.`,
    minAge: 36,
    maxAge: 84,
    ageGroup: '3-5',
    category: 'boeger',
    subcategories: ['billedbøger', 'prisvindende'],
    tags: ['Sol', 'kæledyr', 'dansk', 'prisbelønnet'],
    targetGender: 'alle',
    price: 179,
    priceClass: 'mellem-lav',
    affiliateLinks: [],
    primaryBuyUrl: null,
    rating: 5.0,
    pros: ['Prisvindende historie', 'Sjov og genkendelig', 'Flotte illustrationer', 'Serie med flere bøger'],
    cons: ['Kan inspirere til at omgå regler', 'Byhistorie - måske mindre relevant for landboere'],
    parentTip: 'Brug bogen til at snakke om regler og hvorfor de findes.',
    details: { pages: 40, award: 'Årets Børnebog 2023' },
    imageUrl: null,
    additionalImages: [],
    brand: null,
    manufacturer: null,
    featured: true,
    editorChoice: true,
    isConfirmationGift: false,
    isSustainable: false,
    isDanishBrand: true
  }
];

// 6-9 år - nye produkter
export const nye6to9: GiftSeedData[] = [
  {
    title: 'LEGO Minecraft - Skovhytten',
    slug: 'lego-minecraft-skovhytten',
    shortDescription: 'LEGO-udgave af Minecraft-verdenen. Byg en hytte med Steve, dyr og zombier.',
    description: `For børn der spiller Minecraft, er dette sæt et hit. Det kombinerer den digitale verden med fysisk LEGO-bygning. Sættet har Steve, en zombie, en ulv og flere dyr.

Byggevejledningen er nem at følge for børn fra 7-8 år. Med 500+ dele er det en god udfordring uden at være overvældende.

Kan kombineres med andre LEGO Minecraft-sæt til en større verden.`,
    minAge: 7,
    maxAge: 12,
    ageGroup: '6-9',
    category: 'legetoej',
    subcategories: ['LEGO', 'Minecraft'],
    tags: ['LEGO', 'Minecraft', 'byggelegetøj'],
    targetGender: 'alle',
    price: 499,
    priceClass: 'mellem',
    affiliateLinks: [],
    primaryBuyUrl: null,
    rating: 4.5,
    pros: ['Populært tema', 'God værdi', 'Kan kombineres med andre sæt'],
    cons: ['Kræver kendskab til Minecraft'],
    parentTip: 'Hjælp med at finde de rigtige klodser hvis barnet bliver frustreret.',
    details: { pieces: 500, figures: 4 },
    imageUrl: null,
    additionalImages: [],
    brand: 'LEGO',
    manufacturer: 'LEGO',
    featured: true,
    editorChoice: false,
    isConfirmationGift: false,
    isSustainable: false,
    isDanishBrand: true
  },
  {
    title: 'Den Fantastiske Bus',
    slug: 'den-fantastiske-bus',
    shortDescription: 'Eventyrlig bog fra Jakob Martin Strid. Over 200 sider med fantastiske illustrationer.',
    description: `Jakob Martin Strid har brugt over 15 år på denne bog. Hver side er fyldt med detaljerede illustrationer og en historie der tager læseren med på vild rejse.

Bogen handler om en bus der kan flyve, sejle og dykke. Med over 200 sider er det en bog man kan læse igen og igen.

En moderne dansk klassiker.`,
    minAge: 6,
    maxAge: 12,
    ageGroup: '6-9',
    category: 'boeger',
    subcategories: ['eventyr', 'illustrerede'],
    tags: ['Jakob Martin Strid', 'eventyr', 'dansk'],
    targetGender: 'alle',
    price: 299,
    priceClass: 'mellem-lav',
    affiliateLinks: [],
    primaryBuyUrl: null,
    rating: 5.0,
    pros: ['Fantastiske illustrationer', 'Lang og underholdende', 'Dansk klassiker'],
    cons: ['Kan være overvældende for yngre', 'Tung bog'],
    parentTip: 'Læs den over mange aftener.',
    details: { pages: 200, author: 'Jakob Martin Strid' },
    imageUrl: null,
    additionalImages: [],
    brand: null,
    manufacturer: null,
    featured: true,
    editorChoice: true,
    isConfirmationGift: true,
    isSustainable: false,
    isDanishBrand: true
  },
  {
    title: 'Ticket to Ride - Europa',
    slug: 'ticket-to-ride-europa',
    shortDescription: 'Populært familiebrætspil om togbaner. Nemt at lære, svært at mestre.',
    description: `Ticket to Ride er et af de mest populære brætspil i verden. Reglerne kan læres på 5 minutter, men der er masser af strategi for dem der vil gå dybere.

Spillerne samler togkort og bygger ruter mellem europæiske byer. Perfekt til familiegamenight på 60-90 minutter.`,
    minAge: 8,
    maxAge: 99,
    ageGroup: '6-9',
    category: 'legetoej',
    subcategories: ['brætspil', 'strategi'],
    tags: ['brætspil', 'familie', 'strategi'],
    targetGender: 'alle',
    price: 349,
    priceClass: 'mellem',
    affiliateLinks: [],
    primaryBuyUrl: null,
    rating: 5.0,
    pros: ['Nemt at lære', 'Passer til mange aldre', 'God genspilværdi'],
    cons: ['Kan blive langtrukket med mange spillere'],
    parentTip: 'Start med korte ruter til børnene.',
    details: { players: '2-5', playTime: '60-90 min' },
    imageUrl: null,
    additionalImages: [],
    brand: 'Days of Wonder',
    manufacturer: 'Days of Wonder',
    featured: true,
    editorChoice: true,
    isConfirmationGift: false,
    isSustainable: false,
    isDanishBrand: false
  },
  {
    title: 'Hama Perler Mega Set',
    slug: 'hama-perler-mega-set',
    shortDescription: 'Stort sæt med Hama perler og plader. Dansk klassiker til kreativ fordybelse.',
    description: `Hama perler er en dansk opfindelse der har underholdt børn i generationer. Læg perler på en plade, stryg dem sammen - færdig.

Dette mega-sæt har nok perler til mange projekter. Træner finmotorik og giver timer af stille fordybelse.`,
    minAge: 5,
    maxAge: 99,
    ageGroup: '6-9',
    category: 'kreativ',
    subcategories: ['perler', 'Hama'],
    tags: ['Hama', 'perler', 'dansk'],
    targetGender: 'alle',
    price: 299,
    priceClass: 'mellem-lav',
    affiliateLinks: [],
    primaryBuyUrl: null,
    rating: 4.5,
    pros: ['Dansk kvalitet', 'Mange timers leg', 'Træner finmotorik'],
    cons: ['Kræver voksenhjælp til strygning', 'Perler ender overalt'],
    parentTip: 'Hav en skål til perler der falder på gulvet.',
    details: { pieces: '10.000+', includesBoards: true },
    imageUrl: null,
    additionalImages: [],
    brand: 'Hama',
    manufacturer: 'Hama',
    featured: false,
    editorChoice: false,
    isConfirmationGift: false,
    isSustainable: false,
    isDanishBrand: true
  },
  {
    title: 'Woom 4 Børnecykel',
    slug: 'woom-4-bornecykel',
    shortDescription: 'Let børnecykel i høj kvalitet. Designet til børn, ikke en minivoksen-cykel.',
    description: `Woom laver cykler designet specifikt til børn. Det betyder lavere vægt og en geometri der passer til en 6-9 årig.

Cyklen vejer kun 7 kg, hvilket gør en kæmpe forskel. Kvaliteten er høj og gensalgsværdien god.`,
    minAge: 6,
    maxAge: 9,
    ageGroup: '6-9',
    category: 'udstyr',
    subcategories: ['cykler', 'udendørs'],
    tags: ['cykel', 'Woom', 'kvalitet'],
    targetGender: 'alle',
    price: 3999,
    priceClass: 'luksus',
    affiliateLinks: [],
    primaryBuyUrl: null,
    rating: 5.0,
    pros: ['Meget let', 'Designet til børn', 'God gensalgsværdi'],
    cons: ['Dyr', 'Skal bestilles online'],
    parentTip: 'Mål barnets benlængde før køb.',
    details: { weight: '7 kg', wheelSize: '20 tommer' },
    imageUrl: null,
    additionalImages: [],
    brand: 'Woom',
    manufacturer: 'Woom',
    featured: true,
    editorChoice: true,
    isConfirmationGift: true,
    isSustainable: false,
    isDanishBrand: false
  },
  {
    title: 'Diary of a Wimpy Kid - dansk',
    slug: 'diary-wimpy-kid-dansk',
    shortDescription: 'Greg Heffley og hans dagbog. Får selv læse-modvillige børn til at læse.',
    description: `Dagbog for en Taber handler om Greg og hans liv i skole og derhjemme. Bogen er skrevet som en dagbog med tegninger, hvilket gør den tilgængelig.

Serien har mange bøger, så hvis barnet bliver hooked, er der masser at læse. Perfekt til at starte læsevanen.`,
    minAge: 8,
    maxAge: 13,
    ageGroup: '6-9',
    category: 'boeger',
    subcategories: ['børneromaner', 'humor'],
    tags: ['Wimpy Kid', 'humor', 'serie'],
    targetGender: 'alle',
    price: 149,
    priceClass: 'mellem-lav',
    affiliateLinks: [],
    primaryBuyUrl: null,
    rating: 4.5,
    pros: ['Får børn til at læse', 'Sjov og genkendelig', 'Mange bøger i serien'],
    cons: ['Ikke dyb litteratur'],
    parentTip: 'Køb dem alle hvis barnet bliver fan.',
    details: { pages: 220, series: true },
    imageUrl: null,
    additionalImages: [],
    brand: null,
    manufacturer: null,
    featured: false,
    editorChoice: false,
    isConfirmationGift: false,
    isSustainable: false,
    isDanishBrand: false
  },
  {
    title: 'Nerf Elite 2.0 Blaster',
    slug: 'nerf-elite-blaster',
    shortDescription: 'Skumpistoler til Nerf-kamp. Ufarlige pile og god action.',
    description: `Nerf er standard til skudkampe blandt skolebørn. Pilene er bløde skum og gør ikke ondt.

God leg der får børnene væk fra skærmene. Pilene forsvinder altid - køb ekstra med det samme.`,
    minAge: 8,
    maxAge: 14,
    ageGroup: '6-9',
    category: 'legetoej',
    subcategories: ['udendørs', 'aktiv leg'],
    tags: ['Nerf', 'action', 'udendørs'],
    targetGender: 'alle',
    price: 299,
    priceClass: 'mellem-lav',
    affiliateLinks: [],
    primaryBuyUrl: null,
    rating: 4.0,
    pros: ['Får børnene til at bevæge sig', 'Social leg', 'Robust'],
    cons: ['Pilene forsvinder', 'Kan blive voldsom leg'],
    parentTip: 'Køb 20+ ekstra pile.',
    details: { darts: 12, range: '27 meter' },
    imageUrl: null,
    additionalImages: [],
    brand: 'Nerf',
    manufacturer: 'Hasbro',
    featured: false,
    editorChoice: false,
    isConfirmationGift: false,
    isSustainable: false,
    isDanishBrand: false
  },
  {
    title: 'Schleich Heste Sæt',
    slug: 'schleich-heste-saet',
    shortDescription: 'Detaljerede hestefigurer. Populære blandt hesteinteresserede børn.',
    description: `Schleich laver de mest detaljerede dyrefigurer på markedet. Hestene er realistiske og kan kombineres med stalde og tilbehør.

Figurerne er robuste nok til leg. Populært blandt børn der går til ridning.`,
    minAge: 5,
    maxAge: 12,
    ageGroup: '6-9',
    category: 'legetoej',
    subcategories: ['figurer', 'dyr'],
    tags: ['Schleich', 'heste', 'figurer'],
    targetGender: 'piger',
    price: 349,
    priceClass: 'mellem',
    affiliateLinks: [],
    primaryBuyUrl: null,
    rating: 4.5,
    pros: ['Meget detaljerede', 'Robust kvalitet', 'Kan udvides'],
    cons: ['Dyrere end andre figurer'],
    parentTip: 'Tjek om barnet har andre Schleich-figurer først.',
    details: { figures: 3, handpainted: true },
    imageUrl: null,
    additionalImages: [],
    brand: 'Schleich',
    manufacturer: 'Schleich',
    featured: false,
    editorChoice: false,
    isConfirmationGift: false,
    isSustainable: false,
    isDanishBrand: false
  }
];

// 10-12 år - nye produkter
export const nye10to12: GiftSeedData[] = [
  {
    title: 'LEGO Technic - Bil med Motor',
    slug: 'lego-technic-bil-motor',
    shortDescription: 'Avanceret LEGO med fungerende motor og gear. Til den tålmodige bygger.',
    description: `LEGO Technic er for dem der vil have udfordring. Det færdige resultat har fungerende dele - motor og gear.

Byggetiden er flere timer. Det færdige resultat er imponerende og kan udstilles. Godt til børn der kan lide at arbejde med hænderne.`,
    minAge: 9,
    maxAge: 16,
    ageGroup: '10-12',
    category: 'legetoej',
    subcategories: ['LEGO', 'byggesæt'],
    tags: ['LEGO', 'Technic', 'avanceret'],
    targetGender: 'alle',
    price: 899,
    priceClass: 'premium',
    affiliateLinks: [],
    primaryBuyUrl: null,
    rating: 4.5,
    pros: ['Udfordrende', 'Fungerende mekanik', 'Flot resultat'],
    cons: ['Dyrt', 'Kan frustrere utålmodige'],
    parentTip: 'Sæt tid af. Det tager timer.',
    details: { pieces: 1000, motorized: true },
    imageUrl: null,
    additionalImages: [],
    brand: 'LEGO',
    manufacturer: 'LEGO',
    featured: true,
    editorChoice: false,
    isConfirmationGift: false,
    isSustainable: false,
    isDanishBrand: true
  },
  {
    title: 'JBL Jr310BT Børnehøretelefoner',
    slug: 'jbl-jr310bt-bornehoretelefoner',
    shortDescription: 'Trådløse høretelefoner til børn. Begrænset lydstyrke beskytter hørelsen.',
    description: `JBL Jr310BT er lavet til børn. Lydstyrken er begrænset til 85 dB - sikkert for børneører.

Batteriet holder 30 timer. Designet er komfortabelt for børnehoveder.`,
    minAge: 6,
    maxAge: 14,
    ageGroup: '10-12',
    category: 'elektronik',
    subcategories: ['høretelefoner', 'tilbehør'],
    tags: ['JBL', 'høretelefoner', 'sikker'],
    targetGender: 'alle',
    price: 399,
    priceClass: 'mellem',
    affiliateLinks: [],
    primaryBuyUrl: null,
    rating: 4.5,
    pros: ['Begrænset lydstyrke', 'Lang batteritid', 'Komfortabel'],
    cons: ['Middelmådig mikrofon'],
    parentTip: 'Hold stadig øje med hvor længe de bruges.',
    details: { maxVolume: '85 dB', batteryLife: '30 timer' },
    imageUrl: null,
    additionalImages: [],
    brand: 'JBL',
    manufacturer: 'JBL',
    featured: false,
    editorChoice: false,
    isConfirmationGift: false,
    isSustainable: false,
    isDanishBrand: false
  },
  {
    title: 'Harry Potter og De Vises Sten',
    slug: 'harry-potter-de-vises-sten',
    shortDescription: 'Første bog i Harry Potter-serien. Klassiker der stadig fanger nye generationer.',
    description: `Harry Potter behøver ingen introduktion. Første bog er et godt sted at starte for børn der er klar til længere bøger.

Hvis barnet bliver hooked, er der seks bøger mere plus film og spil.`,
    minAge: 9,
    maxAge: 99,
    ageGroup: '10-12',
    category: 'boeger',
    subcategories: ['fantasy', 'serier'],
    tags: ['Harry Potter', 'fantasy', 'klassiker'],
    targetGender: 'alle',
    price: 169,
    priceClass: 'mellem-lav',
    affiliateLinks: [],
    primaryBuyUrl: null,
    rating: 5.0,
    pros: ['Fantastisk historie', 'Stor serie', 'Tidløs'],
    cons: ['Senere bøger bliver mørke'],
    parentTip: 'Læs gerne de første kapitler højt sammen.',
    details: { pages: 336, series: '7 bøger' },
    imageUrl: null,
    additionalImages: [],
    brand: null,
    manufacturer: null,
    featured: false,
    editorChoice: true,
    isConfirmationGift: false,
    isSustainable: false,
    isDanishBrand: false
  },
  {
    title: 'Catan - Grundspil',
    slug: 'catan-grundspil',
    shortDescription: 'Klassisk strategispil om at bygge kolonier. Spilles af millioner verden over.',
    description: `Catan er nok det mest kendte moderne brætspil. Spillerne samler ressourcer, bygger veje og byer, og handler med hinanden.

God blanding af strategi, forhandling og held. Passer til 3-4 spillere i grundversionen.`,
    minAge: 10,
    maxAge: 99,
    ageGroup: '10-12',
    category: 'legetoej',
    subcategories: ['brætspil', 'strategi'],
    tags: ['Catan', 'brætspil', 'strategi'],
    targetGender: 'alle',
    price: 349,
    priceClass: 'mellem',
    affiliateLinks: [],
    primaryBuyUrl: null,
    rating: 4.5,
    pros: ['Klassiker', 'God social dynamik', 'Mange udvidelser'],
    cons: ['Kan føles uretfærdigt med dårlige terninger'],
    parentTip: 'Lær reglerne ordentligt først.',
    details: { players: '3-4', playTime: '60-120 min' },
    imageUrl: null,
    additionalImages: [],
    brand: 'Catan Studio',
    manufacturer: 'Catan Studio',
    featured: false,
    editorChoice: false,
    isConfirmationGift: false,
    isSustainable: false,
    isDanishBrand: false
  },
  {
    title: 'Ravensburger Puslespil 1000 brikker',
    slug: 'ravensburger-puslespil-1000',
    shortDescription: 'Kvalitetspuslespil til hele familien. Et hyggeligt projekt over flere aftener.',
    description: `Ravensburger er standarden for puslespil. 1000 brikker er en god størrelse - udfordrende men ikke overvældende.

Et puslespil er et godt familieprojekt. God afveksling fra skærme.`,
    minAge: 10,
    maxAge: 99,
    ageGroup: '10-12',
    category: 'legetoej',
    subcategories: ['puslespil', 'familie'],
    tags: ['Ravensburger', 'puslespil', 'hygge'],
    targetGender: 'alle',
    price: 199,
    priceClass: 'mellem-lav',
    affiliateLinks: [],
    primaryBuyUrl: null,
    rating: 4.5,
    pros: ['God kvalitet', 'Familieprojekt', 'Ingen skærme'],
    cons: ['Kræver plads', 'Brikker kan forsvinde'],
    parentTip: 'Køb en puslespilsmåtte så det kan rulles sammen.',
    details: { pieces: 1000, brand: 'Ravensburger' },
    imageUrl: null,
    additionalImages: [],
    brand: 'Ravensburger',
    manufacturer: 'Ravensburger',
    featured: false,
    editorChoice: false,
    isConfirmationGift: false,
    isSustainable: false,
    isDanishBrand: false
  }
];

// 13-15 år - nye produkter
export const nye13to15: GiftSeedData[] = [
  {
    title: 'Sony WH-1000XM4 Høretelefoner',
    slug: 'sony-wh1000xm4-horetelefoner',
    shortDescription: 'Trådløse over-ear høretelefoner med støjreducering. Fremragende lydkvalitet.',
    description: `Sony WH-1000XM4 er blandt de bedste høretelefoner på markedet. Støjreduceringen er fremragende til koncentration om lektier eller musik.

Batteriet holder 30 timer. En investering der holder mange år.`,
    minAge: 13,
    maxAge: 99,
    ageGroup: '13-15',
    category: 'elektronik',
    subcategories: ['høretelefoner', 'premium'],
    tags: ['Sony', 'høretelefoner', 'støjreducering'],
    targetGender: 'alle',
    price: 2299,
    priceClass: 'luksus',
    affiliateLinks: [],
    primaryBuyUrl: null,
    rating: 5.0,
    pros: ['Fremragende lyd', 'Effektiv støjreducering', 'Lang batteritid'],
    cons: ['Dyre', 'Kan blive varme'],
    parentTip: 'God til studier. Støjreducering hjælper koncentration.',
    details: { batteryLife: '30 timer', noiseCancelling: true },
    imageUrl: null,
    additionalImages: [],
    brand: 'Sony',
    manufacturer: 'Sony',
    featured: true,
    editorChoice: true,
    isConfirmationGift: true,
    isSustainable: false,
    isDanishBrand: false
  },
  {
    title: 'Apple Watch SE',
    slug: 'apple-watch-se',
    shortDescription: 'Smartwatch fra Apple. Fitness-tracking, notifikationer og meget mere.',
    description: `Apple Watch SE har de fleste funktioner fra de dyrere modeller. Tracker aktivitet, søvn og træning.

Fungerer kun med iPhone. Batteriet holder en dag med normal brug.`,
    minAge: 12,
    maxAge: 99,
    ageGroup: '13-15',
    category: 'elektronik',
    subcategories: ['wearables', 'smartwatch'],
    tags: ['Apple', 'smartwatch', 'fitness'],
    targetGender: 'alle',
    price: 2299,
    priceClass: 'luksus',
    affiliateLinks: [],
    primaryBuyUrl: null,
    rating: 4.5,
    pros: ['God funktionalitet', 'Fitness tracking', 'Flot design'],
    cons: ['Kræver iPhone', 'Kort batteritid'],
    parentTip: 'Sæt skærmtid op så det ikke forstyrrer i skolen.',
    details: { requiresIPhone: true, gps: true },
    imageUrl: null,
    additionalImages: [],
    brand: 'Apple',
    manufacturer: 'Apple',
    featured: true,
    editorChoice: false,
    isConfirmationGift: true,
    isSustainable: false,
    isDanishBrand: false
  },
  {
    title: 'Nike Air Force 1 - Hvide',
    slug: 'nike-air-force-1-hvide',
    shortDescription: 'Klassiske hvide sneakers. Tidløst design der passer til alt.',
    description: `Nike Air Force 1 i hvid er en af de mest tidløse sneakers. Populære siden 80'erne.

Kvaliteten er god og de kan holde til daglig brug. Næsten alle teenagere kan lide dem.`,
    minAge: 12,
    maxAge: 99,
    ageGroup: '13-15',
    category: 'mode',
    subcategories: ['sko', 'sneakers'],
    tags: ['Nike', 'sneakers', 'klassiker'],
    targetGender: 'alle',
    price: 999,
    priceClass: 'premium',
    affiliateLinks: [],
    primaryBuyUrl: null,
    rating: 4.5,
    pros: ['Tidløst design', 'Passer til alt', 'God kvalitet'],
    cons: ['Hvid farve kræver pleje'],
    parentTip: 'Køb sko-renser med det samme.',
    details: { material: 'Læder', style: 'Low-top' },
    imageUrl: null,
    additionalImages: [],
    brand: 'Nike',
    manufacturer: 'Nike',
    featured: false,
    editorChoice: false,
    isConfirmationGift: false,
    isSustainable: false,
    isDanishBrand: false
  },
  {
    title: 'Escape Room Gavekort',
    slug: 'escape-room-gavekort',
    shortDescription: 'Gavekort til escape room oplevelse. Sjov aktivitet med venner.',
    description: `Escape rooms er populære. Et hold låses inde og skal løse gåder for at slippe ud.

Sjov aktivitet med venner eller familie. Kræver samarbejde og kreativ tænkning.`,
    minAge: 12,
    maxAge: 99,
    ageGroup: '13-15',
    category: 'oplevelser',
    subcategories: ['aktiviteter', 'social'],
    tags: ['escape room', 'oplevelse', 'venner'],
    targetGender: 'alle',
    price: 600,
    priceClass: 'mellem-hoej',
    affiliateLinks: [],
    primaryBuyUrl: null,
    rating: 4.5,
    pros: ['Social aktivitet', 'Udfordrende', 'Mindeværdig oplevelse'],
    cons: ['Kræver at samle et hold'],
    parentTip: 'Book i god tid.',
    details: { duration: '60 min', teamSize: '2-6' },
    imageUrl: null,
    additionalImages: [],
    brand: null,
    manufacturer: null,
    featured: false,
    editorChoice: false,
    isConfirmationGift: false,
    isSustainable: true,
    isDanishBrand: false
  },
  {
    title: 'Sapiens - En kort historie om menneskeheden',
    slug: 'sapiens-kort-historie',
    shortDescription: 'Populærvidenskabelig bog om menneskehedens historie. Tankevækkende.',
    description: `Yuval Noah Harari fortæller hvordan mennesket gik fra ubetydelig abe til at dominere planeten.

God til teenagere der er nysgerrige på verden. En bog man kan diskutere bagefter.`,
    minAge: 14,
    maxAge: 99,
    ageGroup: '13-15',
    category: 'boeger',
    subcategories: ['faglitteratur', 'historie'],
    tags: ['Sapiens', 'historie', 'populærvidenskab'],
    targetGender: 'alle',
    price: 199,
    priceClass: 'mellem-lav',
    affiliateLinks: [],
    primaryBuyUrl: null,
    rating: 4.5,
    pros: ['Tankevækkende', 'Velskrevet', 'Giver stof til samtale'],
    cons: ['Lang bog'],
    parentTip: 'Læs den selv også. Gode samtaleemner.',
    details: { pages: 464, author: 'Yuval Noah Harari' },
    imageUrl: null,
    additionalImages: [],
    brand: null,
    manufacturer: null,
    featured: false,
    editorChoice: true,
    isConfirmationGift: true,
    isSustainable: false,
    isDanishBrand: false
  },
  {
    title: 'Logitech G502 Gaming Mus',
    slug: 'logitech-g502-gaming-mus',
    shortDescription: 'Populær gaming mus med præcis sensor og programmerbare knapper.',
    description: `G502 er en af de mest populære gaming mus. Præcis sensor, god ergonomi, og masser af knapper.

God gave til den spilinteresserede teenager. Forskellen fra en billig mus er mærkbar.`,
    minAge: 12,
    maxAge: 99,
    ageGroup: '13-15',
    category: 'elektronik',
    subcategories: ['gaming', 'tilbehør'],
    tags: ['Logitech', 'gaming', 'PC'],
    targetGender: 'alle',
    price: 599,
    priceClass: 'mellem-hoej',
    affiliateLinks: [],
    primaryBuyUrl: null,
    rating: 4.5,
    pros: ['Præcis sensor', 'Programmerbar', 'Robust'],
    cons: ['Mange knapper kan forvirre'],
    parentTip: 'Tjek om teenageren spiller på PC eller konsol.',
    details: { dpi: 25600, buttons: 11 },
    imageUrl: null,
    additionalImages: [],
    brand: 'Logitech',
    manufacturer: 'Logitech',
    featured: false,
    editorChoice: false,
    isConfirmationGift: false,
    isSustainable: false,
    isDanishBrand: false
  }
];

// Samlet eksport
export const allGifts: GiftSeedData[] = [
  ...legetoej0to2,
  ...legetoej3to5,
  ...udstyr3to5,
  ...boeger3to5,
  ...kreativ6to9,
  ...udstyr6to9,
  ...elektronik10to12,
  ...konfirmation13to15,
  // Nye produkter januar 2026
  ...nye0to2,
  ...nye3to5,
  ...nye6to9,
  ...nye10to12,
  ...nye13to15,
];
