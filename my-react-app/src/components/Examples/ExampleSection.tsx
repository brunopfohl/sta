import { useState } from 'react';
import { Example } from '../../types';
import styles from './ExampleSection.module.css';

interface ExampleSectionProps {
  examples: Example[];
}

export default function ExampleSection({ examples }: ExampleSectionProps) {
  const [selectedExample, setSelectedExample] = useState<Example | null>(null);

  return (
    <div className={styles.container}>
      <h2 className={styles.title}>Examples</h2>
      <div className={styles.grid}>
        <div className={styles.panel}>
          <h3 className={styles.subtitle}>Available Examples</h3>
          <div className={styles.exampleList}>
            {examples.map((example) => (
              <button
                key={example.id}
                className={`${styles.exampleButton} ${
                  selectedExample?.id === example.id ? styles.exampleButtonActive : ''
                }`}
                onClick={() => setSelectedExample(example)}
              >
                {example.title}
              </button>
            ))}
          </div>
        </div>
        <div className={styles.panel}>
          {selectedExample ? (
            <div>
              <h3 className={styles.subtitle}>{selectedExample.title}</h3>
              <div className={styles.content}>
                <h4 className={styles.sectionTitle}>Problem:</h4>
                <p className={styles.content}>{selectedExample.problem}</p>
              </div>
              <div>
                <h4 className={styles.sectionTitle}>Solution:</h4>
                <div className={styles.content}>
                  <p>{selectedExample.solution}</p>
                  {selectedExample.data && (
                    <div className={styles.dataSection}>
                      <h5 className={styles.sectionTitle}>Data:</h5>
                      <code className={styles.code}>
                        {JSON.stringify(selectedExample.data, null, 2)}
                      </code>
                    </div>
                  )}
                </div>
              </div>
            </div>
          ) : (
            <div className={styles.placeholder}>
              Select an example to view its details
            </div>
          )}
        </div>
      </div>
    </div>
  );
} 