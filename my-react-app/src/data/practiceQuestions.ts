import { Practice } from '../types';
import { basicConceptsQuestions } from './questions/basicConcepts';
import { advancedConceptsQuestions } from './questions/advancedConcepts';
import { apstaLecturesQuestions } from './questions/apstaLectures';
import { practicalTestsQuestions } from './questions/practicalTests';
import { hypothesisTestingQuestions } from './questions/hypothesisTestingExamples';
import { twoChoicePracticeQuestions } from './questions/2choice';
import { firstPracticeQuestions } from './questions/1';

export {
  basicConceptsQuestions as cviceni1Questions,
  advancedConceptsQuestions as cviceni2Questions,
  apstaLecturesQuestions as apstaPrednasky,
  practicalTestsQuestions as statistickeTestyPraxe,
  hypothesisTestingQuestions as testyHypotezPriklady
};

// Combine all practice questions
const allPractices = [
  ...basicConceptsQuestions,
  ...advancedConceptsQuestions,
  ...apstaLecturesQuestions,
  ...practicalTestsQuestions,
  ...hypothesisTestingQuestions,
  ...twoChoicePracticeQuestions,
  ...firstPracticeQuestions
];

export default allPractices; 