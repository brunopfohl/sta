import { Practice } from '../types';

// Cvičení 1 - Základní koncepty
export const cviceni1Questions: Practice[] = [
  {
    id: '1.1',
    question: 'Který test použijeme pro testování hypotézy o střední hodnotě při neznámém rozptylu a malém rozsahu výběru (n < 30)?',
    options: [
      'Z-test',
      't-test',
      'Chí-kvadrát test',
      'F-test'
    ],
    correctAnswer: 't-test',
    explanation: 'Při neznámém rozptylu a malém rozsahu výběru (n < 30) používáme t-test, protože zohledňuje dodatečnou nejistotu při odhadu rozptylu populace.',
    type: 'multiple-choice',
    category: 'Základní koncepty'
  },
  {
    id: '1.2',
    question: 'Co znamená nulová hypotéza H₀?',
    options: [
      'Tvrzení, které chceme dokázat',
      'Tvrzení, proti kterému testujeme',
      'Tvrzení, které je vždy pravdivé',
      'Tvrzení, které je vždy nepravdivé'
    ],
    correctAnswer: 'Tvrzení, proti kterému testujeme',
    explanation: 'Nulová hypotéza H₀ je výchozí tvrzení, proti kterému testujeme alternativní hypotézu. Představuje současný stav nebo tvrzení o neexistenci efektu.',
    type: 'multiple-choice',
    category: 'Základní koncepty'
  }
];

// Cvičení 2 - Pokročilé koncepty
export const cviceni2Questions: Practice[] = [
  {
    id: '2.1',
    question: 'Jaká je kritická hodnota t-rozdělení pro α = 0.05 a 20 stupňů volnosti při dvoustranném testu?',
    type: 'calculation',
    correctAnswer: '2.086',
    explanation: 'Kritická hodnota t-rozdělení pro oboustranný test s hladinou významnosti 0.05 a 20 stupni volnosti je ±2.086.',
    category: 'Pokročilé koncepty'
  },
  {
    id: '2.2',
    question: 'Co je to p-hodnota?',
    options: [
      'Pravděpodobnost, že nulová hypotéza je pravdivá',
      'Nejmenší hladina významnosti, při které bychom zamítli nulovou hypotézu',
      'Pravděpodobnost chyby I. druhu',
      'Pravděpodobnost chyby II. druhu'
    ],
    correctAnswer: 'Nejmenší hladina významnosti, při které bychom zamítli nulovou hypotézu',
    explanation: 'P-hodnota je nejmenší hladina významnosti, při které bychom zamítli nulovou hypotézu. Představuje pravděpodobnost získání stejně nebo více extrémních výsledků za předpokladu platnosti nulové hypotézy.',
    type: 'multiple-choice',
    category: 'Pokročilé koncepty'
  }
];

