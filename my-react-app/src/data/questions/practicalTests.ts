import { Practice } from '../../types';

export const practicalTestsQuestions: Practice[] = [
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