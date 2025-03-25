import { Practice } from '../../types';

export const hypothesisTestingQuestions: Practice[] = [
  {
    id: 'ht1.1',
    question: 'Co je nulová hypotéza (H₀)?',
    options: [
      'Hypotéza, kterou se snažíme dokázat',
      'Výchozí předpoklad, který testujeme',
      'Alternativní tvrzení k platné teorii',
      'Hypotéza, která je vždy pravdivá'
    ],
    correctAnswer: 'Výchozí předpoklad, který testujeme',
    explanation: 'Nulová hypotéza je výchozí předpoklad, který je považován za pravdivý, dokud není dostatek důkazů pro jeho zamítnutí.',
    type: 'multiple-choice',
    category: 'Testy hypotéz'
  },
  {
    id: 'ht1.2',
    question: 'Co je alternativní hypotéza (H₁)?',
    options: [
      'Tvrzení, které platí, když zamítneme nulovou hypotézu',
      'Hypotéza, která je testována jako první',
      'Vždy je to tvrzení o nerovnosti parametrů',
      'Hypotéza, která nemůže být statisticky testována'
    ],
    correctAnswer: 'Tvrzení, které platí, když zamítneme nulovou hypotézu',
    explanation: 'Alternativní hypotéza představuje tvrzení, které přijímáme, pokud data poskytují dostatek důkazů proti nulové hypotéze.',
    type: 'multiple-choice',
    category: 'Testy hypotéz'
  },
  {
    id: 'ht1.3',
    question: 'Co je hladina významnosti (α)?',
    options: [
      'Pravděpodobnost správného zamítnutí nulové hypotézy',
      'Pravděpodobnost chyby I. druhu (zamítnutí pravdivé H₀)',
      'Pravděpodobnost chyby II. druhu (nezamítnutí nepravdivé H₀)',
      'Síla statistického testu'
    ],
    correctAnswer: 'Pravděpodobnost chyby I. druhu (zamítnutí pravdivé H₀)',
    explanation: 'Hladina významnosti je maximální přípustná pravděpodobnost chyby I. druhu, tedy pravděpodobnost zamítnutí nulové hypotézy, když je ve skutečnosti pravdivá.',
    type: 'multiple-choice',
    category: 'Testy hypotéz'
  },
  {
    id: 'ht1.4',
    question: 'Co znamená p-hodnota v kontextu testování hypotéz?',
    options: [
      'Pravděpodobnost, že nulová hypotéza je pravdivá',
      'Pravděpodobnost získání testové statistiky alespoň tak extrémní jako pozorovaná, za předpokladu platnosti H₀',
      'Minimální hladina významnosti, při které bychom zamítli H₀',
      'Pravděpodobnost chyby II. druhu'
    ],
    correctAnswer: 'Pravděpodobnost získání testové statistiky alespoň tak extrémní jako pozorovaná, za předpokladu platnosti H₀',
    explanation: 'P-hodnota představuje pravděpodobnost pozorování výsledku alespoň tak extrémního jako ten, který jsme získali z našich dat, za předpokladu, že nulová hypotéza je pravdivá.',
    type: 'multiple-choice',
    category: 'Testy hypotéz'
  },
  {
    id: 'ht1.5',
    question: 'Jaký je vztah mezi p-hodnotou a hladinou významnosti při rozhodování o H₀?',
    options: [
      'Pokud p < α, zamítáme H₀',
      'Pokud p > α, zamítáme H₀',
      'Pokud p = α, zamítáme H₀',
      'P-hodnota nemá vliv na rozhodnutí o H₀'
    ],
    correctAnswer: 'Pokud p < α, zamítáme H₀',
    explanation: 'Pokud je p-hodnota menší než předem stanovená hladina významnosti α, pak zamítáme nulovou hypotézu ve prospěch alternativní hypotézy.',
    type: 'multiple-choice',
    category: 'Testy hypotéz'
  },
  {
    id: 'ht1.6',
    question: 'Co je kritická hodnota v testu hypotéz?',
    type: 'theory',
    correctAnswer: 'Hodnota testové statistiky, která odděluje oblast nezamítnutí nulové hypotézy od oblasti zamítnutí.',
    explanation: 'Kritická hodnota je hranice, která rozděluje oblast možných hodnot testové statistiky na oblast přijetí a zamítnutí nulové hypotézy. Určuje se na základě zvolené hladiny významnosti a použitého rozdělení pravděpodobnosti.',
    category: 'Testy hypotéz'
  },
  {
    id: 'ht1.7',
    question: 'Jaké jsou dva základní přístupy k rozhodování o hypotézách?',
    options: [
      'Bayesovský a frekventistický přístup',
      'Kritická hodnota a p-hodnota',
      'Parametrický a neparametrický přístup',
      'Jednostranný a dvoustranný test'
    ],
    correctAnswer: 'Kritická hodnota a p-hodnota',
    explanation: 'Při testování hypotéz můžeme rozhodovat buď porovnáním testové statistiky s kritickou hodnotou, nebo porovnáním vypočtené p-hodnoty s hladinou významnosti.',
    type: 'multiple-choice',
    category: 'Testy hypotéz'
  },
  {
    id: 'ht1.8',
    question: 'Co je to chyba I. druhu v testování hypotéz?',
    type: 'theory',
    correctAnswer: 'Zamítnutí nulové hypotézy, která je ve skutečnosti pravdivá.',
    explanation: 'Chyba I. druhu nastává, když test vede k zamítnutí nulové hypotézy, přestože je ve skutečnosti pravdivá. Pravděpodobnost této chyby je rovna hladině významnosti α.',
    category: 'Testy hypotéz'
  },
  {
    id: 'ht1.9',
    question: 'Co je to chyba II. druhu v testování hypotéz?',
    type: 'theory',
    correctAnswer: 'Nezamítnutí nulové hypotézy, která je ve skutečnosti nepravdivá.',
    explanation: 'Chyba II. druhu nastává, když test nevede k zamítnutí nulové hypotézy, přestože je ve skutečnosti nepravdivá. Pravděpodobnost této chyby se označuje β.',
    category: 'Testy hypotéz'
  },
  {
    id: 'ht1.10',
    question: 'Co je síla testu?',
    options: [
      'Pravděpodobnost správného zamítnutí nulové hypotézy, když je nepravdivá',
      'Pravděpodobnost chyby I. druhu',
      'Pravděpodobnost chyby II. druhu',
      'Schopnost testu detekovat malé odchylky od nulové hypotézy'
    ],
    correctAnswer: 'Pravděpodobnost správného zamítnutí nulové hypotézy, když je nepravdivá',
    explanation: 'Síla testu je pravděpodobnost zamítnutí nulové hypotézy, když je alternativní hypotéza pravdivá. Vypočítá se jako 1-β, kde β je pravděpodobnost chyby II. druhu.',
    type: 'multiple-choice',
    category: 'Testy hypotéz'
  },
  {
    id: 'ht1.11',
    question: 'Jaký je rozdíl mezi jednostranným a dvoustranným testem?',
    type: 'theory',
    correctAnswer: 'Jednostranný test ověřuje, zda je parametr větší nebo menší než určitá hodnota, zatímco dvoustranný test ověřuje, zda se parametr liší od určité hodnoty v libovolném směru.',
    explanation: 'V jednostranném testu je alternativní hypotéza formulována jako nerovnost v jednom směru (< nebo >), zatímco v dvoustranném testu je formulována jako obecná nerovnost (≠).',
    category: 'Testy hypotéz'
  },
  {
    id: 'ht1.12',
    question: 'Kdy použijeme t-test?',
    options: [
      'Při testování hypotéz o rozptylu normálního rozdělení',
      'Při testování hypotéz o střední hodnotě normálního rozdělení s neznámým rozptylem',
      'Při porovnávání několika průměrů zároveň',
      'Při testování nezávislosti kategoriálních proměnných'
    ],
    correctAnswer: 'Při testování hypotéz o střední hodnotě normálního rozdělení s neznámým rozptylem',
    explanation: 't-test se používá, když chceme testovat hypotézy o střední hodnotě normálního rozdělení a rozptyl populace je neznámý a musí být odhadnut z dat.',
    type: 'multiple-choice',
    category: 'Testy hypotéz'
  },
  {
    id: 'ht1.13',
    question: 'Co je to párový t-test?',
    type: 'theory',
    correctAnswer: 'Statistický test používaný k porovnání dvou závislých výběrů, který analyzuje rozdíly mezi párovými pozorováními.',
    explanation: 'Párový t-test se používá, když máme dva závislé výběry (např. měření před a po intervenci u stejných subjektů) a chceme testovat, zda se střední hodnota rozdílů mezi párovými pozorováními liší od nuly.',
    category: 'Testy hypotéz'
  },
  {
    id: 'ht1.14',
    question: 'Které předpoklady musí být splněny pro použití dvouvýběrového t-testu?',
    options: [
      'Nezávislost výběrů, normalita dat, homogenita rozptylů',
      'Pouze nezávislost výběrů',
      'Pouze normalita dat',
      'Velké výběry (n > 30)'
    ],
    correctAnswer: 'Nezávislost výběrů, normalita dat, homogenita rozptylů',
    explanation: 'Pro validní použití dvouvýběrového t-testu předpokládáme, že výběry jsou nezávislé, data v obou skupinách pocházejí z normálního rozdělení a rozptyly v obou skupinách jsou stejné (homogenní).',
    type: 'multiple-choice',
    category: 'Testy hypotéz'
  },
  {
    id: 'ht1.15',
    question: 'K čemu slouží F-test?',
    options: [
      'K testování rovnosti středních hodnot více skupin',
      'K testování rovnosti rozptylů dvou normálních rozdělení',
      'K testování normality dat',
      'K testování nezávislosti kategoriálních proměnných'
    ],
    correctAnswer: 'K testování rovnosti rozptylů dvou normálních rozdělení',
    explanation: 'F-test se používá k testování nulové hypotézy, že dva výběry pocházejí z normálních rozdělení se stejnými rozptyly.',
    type: 'multiple-choice',
    category: 'Testy hypotéz'
  },
  {
    id: 'ht1.16',
    question: 'Co je analýza rozptylu (ANOVA)?',
    type: 'theory',
    correctAnswer: 'Statistická metoda používaná k testování rozdílů mezi středními hodnotami tří nebo více skupin.',
    explanation: 'ANOVA rozšiřuje t-test na více než dvě skupiny a testuje nulovou hypotézu, že všechny skupiny mají stejnou střední hodnotu, proti alternativní hypotéze, že alespoň jedna střední hodnota se liší.',
    category: 'Testy hypotéz'
  },
  {
    id: 'ht1.17',
    question: 'Co testuje chí-kvadrát test nezávislosti?',
    options: [
      'Zda jsou dvě kategoriální proměnné na sobě nezávislé',
      'Zda data pocházejí z normálního rozdělení',
      'Zda mají dvě populace stejný rozptyl',
      'Zda mají dvě populace stejnou střední hodnotu'
    ],
    correctAnswer: 'Zda jsou dvě kategoriální proměnné na sobě nezávislé',
    explanation: 'Chí-kvadrát test nezávislosti se používá k určení, zda existuje statisticky významný vztah mezi dvěma kategoriálními proměnnými.',
    type: 'multiple-choice',
    category: 'Testy hypotéz'
  },
  {
    id: 'ht1.18',
    question: 'Jaký je hlavní rozdíl mezi parametrickými a neparametrickými testy?',
    type: 'theory',
    correctAnswer: 'Parametrické testy předpokládají specifické rozdělení dat (obvykle normální), zatímco neparametrické testy mají méně přísné předpoklady o rozdělení dat.',
    explanation: 'Parametrické testy jsou založeny na odhadech parametrů populace a vyžadují specifické předpoklady o rozdělení dat. Neparametrické testy jsou naproti tomu robustnější a lze je použít i tehdy, když nejsou splněny předpoklady parametrických testů.',
    category: 'Testy hypotéz'
  },
  {
    id: 'ht1.19',
    question: 'Co je neparametrickou alternativou k dvou výběrovému t-testu?',
    options: [
      'Mann-Whitney U test (Wilcoxon rank-sum test)',
      'Kruskal-Wallis test',
      'Spearmanův korelační koeficient',
      'Chí-kvadrát test'
    ],
    correctAnswer: 'Mann-Whitney U test (Wilcoxon rank-sum test)',
    explanation: 'Mann-Whitney U test (také známý jako Wilcoxon rank-sum test) je neparametrická alternativa k dvouvýběrovému t-testu, která porovnává mediány dvou nezávislých skupin.',
    type: 'multiple-choice',
    category: 'Testy hypotéz'
  },
  {
    id: 'ht1.20',
    question: 'Jakou nulovou hypotézu bychom formulovali při testování, zda je střední hodnota populace rovna konkrétní hodnotě μ₀?',
    options: [
      'H₀: μ = μ₀',
      'H₀: μ ≠ μ₀',
      'H₀: μ > μ₀',
      'H₀: μ < μ₀'
    ],
    correctAnswer: 'H₀: μ = μ₀',
    explanation: 'Nulová hypotéza vždy obsahuje rovnost a v tomto případě tvrdí, že střední hodnota populace je rovna hypotetické hodnotě μ₀.',
    type: 'multiple-choice',
    category: 'Testy hypotéz'
  },
  {
    id: 'ht1.21',
    question: 'Jakou alternativní hypotézu bychom formulovali pro jednostranný test, kdy chceme ověřit, že střední hodnota populace je větší než μ₀?',
    options: [
      'H₁: μ = μ₀',
      'H₁: μ ≠ μ₀',
      'H₁: μ > μ₀',
      'H₁: μ < μ₀'
    ],
    correctAnswer: 'H₁: μ > μ₀',
    explanation: 'V jednostranném testu alternativní hypotéza specifikuje směr rozdílu. Pokud chceme ověřit, že střední hodnota je větší než μ₀, pak H₁: μ > μ₀.',
    type: 'multiple-choice',
    category: 'Testy hypotéz'
  },
  {
    id: 'ht1.22',
    question: 'Jaký je vztah mezi velikostí vzorku a silou testu?',
    type: 'theory',
    correctAnswer: 'S rostoucí velikostí vzorku roste síla testu.',
    explanation: 'Při větším vzorku máme více informací, což vede k přesnějším odhadům a větší schopnosti detekovat skutečné rozdíly. Proto větší velikost vzorku obecně zvyšuje sílu testu, tedy pravděpodobnost správného zamítnutí nepravdivé nulové hypotézy.',
    category: 'Testy hypotéz'
  },
  {
    id: 'ht1.23',
    question: 'Co se stane s p-hodnotou, když zvýšíme velikost vzorku při zachování stejného efektu?',
    options: [
      'P-hodnota se zvýší',
      'P-hodnota se sníží',
      'P-hodnota zůstane stejná',
      'Nelze obecně určit'
    ],
    correctAnswer: 'P-hodnota se sníží',
    explanation: 'Při větším vzorku máme větší statistickou sílu, což vede k nižším p-hodnotám pro stejně velký efekt. To znamená, že s větším vzorkem je pravděpodobnější, že zamítneme nulovou hypotézu.',
    type: 'multiple-choice',
    category: 'Testy hypotéz'
  },
  {
    id: 'ht1.24',
    question: 'Jak se liší jednovýběrový a dvouvýběrový t-test?',
    type: 'theory',
    correctAnswer: 'Jednovýběrový t-test porovnává střední hodnotu jednoho vzorku s pevnou hodnotou, zatímco dvouvýběrový t-test porovnává střední hodnoty dvou různých vzorků.',
    explanation: 'Jednovýběrový t-test se používá, když chceme porovnat střední hodnotu jedné skupiny s nějakou hypotetickou hodnotou. Dvouvýběrový t-test se používá, když porovnáváme střední hodnoty dvou nezávislých skupin.',
    category: 'Testy hypotéz'
  },
  {
    id: 'ht1.25',
    question: 'Co je to interval spolehlivosti a jak souvisí s testováním hypotéz?',
    type: 'theory',
    correctAnswer: 'Interval spolehlivosti je rozsah hodnot, který s určitou pravděpodobností (hladinou spolehlivosti) obsahuje skutečnou hodnotu parametru populace. Pokud 95% interval spolehlivosti pro parametr nezahrnuje hodnotu z nulové hypotézy, pak můžeme zamítnout nulovou hypotézu na hladině významnosti 5%.',
    explanation: 'Interval spolehlivosti a testování hypotéz jsou dvě strany téže mince. 95% interval spolehlivosti zahrnuje všechny hodnoty parametru, které bychom nezamítli při testování na hladině významnosti 5%.',
    category: 'Testy hypotéz'
  },
  {
    id: 'ht1.26',
    question: 'Jak ovlivňuje hladina významnosti (α) šířku intervalu spolehlivosti?',
    options: [
      'S klesající α se interval spolehlivosti zužuje',
      'S klesající α se interval spolehlivosti rozšiřuje',
      'Změna α nemá vliv na šířku intervalu spolehlivosti',
      'Vztah závisí na typu rozdělení dat'
    ],
    correctAnswer: 'S klesající α se interval spolehlivosti rozšiřuje',
    explanation: 'Hladina spolehlivosti intervalu je 1-α. Pokud snížíme α (např. z 0.05 na 0.01), zvýšíme hladinu spolehlivosti (z 95% na 99%), což vede k širšímu intervalu spolehlivosti.',
    type: 'multiple-choice',
    category: 'Testy hypotéz'
  },
  {
    id: 'ht1.27',
    question: 'Co je to testová statistika?',
    type: 'theory',
    correctAnswer: 'Hodnota vypočítaná z výběrových dat, která se používá k rozhodnutí o zamítnutí nebo nezamítnutí nulové hypotézy.',
    explanation: 'Testová statistika je funkce výběrových dat, jejíž rozdělení pravděpodobnosti je známé za předpokladu platnosti nulové hypotézy. Porovnání hodnoty testové statistiky s kritickými hodnotami nebo výpočet p-hodnoty umožňuje rozhodnutí o nulové hypotéze.',
    category: 'Testy hypotéz'
  },
  {
    id: 'ht1.28',
    question: 'Které rozdělení pravděpodobnosti se používá při testování hypotéz o podílu v populaci při velkých výběrech?',
    options: [
      'Normální rozdělení',
      't-rozdělení',
      'F-rozdělení',
      'Chí-kvadrát rozdělení'
    ],
    correctAnswer: 'Normální rozdělení',
    explanation: 'Při testování hypotéz o podílu v populaci a dostatečně velkém výběru (np ≥ 5 a n(1-p) ≥ 5) lze použít aproximaci normálním rozdělením.',
    type: 'multiple-choice',
    category: 'Testy hypotéz'
  },
  {
    id: 'ht1.29',
    question: 'Co je mnohonásobné testování a jaký problém může způsobit?',
    type: 'theory',
    correctAnswer: 'Mnohonásobné testování je situace, kdy provádíme více statistických testů současně. Problémem je zvýšené riziko chyby I. druhu (falešně pozitivních výsledků).',
    explanation: 'Při provádění více testů současně se zvyšuje pravděpodobnost, že alespoň v jednom z nich dojde k chybě I. druhu (náhodné zamítnutí pravdivé nulové hypotézy). S každým dalším testem roste celková pravděpodobnost alespoň jednoho falešně pozitivního výsledku.',
    category: 'Testy hypotéz'
  },
  {
    id: 'ht1.30',
    question: 'Jaké jsou metody korekce pro mnohonásobné testování?',
    options: [
      'Bonferroniho korekce, Hochbergova korekce, FDR (False Discovery Rate)',
      'Bootstrapping, jackknife, cross-validace',
      'ANOVA, ANCOVA, MANOVA',
      'Pearsonův koeficient, Spearmanův koeficient, Kendallovo tau'
    ],
    correctAnswer: 'Bonferroniho korekce, Hochbergova korekce, FDR (False Discovery Rate)',
    explanation: 'Metody jako Bonferroniho korekce (nejjednodušší, ale konzervativní), Hochbergova korekce a kontrola FDR (False Discovery Rate) se používají k úpravě hladin významnosti nebo p-hodnot při mnohonásobném testování, aby se snížilo riziko falešně pozitivních výsledků.',
    type: 'multiple-choice',
    category: 'Testy hypotéz'
  }
]; 