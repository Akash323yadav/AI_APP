import React from 'react';

const Header = () => {
    return (
        <div style={{ position: 'absolute', top: 20, left: 20, zIndex: 10 }}>
            <h1 style={{ fontSize: '1.5rem', fontWeight: 800, background: 'linear-gradient(to right, #6366f1, #ec4899)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
                MERN AI FLOW
            </h1>
            <p style={{ fontSize: '0.8rem', color: '#64748b' }}>Connected to OpenRouter & MongoDB</p>
        </div>
    );
};

export default Header;
