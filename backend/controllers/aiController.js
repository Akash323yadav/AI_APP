const axios = require('axios');
const NodeData = require('../models/NodeData');

// --- Helper: Call OpenRouter API ---
const callOpenRouter = async (prompt) => {
    try {
        const response = await axios.post(
            'https://openrouter.ai/api/v1/chat/completions',
            {
                model: process.env.OPENROUTER_MODEL || 'meta-llama/llama-3-8b-instruct',
                messages: [{ role: 'user', content: prompt }],
            },
            {
                headers: {
                    Authorization: `Bearer ${process.env.OPENROUTER_API_KEY}`,
                    'HTTP-Referer': process.env.SITE_URL || 'http://localhost:5173',
                    'X-Title': process.env.SITE_NAME || 'MERN AI Flow',
                    'Content-Type': 'application/json',
                },
            }
        );
        return response.data.choices[0].message.content;
    } catch (error) {
        console.error('OpenRouter Error:', error.response?.data || error.message);
        throw new Error('AI generation failed.');
    }
};

// --- Controllers ---

exports.askAI = async (req, res) => {
    try {
        const { prompt } = req.body;
        if (!prompt) return res.status(400).json({ error: 'Prompt is required' });

        const answer = await callOpenRouter(prompt);
        res.status(200).json({ status: 'success', answer });
    } catch (error) {
        res.status(500).json({ status: 'error', message: error.message });
    }
};

exports.saveFlow = async (req, res) => {
    try {
        const { prompt, response } = req.body;
        if (!prompt || !response) {
            return res.status(400).json({ error: 'Prompt and response are required to save.' });
        }

        const newData = new NodeData({ prompt, response });
        await newData.save();

        res.status(201).json({ status: 'success', message: 'Flow saved successfully!', data: newData });
    } catch (error) {
        res.status(500).json({ status: 'error', message: error.message });
    }
};

exports.getHistory = async (req, res) => {
    try {
        const history = await NodeData.find().sort({ timestamp: -1 }).limit(10);
        res.status(200).json({ status: 'success', data: history });
    } catch (error) {
        res.status(500).json({ status: 'error', message: error.message });
    }
};
