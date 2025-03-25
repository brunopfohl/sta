import { Practice } from '../../types';

export const apstaLecturesQuestions: Practice[] = [
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
  // ... rest of the APSTA questions
  {
    id: 'p1.20',
    question: 'Co je to standardizovaná testová statistika?',
    type: 'theory',
    correctAnswer: 'Testová statistika převedená na standardizovaný tvar s nulovou střední hodnotou a jednotkovým rozptylem.',
    explanation: 'Standardizace umožňuje porovnávat hodnoty testové statistiky s tabelovanými kritickými hodnotami.',
    category: 'APSTA přednášky'
  }
]; 