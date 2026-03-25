import React from 'react';
import { Play, Save } from 'lucide-react';

const ActionButtons = ({ onRun, onSave, loading }) => {
    return (
        <div className="controls-overlay">
            <button className="premium-btn" onClick={onRun} disabled={loading}>
                <Play size={18} fill="currentColor" />
                {loading ? 'Thinking...' : 'Run Flow'}
            </button>
            <button className="premium-btn btn-secondary" onClick={onSave}>
                <Save size={18} />
                Save Data
            </button>
        </div>
    );
};

export default ActionButtons;
