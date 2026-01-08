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
    imageUrl: null,
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
    imageUrl: null,
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
    imageUrl: null,
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
    imageUrl: null,
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
    imageUrl: null,
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
    imageUrl: null,
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
    imageUrl: null,
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
    imageUrl: null,
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
    imageUrl: null,
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
    imageUrl: null,
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
    imageUrl: null,
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
    imageUrl: null,
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
    imageUrl: null,
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
    imageUrl: null,
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
    imageUrl: null,
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
    imageUrl: null,
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
    imageUrl: null,
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
    imageUrl: null,
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
    imageUrl: null,
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
    imageUrl: null,
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
];
