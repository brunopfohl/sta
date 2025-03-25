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
  },
    {
    id: 'hypotheses-1',
    question: 'Co je cílem testování hypotéz?',
    options: [
      'Dokázat, že nulová hypotéza je pravdivá.',
      'Vyvrátit alternativní hypotézu.',
      'Ověřit, zda data z výběru podporují nebo vyvracejí domněnku o populaci.',
      'Zajistit, aby hladina významnosti byla nulová.',
    ],
    correctAnswer:
      'Ověřit, zda data z výběru podporují nebo vyvracejí domněnku o populaci.',
    explanation:
      'Testování hypotéz se používá k posouzení, zda jsou data z výběru konzistentní s určitou hypotézou o populaci.',
    type: 'theory',
    category: 'Testování hypotéz',
  },
  {
    id: 'hypotheses-2',
    question: 'Jaký je vztah mezi nulovou a alternativní hypotézou?',
    options: [
      'Jsou to synonyma.',
      'Nulová hypotéza je vždy pravdivá.',
      'Alternativní hypotéza platí, pokud neplatí nulová hypotéza.',
      'Nulová hypotéza je speciální případ alternativní hypotézy.',
    ],
    correctAnswer:
      'Alternativní hypotéza platí, pokud neplatí nulová hypotéza.',
    explanation:
      'Nulová a alternativní hypotéza jsou vzájemně se vylučující. Pokud nulová hypotéza neplatí, předpokládáme platnost alternativní hypotézy.',
    type: 'theory',
    category: 'Testování hypotéz',
  },
  {
    id: 'alpha-1',
    question: 'Co vyjadřuje hladina významnosti (α)?',
    options: [
      'Pravděpodobnost, že je nulová hypotéza pravdivá.',
      'Pravděpodobnost chyby II. druhu.',
      'Pravděpodobnost, že chybně zamítneme platnou nulovou hypotézu.',
      'Pravděpodobnost, že správně přijmeme nulovou hypotézu.',
    ],
    correctAnswer:
      'Pravděpodobnost, že chybně zamítneme platnou nulovou hypotézu.',
    explanation:
      'Hladina významnosti (α) udává, jaké riziko jsme ochotni podstoupit, že se dopustíme chyby I. druhu (zamítneme platnou H₀).',
    type: 'theory',
    category: 'Testování hypotéz',
  },
  {
    id: 'p-value-1',
    question:
      'Jak rozhodneme o zamítnutí nulové hypotézy pomocí p-hodnoty?',
    options: [
      'Zamítáme H₀, pokud je p-hodnota větší než α.',
      'Zamítáme H₀, pokud je p-hodnota menší nebo rovna α.',
      'Zamítáme H₀, pokud je p-hodnota rovna α.',
      'P-hodnota nemá vliv na rozhodování o H₀.',
    ],
    correctAnswer: 'Zamítáme H₀, pokud je p-hodnota menší nebo rovna α.',
    explanation:
      'Pokud je p-hodnota menší než zvolená hladina významnosti (α), znamená to, že data poskytují dostatečný důkaz pro zamítnutí nulové hypotézy.',
    type: 'theory',
    category: 'Testování hypotéz',
  },
  {
    id: 'one-sample-t-test-1',
    question:
      'Kdy použijeme t-test pro jeden výběr (one-sample t-test)?',
    options: [
      'Když chceme porovnat dva nezávislé výběry.',
      'Když chceme otestovat hypotézu o podílu.',
      'Když chceme otestovat hypotézu o střední hodnotě, když neznáme rozptyl populace.',
      'Když chceme porovnat dva závislé výběry.',
    ],
    correctAnswer:
      'Když chceme otestovat hypotézu o střední hodnotě, když neznáme rozptyl populace.',
    explanation:
      'T-test pro jeden výběr se používá, když chceme otestovat, zda se střední hodnota populace rovná určité hodnotě, ale neznáme rozptyl populace.',
    type: 'theory',
    category: 'Testy pro jeden výběr',
  },
  {
    id: 'proportion-test-1',
    question: 'Kdy použijeme test hypotézy o podílu?',
    options: [
      'Když máme spojitá data.',
      'Když máme kvalitativní data a chceme ověřit hypotézu o pravděpodobnosti určitého jevu.',
      'Když chceme porovnat střední hodnoty dvou populací.',
      'Když chceme testovat, zda mají dvě populace stejný rozptyl.',
    ],
    correctAnswer:
      'Když máme kvalitativní data a chceme ověřit hypotézu o pravděpodobnosti určitého jevu.',
    explanation:
      'Test hypotézy o podílu se používá, když máme data, která vyjadřují výskyt určitého jevu (např. ano/ne) a chceme ověřit hypotézu o pravděpodobnosti tohoto jevu v populaci.',
    type: 'theory',
    category: 'Testy pro jeden výběr',
  },
  {
    id: 'paired-t-test-1',
    question: 'Kdy použijeme párový t-test?',
    options: [
      'Pro dva nezávislé výběry.',
      'Pro dva závislé výběry, kdy měříme stejný objekt dvakrát.',
      'Pro testování hypotézy o rozptylu.',
      'Pro testování hypotézy o podílu.',
    ],
    correctAnswer:
      'Pro dva závislé výběry, kdy měříme stejný objekt dvakrát.',
    explanation:
      'Párový t-test se používá, když máme dvě měření pro stejný objekt (např. před a po zákroku) a chceme otestovat, zda se průměrné rozdíly mezi měřeními rovnají nule.',
    type: 'theory',
    category: 'Testy pro dva výběry',
  },
  {
    id: 'independent-t-test-1',
    question:
      'Jaký je rozdíl mezi t-testem se shodnými a neshodnými rozptyly?',
    options: [
      'Používají se pro různé typy dat.',
      'T-test se shodnými rozptyly předpokládá, že populace mají stejný rozptyl, zatímco t-test s neshodnými rozptyly tento předpoklad neklade.',
      'Nemají žádný rozdíl.',
      'Používají se pro různé hladiny významnosti.',
    ],
    correctAnswer:
      'T-test se shodnými rozptyly předpokládá, že populace mají stejný rozptyl, zatímco t-test s neshodnými rozptyly tento předpoklad neklade.',
    explanation:
      'Pokud máme důvod se domnívat, že rozptyly v obou populacích jsou stejné, použijeme t-test se shodnými rozptyly. Pokud tento předpoklad nemůžeme učinit, použijeme t-test s neshodnými rozptyly (Welchův test).',
    type: 'theory',
    category: 'Testy pro dva výběry',
  },
  {
    id: 'f-test-1',
    question: 'K čemu slouží F-test?',
    options: [
      'K testování shody středních hodnot.',
      'K testování shody rozptylů dvou populací.',
      'K testování shody podílů.',
      'K testování normality dat.',
    ],
    correctAnswer: 'K testování shody rozptylů dvou populací.',
    explanation:
      'F-test se používá k ověření, zda mají dvě populace stejný rozptyl. Výsledek F-testu se často používá k rozhodnutí, zda použít t-test se shodnými nebo neshodnými rozptyly.',
    type: 'theory',
    category: 'Testy pro dva výběry',
  },
  {
    id: 'qualitative-data-1',
    question:
      'Kdy použijeme test shody dvou parametrů binomického rozdělení?',
    options: [
      'Když máme spojitá data.',
      'Když máme kvalitativní data (ano/ne) a chceme porovnat dva nezávislé výběry.',
      'Když chceme testovat shodu středních hodnot dvou populací.',
      'Když chceme testovat shodu rozptylů.',
    ],
    correctAnswer:
      'Když máme kvalitativní data (ano/ne) a chceme porovnat dva nezávislé výběry.',
    explanation:
      'Test shody dvou parametrů binomického rozdělení se používá, když chceme porovnat pravděpodobnost výskytu určitého jevu ve dvou nezávislých populacích (např. zda se liší podíl spokojených zákazníků ve dvou obchodech).',
    type: 'theory',
    category: 'Kvalitativní data',
  },
  {
    id: 'CLT-1',
    question: 'Co je to centrální limitní věta (CLV)?',
    options: [
      'Věta, která říká, že rozdělení dat se blíží binomickému rozdělení.',
      'Věta, která říká, že s rostoucím rozsahem výběru se rozdělení výběrového průměru blíží normálnímu rozdělení.',
      'Věta, která říká, že rozptyl populace se rovná rozptylu výběru.',
      'Věta, která říká, že hladina významnosti musí být vždy 0,05.',
    ],
    correctAnswer:
      'Věta, která říká, že s rostoucím rozsahem výběru se rozdělení výběrového průměru blíží normálnímu rozdělení.',
    explanation:
      'Centrální limitní věta (CLV) je klíčová pro statistickou inferenci, protože nám umožňuje používat normální rozdělení pro aproximaci rozdělení výběrových průměrů, i když původní data nemají normální rozdělení.',
    type: 'theory',
    category: 'Základní pojmy',
  },
  {
    id: 'kvantil-1',
    question: 'Co je to kvantil?',
    options: [
      'Průměrná hodnota dat.',
      'Hodnota, která dělí data na určité části.',
      'Rozptyl dat.',
      'Směrodatná odchylka dat.',
    ],
    correctAnswer: 'Hodnota, která dělí data na určité části.',
    explanation:
      'Kvantil je hodnota, pod kterou leží určité procento dat. Například medián je kvantil, který dělí data na dvě poloviny.',
    type: 'theory',
    category: 'Základní pojmy',
  },
  {
    id: 'TypeI-TypeII-errors-1',
    question:
      'Jaký je rozdíl mezi chybou I. druhu a chybou II. druhu?',
    options: [
      'Chyba I. druhu je zamítnutí platné H₀, chyba II. druhu je přijetí neplatné H₀.',
      'Chyba I. druhu je přijetí neplatné H₀, chyba II. druhu je zamítnutí platné H₀.',
      'Chyba I. druhu je chyba v datech, chyba II. druhu je chyba ve výpočtech.',
      'Nemají žádný rozdíl.',
    ],
    correctAnswer:
      'Chyba I. druhu je zamítnutí platné H₀, chyba II. druhu je přijetí neplatné H₀.',
    explanation:
      'Chyba I. druhu (α) je zamítnutí nulové hypotézy, i když je ve skutečnosti pravdivá. Chyba II. druhu (β) je přijetí nulové hypotézy, i když je ve skutečnosti neplatná.',
    type: 'theory',
    category: 'Chyby v testování hypotéz',
  },
  {
    id: 'typeI-error-prob',
    question: 'Co udává hladina významnosti?',
    options: [
      'Pravděpodobnost správného zamítnutí nulové hypotézy',
      'Pravděpodobnost spáchání chyby I. druhu',
      'Pravděpodobnost spáchání chyby II. druhu',
      'Pravděpodobnost přijetí nulové hypotézy',
    ],
    correctAnswer: 'Pravděpodobnost spáchání chyby I. druhu',
    explanation:
      'Hladina významnosti alfa je definována jako pravděpodobnost spáchání chyby I. druhu, tedy nesprávného zamítnutí pravdivé nulové hypotézy.',
    type: 'theory',
    category: 'Chyby v testování hypotéz',
  },
  {
    id: 'central-value',
    question:
      'Pokud testujeme hypotézu o střední hodnotě a rozptyl populace není znám, jaké rozdělení se používá pro testové kritérium?',
    options: [
      'Normální rozdělení',
      'Binomické rozdělení',
      't-rozdělení',
      'Exponenciální rozdělení',
    ],
    correctAnswer: 't-rozdělení',
    explanation:
      'Pro testování hypotéz o střední hodnotě, kdy není znám rozptyl populace, se používá t-rozdělení.',
    type: 'theory',
    category: 'Testování hypotéz',
  },
  {
    id: 'power-of-test',
    question: 'Co vyjadřuje síla testu?',
    options: [
      'Pravděpodobnost spáchání chyby I. druhu',
      'Pravděpodobnost správného zamítnutí neplatné nulové hypotézy',
      'Pravděpodobnost přijetí nulové hypotézy',
      'Hladinu významnosti',
    ],
    correctAnswer:
      'Pravděpodobnost správného zamítnutí neplatné nulové hypotézy',
    explanation:
      'Síla testu je pravděpodobnost, že test správně zamítne nulovou hypotézu, když je ve skutečnosti neplatná.',
    type: 'theory',
    category: 'Síla testu',
  },
  {
    id: 'binom-test',
    question:
      'Pro jaký typ dat je vhodný test o parametru binomického rozdělení?',
    options: [
      'Spojitá data',
      'Kategoriální data',
      'Data s normálním rozdělením',
      'Data s exponenciálním rozdělením',
    ],
    correctAnswer: 'Kategoriální data',
    explanation:
      'Test o parametru binomického rozdělení je vhodný pro kategoriální data, která mají dvě možnosti (např. úspěch a neúspěch).',
    type: 'theory',
    category: 'Testování hypotéz',
  },
  {
    id: 'param',
    question:
      'Co je nutné ověřit pro správné použití testu o parametru binomického rozdělení?',
    options: [
      'Normalitu dat',
      'Dostatečnou velikost výběru a platnost aproximace',
      'Shodu rozptylů',
      'Linearitu závislosti',
    ],
    correctAnswer: 'Dostatečnou velikost výběru a platnost aproximace',
    explanation:
      'Pro použití limitního testu je nutné ověřit, zda je výběr dostatečně velký a zda je možné aproximovat binomické rozdělení normálním rozdělením.',
    type: 'theory',
    category: 'Testování hypotéz',
  },
  {
    id: 'z-statistic',
    question:
      'Jaký test se používá pro hypotézu o podílu jednoho výběru, pokud jsou splněny podmínky pro použití limitní věty?',
    options: [
      'T-test',
      'F-test',
      'χ2 test',
      'Z-test',
    ],
    correctAnswer: 'Z-test',
    explanation:
      'Pro hypotézu o podílu jednoho výběru se používá Z-test, pokud jsou splněny podmínky pro použití limitní věty.',
    type: 'theory',
    category: 'Testování hypotéz',
  },
  {
    id: 'correctnes',
    question:
      'Co znamená "korekce na nespojitost" při testování hypotéz o podílu?',
    options: [
      'Úprava dat pro zajištění normality',
      'Úprava testového kritéria pro zlepšení aproximace binomického rozdělení normálním',
      'Korekce chybných měření',
      'Odstranění odlehlých hodnot',
    ],
    correctAnswer:
      'Úprava testového kritéria pro zlepšení aproximace binomického rozdělení normálním',
    explanation:
      'Korekce na nespojitost se používá k zlepšení aproximace diskrétního binomického rozdělení spojitým normálním rozdělením.',
    type: 'theory',
    category: 'Testování hypotéz',
  },
  {
    id: 'F-distribution-choice',
    question:
      'Při použití testu shody rozptylů (F-test) je nutné splnit nějaké předpoklady?',
    options: [
      'Data musejí pocházet z normálního rozdělení',
      'Rozptyly musí být stejné',
      'Střední hodnoty musí být stejné',
      'Data musí být lineární',
    ],
    correctAnswer: 'Data musejí pocházet z normálního rozdělení',
    explanation:
      'Pro správné použití F-testu je nutné, aby data pocházela z normálního rozdělení.',
    type: 'theory',
    category: 'Testování hypotéz',
  },
  {
    id: 'paired-vs-unpaired',
    question:
      'V jaké situaci je vhodnější použít párový t-test oproti běžnému (nepárovému) t-testu?',
    options: [
      'Když porovnáváme dva nezávislé vzorky',
      'Když máme data od jednoho vzorku, měřená dvakrát (např. před a po zákroku)',
      'Když testujeme shodu rozptylů',
      'Nikdy',
    ],
    correctAnswer:
      'Když máme data od jednoho vzorku, měřená dvakrát (např. před a po zákroku)',
    explanation:
      'Párový t-test je vhodný, když máme závislé vzorky, například měření provedená dvakrát na stejném objektu.',
    type: 'theory',
    category: 'Testování hypotéz',
  },
  {
    id: 'alpha=0.05',
    question:
      'Co znamená, když nastavíme hladinu významnosti α = 0,05?',
    options: [
      'Je 5% pravděpodobnost, že nulová hypotéza je správná',
      'Je 5% pravděpodobnost, že zamítneme správnou nulovou hypotézu',
      'Je 95% pravděpodobnost, že nulová hypotéza je správná',
      'Žádná z výše uvedených',
    ],
    correctAnswer:
      'Je 5% pravděpodobnost, že zamítneme správnou nulovou hypotézu',
    explanation:
      'α = 0,05 znamená, že existuje 5% riziko, že nesprávně zamítneme nulovou hypotézu.',
    type: 'theory',
    category: 'Testování hypotéz',
  },
  {
    id: '1t vs 2t',
    question:
      'Jak se liší jednostranná a dvoustranná alternativa při testování hypotéz?',
    options: [
      'Liší se v interpretaci p-hodnoty',
      'Liší se v rozhodovací oblasti',
      'Liší se ve vzorci testového kritéria',
      'Liší se ve všem',
    ],
    correctAnswer: 'Liší se v rozhodovací oblasti',
    explanation:
      'Jednostranná a dvoustranná alternativa se liší v tom, jak je rozdělena hladina významnosti mezi strany rozdělení testového kritéria.',
    type: 'theory',
    category: 'Testování hypotéz',
  },
  {
    id: 'T_DIST',
    question:
      'Co v Excelu značí T.DIST (nebo T.DIST.RT)? Na co se používá a co vrací?',
    options: [
      'Funkce pro lineární regresi, vracející sklon',
      'Funkce pro výpočet distribuční funkce t-rozdělení',
      'Funkce pro generování náhodných čísel',
      'Funkce pro výpočet směrodatné odchylky',
    ],
    correctAnswer: 'Funkce pro výpočet distribuční funkce t-rozdělení',
    explanation:
      'Funkce T.DIST v Excelu slouží k výpočtu distribuční funkce t-rozdělení. Vrácí hodnotu pravděpodobnosti pro dané t-kritérium a stupně volnosti.',
    type: 'theory',
    category: 'Excel',
  },
  {
    id: 'NORM-S',
    question:
      'Co v Excelu značí NORM.S.DIST? Na co se používá a co vrací?',
    options: [
      'Funkce pro testování normality dat',
      'Funkce pro lineární regresi, vracející reziduální součet čtverců',
      'Funkce pro výpočet distribuční funkce standardizovaného normálního rozdělení',
      'Funkce pro výpočet distribuční funkce binomického rozdělení',
    ],
    correctAnswer:
      'Funkce pro výpočet distribuční funkce standardizovaného normálního rozdělení',
    explanation:
      'Funkce NORM.S.DIST v Excelu slouží k výpočtu distribuční funkce standardizovaného normálního rozdělení (průměr 0 a rozptyl 1).',
    type: 'theory',
    category: 'Excel',
  },
  {
    id: 'TINV',
    question:
      'Co v Excelu značí T.INV? Na co se používá a co vrací?',
    options: [
      'Funkce pro lineární regresi, vracející regresní koeficienty',
      'Funkce pro výpočet inverzní t-transformace',
      'Funkce pro inverzní distribuční funkci t-rozdělení',
      'Funkce pro inverzní distribuční funkci standardizovaného normálního rozdělení',
    ],
    correctAnswer: 'Funkce pro inverzní distribuční funkci t-rozdělení',
    explanation:
      'Funkce T.INV v Excelu slouží k výpočtu inverzní distribuční funkce t-rozdělení. Vrací hodnotu kvantilu pro danou pravděpodobnost a stupně volnosti.',
    type: 'theory',
    category: 'Excel',
  },
  {
    id: 'NORM_INV',
    question:
      'Co v Excelu značí NORMSINV? Na co se používá a co vrací?',
    options: [
      'Funkce pro výpočet normy vektoru',
      'Funkce pro testování normality dat',
      'Funkce pro výpočet inverzní distribuční funkce standardizovaného normálního rozdělení',
      'Funkce pro výpočet kovariance',
    ],
    correctAnswer:
      'Funkce pro výpočet inverzní distribuční funkce standardizovaného normálního rozdělení',
    explanation:
      'Funkce NORMSINV slouží k výpočtu inverzní distribuční funkce standardizovaného normálního rozdělení.',
    type: 'theory',
    category: 'Excel',
  },
  {
    id: 'right_tail',
    question: 'Co značí .RT na konci T.INV (T.INV.RT) v Excelu?',
    options: [
      'Zaokrouhlení',
      'Inverze',
      'Zprava (right tail)',
      'Zleva (left tail)',
    ],
    correctAnswer: 'Zprava (right tail)',
    explanation:
      'Hodnota pro jednostranný test, pro horní/pravý kvantil, tzn. P(X >x) = alfa.',
    type: 'theory',
    category: 'Excel',
  },
  {
    id: 'excel2-test2',
    question:
      'Jaký postup se obecně doporučuje v rámci testování hypotéz v Excelu (zejména o středních hodnotách)?',
    options: [
      'Vždy zamítnout H0, protože Excel dělá chyby ve výpočtech',
      'Nejprve otestovat na hladinu významnosti a, a poté přes p-hodnotu ověřit výsledek',
      'Spoléhat pouze na tabulky, které Excel vytvoří automaticky',
      'Použít pouze jednu metodu, buď zamítnout na hladinu významnosti a, a nebo přes p-hodnotu',
    ],
    correctAnswer:
      'Nejprve otestovat na hladinu významnosti a, a poté přes p-hodnotu ověřit výsledek',
    explanation:
      'Rozhodnutí na hladině významnosti a ověřením p-hodnoty je ideální - p-hodnota slouží jako ověření, zda hladina významnosti správně zobrazuje daný stav.',
    type: 'theory',
    category: 'Excel',
  },
  {
    id: '2sample-vs-1',
    question: 'O co se liší 1-výběrový T test od 2-výběrového T testu?',
    options: [
      'Test se střední hodnotou proti zadané hodnotě vs. porovnání průměrů dvou skupin',
      'Pouze ve stupních volnosti',
      'V ničem',
      '2-výběrové nemají rozdělení plynule, 1-výběrové ano',
    ],
    correctAnswer:
      'Test se střední hodnotou proti zadané hodnotě vs. porovnání průměrů dvou skupin',
    explanation:
      '1 výběrový T test ověřuje, jestli je daná střední hodnota srovnatelná vůči dané hodnotě (známé), 2-výběrový T test testuje hypotézu, zda jsou střední hodnoty dvou různých skupin srovnatelné',
    type: 'theory',
    category: 'Excel',
  },
  {
    id: 'TTest-assumptions',
    question:
      'Jaké jsou základní předpoklady pro platnost T Testu? Musí být splněny?',
    options: [
      'Musí být vždy splněny, jinak je T test chybný',
      'Nemusí být splněny - platnost ověřuje p-hodnota',
      'Ano, data pocházejí z normálního rozdělení nebo má rozsah dat dostatečně vysoké N, data jsou náhodně vybrána z populace, data jsou intervalového nebo poměrového typu',
      'Ano, data pocházejí z binomického rozdělení',
    ],
    correctAnswer:
      'Ano, data pocházejí z normálního rozdělení nebo má rozsah dat dostatečně vysoké N, data jsou náhodně vybrána z populace, data jsou intervalového nebo poměrového typu',
    explanation:
      'Pokud data pocházejí z nesymetrického rozdělení o málo záznamech, pak jsou výsledky T testu nekonzistentní a mají nízkou průkaznost. Jinak je test robustní.',
    type: 'theory',
    category: 'Excel',
  },
  {
    id: 'binomial2-assumptions',
    question:
      'Jaké jsou základní předpoklady pro test binomického rozdělení pro dva výběry (v rámci parametru)? Musí být splněny?',
    options: [
      'Ne, u takto robustního modelu je to zbytečné',
      'Ne, ale výstup je hodně zkreslený',
      'Ano, data musí pocházet ze stejných záznamů',
      'Ano, musí být alespoň pět úspěchů i neúspěchů v každé skupině',
    ],
    correctAnswer:
      'Ano, musí být alespoň pět úspěchů i neúspěchů v každé skupině',
    explanation:
      'Hodnoty větší než pět úspěchů i pět neúspěchů zajišťují, že aproximace normálním rozdělením bude fungovat.',
    type: 'theory',
    category: 'Excel',
  },
  {
    id: 'korekceNes',
    question:
      'K čemu slouží korekce na nespojitost binomického rozdělení?',
    options: [
      'Úprava, aby výsledky dávaly vždy smysl',
      'Snížení efektu odlehlých hodnot',
      'Zlepšení aproximace diskrétního binomického rozdělení spojitým normálním',
      'Odstranění chybně zadaných hodnot',
    ],
    correctAnswer:
      'Zlepšení aproximace diskrétního binomického rozdělení spojitým normálním',
    explanation:
      'Korekce snižuje systematickou chybu způsobenou aproximací binomického rozdělení rozdělením plynulým (aproximací diskrétního spojitým).',
    type: 'theory',
    category: 'Excel',
  },
  {
    id: 'WhatAreWeTesting',
    question: 'Co se snažíme potvrdit během testování hypotéz?',
    options: [
      'Nulovou hypotézu',
      'Alternativní hypotézu',
      'P-hodnotu',
      'Nic - pouze vyhodnocujeme pravděpodobnost',
    ],
    correctAnswer: 'Nic - pouze vyhodnocujeme pravděpodobnost',
    explanation:
      'Neprokazujeme, že je něco pravda. Jen odhadujeme, jak reálné je, že data, která získáváme, pocházejí z distribuce dané H0',
    type: 'theory',
    category: 'Excel',
  },
  {
    id: 'one_side_Vs_2sides',
    question:
      'Jaký je rozdíl v excelu mezi jednostranným a dvoustranným testem?',
    options: [
      'Nic se neliší',
      'Nutnost použít funkci 1-T.DIST',
      'Nutnost ručního ověření',
      'Rozdíl se objeví pouze u binomických rozdělení',
    ],
    correctAnswer: 'Nutnost použít funkci 1-T.DIST',
    explanation:
      'U jednostranných testů (ověření, zda je něco větší) je nutné odečíst testované pásmo od 100%, tedy  = 1 - T.DIST(test, df, 1) . Pro dvoustranné testy je dostačující daná hodnota, kterou vrací daná funkce. V praxi to znamená porovnat test/alfa/2.',
    type: 'theory',
    category: 'Excel',
  },
  {
    id: 'is-pairedT_better',
    question:
      'Kdy je párový T-test lepší než 2-výběrový T test za podmínek srovnatelnosti?',
    options: [
      'Nikdy',
      'Vždy',
      'Pokud je korelace dat ze dvou skupin vysoká, je přesnější na danou velikost N',
      'Je to jedno',
    ],
    correctAnswer:
      'Pokud je korelace dat ze dvou skupin vysoká, je přesnější na danou velikost N',
    explanation:
      'Pro data, která jsou provázaná - tedy že například testujeme srovnatelné jevy, kdy jedna entita ovlivňuje i tu druhou, je T-test pro párové hodnoty silnější (tedy prokazatelnější a přesnější).',
    type: 'theory',
    category: 'Excel',
  },
  {
    id: '1sample-hypo1',
    question:
      'V internetové diskusi si uživatelé stěžují, že káva má nižší gramáž, než je avizováno. Avizovaná gramáž je 5 g, a zástupce ligy pro ochranu zvířat náhodně vybere 10 sáčků kávy. Průměrná hmotnost ve vzorku vyjde 4,8g a směrodatná odchylka 0,7 g. Co je H0?',
    options: [
      'µ > 5',
      'µ ='],
    correctAnswer: 'µ = 5',
    explanation:
      'H0 (nulová hypotéza) by měla být formulována jako stav, kdy je avizovaná gramáž dodržována, tedy  µ = 5',
    type: 'calculation',
    category: 'Hypotézy'
  },
  {
    id: '1sample-hypo2',
    question:
      'V internetové diskusi si uživatelé stěžují, že káva má nižší gramáž, než je avizováno. Avizovaná gramáž je 5 g, a zástupce ligy pro ochranu zvířat náhodně vybere 10 sáčků kávy. Průměrná hmotnost ve vzorku vyjde 4,8g a směrodatná odchylka 0,7 g. Jaké testové kritérium (výsledek) se použije?',
    options: ['0.3', '-0.9', '-0.3', '-0.905'],
    correctAnswer: '-0.905',
    explanation:
      'Testové kritérium bude spočítáno jako odchylka od daného průměru děleno směrodatnou odchylkou, tzn. t = (x̄ - µ0) / (s / √n) = (4.8 - 5) / (0.7 / √10) = -0.905',
    type: 'calculation',
    category: 'Testování hypotéz',
  },
  {
    id: 'prodej_1',
    question:
      'Společnost má dva srovnatelné produkty. Produkt A má marži 100 Kč a Produkt B má marži 110 Kč. Ve vzorku deseti náhodně vybraných dnů má společnost tržbu u Produktu A 4000 Kč a směrodatnou odchylku 1000. Tržba u Produktu B má průměrnou tržbu 4300 a směrodatnou odchylku 1200. Jaká je H0? Zde je potřeba testovat rozdíl.',
    options: [
      'µ1 > µ2',
      'µ1 = µ2',
      'µ1 > µ2 + 300',
      'µ1 = µ2 + 100',
    ],
    correctAnswer: 'µ1 = µ2',
    explanation:
      'V rámci testování hypotézy se testuje, zda jsou oba průměry zhruba stejné. Reálně testujeme, zda má rozdíl průměrů hodnotu 0.',
    type: 'calculation',
    category: 'Testování hypotéz',
  },
  {
    id: 'prodej_2',
    question:
      'Společnost má dva srovnatelné produkty. Produkt A má marži 100 Kč a Produkt B má marži 110 Kč. Ve vzorku deseti náhodně vybraných dnů má společnost tržbu u Produktu A 4000 Kč a směrodatnou odchylku 1000. Tržba u Produktu B má průměrnou tržbu 4300 a směrodatnou odchylku 1200. Otestujte na hladině významnosti 0.05 hypotézu, zda existuje prokazatelně statisticky významný rozdíl v ziscích (H0: A >= B) za podmínek použití nepárového T testu, kdy se  s α = 0.05 (jde o jednostrannou hypotézu, předpokládáme shodné rozptyly). Jaké je testové kritérium?',
    options: [
      '-0.59',
      '0.59',
      '-0.61',
      '0.61',
    ],
    correctAnswer: '-0.61',
    explanation:
      'Spustíme T test: H = (xA - xB)/ odmocnina((SA^2)/n + (SB^2)/n) = (4000-4300) / odmocnina (1000^2/10 + 1200^2/10) = -0,61',
    type: 'calculation',
    category: 'Testování hypotéz',
  },
  {
    id: 'prodej_3',
    question:
      'Společnost má dva srovnatelné produkty. Produkt A má marži 100 Kč a Produkt B má marži 110 Kč. Ve vzorku deseti náhodně vybraných dnů má společnost tržbu u Produktu A 4000 Kč a směrodatnou odchylku 1000. Tržba u Produktu B má průměrnou tržbu 4300 a směrodatnou odchylku 1200. Otestujte na hladině významnosti 0.05 hypotézu, zda existuje prokazatelně statisticky významný rozdíl v ziscích (H0: A >= B) za podmínek použití nepárového T testu, kdy se  s α = 0.05 (jde o jednostrannou hypotézu, předpokládáme shodné rozptyly). Máme zamítnout hypotézu?',
    options: [
      'ANO',
      'NE',
    ],
    correctAnswer: 'NE',
    explanation:
      'Důvodem je, že kritická hodnota při t-rozdělení je -1,83. Jelikož testové kritérium je -0.61, hypotézu nelze zamítnout.',
    type: 'theory',
    category: 'Testování hypotéz',
  },
  {
    id: 'prodej_4',
    question:
      'Firma má dva dny, kdy prodává produkty. Ve vzorku deseti zákazníků za každý den nakoupilo 5 a 6 náhodně vybraných zákazníků produkt A a zbytek nic. Co je testováno touto hypotézou?',
    options: [
      'Je marže u produktu A stejná v oba dny?',
      'Mají oba dny stejnou distribuci zákazníků?',
      'Je podíl nakupujících zákazníků u produktu A stejný v oba dny?',
      'Je hodnota p 0?',
    ],
    correctAnswer: 'Je podíl nakupujících zákazníků u produktu A stejný v oba dny?',
    explanation:
      'V tomto testu dochází k binomickému jevu (zákazník bud nakoupí, a nebo ne), takže to, co nás zde zajímá, je srovnatelnost podílu úspěšných zákazníků ve dvou skupinách.',
    type: 'calculation',
    category: 'Testování hypotéz',
  },
  {
    id: 'BinVsCont',
    question:
      'Kdy jsou data spojitá a kdy binomická (pro účely statistiky)?',
    options: [
      'Spojitá mají hodně záznamů, binomická málo záznamů',
      'Spojitá mají hodnoty uspořádány na reálné ose, binomická nabývají pouze dvou hodnot',
      'Data binomická musejí být alespoň deset',
      'Záleží na distribuci',
    ],
    correctAnswer:
      'Spojitá mají hodnoty uspořádány na reálné ose, binomická nabývají pouze dvou hodnot',
    explanation:
      'Data spojitá = lze vzít jakákoliv dvě čísla, a i čísla mezi nimi dávají smysl (např. teplota). U dat binomických se berou v potaz jevy "nastane" / "nenastane".',
    type: 'theory',
    category: 'Základní pojmy',
  },
  {
    id: 'test_choice',
    question:
      'Máme otestovat na alfa hladině 0,05, jestli je střední hodnota nad 170. Otestovali jsme si normalitu. Co si vybereme?',
    options: [
      'Jednovýběrový T test',
      'Dvouvýběrový T test',
      'Binomický test',
      'F test',
    ],
    correctAnswer: 'Jednovýběrový T test',
    explanation:
      'Použijeme jednovýběrový T-test, jelikož řešíme situaci, kde je potřeba porovnat známý průměr se známou hodnotou a otestovat danou hypotézu. F test se používá ke zjištění shody rozptylů, Binomický test se používá pro kategoriální data.',
    type: 'calculation',
    category: 'Základní pojmy',
  },
  {
    id: 'type 1 error',
    question: 'Co se v testování hypotéz nazývá chyba 1. druhu?',
    options: [
      'Test správně zamítne neplatnou nulovou hypotézu',
      'Chybně zamítneme platnou nulovou hypotézu',
      'Test chybně přijme neplatnou hypotézu',
      'Testujeme chybnou sadu hodnot',
    ],
    correctAnswer: 'Chybně zamítneme platnou nulovou hypotézu',
    explanation:
      'To se stane tehdy, pokud statistický test indikuje silný důkaz proti nulové hypotéze, i když ve skutečnosti platí',
    type: 'theory',
    category: 'Chyby v testování hypotéz',
  },
  {
    id: 'type 2 error',
    question: 'Co se v testování hypotéz nazývá chyba 2. druhu?',
    options: [
      'Test správně zamítne neplatnou nulovou hypotézu',
      'Chybně zamítneme platnou nulovou hypotézu',
      'Test chybně přijme neplatnou hypotézu',
      'Testujeme chybnou sadu hodnot',
    ],
    correctAnswer: 'Test chybně přijme neplatnou hypotézu',
    explanation:
      'K chybě druhého druhu dochází tehdy, pokud statistický test nesprávně nezamítne nulovou hypotézu, i když ve skutečnosti neplatí.',
    type: 'theory',
    category: 'Chyby v testování hypotéz',
  },
  {
    id: 'which-test',
    question:
      'Chceme se podívat, jestli jsou odchylky testu po sobě náhodné. Jaký test použijeme?',
    options: ['F test', 'T test', 'Chi-kvadrát', 'Waldův-Wolfowitzův test'],
    correctAnswer: 'Waldův-Wolfowitzův test',
    explanation:
      'Tento test testuje, jestli pořadí hodnot není nahodilé, tedy jestli jsou po sobě velké odchylky seskupeny dohromady. Alternativou je Kolmogorov-Smirnov test.',
    type: 'theory',
    category: 'Základní pojmy',
  },
  {
    id: 'central-value',
    question:
      'Co je nevýhoda u příliš malých dat při testování? Proč se to nedoporučuje?',
    options: [
      'Nízká průkaznost a citlivost testu',
      'Testy na tom nefungují',
      'Nejde vypočítat střední hodnota',
      'Nízké hodnoty zkreslují medián',
    ],
    correctAnswer: 'Nízká průkaznost a citlivost testu',
    explanation:
      'S malým počtem dat nám hrozí nepřesnosti a chyby větší pravděpodobnost, že i neplatná H0 nám vyjde pozitivní - neboli je velmi nízká síla testu',
    type: 'theory',
    category: 'Základní pojmy',
  },
  {
    id: 'null_distrib-49',
    question:
      'Co je to "nulové rozdělení" (null distribution) v kontextu testování hypotéz?',
    options: [
      'Rozdělení dat, která jsou chybná',
      'Empirické rozdělení dat z experimentů',
      'Rozdělení testového kritéria, pokud platí nulová hypotéza',
      'Rozdělení p-hodnot',
    ],
    correctAnswer:
      'Rozdělení testového kritéria, pokud platí nulová hypotéza',
    explanation:
      'Nulové rozdělení popisuje chování testového kritéria za předpokladu platnosti nulové hypotézy, což nám umožňuje vyhodnotit p-hodnotu.',
    type: 'theory',
    category: 'Základní pojmy',
  },
  {
    id: 'F-value-50',
    question:
      'Při testování rozdílu mezi dvěma rozptyly, jaký výsledek F-testu by indikoval rovnost mezi oběma rozptyly?',
    options: ['F = 0', 'F = -1', 'F = 1', 'F = nekonečno'],
    correctAnswer: 'F = 1',
    explanation:
      'V F-testu, kde F = s1^2 / s2^2, hodnota F blízká 1 naznačuje, že rozptyly (s1^2 a s2^2) jsou si podobné.',
    type: 'theory',
    category: 'Testování hypotéz',
  },
  {
    id: 'distrib-normal',
    question:
      'Aké sú vlastnosti rozdelenia spojitého znaku, ktorého hustota sa riadi normálnym rozdelením N(µ,σ)?',
    options: [
      'Rozptyl = 0; funkcia je klesajúca',
      'Medián = priemer = modus',
      'Funkcia je nesymetrická; rozptyl < 0',
      'Funkcia nadobúda iba kladné čísla',
    ],
    correctAnswer: 'Medián = priemer = modus',
    explanation:
      'Hustota pravdepodobnosti N(µ,σ) je symetrická okolo µ, čo značí, že priemer = modus = medián.',
    type: 'theory',
    category: 'Excel',
  },
  {
    id: 'dvojnasob_zlo',
    question:
      'Ak pri overovaní hypotézy spravíme rozhodnutie že H1 platí, pričom táto H1 neplatí, o aký druh chyby ide?',
    options: [
      'Chyba 1. druhu',
      'Chyba 2. druhu',
      'Také neexistuje',
      'Na veľkosti rozsahu nezáleží',
    ],
    correctAnswer: 'Chyba 1. druhu',
    explanation:
      'Chyba 1. druhu (alfa) nastane ak je mylne zamietnutá nulová hypotéza. Značí to nesprávne usúdenie, že nejaký efekt nastal.',
    type: 'theory',
    category: 'Excel',
  },
  {
    id: 'slov_hypo',
    question: 'Ako prebieha overovanie štatistických hypotéz?',
    options: [
      'Sformulovaním nulovej a alternatívnej hypotézy; následne sa určí testové kritérium; po realizácií sa určí jeho hodnota; na základe ktorej sa prijme H0.',
      'Pri overovaní hypotéz sa sformulujú iba alternatívne hypotézy',
      'Hypotézy sa neformulujú, ale testujú',
      'Formulovanie hypotéz nie je povinné',
    ],
    correctAnswer:
      'Sformulovaním nulovej a alternatívnej hypotézy; následne sa určí testové kritérium; po realizácií sa určí jeho hodnota; na základe ktorej sa prijme H0.',
    explanation:
      'Overovanie prebieha sformulovaním nulovej a alternatívnej hypotézy; následne sa určí testové kritérium; po realizácií sa určí jeho hodnota; tá sa na základe vopred určenej hladiny významnosti a kritického oboru porovná a prijme sa (nezamietne) H0.',
    type: 'theory',
    category: 'Excel',
  },
  {
    id: 'zaml_roz',
    question:
      'Ak je na určitej hladine významnosti test zamietnutý, dá sa vždy povedať že rovnaký test bude zamietnutý na akýkoľvek vyššej hladine významnosti?',
    options: [
      'Áno',
      'Iba ak p> alfa',
      'Len ked pouzijeme Excel ',
      'Ak použijeme testy o priemeroch tak nie',
    ],
    correctAnswer: 'Áno',
    explanation:
      'Ak je test zamietnutý na určitej hladine významnosti alfa, dá sa povedať, že rovnaký test bude zamietnutý na akejkoľvek vyššej hladine významnosti. To plynie z definície p-hodnoty - ta musí být menší. Preco? Lebo alfa zvýšime.',
    type: 'theory',
    category: 'Excel',
  },
  {
    id: 'pravdov_zav',
    question: 'Co je správné?',
    options: [
      'Čím větší chyba první druhu (alfa), tím je menší i chyba druhého druhu',
      'Snížení hladiny významnosti snižuje pravděpodobnost chyby I. i II. druhu',
      'Hladina významnosti slouží ke snížení náhodné chyby',
      'Mezi pravděpodobností chyby I. a II. druhu není žádný vztah',
    ],
    correctAnswer:
      'Čím větší chyba první druhu (alfa), tím je menší i chyba druhého druhu',
    explanation:
      'Se zvyšováním hladiny alfa zvyšujeme kritickou oblast = máme vyšší šanci zamítnout danou hypotézu. To má pozitivní vliv na minimalizaci chyby II. druhu (přijetí špatné hypotézy) na úkor vyšší pravděpodobnost chyby 1. druhu - chybnému zamítnutí nulové hypotézy.',
    type: 'theory',
    category: 'Excel',
  },
  {
    id: 'znamaSm',
    question: 'Je nutné znát SD u testu hypotéz?',
    options: [
      'Je nutné ji znát vždy, bez ní se nelze posunout',
      'Je vhodné jí znát, avšak není to nutné - neznámou SD lze dopočítat',
      'Lze zjistit směrodatnou odchylku odjinud',
      'Je to zbytečné - směrodatná odchylka nehraje roli',
    ],
    correctAnswer:
      'Je vhodné jí znát, avšak není to nutné - neznámou SD lze dopočítat',
    explanation:
      'Pro výpočet hodnot daného testu je vždy nutné znát směrodatnou odchylku - buď vypočítat ze vzorku, anebo získat z již vypočítaných hodnot.',
    type: 'theory',
    category: 'Excel',
  },
  {
    id: 'jenzm',
    question:
      'Proč při testování binomického rozdělení použijeme Z statistiku?',
    options: [
      'Ztest je výhodný při binomickém rozdelení',
      'Protože binomické rozdelení je spojité',
      'Data s velkým objemem aproximují normalní rozložení',
      'Větší statistika je vždy nutná pro binomické',
    ],
    correctAnswer: 'Data s velkým objemem aproximují normalní rozložení',
    explanation:
      'Protože chceme nahradit jeden typ rozložení (binomické) aproximací, je Z-score efektivnější při aproximaci',
    type: 'theory',
    category: 'Excel',
  },
  {
    id: 'jeNUT',
    question:
      'Je nutné, aby data, se kterými děláme T Test, pocházela z normalizovaného rozdělení?',
    options: [
      'Je to nezbytné',
      'Nikoliv, ale musí mít velký objem',
      'Záleží, jestli je velký objem a jestli jsou data intervalu nebo poměru',
      'Je nutné a data musí být kategoriálního typu',
    ],
    correctAnswer:
      'Je nutné, aby data, se kterými děláme T Test, pocházela z normalizovaného rozdělení',
    explanation:
      'S malým počtem dat, které pocházejí ze spojitého rozložení, je nutno, aby data vykazovala normální rozložení. S velkým počtem dat (od cca 500 pozorování) už nemusí mít normální rozložení.',
    type: 'theory',
    category: 'Excel',
  },
]; 