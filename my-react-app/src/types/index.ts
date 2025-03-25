export interface TestType {
  id: string;
  name: string;
  description: string;
  formula: string;
  assumptions: string[];
  steps: string[];
  examples: Example[];
}

export interface Example {
  id: string;
  title: string;
  problem: string;
  solution: string;
  data?: number[];
}

export interface Practice {
  id: string;
  question: string;
  options?: string[];
  correctAnswer: string;
  explanation: string;
  type: 'multiple-choice' | 'calculation' | 'theory';
}

export interface Chapter {
  id: string;
  title: string;
  content: string;
  tests: TestType[];
  practices: Practice[];
} 