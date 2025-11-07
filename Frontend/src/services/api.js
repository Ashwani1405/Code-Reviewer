import axios from 'axios';

const API_BASE_URL = 'https://code-reviewer-i9vk.onrender.com';

export const getCodeReview = async (code) => {
    try {
        const response = await axios.post(`${API_BASE_URL}/ai/get-review`, {
            code
        });
        return response.data;
    } catch (error) {
        console.error('Error getting code review:', error);
        throw error;
    }
};