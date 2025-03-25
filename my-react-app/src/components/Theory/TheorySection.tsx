import { Chapter } from '../../types';
import styles from './TheorySection.module.css';

interface TheorySectionProps {
  chapter: Chapter;
}

export default function TheorySection({ chapter }: TheorySectionProps) {
  return (
    <div className={styles.container}>
      <h2 className={styles.title}>{chapter.title}</h2>
      <div className={styles.content}>
        <div dangerouslySetInnerHTML={{ __html: chapter.content }} />
      </div>
      <div className={styles.testsSection}>
        <h3 className={styles.testsTitle}>Statistical Tests</h3>
        {chapter.tests.map((test) => (
          <div key={test.id} className={styles.testCard}>
            <h4 className={styles.testName}>{test.name}</h4>
            <p className={styles.testDescription}>{test.description}</p>
            <div className={styles.formulaSection}>
              <h5 className={styles.sectionTitle}>Formula:</h5>
              <code className={styles.formula}>{test.formula}</code>
            </div>
            <div>
              <h5 className={styles.sectionTitle}>Assumptions:</h5>
              <ul className={`${styles.list} ${styles.listDisc}`}>
                {test.assumptions.map((assumption, index) => (
                  <li key={index}>{assumption}</li>
                ))}
              </ul>
            </div>
            <div>
              <h5 className={styles.sectionTitle}>Steps:</h5>
              <ol className={`${styles.list} ${styles.listDecimal}`}>
                {test.steps.map((step, index) => (
                  <li key={index}>{step}</li>
                ))}
              </ol>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
} 