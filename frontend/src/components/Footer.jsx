import React from 'react';
import { Activity, Zap } from 'lucide-react';

const Footer = () => {
    return (
        <div style={{ position: 'absolute', bottom: 20, left: '50%', transform: 'translateX(-50%)', background: 'rgba(255,255,255,0.05)', backdropFilter: 'blur(5px)', padding: '8px 20px', borderRadius: '100px', border: '1px solid rgba(255,255,255,0.1)', color: '#94a3b8', fontSize: '0.75rem', display: 'flex', alignItems: 'center', gap: '8px' }}>
            <Zap size={12} color="#f59e0b" />
            <span>Professional MERN Project • Google Gemini 2.0</span>
            <div style={{ width: 1, height: 12, background: 'rgba(255,255,255,0.1)' }} />
            <Activity size={12} />
        </div>
    );
};

export default Footer;
