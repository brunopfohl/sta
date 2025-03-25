import React from 'react';
import styles from './Navbar.module.css';

interface NavbarProps {
  onNavigate: (section: string) => void;
}

const Navbar: React.FC<NavbarProps> = ({ onNavigate }) => {
  const [activeSection, setActiveSection] = React.useState('theory');

  const handleNavigation = (section: string) => {
    setActiveSection(section);
    onNavigate(section);
  };

  return (
    <nav className={styles.navbar}>
      <div className={styles.container}>
        <a href="/" className={styles.logo}>
          <span>📊</span> StatLearn
        </a>
        
        <div className={styles.nav}>
          <button
            className={`${styles.navItem} ${activeSection === 'theory' ? styles.active : ''}`}
            onClick={() => handleNavigation('theory')}
          >
            Teorie
          </button>
          
          <button
            className={`${styles.navItem} ${activeSection === 'examples' ? styles.active : ''}`}
            onClick={() => handleNavigation('examples')}
          >
            Příklady
          </button>
          
          <button
            className={`${styles.navItem} ${activeSection === 'practice' ? styles.active : ''}`}
            onClick={() => handleNavigation('practice')}
          >
            Cvičení
          </button>
          
          <button
            className={`${styles.navItem} ${activeSection === 'flowcharts' ? styles.active : ''}`}
            onClick={() => handleNavigation('flowcharts')}
          >
            Diagramy
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar; 