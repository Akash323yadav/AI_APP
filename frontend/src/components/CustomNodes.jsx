import React, { memo } from 'react';
import { Handle, Position } from 'reactflow';
import { Sparkles, MessageSquare, Zap } from 'lucide-react';

export const InputNode = memo(({ data, isConnectable }) => {
    return (
        <div className="glass-node">
            <div className="node-title">
                <MessageSquare size={16} />
                User Prompt
            </div>
            <textarea
                className="node-input"
                placeholder="Type your prompt here..."
                onChange={data.onChange}
                value={data.value}
            />
            <Handle
                type="source"
                position={Position.Right}
                id="a"
                style={{ top: '50%', background: '#6366f1' }}
                isConnectable={isConnectable}
            />
        </div>
    );
});

export const ResultNode = memo(({ data, isConnectable }) => {
    return (
        <div className="glass-node" style={{ borderColor: 'rgba(236, 72, 153, 0.4)' }}>
            <div className="node-title" style={{ color: '#ec4899' }}>
                <Sparkles size={16} />
                AI Response
            </div>
            <div className="node-output">
                {data.label || "Awaiting AI wisdom..."}
            </div>
            <Handle
                type="target"
                position={Position.Left}
                id="b"
                style={{ top: '50%', background: '#ec4899' }}
                isConnectable={isConnectable}
            />
        </div>
    );
});
