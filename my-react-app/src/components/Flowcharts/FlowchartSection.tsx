import { useState } from 'react';
import styles from './FlowchartSection.module.css';

interface FlowchartNode {
  id: string;
  text: string;
  type: 'decision' | 'process' | 'terminal';
  x: number;
  y: number;
  connections: string[];
}

interface FlowchartProps {
  title: string;
  nodes: FlowchartNode[];
}

export default function FlowchartSection() {
  const [selectedChart, setSelectedChart] = useState<'oneVariable' | 'twoVariables'>('oneVariable');

  const renderFlowchart = ({ title, nodes }: FlowchartProps) => (
    <div className={styles.flowchart}>
      <h3 className={styles.flowchartTitle}>{title}</h3>
      <div className={styles.flowchartCanvas}>
        {nodes.map((node) => (
          <div
            key={node.id}
            className={`${styles.node} ${
              node.type === 'decision'
                ? styles.nodeDecision
                : node.type === 'process'
                ? styles.nodeProcess
                : styles.nodeTerminal
            }`}
            style={{
              left: `${node.x}%`,
              top: `${node.y}%`,
            }}
          >
            <p className={styles.nodeText}>{node.text}</p>
          </div>
        ))}
      </div>
    </div>
  );

  const oneVariableNodes: FlowchartNode[] = [
    {
      id: '1',
      text: 'Znak v populaci normální rozdělení, nebo lze předpokládat platnost CLV',
      type: 'decision',
      x: 50,
      y: 10,
      connections: ['2', '3'],
    },
    // Add more nodes based on the flowchart in the image
  ];

  const twoVariablesNodes: FlowchartNode[] = [
    {
      id: '1',
      text: 'Znak kvantitativní, normální rozdělení, nebo lze předpokládat platnost CLV',
      type: 'decision',
      x: 50,
      y: 10,
      connections: ['2', '3'],
    },
    // Add more nodes based on the flowchart in the image
  ];

  return (
    <div className={styles.container}>
      <h2 className={styles.title}>Statistical Test Selection Flowcharts</h2>
      <div className={styles.buttonGroup}>
        <button
          className={`${styles.button} ${selectedChart === 'oneVariable' ? styles.buttonActive : ''}`}
          onClick={() => setSelectedChart('oneVariable')}
        >
          One Variable Tests
        </button>
        <button
          className={`${styles.button} ${selectedChart === 'twoVariables' ? styles.buttonActive : ''}`}
          onClick={() => setSelectedChart('twoVariables')}
        >
          Two Variables Tests
        </button>
      </div>

      {selectedChart === 'oneVariable' ? (
        renderFlowchart({
          title: 'Hypothesis Testing for One Variable',
          nodes: oneVariableNodes,
        })
      ) : (
        renderFlowchart({
          title: 'Hypothesis Testing for Two Variables',
          nodes: twoVariablesNodes,
        })
      )}

      <div className={styles.legend}>
        <h3 className={styles.legendTitle}>Legend</h3>
        <div className={styles.legendList}>
          <div className={styles.legendItem}>
            <div className={`${styles.legendBox} ${styles.legendBoxDecision}`}></div>
            <span>Decision Node</span>
          </div>
          <div className={styles.legendItem}>
            <div className={`${styles.legendBox} ${styles.legendBoxProcess}`}></div>
            <span>Process Node</span>
          </div>
          <div className={styles.legendItem}>
            <div className={`${styles.legendBox} ${styles.legendBoxTerminal}`}></div>
            <span>Terminal Node</span>
          </div>
        </div>
      </div>
    </div>
  );
} 