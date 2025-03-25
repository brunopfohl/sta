import { useState, useEffect } from 'react';
import styles from './PracticeSection.module.css';
import { Practice } from '../../types';
import { sortCategories } from '../../utils/categoryOrder';

interface PracticeSectionProps {
  practices: Practice[];
}

// Type for problematic question reference
interface ProblematicQuestion {
  id: string;
  category: string;
  question: string;
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
  const [problematicQuestions, setProblematicQuestions] = useState<ProblematicQuestion[]>([]);
  const [showProblematicList, setShowProblematicList] = useState(false);
  const [isProblematicMode, setIsProblematicMode] = useState(false);

  // Get unique categories and sort them in order of progression
  const uniqueCategories = [...new Set(practices.map(p => p.category))];
  const categories = sortCategories(uniqueCategories);

  // Get the IDs of problematic questions
  const problematicQuestionIds = problematicQuestions.map(q => q.id);
  
  // Filter questions by category and exclude problematic questions unless in problematic mode
  const filteredPractices = selectedCategory 
    ? isProblematicMode 
      ? practices.filter(p => p.category === selectedCategory && problematicQuestionIds.includes(p.id))
      : practices.filter(p => p.category === selectedCategory && !problematicQuestionIds.includes(p.id))
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

  // Load problematic questions from localStorage on mount
  useEffect(() => {
    const savedProblematicQuestions = localStorage.getItem('problematicQuestions');
    if (savedProblematicQuestions) {
      try {
        const parsedQuestions = JSON.parse(savedProblematicQuestions);
        setProblematicQuestions(parsedQuestions);
      } catch (error) {
        console.error('Error parsing problematic questions:', error);
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
    setShowProblematicList(false);
    setIsProblematicMode(false);
  };

  const handleBackToRoadmap = () => {
    setSelectedCategory(null);
    setShowRoadmap(true);
    setShowProblematicList(false);
    setIsProblematicMode(false);
  };

  const handleToggleProblematicList = () => {
    setShowProblematicList(!showProblematicList);
    setShowRoadmap(!showProblematicList);
  };

  const handleMarkAsProblematic = () => {
    if (!currentQuestion) return;
    
    const newProblematicQuestion: ProblematicQuestion = {
      id: currentQuestion.id,
      category: currentQuestion.category,
      question: currentQuestion.question
    };
    
    // Check if question is already in the list
    const isAlreadyMarked = problematicQuestions.some(q => q.id === currentQuestion.id);
    
    if (!isAlreadyMarked) {
      const updatedList = [...problematicQuestions, newProblematicQuestion];
      setProblematicQuestions(updatedList);
      
      // Save to localStorage
      localStorage.setItem('problematicQuestions', JSON.stringify(updatedList));
      
      // If we're in regular mode and this was the last non-problematic question, go to next
      if (!isProblematicMode) {
        handleNextQuestion();
      }
    }
  };

  const handleRemoveFromProblematic = (id: string) => {
    const updatedList = problematicQuestions.filter(q => q.id !== id);
    setProblematicQuestions(updatedList);
    
    // Save to localStorage
    localStorage.setItem('problematicQuestions', JSON.stringify(updatedList));
  };

  const handleJumpToQuestion = (id: string, category: string) => {
    // Find the question's category and jump to it
    setSelectedCategory(category);
    setShowRoadmap(false);
    setShowProblematicList(false);
    setIsProblematicMode(true);
    
    // Find the index of the question in the filtered list
    const categoryQuestions = practices.filter(p => p.category === category && problematicQuestionIds.includes(p.id));
    const questionIndex = categoryQuestions.findIndex(q => q.id === id);
    
    if (questionIndex !== -1) {
      setCurrentQuestionIndex(questionIndex);
      setSelectedAnswer(null);
      setShowExplanation(false);
      setScore(0);
      setAnsweredQuestions(new Set());
    }
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

  // Get count of problematic questions per category
  const getProblematicCountByCategory = (category: string) => {
    return problematicQuestions.filter(q => q.category === category).length;
  };

  // Get count of non-problematic questions per category
  const getNonProblematicCountByCategory = (category: string) => {
    const categoryPractices = practices.filter(p => p.category === category);
    const problematicIds = problematicQuestions.filter(q => q.category === category).map(q => q.id);
    return categoryPractices.filter(p => !problematicIds.includes(p.id)).length;
  };

  // Render the problematic questions list
  if (showProblematicList) {
    return (
      <div className={styles.practiceContainer}>
        <div className={styles.practiceHeader}>
          <button 
            className={styles.backButton}
            onClick={handleBackToRoadmap}
          >
            ← Zpět na roadmap
          </button>
          <h2 className={styles.categoryTitle}>Problematické otázky</h2>
        </div>
        
        {problematicQuestions.length === 0 ? (
          <div className={styles.emptyState}>
            <p>Zatím jste neoznačili žádné problematické otázky</p>
          </div>
        ) : (
          <div className={styles.problematicList}>
            {problematicQuestions.map((question) => (
              <div key={question.id} className={styles.problematicItem}>
                <div className={styles.problematicContent}>
                  <div className={styles.problematicCategory}>{question.category}</div>
                  <h3 className={styles.problematicQuestion}>{question.question}</h3>
                </div>
                <div className={styles.problematicActions}>
                  <button 
                    className={styles.problematicJumpButton}
                    onClick={() => handleJumpToQuestion(question.id, question.category)}
                  >
                    Přejít na otázku
                  </button>
                  <button 
                    className={styles.problematicRemoveButton}
                    onClick={() => handleRemoveFromProblematic(question.id)}
                  >
                    Odstranit ze seznamu
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    );
  }

  if (showRoadmap) {
    // Calculate overall progress (excluding problematic questions)
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
        
        <div className={styles.problematicCounter}>
          <button 
            className={styles.problematicButton}
            onClick={handleToggleProblematicList}
          >
            Zobrazit problematické otázky
            <span className={styles.problematicBadge}>{problematicQuestions.length}</span>
          </button>
        </div>
        
        <div className={styles.roadmap}>
          {categories.map((category, index) => {
            const nonProblematicCount = getNonProblematicCountByCategory(category);
            const problematicCount = getProblematicCountByCategory(category);
            
            return (
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
                    {nonProblematicCount} otázek
                    {problematicCount > 0 && (
                      <span className={styles.problematicIndicator}>
                        (+ {problematicCount} problematických)
                      </span>
                    )}
                  </div>
                </div>
              </div>
            );
          })}
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
          {isProblematicMode && (
            <span className={styles.problematicModeIndicator}>
              (Problematické otázky)
            </span>
          )}
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
            {isProblematicMode && (
              <div className={styles.problematicBadge}>
                Problematická
              </div>
            )}
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

          <div className={styles.questionActions}>
            {isProblematicMode ? (
              <button 
                className={styles.removeProblematicButton}
                onClick={() => handleRemoveFromProblematic(currentQuestion.id)}
              >
                Odstranit z problematických otázek
              </button>
            ) : (
              <button 
                className={styles.markProblematicButton}
                onClick={handleMarkAsProblematic}
                disabled={problematicQuestions.some(q => q.id === currentQuestion.id)}
              >
                {problematicQuestions.some(q => q.id === currentQuestion.id) 
                  ? 'Označeno jako problematické' 
                  : 'Označit jako problematické'}
              </button>
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
      ) : (
        <div className={styles.emptyState}>
          {isProblematicMode ? (
            <p>Žádné problematické otázky v této kategorii</p>
          ) : (
            <p>Žádné otázky v této kategorii</p>
          )}
        </div>
      )}
    </div>
  );
};

export default PracticeSection; 