import { useState } from 'react'
import styles from './App.module.css'
import Navbar from './components/Layout/Navbar'
import TheorySection from './components/Theory/TheorySection'
import ExampleSection from './components/Examples/ExampleSection'
import PracticeSection from './components/Practice/PracticeSection'
import FlowchartSection from './components/Flowcharts/FlowchartSection'
import { Chapter, Example, Practice } from './types'

// Sample data - replace with actual content from your materials
const sampleChapter: Chapter = {
  id: '1',
  title: 'Statistical Hypothesis Testing',
  content: `
    <h2>Introduction to Hypothesis Testing</h2>
    <p>Hypothesis testing is a method of statistical inference used to decide whether given data support a particular hypothesis.</p>
    
    <h3>Key Concepts</h3>
    <ul>
      <li>Null Hypothesis (H₀)</li>
      <li>Alternative Hypothesis (H₁)</li>
      <li>Level of Significance (α)</li>
      <li>Test Statistic</li>
      <li>Critical Value</li>
      <li>p-value</li>
    </ul>
  `,
  tests: [
    {
      id: '1',
      name: 'One Sample t-Test',
      description: 'Used to determine whether a sample mean significantly differs from a hypothesized population mean.',
      formula: 't = (x̄ - μ₀) / (s / √n)',
      assumptions: [
        'Data is normally distributed or sample size > 30',
        'Random sampling',
        'Independent observations'
      ],
      steps: [
        'State null and alternative hypotheses',
        'Choose significance level (α)',
        'Calculate test statistic',
        'Find critical value or p-value',
        'Make decision and state conclusion'
      ],
      examples: []
    }
  ],
  practices: []
}

const sampleExamples: Example[] = [
  {
    id: '1',
    title: 'Testing Mean Height',
    problem: 'A researcher claims the average height of adult males in a population is 175cm. A sample of 50 males has a mean height of 173cm with a standard deviation of 6cm. Test this claim at α = 0.05.',
    solution: `
1. Hypotheses:
   H₀: μ = 175
   H₁: μ ≠ 175

2. Test statistic:
   t = (173 - 175) / (6 / √50) = -2.357

3. Critical value (α = 0.05, df = 49):
   t₀.₀₂₅ = ±2.010

4. Decision:
   Since |-2.357| > 2.010, reject H₀

5. Conclusion:
   There is sufficient evidence to conclude that the population mean height differs from 175cm.
    `,
    data: [173, 175, 6, 50]
  }
]

const samplePractices: Practice[] = [
  {
    id: '1',
    question: 'Which test should you use when testing a population mean with unknown population standard deviation and a small sample size (n < 30)?',
    options: [
      'Z-test',
      't-test',
      'Chi-square test',
      'F-test'
    ],
    correctAnswer: 't-test',
    explanation: 'When the population standard deviation is unknown and the sample size is small (n < 30), we use a t-test because it accounts for the additional uncertainty in estimating the population standard deviation.',
    type: 'multiple-choice'
  }
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
        return <PracticeSection practices={samplePractices} />
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