// APSTA přednášky
export const apstaPrednasky: Practice[] = [
  {
    id: 'p1.1',
    question: 'Co je to statistická hypotéza?',
    options: [
      'Tvrzení o parametrech základního souboru',
      'Výsledek statistického testu',
      'Náhodný výběr z populace',
      'Výběrová charakteristika'
    ],
    correctAnswer: 'Tvrzení o parametrech základního souboru',
    explanation: 'Statistická hypotéza je tvrzení o vlastnostech (parametrech) základního souboru, které můžeme testovat pomocí výběrových dat.',
    type: 'multiple-choice',
    category: 'APSTA přednášky'
  },
  {
    id: 'p1.2',
    question: 'Jaký je rozdíl mezi parametrickými a neparametrickými testy?',
    type: 'theory',
    correctAnswer: 'Parametrické testy předpokládají konkrétní rozdělení dat, zatímco neparametrické testy tento předpoklad nemají.',
    explanation: 'Parametrické testy jsou založeny na předpokladu konkrétního rozdělení dat (nejčastěji normálního). Neparametrické testy tento předpoklad nemají.',
    category: 'APSTA přednášky'
  },
  {
    id: 'p1.3',
    question: 'Co znamená hladina významnosti α?',
    options: [
      'Pravděpodobnost zamítnutí správné nulové hypotézy',
      'Pravděpodobnost nezamítnutí nesprávné nulové hypotézy',
      'Pravděpodobnost správného rozhodnutí',
      'Pravděpodobnost výskytu extrémních hodnot'
    ],
    correctAnswer: 'Pravděpodobnost zamítnutí správné nulové hypotézy',
    explanation: 'Hladina významnosti α je pravděpodobnost chyby I. druhu, tedy pravděpodobnost zamítnutí nulové hypotézy, když je ve skutečnosti pravdivá.',
    type: 'multiple-choice',
    category: 'APSTA přednášky'
  },
  {
    id: 'p1.4',
    question: 'Kdy použijeme párový t-test?',
    options: [
      'Při porovnání dvou nezávislých výběrů',
      'Při porovnání párových měření na stejných jednotkách',
      'Při testování rozptylu',
      'Při testování korelace'
    ],
    correctAnswer: 'Při porovnání párových měření na stejných jednotkách',
    explanation: 'Párový t-test používáme, když máme měření před a po na stejných jednotkách, nebo když porovnáváme dvě měření na stejném subjektu.',
    type: 'multiple-choice',
    category: 'APSTA přednášky'
  },
  {
    id: 'p1.5',
    question: 'Co je to kritický obor?',
    options: [
      'Oblast zamítnutí nulové hypotézy',
      'Oblast přijetí nulové hypotézy',
      'Oblast s nejvyšší četností výskytu',
      'Oblast s nejnižší četností výskytu'
    ],
    correctAnswer: 'Oblast zamítnutí nulové hypotézy',
    explanation: 'Kritický obor je množina hodnot testové statistiky, při kterých zamítáme nulovou hypotézu.',
    type: 'multiple-choice',
    category: 'APSTA přednášky'
  },
  {
    id: 'p1.6',
    question: 'Jaký je rozdíl mezi jednostranným a dvoustranným testem?',
    type: 'theory',
    correctAnswer: 'Jednostranný test testuje směr odchylky od H₀ pouze v jednom směru, dvoustranný test v obou směrech.',
    explanation: 'Při jednostranném testu je alternativní hypotéza formulována jako nerovnost v jednom směru (> nebo <), při dvoustranném testu jako nerovnost (≠).',
    category: 'APSTA přednášky'
  },
  {
    id: 'p1.7',
    question: 'Co je to síla testu?',
    options: [
      'Pravděpodobnost správného zamítnutí nesprávné H₀',
      'Pravděpodobnost nesprávného zamítnutí správné H₀',
      'Pravděpodobnost správného přijetí H₀',
      'Pravděpodobnost nesprávného přijetí H₀'
    ],
    correctAnswer: 'Pravděpodobnost správného zamítnutí nesprávné H₀',
    explanation: 'Síla testu je pravděpodobnost zamítnutí nulové hypotézy, když je skutečně nesprávná (1 - β, kde β je pravděpodobnost chyby II. druhu).',
    type: 'multiple-choice',
    category: 'APSTA přednášky'
  },
  {
    id: 'p1.8',
    question: 'Jaké jsou předpoklady pro použití t-testu?',
    type: 'theory',
    correctAnswer: 'Normalita dat, náhodný výběr, nezávislost pozorování',
    explanation: 'T-test předpokládá normální rozdělení dat (nebo dostatečně velký rozsah výběru), náhodný výběr a nezávislost pozorování.',
    category: 'APSTA přednášky'
  },
  {
    id: 'p1.9',
    question: 'Co je to interval spolehlivosti?',
    options: [
      'Interval obsahující skutečnou hodnotu parametru s danou pravděpodobností',
      'Interval obsahující všechny možné hodnoty parametru',
      'Interval obsahující všechny naměřené hodnoty',
      'Interval mezi minimální a maximální hodnotou výběru'
    ],
    correctAnswer: 'Interval obsahující skutečnou hodnotu parametru s danou pravděpodobností',
    explanation: 'Interval spolehlivosti je interval, který s danou pravděpodobností (1-α) obsahuje skutečnou hodnotu odhadovaného parametru.',
    type: 'multiple-choice',
    category: 'APSTA přednášky'
  },
  {
    id: 'p1.10',
    question: 'Jaký je vztah mezi intervalem spolehlivosti a testováním hypotéz?',
    type: 'theory',
    correctAnswer: 'Pokud interval spolehlivosti neobsahuje testovanou hodnotu, zamítáme H₀ na odpovídající hladině významnosti.',
    explanation: '(1-α)100% interval spolehlivosti obsahuje všechny hodnoty parametru, které bychom nezamítli na hladině významnosti α.',
    category: 'APSTA přednášky'
  },
  {
    id: 'p1.11',
    question: 'Co je to chyba I. druhu?',
    options: [
      'Zamítnutí pravdivé H₀',
      'Nezamítnutí nepravdivé H₀',
      'Přijetí pravdivé H₀',
      'Přijetí nepravdivé H₀'
    ],
    correctAnswer: 'Zamítnutí pravdivé H₀',
    explanation: 'Chyba I. druhu nastává, když zamítneme nulovou hypotézu, která je ve skutečnosti pravdivá. Pravděpodobnost této chyby je α.',
    type: 'multiple-choice',
    category: 'APSTA přednášky'
  },
  {
    id: 'p1.12',
    question: 'Co je to chyba II. druhu?',
    options: [
      'Zamítnutí pravdivé H₀',
      'Nezamítnutí nepravdivé H₀',
      'Přijetí pravdivé H₀',
      'Zamítnutí nepravdivé H₀'
    ],
    correctAnswer: 'Nezamítnutí nepravdivé H₀',
    explanation: 'Chyba II. druhu nastává, když nezamítneme nulovou hypotézu, která je ve skutečnosti nepravdivá. Pravděpodobnost této chyby je β.',
    type: 'multiple-choice',
    category: 'APSTA přednášky'
  },
  {
    id: 'p1.13',
    question: 'Jak ovlivní zvýšení rozsahu výběru sílu testu?',
    type: 'theory',
    correctAnswer: 'Zvýšení rozsahu výběru zvýší sílu testu.',
    explanation: 'Větší rozsah výběru poskytuje více informací o populaci a tím zvyšuje pravděpodobnost správného zamítnutí nesprávné H₀.',
    category: 'APSTA přednášky'
  },
  {
    id: 'p1.14',
    question: 'Co je to testová statistika?',
    options: [
      'Funkce výběrových dat používaná k rozhodnutí o H₀',
      'Hodnota parametru v základním souboru',
      'Kritická hodnota testu',
      'P-hodnota testu'
    ],
    correctAnswer: 'Funkce výběrových dat používaná k rozhodnutí o H₀',
    explanation: 'Testová statistika je funkce výběrových dat, která se používá k rozhodnutí o zamítnutí nebo nezamítnutí nulové hypotézy.',
    type: 'multiple-choice',
    category: 'APSTA přednášky'
  },
  {
    id: 'p1.15',
    question: 'Jaký je rozdíl mezi závislými a nezávislými výběry?',
    type: 'theory',
    correctAnswer: 'Závislé výběry jsou párová měření na stejných jednotkách, nezávislé výběry jsou měření na různých jednotkách.',
    explanation: 'Při závislých výběrech existuje přirozené párování měření (např. před/po), při nezávislých výběrech jsou měření na různých jednotkách.',
    category: 'APSTA přednášky'
  },
  {
    id: 'p1.16',
    question: 'Co znamená statisticky významný rozdíl?',
    options: [
      'Rozdíl, který je příliš velký na to, aby vznikl náhodou',
      'Jakýkoliv pozorovaný rozdíl mezi skupinami',
      'Rozdíl, který je prakticky významný',
      'Rozdíl větší než směrodatná odchylka'
    ],
    correctAnswer: 'Rozdíl, který je příliš velký na to, aby vznikl náhodou',
    explanation: 'Statisticky významný rozdíl je takový rozdíl, který je nepravděpodobný za předpokladu platnosti nulové hypotézy.',
    type: 'multiple-choice',
    category: 'APSTA přednášky'
  },
  {
    id: 'p1.17',
    question: 'Jaký je vztah mezi hladinou významnosti a p-hodnotou?',
    type: 'theory',
    correctAnswer: 'H₀ zamítáme, pokud je p-hodnota menší než hladina významnosti.',
    explanation: 'P-hodnota musí být menší než předem zvolená hladina významnosti α, abychom mohli zamítnout nulovou hypotézu.',
    category: 'APSTA přednášky'
  },
  {
    id: 'p1.18',
    question: 'Co je to nulové rozdělení testové statistiky?',
    options: [
      'Rozdělení testové statistiky za předpokladu platnosti H₀',
      'Rozdělení testové statistiky za předpokladu platnosti H₁',
      'Rozdělení s nulovou střední hodnotou',
      'Rozdělení s nulovým rozptylem'
    ],
    correctAnswer: 'Rozdělení testové statistiky za předpokladu platnosti H₀',
    explanation: 'Nulové rozdělení je rozdělení testové statistiky za předpokladu, že nulová hypotéza je pravdivá.',
    type: 'multiple-choice',
    category: 'APSTA přednášky'
  },
  {
    id: 'p1.19',
    question: 'Kdy použijeme dvouvýběrový t-test?',
    options: [
      'Při porovnání středních hodnot dvou nezávislých skupin',
      'Při porovnání párových měření',
      'Při testování rozptylu jedné skupiny',
      'Při testování korelace'
    ],
    correctAnswer: 'Při porovnání středních hodnot dvou nezávislých skupin',
    explanation: 'Dvouvýběrový t-test se používá pro porovnání středních hodnot dvou nezávislých skupin.',
    type: 'multiple-choice',
    category: 'APSTA přednášky'
  },
  {
    id: 'p1.20',
    question: 'Co je to standardizovaná testová statistika?',
    type: 'theory',
    correctAnswer: 'Testová statistika převedená na standardizovaný tvar s nulovou střední hodnotou a jednotkovým rozptylem.',
    explanation: 'Standardizace umožňuje porovnávat hodnoty testové statistiky s tabelovanými kritickými hodnotami.',
    category: 'APSTA přednášky'
  }
];

