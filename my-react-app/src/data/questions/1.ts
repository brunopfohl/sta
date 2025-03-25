import { Practice } from "../../types";

export const firstPracticeQuestions: Practice[] = [
  {
    id: "AS1_01",
    question: "Co je hlavním tématem prezentace 'Aplikovaná statistika (1)'?",
    options: [
      "Regresní analýza",
      "Časové řady",
      "Úvod do testování statistických hypotéz",
      "Analýza rozptylu (ANOVA)",
    ],
    correctAnswer: "Úvod do testování statistických hypotéz",
    explanation:
      "Slajd 1 uvádí jako hlavní témata úvodní část testování hypotéz, analýzu dat, formulaci hypotéz, chyby, obecný postup a hypotézy pro jeden výběr.",
    type: "multiple-choice",
    category: "Úvod",
  },
  {
    id: "AS1_02",
    question: "Co zahrnuje analýza dat podle slajdu 2?",
    options: [
      "Pouze sběr dat",
      "Pouze vizualizaci dat",
      "Pečlivě plánovaný rozhodovací proces využívající analytické nástroje",
      "Pouze data mining",
    ],
    correctAnswer:
      "Pečlivě plánovaný rozhodovací proces využívající analytické nástroje",
    explanation:
      "Slajd 2 definuje analýzu dat jako 'Pečlivě plánovaný rozhodovací proces, který využívá vhodné analytické nástroje' a zmiňuje kombinaci 'Data + analytické nástroje + kritické uvažování'.",
    type: "multiple-choice",
    category: "Analýza dat",
  },
  {
    id: "AS1_03",
    question: "Která z následujících úloh NENÍ typickou úlohou analýzy dat?",
    options: [
      "Sběr dat a popis dat",
      "Ověřování hypotéz",
      "Sledování závislostí",
      "Psaní softwaru pro sběr dat",
    ],
    correctAnswer: "Psaní softwaru pro sběr dat",
    explanation:
      "Slajd 2 vyjmenovává typické úlohy jako sběr dat, popis, explorační analýzu, ověřování hypotéz, analýzu závislostí, modelování, učení a data mining. Psaní softwaru je jiná disciplína.",
    type: "multiple-choice",
    category: "Analýza dat",
  },
  {
    id: "AS1_04",
    question:
      "Který typ testu se používá pro testování hypotézy o průměru pro jeden nebo dva výběry?",
    options: [
      "Test hypotézy o parametru binomického rozdělení",
      "Test shody o rozptylu",
      "Test hypotézy o průměru",
      "ANOVA",
    ],
    correctAnswer: "Test hypotézy o průměru",
    explanation:
      "Slajd 3 uvádí 'Test hypotézy o průměru (jeden, nebo dva výběry – nezávislé i závislé vzorky)' jako jeden z parametrických testů.",
    type: "multiple-choice",
    category: "Typy testů",
  },
  {
    id: "AS1_05",
    question:
      "Jaký test se používá pro porovnání více než dvou průměrů nezávislých výběrů?",
    options: ["t-test", "F-test", "ANOVA", "Test shody podílů"],
    correctAnswer: "ANOVA",
    explanation:
      "Slajd 3 uvádí 'ANOVA pro jeden faktor – test shody více než dvou průměrů (více než dva nezávislé vzorky)'.",
    type: "multiple-choice",
    category: "Typy testů",
  },
  {
    id: "AS1_06",
    question:
      "Jaký neparametrický test je zmíněn v souvislosti s analýzou závislostí?",
    correctAnswer: "Analýza závislosti v kombinační (kontingenční) tabulce.",
    explanation:
      "Slajd 3 uvádí jako neparametrický test 'Analýza závislosti v kombinační (kontingenční) tabulce'.",
    type: "theory",
    category: "Typy testů",
  },
  {
    id: "AS1_07",
    question:
      "Které míry lineární závislosti pro dvě veličiny jsou zmíněny?",
    correctAnswer: "Kovariance a koeficient korelace.",
    explanation:
      "Slajd 4 uvádí 'Míry lineární závislosti pro dvě veličiny: Kovariance, koeficient korelace a test hypotézy'.",
    type: "theory",
    category: "Další úlohy",
  },
  {
    id: "AS1_08",
    question: "Co je cílem kurzu ohledně testování hypotéz?",
    correctAnswer: "Vysvětlení zásad testování hypotéz.",
    explanation:
      "Slajd 5 uvádí jako hlavní cíl 'vysvětlení zásad testování hypotéz'.",
    type: "theory",
    category: "Cíle kurzu",
  },
  {
    id: "AS1_09",
    question:
      "Který z následujících pojmů NENÍ uveden jako základní pojem v úloze testování na slajdu 5?",
    options: [
      "Testové kritérium",
      "Chyby testu",
      "Oblast zamítání",
      "Bayesovské metody",
    ],
    correctAnswer: "Bayesovské metody",
    explanation:
      "Slajd 5 vyjmenovává základní pojmy: Testové kritérium a jeho rozdělení, chyby testu, oblast zamítání, kritická hodnota. Bayesovské metody jsou zmíněny až na slajdu 6 jako jiný přístup.",
    type: "multiple-choice",
    category: "Cíle kurzu",
  },
  {
    id: "AS1_10",
    question: "Co je statistická hypotéza?",
    correctAnswer: "Domněnka o (neznámých) populačních parametrech.",
    explanation:
      "Slajd 6 definuje hypotézu jako 'domněnka o (neznámých) populačních parametrech'.",
    type: "theory",
    category: "Základní pojmy",
  },
  {
    id: "AS1_11",
    question: "Jaké dvě hypotézy se uvažují při testování?",
    correctAnswer: "Nulovou hypotézu (H0) a alternativní hypotézu (H1).",
    explanation:
      "Slajd 6 uvádí: 'Test uvažuje hypotézu nulovou H₀ a hypotézu alternativní H₁.'",
    type: "theory",
    category: "Základní pojmy",
  },
  {
    id: "AS1_12",
    question:
      "Na základě čeho se rozhoduje mezi nulovou a alternativní hypotézou?",
    correctAnswer: "Na základě dat získaných z náhodného výběru.",
    explanation:
      "Slajd 6 uvádí, že oprávněnost jedné z možností se ověří pomocí dat výběru a že se rozhodne na základě výsledku získaného výběrem.",
    type: "theory",
    category: "Principy testování",
  },
  {
    id: "AS1_13",
    question:
      "Jaký je bodový odhad populační střední hodnoty (μ)?",
    options: ["s", "s²", "\\(\\bar{x}\\)", "p"],
    correctAnswer: "\\(\\bar{x}\\)",
    explanation:
      "Tabulka na slajdu 7 ukazuje, že bodovým odhadem (aritmetickým průměrem) pro μ je \\(\\bar{x}\\).",
    type: "multiple-choice",
    category: "Značení",
  },
  {
    id: "AS1_14",
    question: "Jaký je bodový odhad populačního rozptylu (σ²)?",
    options: ["s", "s²", "\\(\\bar{x}\\)", "r"],
    correctAnswer: "s²",
    explanation:
      "Tabulka na slajdu 7 ukazuje, že bodovým odhadem pro σ² je výběrový rozptyl s².",
    type: "multiple-choice",
    category: "Značení",
  },
  {
    id: "AS1_15",
    question:
      "Jaký je bodový odhad populační pravděpodobnosti výskytu jevu (π)?",
    options: ["s", "p", "\\(\\bar{x}\\)", "b"],
    correctAnswer: "p",
    explanation:
      "Tabulka na slajdu 7 ukazuje, že bodovým odhadem (relativní četností) pro π je p.",
    type: "multiple-choice",
    category: "Značení",
  },
  {
    id: "AS1_16",
    question:
      "Jaký je bodový odhad populačního koeficientu korelace (ρ)?",
    options: ["s", "p", "r", "b"],
    correctAnswer: "r",
    explanation:
      "Tabulka na slajdu 7 ukazuje, že bodovým odhadem pro ρ je výběrový koeficient korelace r.",
    type: "multiple-choice",
    category: "Značení",
  },
  {
    id: "AS1_17",
    question: "Jaký je bodový odhad koeficientu v regresi (β)?",
    options: ["s", "p", "r", "b"],
    correctAnswer: "b",
    explanation:
      "Tabulka na slajdu 7 ukazuje, že bodovým odhadem pro β je výběrový koeficient regrese b.",
    type: "multiple-choice",
    category: "Značení",
  },
  {
    id: "AS1_18",
    question: "Uveďte příklad nulové hypotézy (H0) o populační střední hodnotě.",
    correctAnswer:
      "Např. H0: μ = 5 (dávkovač kávy odměřuje 5g) nebo H0: μ = 220 (průměrné výdaje studenta jsou 220 Kč).",
    explanation: "Slajd 8 uvádí tyto příklady.",
    type: "theory",
    category: "Formulace hypotéz",
  },
  {
    id: "AS1_19",
    question: "Jakou relaci vždy obsahuje nulová hypotéza (H0)?",
    options: ["<", ">", "≠", "="],
    correctAnswer: "=",
    explanation:
      "Slajd 8 uvádí: 'Vždy obsahuje relaci „=“'. Nulová hypotéza typicky postuluje 'žádný rozdíl' nebo shodu s určitou hodnotou.",
    type: "multiple-choice",
    category: "Formulace hypotéz",
  },
  {
    id: "AS1_20",
    question: "Co je alternativní hypotéza (H1)?",
    correctAnswer:
      "Je to doplněk k nulové hypotéze (H0), může být dvoustranná nebo jednostranná.",
    explanation:
      "Slajd 9 definuje H1 jako alternativu k H0, její doplněk, a zmiňuje dvoustrannou a jednostrannou variantu.",
    type: "theory",
    category: "Formulace hypotéz",
  },
  {
    id: "AS1_21",
    question:
      "Jaké relace nejčastěji obsahuje alternativní hypotéza (H1)?",
    options: ["Pouze =", "Pouze <", "Pouze >", "<, > nebo ≠"],
    correctAnswer: "<, > nebo ≠",
    explanation:
      "Slajd 9 uvádí: 'H₁ Nejčastěji obsahuje buď relaci <, nebo >, nebo ≠'.",
    type: "multiple-choice",
    category: "Formulace hypotéz",
  },
  {
    id: "AS1_22",
    question:
      "Pokud testujeme, zda nový design jogurtu zvýší podíl na trhu nad současných 32%, jaká bude alternativní hypotéza H1?",
    options: ["H1: π = 0.32", "H1: π < 0.32", "H1: π > 0.32", "H1: π ≠ 0.32"],
    correctAnswer: "H1: π > 0.32",
    explanation:
      "Chceme potvrdit zvýšení podílu, proto testujeme proti alternativě 'větší než'. Slajd 9 uvádí tento příklad: H₀: π = 32, H₁: π > 32.",
    type: "multiple-choice",
    category: "Formulace hypotéz",
  },
  {
    id: "AS1_23",
    question: "Co je testové kritérium (testová statistika)?",
    correctAnswer:
      "Funkce náhodného výběru g(x), jejíž hodnota se používá k rozhodnutí o hypotéze.",
    explanation:
      "Slajd 11 definuje testové kritérium jako 'statistiku g(x) - funkci výběru', která se používá k testu.",
    type: "theory",
    category: "Základní pojmy",
  },
  {
    id: "AS1_24",
    question: "Co je kritický obor (Wα)?",
    correctAnswer:
      "Množina hodnot testového kritéria, při kterých zamítáme nulovou hypotézu H0.",
    explanation:
      "Slajd 11 definuje kritický obor Wα. Slajd 12 uvádí pravidlo: Pokud g(x) ∈ Wα, zamítáme H0. Slajd 19 to shrnuje.",
    type: "theory",
    category: "Základní pojmy",
  },
  {
    id: "AS1_25",
    question: "Co je chyba I. druhu?",
    correctAnswer: "Zamítnutí nulové hypotézy (H0), která ve skutečnosti platí.",
    explanation:
      "Slajd 13 definuje chybu I. druhu jako 'zamítnutí H₀ která platí'. Slajdy 12, 14 a 15 to opakují.",
    type: "theory",
    category: "Chyby testování",
  },
  {
    id: "AS1_26",
    question: "Co je hladina významnosti (α)?",
    correctAnswer: "Maximální přípustná pravděpodobnost chyby I. druhu.",
    explanation:
      "Slajd 13 definuje pravděpodobnost chyby I. druhu jako hladinu významnosti α. Slajd 12 uvádí P(g(x)∈Wα | H0) ≤ α. Slajd 19 to shrnuje.",
    type: "theory",
    category: "Chyby testování",
  },
  {
    id: "AS1_27",
    question: "Co je chyba II. druhu?",
    correctAnswer:
      "Nezamítnutí (nesprávné přijetí) nulové hypotézy (H0), která ve skutečnosti neplatí (platí H1).",
    explanation:
      "Slajd 13 definuje chybu II. druhu jako 'přijetí H₀, která ve skutečnosti neplatí'. Slajdy 14 a 15 to opakují.",
    type: "theory",
    category: "Chyby testování",
  },
  {
    id: "AS1_28",
    question: "Jak se značí pravděpodobnost chyby II. druhu?",
    options: ["α", "β", "1-α", "1-β"],
    correctAnswer: "β",
    explanation:
      "Slajd 13 uvádí 'Pravděpodobnost chyby 2. druhu: β = P(g(x)∈V | H₁) = P(přijetí H₀ | H₀ neplatí)'. Slajd 14 také používá β.",
    type: "multiple-choice",
    category: "Chyby testování",
  },
  {
    id: "AS1_29",
    question: "Co je síla testu?",
    correctAnswer:
      "Pravděpodobnost správného zamítnutí nulové hypotézy (H0), když H0 neplatí (platí H1).",
    explanation:
      "Slajd 13 definuje sílu testu jako 1-β = P(g(x)∈Wα | H₁). Je to pravděpodobnost, že test odhalí rozdíl, pokud existuje.",
    type: "theory",
    category: "Chyby testování",
  },
  {
    id: "AS1_30",
    question: "Jaký je vztah mezi sílou testu a chybou II. druhu?",
    correctAnswer: "Síla testu = 1 - β (pravděpodobnost chyby II. druhu).",
    explanation: "Slajd 13 explicitně uvádí vzorec Síla testu: 1-β.",
    type: "calculation",
    category: "Chyby testování",
  },
  {
    id: "AS1_31",
    question:
      "Pokud H0 platí a my ji nezamítneme, jaké rozhodnutí jsme učinili?",
    options: [
      "Správné rozhodnutí",
      "Chyba I. druhu",
      "Chyba II. druhu",
      "Nelze určit",
    ],
    correctAnswer: "Správné rozhodnutí",
    explanation:
      "Tabulka na slajdu 14 ukazuje, že pokud H0 platí a rozhodnutí je 'H0 přijmout' (nezamítnout), jedná se o správné rozhodnutí s pravděpodobností ≥ 1-α.",
    type: "multiple-choice",
    category: "Chyby testování",
  },
  {
    id: "AS1_32",
    question:
      "Pokud H0 neplatí (platí H1) a my H0 zamítneme, jaké rozhodnutí jsme učinili?",
    options: [
      "Správné rozhodnutí (Síla testu)",
      "Chyba I. druhu",
      "Chyba II. druhu",
      "Nelze určit",
    ],
    correctAnswer: "Správné rozhodnutí (Síla testu)",
    explanation:
      "Tabulka na slajdu 14 ukazuje, že pokud H0 neplatí a rozhodnutí je 'H0 zamítnout', jedná se o správné rozhodnutí s pravděpodobností 1-β (síla testu).",
    type: "multiple-choice",
    category: "Chyby testování",
  },
  {
    id: "AS1_33",
    question: "Proč se v praxi často říká 'nezamítáme H0' místo 'přijímáme H0'?",
    correctAnswer:
      "Protože chyba II. druhu (β) často není známa nebo kontrolována, takže nezamítnutí H0 neznamená nutně její potvrzení, jen nedostatek důkazů proti ní.",
    explanation:
      "Slajd 15 vysvětluje, že velikost rizika chyby II. druhu často neznáme, a proto 'místo přijetí H₀ proto H₀ nezamítáme'.",
    type: "theory",
    category: "Interpretace výsledků",
  },
  {
    id: "AS1_34",
    question:
      "Jak ovlivní snížení hladiny významnosti α (např. z 0.05 na 0.01) pravděpodobnost chyby II. druhu β (při stejném rozsahu výběru)?",
    options: ["Sníží β", "Zvýší β", "Neovlivní β", "Vztah je náhodný"],
    correctAnswer: "Zvýší β",
    explanation:
      "Slajd 16 uvádí: 'Chyba II. druhu se zvětšuje, když se zmenšuje (zvolená) chyba I. druhu'. Snížení α zmenšuje kritický obor, což ztěžuje zamítnutí H0, a tím zvyšuje šanci na nezamítnutí falešné H0 (chyba II. druhu).",
    type: "multiple-choice",
    category: "Chyby testování",
  },
  {
    id: "AS1_35",
    question:
      "Jak ovlivní zvětšení rozsahu výběru (n) pravděpodobnost chyby II. druhu β (při stejné hladině α)?",
    options: ["Zvýší β", "Sníží β", "Neovlivní β", "Vztah je náhodný"],
    correctAnswer: "Sníží β",
    explanation:
      "Slajd 16 uvádí: 'Chyba II. druhu klesá, pokud se zvětšuje rozsah souboru'. Větší výběr poskytuje více informací a zvyšuje sílu testu (1-β).",
    type: "multiple-choice",
    category: "Chyby testování",
  },
  {
    id: "AS1_36",
    question:
      "Jak ovlivní menší variabilita dat (menší populační rozptyl) pravděpodobnost chyby II. druhu β?",
    options: ["Zvýší β", "Sníží β", "Neovlivní β", "Vztah je náhodný"],
    correctAnswer: "Sníží β",
    explanation:
      "Slajd 16 uvádí: 'Chyba II. druhu se snižuje, pokud variabilita znaku je menší'. Menší variabilita usnadňuje detekci skutečných rozdílů.",
    type: "multiple-choice",
    category: "Chyby testování",
  },
  {
    id: "AS1_37",
    question: "Jaké jsou dvě nejčastěji používané hladiny významnosti α?",
    correctAnswer: "α = 0,05 (5%) a α = 0,01 (1%).",
    explanation:
      "Slajd 16 uvádí: 'Většinou uvažujeme chybu α = 0,05 nebo α = 0,01.'",
    type: "theory",
    category: "Chyby testování",
  },
  {
    id: "AS1_38",
    question:
      "Jak vypadá oblast zamítání pro oboustranný test (H1: μ ≠ μ0)?",
    correctAnswer:
      "Skládá se ze dvou oddělených oblastí v obou 'ocasech' rozdělení testového kritéria.",
    explanation:
      "Slajd 17 ukazuje pro oboustrannou alternativu dvě oblasti zamítání, každou s plochou α/2.",
    type: "theory",
    category: "Kritický obor",
  },
  {
    id: "AS1_39",
    question: "Jak vypadá oblast zamítání pro levostranný test (H1: μ < μ0)?",
    correctAnswer:
      "Je to jedna oblast v levém 'ocasu' rozdělení testového kritéria.",
    explanation:
      "Slajd 17 ukazuje pro levostrannou alternativu jednu oblast zamítání vlevo s plochou α.",
    type: "theory",
    category: "Kritický obor",
  },
  {
    id: "AS1_40",
    question: "Jak vypadá oblast zamítání pro pravostranný test (H1: μ > μ0)?",
    correctAnswer:
      "Je to jedna oblast v pravém 'ocasu' rozdělení testového kritéria.",
    explanation:
      "Slajd 17 ukazuje pro pravostrannou alternativu jednu oblast zamítání vpravo s plochou α.",
    type: "theory",
    category: "Kritický obor",
  },
  {
    id: "AS1_41",
    question: "Co je kritická hodnota?",
    correctAnswer:
      "Hodnota (nebo hodnoty), která odděluje kritický obor (oblast zamítnutí H0) od oblasti nezamítnutí H0.",
    explanation:
      "Slajd 18 definuje kritickou oblast jako vymezenou kritickou hodnotou. Slajd 19 definuje kritickou hodnotu jako určující rozdělení na oblasti Wα a V.",
    type: "theory",
    category: "Základní pojmy",
  },
  {
    id: "AS1_42",
    question: "Na čem závisí kritická hodnota?",
    correctAnswer:
      "Na zvoleném testu, zvolené hladině významnosti (α), typu alternativní hypotézy (oboustranná/jednostranná) a tvaru rozdělení testového kritéria při platnosti H0.",
    explanation: "Slajd 18 vyjmenovává tyto závislosti.",
    type: "theory",
    category: "Kritický obor",
  },
  {
    id: "AS1_43",
    question: "Jaký je první krok v obecném postupu testování hypotéz?",
    correctAnswer: "Formulace nulové (H0) a alternativní (H1) hypotézy.",
    explanation: "Slajd 20 uvádí jako první krok 'Formulace hypotézy...'.",
    type: "theory",
    category: "Postup testování",
  },
  {
    id: "AS1_44",
    question: "Jaký je druhý krok v obecném postupu testování hypotéz?",
    correctAnswer: "Volba hladiny významnosti (α).",
    explanation:
      "Slajd 20 uvádí jako druhý krok 'Volba hladiny významnosti (chyby α)'.",
    type: "theory",
    category: "Postup testování",
  },
  {
    id: "AS1_45",
    question: "Co následuje po volbě testu v postupu testování?",
    correctAnswer: "Výpočet hodnoty testového kritéria (TK) z výběrových dat.",
    explanation:
      "Slajd 20 uvádí po 'Volba vhodného testu' krok 'Výpočet testového kritéria (TK)...'.",
    type: "theory",
    category: "Postup testování",
  },
  {
    id: "AS1_46",
    question: "Jak se rozhodne o hypotéze?",
    correctAnswer:
      "Porovnáním vypočtené hodnoty testového kritéria (TK) s kritickým oborem (Wα) nebo kritickou hodnotou.",
    explanation:
      "Slajd 20 uvádí krok 'Rozhodnutí o hypotéze na základě TK a Wα'.",
    type: "theory",
    category: "Postup testování",
  },
  {
    id: "AS1_47",
    question: "Jaký je poslední krok v postupu testování hypotéz?",
    correctAnswer: "Interpretace výsledku v kontextu původního problému.",
    explanation:
      "Slajd 20 uvádí jako poslední krok 'Interpretace výsledku'.",
    type: "theory",
    category: "Postup testování",
  },
  {
    id: "AS1_48",
    question:
      "Pokud vypočtená hodnota testového kritéria padne do kritického oboru Wα, jaký je závěr?",
    options: [
      "Zamítáme H0",
      "Nezamítáme H0",
      "Přijímáme H1",
      "Zamítáme H0 a přijímáme H1",
    ],
    correctAnswer: "Zamítáme H0 a přijímáme H1",
    explanation:
      "Slajd 12 uvádí pravidlo: Pokud g(x) ∈ Wα, zamítáme H0 (přijímáme H1). Rozhodnutí je zamítnout H0, což implikuje podporu pro H1.",
    type: "multiple-choice",
    category: "Postup testování",
  },
  {
    id: "AS1_49",
    question:
      "Pokud vypočtená hodnota testového kritéria nepadne do kritického oboru Wα (padne do V), jaký je závěr?",
    options: [
      "Zamítáme H0",
      "Nezamítáme H0",
      "Přijímáme H0",
      "Zamítáme H1",
    ],
    correctAnswer: "Nezamítáme H0",
    explanation:
      "Slajd 12 uvádí pravidlo: Jestliže g(x) ∉ Wα, potom H0 nezamítáme.",
    type: "multiple-choice",
    category: "Postup testování",
  },
  {
    id: "AS1_50",
    question:
      "Na čem závisí tvar rozdělení testového kritéria při platnosti H0?",
    correctAnswer:
      "Na testovaném parametru, na rozsahu výběru a na rozdělení sledované veličiny v populaci.",
    explanation: "Slajd 18 uvádí tyto závislosti.",
    type: "theory",
    category: "Základní pojmy",
  },
  {
    id: "AS1_51",
    question: "Co znamená koncept p-hodnoty zmíněný na slajdu 1?",
    correctAnswer:
      "P-hodnota je pravděpodobnost získání pozorované nebo extrémnější hodnoty testového kritéria, za předpokladu platnosti H0. Používá se jako alternativní způsob rozhodování o hypotéze (porovnáním p-hodnoty s α).",
    explanation:
      "Slajd 1 zmiňuje 'Koncept p hodnoty a rozhodnutí o hypotéze'. Ačkoliv není detailně vysvětlen v této prezentaci, jedná se o standardní statistický koncept úzce související s testováním.",
    type: "theory",
    category: "Základní pojmy",
  },
];