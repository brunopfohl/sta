import { useState, useEffect } from 'react';
import styles from './PracticeSection.module.css';
import { Practice } from '../../types';
import { sortCategories } from '../../utils/categoryOrder';

interface PracticeSectionProps {
  practices: Practice[];
}

const PracticeSection: React.FC<PracticeSectionProps> = ({ practices }) => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState<string | null>(null);
  const [showExplanation, setShowExplanation] = useState(false);
  const [score, setScore] = useState(0);
  const [answeredQuestions, setAnsweredQuestions] = useState<Set<number>>(new Set());
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [completedCategories, setCompletedCategories] = useState<Set<string>>(new Set());
  const [showRoadmap, setShowRoadmap] = useState(true);

  // Get unique categories and sort them in order of progression
  const uniqueCategories = [...new Set(practices.map(p => p.category))];
  const categories = sortCategories(uniqueCategories);
  
  // Filter questions by category
  const filteredPractices = selectedCategory 
    ? practices.filter(p => p.category === selectedCategory)
    : [];

  const currentQuestion = filteredPractices[currentQuestionIndex];
  const progress = filteredPractices.length > 0
    ? (answeredQuestions.size / filteredPractices.length) * 100
    : 0;

  // Check if category is completed
  useEffect(() => {
    if (selectedCategory && answeredQuestions.size === filteredPractices.length && filteredPractices.length > 0) {
      setCompletedCategories(prev => new Set([...prev, selectedCategory]));
      
      // Save completed categories to localStorage
      const updatedCompletedCategories = new Set([...completedCategories, selectedCategory]);
      localStorage.setItem('completedCategories', JSON.stringify([...updatedCompletedCategories]));
    }
  }, [answeredQuestions, selectedCategory, filteredPractices.length, completedCategories]);

  // Load completed categories from localStorage on mount
  useEffect(() => {
    const savedCompletedCategories = localStorage.getItem('completedCategories');
    if (savedCompletedCategories) {
      try {
        const parsedCategories = JSON.parse(savedCompletedCategories);
        setCompletedCategories(new Set(parsedCategories));
      } catch (error) {
        console.error('Error parsing completed categories:', error);
      }
    }
  }, []);

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

  const handleCategorySelect = (category: string) => {
    setSelectedCategory(category);
    setCurrentQuestionIndex(0);
    setSelectedAnswer(null);
    setShowExplanation(false);
    setScore(0);
    setAnsweredQuestions(new Set());
    setShowRoadmap(false);
  };

  const handleBackToRoadmap = () => {
    setSelectedCategory(null);
    setShowRoadmap(true);
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

  if (showRoadmap) {
    // Calculate overall progress
    const totalCategoriesCount = categories.length;
    const completedCategoriesCount = completedCategories.size;
    const overallProgress = totalCategoriesCount > 0
      ? (completedCategoriesCount / totalCategoriesCount) * 100
      : 0;

    return (
      <div className={styles.practiceContainer}>
        <h2 className={styles.roadmapTitle}>Roadmap cvičení</h2>
        <p className={styles.roadmapDescription}>
          Procházejte kategorie od základních konceptů k pokročilejším. 
          Již dokončené kategorie jsou označeny jako splněné.
        </p>
        
        <div className={styles.overallProgressContainer}>
          <div className={styles.overallProgressLabel}>
            Celkový pokrok: {completedCategoriesCount} / {totalCategoriesCount} kategorií
          </div>
          <div className={styles.overallProgressBar}>
            <div 
              className={styles.overallProgressFill} 
              style={{ width: `${overallProgress}%` }}
            />
          </div>
        </div>
        
        <div className={styles.roadmap}>
          {categories.map((category, index) => (
            <div 
              key={category} 
              className={`${styles.roadmapItem} ${completedCategories.has(category) ? styles.completed : ''}`}
              onClick={() => handleCategorySelect(category)}
            >
              <div className={styles.roadmapNumber}>{index + 1}</div>
              <div className={styles.roadmapContent}>
                <h3 className={styles.roadmapCategory}>{category}</h3>
                <p className={styles.roadmapStatus}>
                  {completedCategories.has(category) ? 'Dokončeno ✓' : 'Nedokončeno'}
                </p>
                <div className={styles.roadmapCount}>
                  {practices.filter(p => p.category === category).length} otázek
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }

  return (
    <div className={styles.practiceContainer}>
      <div className={styles.practiceHeader}>
        <button 
          className={styles.backButton}
          onClick={handleBackToRoadmap}
        >
          ← Zpět na roadmap
        </button>
        <h2 className={styles.categoryTitle}>
          {selectedCategory}
        </h2>
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

      {filteredPractices.length > 0 ? (
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
      ) : (
        <div className={styles.emptyState}>
          <p>Žádné otázky v této kategorii</p>
        </div>
      )}
    </div>
  );
};

export default PracticeSection; 