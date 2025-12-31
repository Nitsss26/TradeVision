import axios from 'axios';

const API_URL = 'http://localhost:5000/api/auth/';

// Register user
const register = async (userData) => {
    console.log('[authService] Sending registration request:', userData);
    try {
        const response = await axios.post(API_URL + 'register', userData);
        console.log('[authService] Registration successful:', response.data);
        if (response.data) {
            localStorage.setItem('user', JSON.stringify(response.data));
        }
        return response.data;
    } catch (error) {
        console.error('[authService] Registration failed:', error.response?.data || error.message);
        throw error;
    }
};

// Login user
const login = async (userData) => {
    // Legacy Manufacturer Bypass
    if (userData.email === 'analytics@gmail.com' && userData.password === '123') {
        const legacyUser = {
            success: true,
            user: {
                id: 'legacy_mfr_001',
                name: 'Tech Solutions Ltd.',
                email: 'analytics@gmail.com',
                role: 'manufacturer',
                token: 'legacy-mock-token' // Mock token
            }
        };
        localStorage.setItem('user', JSON.stringify(legacyUser));
        return legacyUser;
    }

    const response = await axios.post(API_URL + 'login', userData);
    if (response.data) {
        localStorage.setItem('user', JSON.stringify(response.data));
    }
    return response.data;
};

// Logout user
const logout = () => {
    localStorage.removeItem('user');
};

const authService = {
    register,
    logout,
    login,
};

export default authService;
