import axios from 'axios';

const API_BASE_URL = 'https://code-reviewer-i9vk.onrender.com';

const api = axios.create({
    baseURL: API_BASE_URL,
    timeout: 30000, // 30 second timeout
    headers: {
        'Content-Type': 'application/json',
    }
});

export const getCodeReview = async (code) => {
    try {
        console.log('Making API request to:', `${API_BASE_URL}/ai/get-review`);
        const response = await api.post('/ai/get-review', { code });
        console.log('API response:', response);
        return response.data;
    } catch (error) {
        console.error('API Error:', {
            status: error.response?.status,
            data: error.response?.data,
            message: error.message
        });
        if (error.response?.status === 404) {
            throw new Error('API endpoint not found. Please check the server URL.');
        }
        if (error.code === 'ECONNABORTED') {
            throw new Error('Request timed out. The server might be starting up, please try again.');
        }
        if (!error.response) {
            throw new Error('Network error. Please check your connection and the server status.');
        }
        throw error;
    }
};