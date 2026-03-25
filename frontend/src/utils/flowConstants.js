import { InputNode, ResultNode } from '../components/CustomNodes';

export const initialNodes = [
    {
        id: 'node-input',
        type: 'inputNode',
        position: { x: 100, y: 150 },
        data: { value: '', onChange: () => { } },
    },
    {
        id: 'node-result',
        type: 'resultNode',
        position: { x: 500, y: 150 },
        data: { label: '' },
    },
];

export const initialEdges = [
    { id: 'edge-main', source: 'node-input', target: 'node-result', animated: true },
];

export const nodeTypes = {
    inputNode: InputNode,
    resultNode: ResultNode,
};
