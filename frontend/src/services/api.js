import axios from 'axios';

const api = axios.create({
    baseURL: import.meta.env.VITE_API_URL || 'https://ai-flow-m5sj.onrender.com/api',
});

export const askAI = async (prompt) => {
    try {
        const { data } = await api.post('/ask-ai', { prompt });
        return data.answer;
    } catch (error) {
        console.error('API Error:', error.response?.data?.message || 'Server connection failed.');
        throw error;
    }
};

export const saveFlowData = async (prompt, response) => {
    try {
        const { data } = await api.post('/save', { prompt, response });
        return data;
    } catch (error) {
        console.error('Save Error:', error.response?.data?.message || 'Failed to save flow.');
        throw error;
    }
};

export default api;
