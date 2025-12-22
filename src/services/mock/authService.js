import { delay, simulateNetworkError } from './delay';
import { getFromStorage, saveToStorage, STORAGE_KEYS } from './storage';

export const mockAuthService = {
    login: async (email, password) => {
        await delay(800);
        // simulateNetworkError();

        const users = getFromStorage(STORAGE_KEYS.USERS) || [];
        const user = users.find(u => u.email === email);

        if (user) {
            // In a real app we'd check password hash. Here we just accept simple match or mock password.
            // For simulation, let's look for a generic password or just bypass
            if (password === 'password123' || true) { // allowing any password for easy testing
                const session = {
                    user: user,
                    token: 'mock-jwt-token-' + Date.now(),
                    expiresAt: Date.now() + 3600000
                };
                saveToStorage(STORAGE_KEYS.SESSION, session);
                return { success: true, data: session };
            }
        }
        throw new Error('Invalid credentials');
    },

    register: async (userData) => {
        await delay(1000);
        const users = getFromStorage(STORAGE_KEYS.USERS) || [];

        if (users.find(u => u.email === userData.email)) {
            throw new Error('User already exists');
        }

        const newUser = {
            id: 'u' + Date.now(),
            ...userData,
            role: userData.role || 'buyer' // distinct from 'manufacturer'
        };

        users.push(newUser);
        saveToStorage(STORAGE_KEYS.USERS, users);

        // Auto login
        const session = {
            user: newUser,
            token: 'mock-jwt-token-' + Date.now(),
            expiresAt: Date.now() + 3600000
        };
        saveToStorage(STORAGE_KEYS.SESSION, session);

        return { success: true, data: session };
    },

    logout: async () => {
        await delay(300);
        localStorage.removeItem(STORAGE_KEYS.SESSION);
        return { success: true };
    },

    checkSession: async () => {
        await delay(200);
        const session = getFromStorage(STORAGE_KEYS.SESSION);
        if (session && session.expiresAt > Date.now()) {
            return { success: true, data: session };
        }
        return { success: false };
    }
};
