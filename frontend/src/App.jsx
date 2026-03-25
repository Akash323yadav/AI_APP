import React from 'react';
import ReactFlow, { Background, Controls } from 'reactflow';
import 'reactflow/dist/style.css';

// Custom Hooks & Components
import { useFlowLogic } from './hooks/useFlowLogic';
import { nodeTypes } from './utils/flowConstants';
import Header from './components/Header';
import ActionButtons from './components/ActionButtons';
import Footer from './components/Footer';

function App() {
  const {
    nodes,
    edges,
    onNodesChange,
    onEdgesChange,
    onConnect,
    loading,
    runFlow,
    saveFlow
  } = useFlowLogic();

  return (
    <div style={{ width: '100vw', height: '100vh', position: 'relative' }}>

      <Header />
      <ActionButtons onRun={runFlow} onSave={saveFlow} loading={loading} />

      <ReactFlow
        nodes={nodes}
        edges={edges}
        onNodesChange={onNodesChange}
        onEdgesChange={onEdgesChange}
        onConnect={onConnect}
        nodeTypes={nodeTypes}
        fitView
      >
        <Background />
        <Controls />
      </ReactFlow>

      <Footer />

    </div>
  );
}

export default App;