// Nová kategorie - Statistické testy v praxi
export const statistickeTestyPraxe: Practice[] = [
  {
    id: 'st1.1',
    question: 'Máme data o délce hospitalizace pacientů před a po zavedení nového léčebného postupu. Jaký test použijeme?',
    options: [
      'Párový t-test',
      'Dvouvýběrový t-test',
      'Jednovýběrový t-test',
      'Chi-kvadrát test'
    ],
    correctAnswer: 'Párový t-test',
    explanation: 'Párový t-test je vhodný, protože porovnáváme měření na stejných jednotkách (pacientech) před a po intervenci.',
    type: 'multiple-choice',
    category: 'Statistické testy v praxi'
  },
  {
    id: 'st1.2',
    question: 'Výzkumník chce zjistit, zda nová výuková metoda zlepšuje výsledky studentů. Má k dispozici výsledky testu experimentální a kontrolní skupiny. Jaký test by měl použít?',
    options: [
      'Dvouvýběrový t-test',
      'Párový t-test',
      'ANOVA',
      'Chi-kvadrát test'
    ],
    correctAnswer: 'Dvouvýběrový t-test',
    explanation: 'Dvouvýběrový t-test je vhodný pro porovnání dvou nezávislých skupin (experimentální a kontrolní skupina).',
    type: 'multiple-choice',
    category: 'Statistické testy v praxi'
  },
  {
    id: 'st1.3',
    question: 'Jaké jsou předpoklady pro použití párového t-testu?',
    type: 'theory',
    correctAnswer: 'Normalita rozdílů párových měření, náhodný výběr párů, nezávislost párů',
    explanation: 'Párový t-test předpokládá normální rozdělení rozdílů párových měření, náhodný výběr párů a jejich vzájemnou nezávislost.',
    category: 'Statistické testy v praxi'
  },
  {
    id: 'st1.4',
    question: 'Při jakém rozsahu výběru můžeme použít t-test i při porušení předpokladu normality?',
    options: [
      'n > 30',
      'n > 20',
      'n > 50',
      'n > 100'
    ],
    correctAnswer: 'n > 30',
    explanation: 'Při rozsahu výběru větším než 30 můžeme díky centrální limitní větě použít t-test i při porušení předpokladu normality dat.',
    type: 'multiple-choice',
    category: 'Statistické testy v praxi'
  },
  {
    id: 'st1.5',
    question: 'Co znamená, když je p-hodnota testu 0.03?',
    options: [
      'Existuje 3% pravděpodobnost získání stejně nebo více extrémních výsledků za platnosti H₀',
      'Nulová hypotéza je s 97% pravděpodobností pravdivá',
      'Alternativní hypotéza je s 97% pravděpodobností pravdivá',
      'Pravděpodobnost chyby I. druhu je 3%'
    ],
    correctAnswer: 'Existuje 3% pravděpodobnost získání stejně nebo více extrémních výsledků za platnosti H₀',
    explanation: 'P-hodnota 0.03 znamená, že za předpokladu platnosti nulové hypotézy je pravděpodobnost získání stejně nebo více extrémních výsledků 3%.',
    type: 'multiple-choice',
    category: 'Statistické testy v praxi'
  }
];

// Combine all practice questions
const allPractices: Practice[] = [
  ...cviceni1Questions,
  ...cviceni2Questions,
  ...apstaPrednasky,
  ...statistickeTestyPraxe
]; 