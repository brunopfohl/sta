import { useState } from 'react';
import styles from './PracticeSection.module.css';
import { Practice } from '../../types';

interface PracticeSectionProps {
  practices: Practice[];
}

const PracticeSection: React.FC<PracticeSectionProps> = ({ practices }) => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState<string | null>(null);
  const [showExplanation, setShowExplanation] = useState(false);
  const [score, setScore] = useState(0);
  const [answeredQuestions, setAnsweredQuestions] = useState<Set<number>>(new Set());
  const [selectedCategory, setSelectedCategory] = useState<string>('all');

  // Get unique categories
  const categories = ['all', ...new Set(practices.map(p => p.category))];
  
  // Filter questions by category
  const filteredPractices = selectedCategory === 'all' 
    ? practices 
    : practices.filter(p => p.category === selectedCategory);

  const currentQuestion = filteredPractices[currentQuestionIndex];
  const progress = (answeredQuestions.size / filteredPractices.length) * 100;

  const handleAnswerSelect = (answer: string) => {
    if (answeredQuestions.has(currentQuestionIndex)) return;
    
    setSelectedAnswer(answer);
    setShowExplanation(true);
    
    if (answer === currentQuestion.correctAnswer) {
      setScore(prev => prev + 1);
    }
    
    setAnsweredQuestions(prev => new Set(prev).add(currentQuestionIndex));
  };

  const handleNextQuestion = () => {
    if (currentQuestionIndex < filteredPractices.length - 1) {
      setCurrentQuestionIndex(prev => prev + 1);
      setSelectedAnswer(null);
      setShowExplanation(false);
    }
  };

  const handlePreviousQuestion = () => {
    if (currentQuestionIndex > 0) {
      setCurrentQuestionIndex(prev => prev - 1);
      setSelectedAnswer(null);
      setShowExplanation(false);
    }
  };

  const handleCategoryChange = (category: string) => {
    setSelectedCategory(category);
    setCurrentQuestionIndex(0);
    setSelectedAnswer(null);
    setShowExplanation(false);
    setScore(0);
    setAnsweredQuestions(new Set());
  };

  const getOptionClassName = (option: string) => {
    if (!answeredQuestions.has(currentQuestionIndex)) {
      return option === selectedAnswer ? `${styles.optionButton} ${styles.selected}` : styles.optionButton;
    }
    
    if (option === currentQuestion.correctAnswer) {
      return `${styles.optionButton} ${styles.correct}`;
    }
    
    if (option === selectedAnswer && option !== currentQuestion.correctAnswer) {
      return `${styles.optionButton} ${styles.incorrect}`;
    }
    
    return styles.optionButton;
  };

  return (
    <div className={styles.practiceContainer}>
      <div className={styles.categorySelector}>
        <label htmlFor="category">Vyberte kategorii:</label>
        <select 
          id="category"
          value={selectedCategory}
          onChange={(e) => handleCategoryChange(e.target.value)}
          className={styles.categorySelect}
        >
          {categories.map(category => (
            <option key={category} value={category}>
              {category === 'all' ? 'Všechny kategorie' : category}
            </option>
          ))}
        </select>
      </div>

      <div className={styles.progressBar}>
        <div 
          className={styles.progressFill} 
          style={{ width: `${progress}%` }}
        />
      </div>
      
      <div className={styles.score}>
        Skóre: {score} / {filteredPractices.length}
      </div>

      <div className={styles.questionCard}>
        <div className={styles.questionMeta}>
          <div className={styles.questionType}>
            {currentQuestion.type === 'multiple-choice' ? 'Výběr z možností' : 'Teoretická otázka'}
          </div>
          <div className={styles.questionCategory}>
            {currentQuestion.category}
          </div>
        </div>
        
        <h3 className={styles.questionHeader}>
          {currentQuestion.question}
        </h3>

        {currentQuestion.type === 'multiple-choice' && currentQuestion.options && (
          <div className={styles.optionsContainer}>
            {currentQuestion.options.map((option, index) => (
              <button
                key={index}
                className={getOptionClassName(option)}
                onClick={() => handleAnswerSelect(option)}
                disabled={answeredQuestions.has(currentQuestionIndex)}
              >
                {option}
              </button>
            ))}
          </div>
        )}

        {currentQuestion.type === 'theory' && (
          <div 
            className={styles.theoryAnswer}
            onClick={() => !answeredQuestions.has(currentQuestionIndex) && handleAnswerSelect(currentQuestion.correctAnswer)}
          >
            {showExplanation ? currentQuestion.correctAnswer : 'Klikněte pro zobrazení odpovědi'}
          </div>
        )}

        {showExplanation && (
          <div className={styles.explanation}>
            <strong>Vysvětlení:</strong> {currentQuestion.explanation}
          </div>
        )}

        <div className={styles.navigationButtons}>
          <button
            className={styles.navButton}
            onClick={handlePreviousQuestion}
            disabled={currentQuestionIndex === 0}
          >
            ← Předchozí
          </button>
          
          <button
            className={styles.navButton}
            onClick={handleNextQuestion}
            disabled={currentQuestionIndex === filteredPractices.length - 1}
          >
            Další →
          </button>
        </div>
      </div>
    </div>
  );
};

export default PracticeSection; 