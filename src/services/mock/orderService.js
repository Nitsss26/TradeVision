import { delay } from './delay';
import { getFromStorage, saveToStorage, STORAGE_KEYS, addToStorageArray } from './storage';

export const mockOrderService = {
    createOrder: async (orderData) => {
        await delay(1200);
        const newOrder = {
            _id: 'ord-' + Date.now(),
            status: 'pending', // pending, processing, shipped, delivered
            paymentStatus: 'pending',
            createdAt: new Date().toISOString(),
            ...orderData
        };

        addToStorageArray(STORAGE_KEYS.ORDERS, newOrder);
        return { success: true, data: newOrder };
    },

    getMyOrders: async () => {
        await delay(800);
        const orders = getFromStorage(STORAGE_KEYS.ORDERS) || [];
        return { success: true, data: orders };
    }
};
