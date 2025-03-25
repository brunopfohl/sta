import { useState } from 'react'
import styles from './App.module.css'
import Navbar from './components/Layout/Navbar'
import TheorySection from './components/Theory/TheorySection'
import ExampleSection from './components/Examples/ExampleSection'
import PracticeSection from './components/Practice/PracticeSection'
import FlowchartSection from './components/Flowcharts/FlowchartSection'
import { Chapter, Example, Practice } from './types'
import { cviceni1Questions, cviceni2Questions, apstaPrednasky } from './data/practiceQuestions'

// Sample data - replace with actual content from your materials
const sampleChapter: Chapter = {
  id: '1',
  title: 'Statistické testování hypotéz',
  content: `
    <h2>Úvod do testování hypotéz</h2>
    <p>Testování hypotéz je metoda statistické inference používaná k rozhodnutí, zda daná data podporují určitou hypotézu.</p>
    
    <h3>Klíčové pojmy</h3>
    <ul>
      <li>Nulová hypotéza (H₀)</li>
      <li>Alternativní hypotéza (H₁)</li>
      <li>Hladina významnosti (α)</li>
      <li>Testová statistika</li>
      <li>Kritická hodnota</li>
      <li>p-hodnota</li>
    </ul>
  `,
  tests: [
    {
      id: '1',
      name: 'Jednovýběrový t-test',
      description: 'Používá se k určení, zda se výběrový průměr významně liší od hypotetického průměru populace.',
      formula: 't = (x̄ - μ₀) / (s / √n)',
      assumptions: [
        'Data mají normální rozdělení nebo n > 30',
        'Náhodný výběr',
        'Nezávislá pozorování'
      ],
      steps: [
        'Stanovení nulové a alternativní hypotézy',
        'Volba hladiny významnosti (α)',
        'Výpočet testové statistiky',
        'Nalezení kritické hodnoty nebo p-hodnoty',
        'Rozhodnutí a formulace závěru'
      ],
      examples: []
    }
  ],
  practices: []
}

const sampleExamples: Example[] = [
  {
    id: '1',
    title: 'Testování střední hodnoty výšky',
    problem: 'Výzkumník tvrdí, že průměrná výška dospělých mužů v populaci je 175 cm. Vzorek 50 mužů má průměrnou výšku 173 cm se směrodatnou odchylkou 6 cm. Otestujte toto tvrzení na hladině významnosti α = 0.05.',
    solution: `
1. Hypotézy:
   H₀: μ = 175
   H₁: μ ≠ 175

2. Testová statistika:
   t = (173 - 175) / (6 / √50) = -2.357

3. Kritická hodnota (α = 0.05, df = 49):
   t₀.₀₂₅ = ±2.010

4. Rozhodnutí:
   Protože |-2.357| > 2.010, zamítáme H₀

5. Závěr:
   Existuje dostatek důkazů pro tvrzení, že střední hodnota výšky v populaci se liší od 175 cm.
    `,
    data: [173, 175, 6, 50]
  }
]

// Combine all practice questions
const allPractices: Practice[] = [
  ...cviceni1Questions,
  ...cviceni2Questions,
  ...apstaPrednasky
]

function App() {
  const [activeSection, setActiveSection] = useState('theory')

  const renderContent = () => {
    switch (activeSection) {
      case 'theory':
        return <TheorySection chapter={sampleChapter} />
      case 'examples':
        return <ExampleSection examples={sampleExamples} />
      case 'practice':
        return <PracticeSection practices={allPractices} />
      case 'flowcharts':
        return <FlowchartSection />
      default:
        return <TheorySection chapter={sampleChapter} />
    }
  }

  return (
    <div className={styles.app}>
      <Navbar onNavigate={setActiveSection} />
      <main className={styles.main}>
        {renderContent()}
      </main>
    </div>
  )
}

export default App 