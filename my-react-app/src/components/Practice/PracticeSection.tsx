import { useState } from 'react';
import { Practice } from '../../types';
import styles from './PracticeSection.module.css';

interface PracticeSectionProps {
  practices: Practice[];
}

export default function PracticeSection({ practices }: PracticeSectionProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [showAnswer, setShowAnswer] = useState(false);
  const [userAnswer, setUserAnswer] = useState('');
  const [score, setScore] = useState({ correct: 0, total: 0 });

  const currentPractice = practices[currentIndex];

  const handleSubmit = () => {
    const isCorrect = userAnswer.toLowerCase() === currentPractice.correctAnswer.toLowerCase();
    setScore(prev => ({
      correct: prev.correct + (isCorrect ? 1 : 0),
      total: prev.total + 1
    }));
    setShowAnswer(true);
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % practices.length);
    setShowAnswer(false);
    setUserAnswer('');
  };

  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <div className={styles.header}>
          <h2 className={styles.title}>Practice Problems</h2>
          <div className={styles.score}>
            Score: {score.correct}/{score.total}
          </div>
        </div>

        <div className={styles.questionCard}>
          <div className={styles.questionHeader}>
            <h3 className={styles.questionTitle}>Question {currentIndex + 1}:</h3>
            <p className={styles.questionText}>{currentPractice.question}</p>
          </div>

          {currentPractice.type === 'multiple-choice' && currentPractice.options && (
            <div className={styles.optionsList}>
              {currentPractice.options.map((option, index) => (
                <label key={index} className={styles.optionLabel}>
                  <input
                    type="radio"
                    name="answer"
                    value={option}
                    checked={userAnswer === option}
                    onChange={(e) => setUserAnswer(e.target.value)}
                    disabled={showAnswer}
                  />
                  <span>{option}</span>
                </label>
              ))}
            </div>
          )}

          {currentPractice.type !== 'multiple-choice' && (
            <div>
              <textarea
                className={styles.textArea}
                rows={4}
                value={userAnswer}
                onChange={(e) => setUserAnswer(e.target.value)}
                disabled={showAnswer}
                placeholder="Enter your answer..."
              />
            </div>
          )}

          {!showAnswer ? (
            <button
              className={styles.submitButton}
              onClick={handleSubmit}
            >
              Submit Answer
            </button>
          ) : (
            <div>
              <div className={`${styles.feedback} ${
                userAnswer.toLowerCase() === currentPractice.correctAnswer.toLowerCase()
                  ? styles.feedbackCorrect
                  : styles.feedbackIncorrect
              }`}>
                <h4 className={styles.feedbackTitle}>
                  {userAnswer.toLowerCase() === currentPractice.correctAnswer.toLowerCase()
                    ? 'Correct!'
                    : 'Incorrect'}
                </h4>
                <p>Correct answer: {currentPractice.correctAnswer}</p>
                <p>{currentPractice.explanation}</p>
              </div>
              <button
                className={styles.submitButton}
                onClick={handleNext}
              >
                Next Question
              </button>
            </div>
          )}
        </div>

        <div className={styles.navigation}>
          <button
            className={styles.navButton}
            onClick={() => setCurrentIndex((prev) => (prev - 1 + practices.length) % practices.length)}
          >
            Previous
          </button>
          <span>
            Question {currentIndex + 1} of {practices.length}
          </span>
          <button
            className={styles.navButton}
            onClick={() => setCurrentIndex((prev) => (prev + 1) % practices.length)}
          >
            Next
          </button>
        </div>
      </div>
    </div>
  );
} 