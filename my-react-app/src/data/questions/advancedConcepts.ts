import { Practice } from '../../types';

export const advancedConceptsQuestions: Practice[] = [
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