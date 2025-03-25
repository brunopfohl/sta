import { Practice } from '../../types';

export const basicConceptsQuestions: Practice[] = [
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