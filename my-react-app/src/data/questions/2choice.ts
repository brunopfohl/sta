import { Practice } from "../../types";

export const twoChoicePracticeQuestions: Practice[] = [
  {
    id: "AS3_01",
    question:
      "Jaké typy dat jsou primárně rozlišovány pro hypotézy o dvou výběrech na úvodním slajdu?",
    options: [
      "Nominální a ordinální",
      "Spojitá a diskrétní",
      "Kvantitativní spojitá a Kvalitativní diskrétní",
      "Časové řady a průřezová data",
    ],
    correctAnswer: "Kvantitativní spojitá a Kvalitativní diskrétní",
    explanation:
      "Slajd 1 explicitně uvádí 'Kvantitativní data spojitá' a 'Kvalitativní znak – veličina diskrétní'.",
    type: "multiple-choice",
    category: "Úvod",
  },
  {
    id: "AS3_02",
    question:
      "Jaký test se používá pro shodu středních hodnot dvou závislých výběrů?",
    options: ["F-test", "Nepárový t-test", "Párový t-test", "Test shody podílů"],
    correctAnswer: "Párový t-test",
    explanation:
      "Slajd 2 uvádí 'Hypotéza o středních hodnotách závislých výběrů -> Párový t – test'. Slajd 1 také zmiňuje test shody středních hodnot pro závislé výběry.",
    type: "multiple-choice",
    category: "Testy pro kvantitativní data",
  },
  {
    id: "AS3_03",
    question:
      "Jaký test se používá pro ověření hypotézy o shodě rozptylů dvou nezávislých výběrů?",
    options: ["t-test", "F-test", "ANOVA", "McNemarův test"],
    correctAnswer: "F-test",
    explanation:
      "Slajd 2 uvádí 'Hypotéza o shodě rozptylů (F – test)'. Slajd 1 také zmiňuje test shody rozptylů pro dva nezávislé výběry.",
    type: "multiple-choice",
    category: "Testy pro kvantitativní data",
  },
  {
    id: "AS3_04",
    question:
      "Jaký test se používá pro testování shody podílů u dvou nezávislých výběrů (kvalitativní znak)?",
    options: [
      "Párový t-test",
      "F-test",
      "Test shody podílů (asymptotický test / binomický test)",
      "ANOVA",
    ],
    correctAnswer:
      "Test shody podílů (asymptotický test / binomický test)",
    explanation:
      "Slajd 1 a 4 zmiňují 'Test shody podílů (dva nezávislé výběry - vzorky)' pro kvalitativní data. Slajd 2 a 4 dále specifikují limitní (asymptotický) a přesný binomický test.",
    type: "multiple-choice",
    category: "Testy pro kvalitativní data",
  },
  {
    id: "AS3_05",
    question:
      "Jaké jsou dvě varianty t-testu pro střední hodnoty nezávislých výběrů, pokud neznáme populační rozptyly?",
    correctAnswer:
      "t-test při shodných rozptylech a t-test při neshodných rozptylech (Welchův test).",
    explanation:
      "Slajd 2 explicitně uvádí 't – test při shodných rozptylech' a 't – test při neshodných rozptylech'.",
    type: "theory",
    category: "Testy pro kvantitativní data",
  },
  {
    id: "AS3_06",
    question:
      "Jaký test se používá pro porovnání středních hodnot více než dvou výběrů?",
    options: ["Párový t-test", "F-test", "ANOVA", "Test shody podílů"],
    correctAnswer: "ANOVA",
    explanation:
      "Slajd 3 uvádí 'Více než dva výběry - shoda středních hodnot ANOVA'.",
    type: "multiple-choice",
    category: "Rozšíření",
  },
  {
    id: "AS3_07",
    question:
      "Co je základním principem statistické inference zmíněným jako cíl kapitol o testování hypotéz?",
    correctAnswer:
      "Porozumět logice statistického zobecňování výsledků ze vzorků na populaci.",
    explanation:
      "Slajd 5 uvádí jako první cíl 'Porozumět logice statistického zobecňování výsledků ze vzorků na populaci (statistická inference)'.",
    type: "theory",
    category: "Cíle testování hypotéz",
  },
  {
    id: "AS3_08",
    question:
      "Na čem závisí určení kritické hodnoty pro test hypotézy?",
    correctAnswer:
      "Na pravděpodobnostním rozdělení testového kritéria při platnosti H0, zvolené hladině významnosti (α) a formulaci alternativní hypotézy (oboustranná, levostranná, pravostranná).",
    explanation: "Slajd 7 uvádí tyto tři faktory.",
    type: "theory",
    category: "Principy testování hypotéz",
  },
  {
    id: "AS3_09",
    question:
      "Jaký je základní předpoklad o rozdělení rozdílů \(d_i = x_i^{(2)} - x_i^{(1)}\) v párovém t-testu?",
    correctAnswer:
      "Předpokládá se, že rozdíly \(d_i\) pocházejí z normálního rozdělení \(N(\Delta, \sigma_d^2)\).",
    explanation:
      "Slajd 8 uvádí: 'Rozdíly \(d_i = x_i^{(2)} - x_i^{(1)}\) mají rozdělení \(N(\Delta, \sigma_d^2)\) v populaci...'.",
    type: "theory",
    category: "Párový t-test",
  },
  {
    id: "AS3_10",
    question:
      "Jak se transformuje dvouvýběrový problém v párovém t-testu?",
    correctAnswer:
      "Je převeden na jednovýběrový t-test o střední hodnotě rozdílů \(\Delta\).",
    explanation:
      "Slajd 8 uvádí: 'Dvouvýběrový test hypotézy o shodě průměrů je převeden na jednovýběrový t – test o střední hodnotě \(\Delta\).'",
    type: "theory",
    category: "Párový t-test",
  },
  {
    id: "AS3_11",
    question: "Jaký je vzorec pro testové kritérium T v párovém t-testu?",
    correctAnswer: "\( T = \frac{\bar{d} - \Delta_0}{s_d / \sqrt{n}} \)",
    explanation:
      "Slajd 8 uvádí vzorec \( T = \frac{\bar{d} - \Delta_0}{s_d} \sqrt{n} \), což je ekvivalentní.",
    type: "calculation",
    category: "Párový t-test",
  },
  {
    id: "AS3_12",
    question:
      "V příkladu s hypermarkety (slajd 9), jaká byla nulová a alternativní hypotéza pro párový t-test?",
    correctAnswer: "H0: \(\Delta = 0\) proti H1: \(\Delta > 0\).",
    explanation:
      "Slajd 9 uvádí 'Ho: \(\Delta=0\) proti alternativě H₁: \(\Delta>0\)' (testuje se, zda jsou ceny v A vyšší než v B).",
    type: "theory",
    category: "Párový t-test",
  },
  {
    id: "AS3_13",
    question:
      "Jaký byl závěr párového t-testu v příkladu s hypermarkety (slajd 9) na hladině významnosti \(\alpha = 0.01\)?",
    correctAnswer:
      "Nulová hypotéza byla zamítnuta. Byla prokázána statisticky významně vyšší průměrná úroveň cen v hypermarketu A než v B.",
    explanation:
      "Hodnota testového kritéria \(t = 11.936\) byla větší než kritická hodnota \(t_{0.99;99} = 2.364\), což vedlo k zamítnutí H0. Slajd 9 uvádí závěr.",
    type: "theory",
    category: "Párový t-test",
  },
  {
    id: "AS3_14",
    question:
      "Jaký je základní předpoklad pro použití F-testu shody rozptylů?",
    correctAnswer:
      "Nezávislé náhodné výběry byly získány z populací s normálním rozdělením.",
    explanation:
      "Slajd 10 uvádí: 'Předpoklad: nezávislé náhodné výběry byly získány z populací s rozdělením \(N(\mu_1, \sigma_1^2)\) a \(N(\mu_2, \sigma_2^2)\)'.",
    type: "theory",
    category: "F-test",
  },
  {
    id: "AS3_15",
    question: "Jak je definováno testové kritérium F pro test shody rozptylů?",
    correctAnswer: "\( F = \frac{s_1^2}{s_2^2} \), kde \(s_1^2\) je obvykle větší výběrový rozptyl.",
    explanation:
      "Slajd 10 uvádí \( F = \frac{s_1^2}{s_2^2} \) a konvenci \( \sigma_1^2 \ge \sigma_2^2 \) (resp. \( s_1^2 \ge s_2^2 \) pro výpočet).",
    type: "calculation",
    category: "F-test",
  },
  {
    id: "AS3_16",
    question:
      "Jaké rozdělení má testové kritérium F při platnosti nulové hypotézy H0: \(\sigma_1^2 = \sigma_2^2\)?",
    correctAnswer:
      "Snedecorovo F rozdělení se stupni volnosti \(n_1 - 1\) a \(n_2 - 1\).",
    explanation:
      "Slajd 10 uvádí: 'Snedecorovo F rozdělení pro (\(n_1 - 1\), \(n_2 - 2\)) stupňů volnosti.' Poznámka: Na slajdu 10 je pravděpodobně překlep, správně má být \(n_2 - 1\), což potvrzují slajdy 11 a 12.",
    type: "theory",
    category: "F-test",
  },
  {
    id: "AS3_17",
    question:
      "V příkladu F-testu s ohřívači (slajd 12), jaká byla H0 a H1 při \(\alpha = 0.05\)?",
    correctAnswer: "H0: \(\sigma_1^2 = \sigma_2^2\) proti H1: \(\sigma_1^2 > \sigma_2^2\).",
    explanation:
      "Slajd 12 uvádí 'Testuje se H₀: \(\sigma_1^2 = \sigma_2^2\) proti H₁: \(\sigma_1^2 > \sigma_2^2\), hladina významnosti \(\alpha = 0,05\)' (testuje se, zda má model 1 vyšší variabilitu teplot).",
    type: "theory",
    category: "F-test",
  },
  {
    id: "AS3_18",
    question:
      "Jaký byl závěr F-testu v příkladu s ohřívači (slajd 12)?",
    correctAnswer:
      "Nulová hypotéza byla zamítnuta. Model 2 má statisticky významně nižší rozptyl teplot než model 1.",
    explanation:
      "Hodnota \(F = 3.53\) byla větší než kritická hodnota \(F_{0.95;12;14} = 2.53\), což vedlo k zamítnutí H0. Slajd 12 uvádí závěr a doporučení.",
    type: "theory",
    category: "F-test",
  },
  {
    id: "AS3_19",
    question:
      "Co určuje, zda se pro nezávislé výběry použije t-test pro shodné nebo neshodné rozptyly?",
    correctAnswer: "Výsledek předchozího F-testu shody rozptylů.",
    explanation:
      "Slajd 13 uvádí: 'Volba varianty t – testu na základě výsledku F – testu.'",
    type: "theory",
    category: "Nepárový t-test",
  },
  {
    id: "AS3_20",
    question:
      "Jaký je vzorec pro vážený (pooled) odhad rozptylu \(s^2\) v nepárovém t-testu pro shodné rozptyly?",
    correctAnswer:
      "\( s^2 = \frac{(n_1 - 1)s_1^2 + (n_2 - 1)s_2^2}{n_1 + n_2 - 2} \)",
    explanation: "Slajd 14 uvádí tento vzorec pro \(s^2\).",
    type: "calculation",
    category: "Nepárový t-test (shodné rozptyly)",
  },
  {
    id: "AS3_21",
    question:
      "Kolik stupňů volnosti má t-rozdělení pro testové kritérium v nepárovém t-testu pro shodné rozptyly?",
    correctAnswer: "\( n_1 + n_2 - 2 \)",
    explanation:
      "Slajd 14 uvádí: 'T má při platnosti Ho rozdělení t pro df = \(n_1 + n_2 - 2\) stupňů volnosti.'",
    type: "theory",
    category: "Nepárový t-test (shodné rozptyly)",
  },
  {
    id: "AS3_22",
    question:
      "V příkladu s cenami autobazarů A a B (slajd 15), proč byl použit nepárový t-test pro shodné rozptyly?",
    correctAnswer:
      "Protože F-test shody rozptylů (F=1.411) nevedl k zamítnutí H0 o shodě rozptylů na hladině \(\alpha = 0.05\).",
    explanation:
      "Slajd 15 uvádí výsledek F-testu a konstatuje: 'Nezamítá se Ho, použijeme nepárový t-test pro shodné rozptyly.'",
    type: "theory",
    category: "Nepárový t-test (shodné rozptyly)",
  },
  {
    id: "AS3_23",
    question:
      "Jaký byl závěr t-testu v příkladu s cenami autobazarů A a B (slajd 15) na hladině \(\alpha = 0.05\)?",
    correctAnswer:
      "Nulová hypotéza nebyla zamítnuta. Rozdíl mezi průměrnými cenami nebyl prokázán.",
    explanation:
      "Hodnota \(t = 0.873\) byla menší než kritická hodnota \(t_{0.975;68} = 1.99547\) a p-hodnota \(p = 0.3857\) byla větší než \(\alpha = 0.05\).",
    type: "theory",
    category: "Nepárový t-test (shodné rozptyly)",
  },
  {
    id: "AS3_24",
    question:
      "Jak se nazývá t-test pro nezávislé výběry při neshodných rozptylech?",
    options: [
      "Párový t-test",
      "Standardní t-test",
      "Welchův t-test",
      "F-test",
    ],
    correctAnswer: "Welchův t-test",
    explanation:
      "Slajd 16 uvádí 'Test Welchův (Welch's test)' pro případ neshodných rozptylů.",
    type: "multiple-choice",
    category: "Nepárový t-test (neshodné rozptyly)",
  },
  {
    id: "AS3_25",
    question:
      "Jak se určují stupně volnosti pro Welchův t-test?",
    correctAnswer:
      "Používá se aproximace (Welch-Satterthwaite rovnice), výsledek se obvykle zaokrouhluje dolů na nejbližší celé číslo.",
    explanation:
      "Slajd 16 uvádí vzorec pro \(d^{(1)}\) a zmiňuje zaokrouhlení dolů na \(d^{(2)}\).",
    type: "theory",
    category: "Nepárový t-test (neshodné rozptyly)",
  },
  {
    id: "AS3_26",
    question:
      "V příkladu s cenami autobazarů A a C (slajd 17), proč byl použit Welchův t-test?",
    correctAnswer:
      "Protože F-test shody rozptylů (F=2.269) vedl k zamítnutí H0 o shodě rozptylů na hladině \(\alpha = 0.05\).",
    explanation:
      "Slajd 17 uvádí výsledek F-testu a konstatuje: 'zamítáme Ho o shodě rozptylů... Počítáme t – test pro neshodné rozptyly.'",
    type: "theory",
    category: "Nepárový t-test (neshodné rozptyly)",
  },
  {
    id: "AS3_27",
    question:
      "Jaký byl závěr Welchova t-testu v příkladu s cenami autobazarů A a C (slajd 17) na hladině \(\alpha = 0.05\)?",
    correctAnswer:
      "Nulová hypotéza byla zamítnuta, alternativní hypotéza H1: \(\mu_1 > \mu_3\) byla přijata. Byl prokázán statisticky významný rozdíl cen (ceny v A jsou vyšší než v C).",
    explanation:
      "Hodnota \(t = 2.740\) byla větší než kritická hodnota \(t_{0.95;60} = 1.67\) a p-hodnota \(p = 0.004039\) byla menší než \(\alpha = 0.05\).",
    type: "theory",
    category: "Nepárový t-test (neshodné rozptyly)",
  },
  {
    id: "AS3_28",
    question:
      "Jaké rozdělení lze použít jako aproximaci t-rozdělení pro velké rozsahy výběrů (např. n > 100)?",
    options: [
      "F-rozdělení",
      "Normované normální rozdělení N(0,1)",
      "Chi-kvadrát rozdělení",
      "Binomické rozdělení",
    ],
    correctAnswer: "Normované normální rozdělení N(0,1)",
    explanation:
      "Slajd 18 uvádí: 'Pro n > 100 rozdělení normální N(0,1), prakticky již pro (st.v.) > 30.'",
    type: "multiple-choice",
    category: "Aproximace",
  },
  {
    id: "AS3_29",
    question:
      "Jaké jsou kritické hodnoty pro oboustranný test s normovaným normálním rozdělením na hladině významnosti \(\alpha = 0.05\)?",
    correctAnswer: "± 1,96",
    explanation:
      "Slajd 18 uvádí KH = ±1,9600 pro N(0,1) a \(\alpha = 0.05\) (oboustranná alternativa). Slajd 27 také uvádí \(u_{0,975} \approx 1,96\).",
    type: "calculation",
    category: "Kritické hodnoty",
  },
  {
    id: "AS3_30",
    question:
      "Co ilustruje simulace na slajdech 22 a 23 ohledně vlivu rozsahu výběru (n) na chybu 2. druhu?",
    correctAnswer:
      "Zvýšení rozsahu výběru (z n=30 na n=100) snižuje pravděpodobnost chyby 2. druhu (nesprávné nezamítnutí H0, když H0 neplatí).",
    explanation:
      "Na slajdu 22 (n=30) byla chyba 2. druhu 47%, zatímco na slajdu 23 (n=100) klesla na 3%.",
    type: "theory",
    category: "Síla testu a chyby",
  },
  {
    id: "AS3_31",
    question:
      "Jak se jinak nazývá test shody dvou parametrů binomického rozdělení?",
    options: [
      "F-test",
      "Test shody rozptylů",
      "Test shody podílů",
      "Párový t-test",
    ],
    correctAnswer: "Test shody podílů",
    explanation:
      "Slajd 4, 25 a 26 explicitně uvádějí 'Test se také nazývá „test shody podílů“' nebo 'Test označovaný jako test shody podílů'.",
    type: "multiple-choice",
    category: "Test shody podílů",
  },
  {
    id: "AS3_32",
    question:
      "Jak se odhadují neznámé pravděpodobnosti (podíly) \(\pi_1\) a \(\pi_2\) v populacích pro test shody podílů?",
    correctAnswer:
      "Pomocí výběrových relativních četností: \(p_1 = m_1 / n_1\) a \(p_2 = m_2 / n_2\).",
    explanation: "Slajd 26 uvádí tyto vzorce pro odhady \(p_1\) a \(p_2\).",
    type: "theory",
    category: "Test shody podílů",
  },
  {
    id: "AS3_33",
    question:
      "Jaký je vzorec pro společný (vážený) odhad podílu \(\bar{p}\) používaný v testovém kritériu U pro test shody podílů?",
    correctAnswer: "\( \bar{p} = \frac{m_1 + m_2}{n_1 + n_2} \)",
    explanation: "Slajd 27 uvádí tento vzorec pro \(\bar{p}\).",
    type: "calculation",
    category: "Test shody podílů",
  },
  {
    id: "AS3_34",
    question:
      "Jaké rozdělení přibližně sleduje testové kritérium U pro test shody podílů při platnosti H0 (za předpokladu platnosti limitní věty)?",
    correctAnswer: "Normované normální rozdělení N(0,1).",
    explanation:
      "Slajd 27 uvádí: 'má testové kritérium U přibližně normované normální rozdělení.'",
    type: "theory",
    category: "Test shody podílů",
  },
  {
    id: "AS3_35",
    question:
      "Jaký je vzorec pro testové kritérium U (Z-statistiku) pro test shody podílů?",
    correctAnswer:
      "\( U = \frac{p_1 - p_2}{\sqrt{\bar{p}(1-\bar{p})(\frac{1}{n_1} + \frac{1}{n_2})}} \)",
    explanation:
      "Slajd 27 uvádí ekvivalentní vzorec \( U = \frac{p_1 - p_2}{\sqrt{\bar{p}(1-\bar{p})}} \sqrt{\frac{n_1 n_2}{n_1 + n_2}} \). Slajd 29 uvádí vzorec s absolutní hodnotou pro oboustranný test.",
    type: "calculation",
    category: "Test shody podílů",
  },
  {
    id: "AS3_36",
    question:
      "Jaká podmínka (založená na Centrální limitní větě - CLV) by měla být ověřena pro použití normální aproximace v testu shody podílů?",
    correctAnswer:
      "Obvykle se ověřuje \(n_i p_i \ge 5\) a \(n_i (1-p_i) \ge 5\) pro oba výběry, nebo častěji s použitím \(\bar{p}\): \(n_1 \bar{p} \ge 5\), \(n_1 (1-\bar{p}) \ge 5\), \(n_2 \bar{p} \ge 5\), \(n_2 (1-\bar{p}) \ge 5\). Slajd 29 uvádí \(np \ge 5, n(1-p) \ge 5\). Slajd 6 uvádí \(n\pi_0 \ge 5, n(1-\pi_0) \ge 5\).",
    explanation:
      "Slajd 29 explicitně zmiňuje 'Ověření platnosti CLV: np ≥ 5, n(1 − p) ≥ 5'. Tyto podmínky zajišťují dostatečnou aproximaci binomického rozdělení normálním.",
    type: "theory",
    category: "Test shody podílů",
  },
  {
    id: "AS3_37",
    question:
      "V příkladu s ekonomickou situací (slajd 28), jaká byla H0 a H1 při \(\alpha = 0.05\)?",
    correctAnswer: "H0: \(\pi_1 = \pi_2\) proti H1: \(\pi_1 \neq \pi_2\).",
    explanation:
      "Slajd 28 uvádí 'Test Ho: \(\pi_1 = \pi_2\) proti H₁: \(\pi_1 \neq \pi_2\), volíme \(\alpha = 0,05\).'",
    type: "theory",
    category: "Test shody podílů",
  },
  {
    id: "AS3_38",
    question:
      "Jaký byl závěr testu shody podílů v příkladu s ekonomickou situací (slajd 28)?",
    correctAnswer:
      "Nulová hypotéza nebyla zamítnuta. Nebyl prokázán statisticky významný rozdíl v podílech osob se sledovaným znakem mezi věkovými skupinami.",
    explanation:
      "Hodnota \(U = 1.07\) byla menší než kritická hodnota 1.96 a p-hodnota \(p = 0.285\) byla větší než \(\alpha = 0.05\).",
    type: "theory",
    category: "Test shody podílů",
  },
  {
    id: "AS3_39",
    question:
      "Jak se liší výpočet testového kritéria U pro jednostranné a oboustranné alternativy v testu shody podílů?",
    correctAnswer:
      "Pro oboustrannou alternativu se v čitateli používá absolutní hodnota rozdílu \(|p_1 - p_2|\) (jak naznačuje slajd 29), zatímco pro jednostranné alternativy se používá rozdíl \(p_1 - p_2\) bez absolutní hodnoty.",
    explanation:
      "Slajd 29 ukazuje vzorec s \(|p_1 - p_2|\) pro \(H_1: \pi_1 \neq \pi_2\), ale pro jednostranné testy se absolutní hodnota nepoužívá, aby bylo možné určit směr rozdílu.",
    type: "theory",
    category: "Test shody podílů",
  },
  {
    id: "AS3_40",
    question:
      "Jaká je kritická hodnota pro pravostranný test shody podílů (\(H_1: \pi_1 > \pi_2\)) na hladině významnosti \(\alpha = 0.05\) při použití normální aproximace?",
    correctAnswer: "1,6449 (často zaokrouhleno na 1,645)",
    explanation:
      "Slajd 29 uvádí KH = 1,6449 pro \(H_1: \pi_1 > \pi_2\) a \(\alpha = 0.05\).",
    type: "calculation",
    category: "Kritické hodnoty",
  },
  {
    id: "AS3_41",
    question:
      "Který test z flowchartu na slajdu 6 by se použil pro porovnání podílů u závislých výběrů (např. změna názoru u stejných osob)?",
    options: [
      "Párový t-test",
      "Welchův t-test",
      "McNemarův test",
      "Asymptotický test shody podílů",
    ],
    correctAnswer: "McNemarův test",
    explanation:
      "Flowchart na slajdu 6 ukazuje cestu: Binomické rozdělení -> Výběry závislé? Ano -> McNemarův test.",
    type: "multiple-choice",
    category: "Speciální testy",
  },
  {
    id: "AS3_42",
    question:
      "Co znamená p-hodnota v kontextu testování hypotéz?",
    correctAnswer:
      "Je to nejnižší hladina významnosti \(\alpha\), při které bychom ještě zamítli H0. Alternativně, je to pravděpodobnost získání pozorované hodnoty testového kritéria nebo hodnoty ještě extrémnější, za předpokladu, že H0 platí.",
    explanation:
      "Slajdy 10, 14, 16, 27 ukazují výpočty p-hodnot. Je to standardní definice p-hodnoty.",
    type: "theory",
    category: "Principy testování hypotéz",
  },
  {
    id: "AS3_43",
    question:
      "Pokud je p-hodnota menší než zvolená hladina významnosti \(\alpha\), jaký je závěr testu?",
    options: [
      "Zamítáme H0",
      "Nezamítáme H0",
      "Přijímáme H0",
      "Test je neprůkazný",
    ],
    correctAnswer: "Zamítáme H0",
    explanation:
      "Standardní rozhodovací pravidlo: Pokud p-hodnota \(\le \alpha\), zamítáme H0. Příklady na slajdech 15, 17, 28 toto pravidlo implicitně používají.",
    type: "multiple-choice",
    category: "Principy testování hypotéz",
  },
  {
    id: "AS3_44",
    question:
      "Jaký je vztah mezi F-testem a t-testem pro nezávislé výběry?",
    correctAnswer:
      "F-test se používá k ověření předpokladu o shodě/neshodě rozptylů, což následně určuje, která varianta t-testu (pro shodné nebo neshodné rozptyly) se má použít pro porovnání středních hodnot.",
    explanation:
      "Slajd 13 explicitně uvádí, že volba varianty t-testu závisí na výsledku F-testu. Slajdy 15 a 17 ukazují tuto posloupnost v příkladech.",
    type: "theory",
    category: "Vztahy mezi testy",
  },
  {
    id: "AS3_45",
    question:
      "V příkladu F-testu na slajdu 11, jaká Excel funkce by se použila pro nalezení levostranné kritické hodnoty F=0,3663 pro \(\alpha=0.05\), \(df_1=10\), \(df_2=25\)?",
    options: [
      "F.INV.RT(0.05;10;25)",
      "F.INV(0.05;10;25)",
      "F.DIST(0.3663;10;25;TRUE)",
      "T.INV(0.05;10)",
    ],
    correctAnswer: "F.INV(0.05;10;25)",
    explanation:
      "Slajd 11 ukazuje, že F.INV(0,05;10;25) dává hodnotu 0,3663, což odpovídá levostrannému kvantilu pro dané \(\alpha\).",
    type: "multiple-choice",
    category: "Software (Excel)",
  },
  {
    id: "AS3_46",
    question:
      "Co znamená chyba 1. druhu při testování hypotéz?",
    correctAnswer:
      "Zamítnutí nulové hypotézy (H0), ačkoliv H0 ve skutečnosti platí.",
    explanation:
      "Toto je standardní definice chyby 1. druhu. Pravděpodobnost této chyby je kontrolována hladinou významnosti \(\alpha\).",
    type: "theory",
    category: "Síla testu a chyby",
  },
  {
    id: "AS3_47",
    question:
      "Co znamená chyba 2. druhu při testování hypotéz?",
    correctAnswer:
      "Nezamítnutí nulové hypotézy (H0), ačkoliv H0 ve skutečnosti neplatí (platí alternativní hypotéza H1).",
    explanation:
      "Toto je standardní definice chyby 2. druhu. Její pravděpodobnost se značí \(\beta\). Slajdy 22 a 23 ilustrují výskyt této chyby.",
    type: "theory",
    category: "Síla testu a chyby",
  },
  {
    id: "AS3_48",
    question:
      "Jaký test by byl vhodný pro porovnání průměrného krevního tlaku skupiny pacientů PŘED a PO podání léku?",
    options: [
      "Nepárový t-test (shodné rozptyly)",
      "Nepárový t-test (neshodné rozptyly)",
      "Párový t-test",
      "F-test",
    ],
    correctAnswer: "Párový t-test",
    explanation:
      "Jedná se o měření na stejných subjektech ve dvou různých časech, což představuje závislé výběry. Pro porovnání středních hodnot závislých výběrů se používá párový t-test.",
    type: "multiple-choice",
    category: "Aplikace testů",
  },
  {
    id: "AS3_49",
    question:
      "Jaký test by byl vhodný pro porovnání průměrné výšky mužů a žen ve dvou nezávislých náhodných výběrech?",
    options: [
      "Párový t-test",
      "Nepárový t-test (po ověření rozptylů F-testem)",
      "Test shody podílů",
      "McNemarův test",
    ],
    correctAnswer: "Nepárový t-test (po ověření rozptylů F-testem)",
    explanation:
      "Jedná se o porovnání středních hodnot dvou nezávislých skupin (muži vs. ženy). Je třeba použít nepárový t-test, přičemž volba varianty (shodné/neshodné rozptyly) závisí na výsledku F-testu.",
    type: "multiple-choice",
    category: "Aplikace testů",
  },
  {
    id: "AS3_50",
    question:
      "Jaký test by byl vhodný pro porovnání podílu kuřáků mezi studenty dvou různých univerzit (nezávislé výběry)?",
    options: [
      "Párový t-test",
      "Nepárový t-test",
      "Test shody podílů",
      "F-test",
    ],
    correctAnswer: "Test shody podílů",
    explanation:
      "Porovnáváme podíl (procento, pravděpodobnost) výskytu znaku (kuřák) ve dvou nezávislých skupinách. Použije se test shody podílů.",
    type: "multiple-choice",
    category: "Aplikace testů",
  },
  {
    id: "AS3_51",
    question:
      "Pokud F-test zamítne hypotézu o shodě rozptylů (\(\sigma_1^2 = \sigma_2^2\)), jaký t-test pro porovnání středních hodnot by měl následovat?",
    correctAnswer:
      "t-test pro neshodné rozptyly (Welchův t-test).",
    explanation:
      "Zamítnutí H0 v F-testu znamená, že předpoklad shodných rozptylů není splněn, proto se musí použít robustnější Welchův t-test. Viz slajdy 13, 16, 17.",
    type: "theory",
    category: "Vztahy mezi testy",
  },
];