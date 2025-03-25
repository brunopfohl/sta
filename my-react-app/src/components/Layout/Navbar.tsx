import { JSX, useState } from 'react';
import styles from './Navbar.module.css';

interface NavbarProps {
  onNavigate: (section: string) => void;
}

export default function Navbar({ onNavigate }: NavbarProps): JSX.Element {
  const [activeSection, setActiveSection] = useState('theory');

  const handleNavigation = (section: string) => {
    setActiveSection(section);
    onNavigate(section);
  };

  return (
    <nav className={styles.navbar}>
      <div className={styles.container}>
        <h1 className={styles.title}>Statistical Hypothesis Testing</h1>
        <div className={styles.buttonGroup}>
          <button
            className={`${styles.button} ${activeSection === 'theory' ? styles.activeButton : ''}`}
            onClick={() => handleNavigation('theory')}
          >
            Theory
          </button>
          <button
            className={`${styles.button} ${activeSection === 'examples' ? styles.activeButton : ''}`}
            onClick={() => handleNavigation('examples')}
          >
            Examples
          </button>
          <button
            className={`${styles.button} ${activeSection === 'practice' ? styles.activeButton : ''}`}
            onClick={() => handleNavigation('practice')}
          >
            Practice
          </button>
          <button
            className={`${styles.button} ${activeSection === 'flowcharts' ? styles.activeButton : ''}`}
            onClick={() => handleNavigation('flowcharts')}
          >
            Flowcharts
          </button>
        </div>
      </div>
    </nav>
  );
} 