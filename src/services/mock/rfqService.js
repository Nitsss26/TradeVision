import { delay } from './delay';
import { getFromStorage, saveToStorage, STORAGE_KEYS, addToStorageArray } from './storage';

export const mockRFQService = {
    createRFQ: async (rfqData) => {
        await delay(1000);
        const newRFQ = {
            _id: 'rfq-' + Date.now(),
            status: 'sent',
            createdAt: new Date().toISOString(),
            ...rfqData
        };

        addToStorageArray(STORAGE_KEYS.RFQS, newRFQ);
        return { success: true, data: newRFQ };
    },

    getMyRFQs: async (role) => { // role: 'buyer' or 'manufacturer'
        await delay(800);
        const rfqs = getFromStorage(STORAGE_KEYS.RFQS) || [];
        // In a real app we would filter by userId, but for mock let's return all or filter vaguely
        return { success: true, data: rfqs };
    },

    getRFQById: async (id) => {
        await delay(500);
        const rfqs = getFromStorage(STORAGE_KEYS.RFQS) || [];
        const rfq = rfqs.find(r => r._id === id);
        if (rfq) return { success: true, data: rfq };
        throw new Error('RFQ not found');
    }
};
