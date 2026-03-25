import { useState, useCallback, useMemo } from 'react';
import { addEdge, useNodesState, useEdgesState } from 'reactflow';
import { askAI, saveFlowData } from '../services/api';
import { initialNodes, initialEdges } from '../utils/flowConstants';

export const useFlowLogic = () => {
    const [nodes, setNodes, onNodesChange] = useNodesState(initialNodes);
    const [edges, setEdges, onEdgesChange] = useEdgesState(initialEdges);
    const [loading, setLoading] = useState(false);
    const [prompt, setPrompt] = useState('');
    const [lastResponse, setLastResponse] = useState('');

    const handleInputChange = useCallback((evt) => {
        const val = evt.target.value;
        setPrompt(val);
        setNodes((nds) =>
            nds.map((node) => {
                if (node.id === 'node-input') {
                    return { ...node, data: { ...node.data, value: val } };
                }
                return node;
            })
        );
    }, [setNodes]);

    const onConnect = useCallback((params) => setEdges((eds) => addEdge(params, eds)), [setEdges]);

    const runFlow = async () => {
        if (!prompt) return alert('Please enter a prompt first!');
        setLoading(true);

        try {
            const response = await askAI(prompt);
            setLastResponse(response);

            setNodes((nds) =>
                nds.map((node) => {
                    if (node.id === 'node-result') {
                        return { ...node, data: { ...node.data, label: response } };
                    }
                    return node;
                })
            );
        } catch (err) {
            alert(err.message || 'AI error occurred.');
        } finally {
            setLoading(false);
        }
    };

    const saveFlow = async () => {
        if (!prompt || !lastResponse) return alert('Run the flow first to generate a response!');

        try {
            await saveFlowData(prompt, lastResponse);
            alert('Flow data saved to MongoDB!');
        } catch (err) {
            alert('Failed to save.');
        }
    };

    // Inject handleInputChange into the node's data
    useMemo(() => {
        setNodes((nds) =>
            nds.map((n) => n.id === 'node-input' ? { ...n, data: { ...n.data, onChange: handleInputChange } } : n)
        );
    }, [handleInputChange, setNodes]);

    return {
        nodes,
        edges,
        onNodesChange,
        onEdgesChange,
        onConnect,
        loading,
        runFlow,
        saveFlow
    };
};
