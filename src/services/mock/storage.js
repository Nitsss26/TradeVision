const STORAGE_KEYS = {
    USERS: 'tv_users',
    MANUFACTURERS: 'tv_manufacturers',
    PRODUCTS: 'tv_products',
    RFQS: 'tv_rfqs',
    ORDERS: 'tv_orders',
    SESSION: 'tv_session',
    INIT: 'tv_initialized'
};

export const getFromStorage = (key) => {
    try {
        const item = localStorage.getItem(key);
        return item ? JSON.parse(item) : null;
    } catch (error) {
        console.error(`Error reading ${key} from storage`, error);
        return null;
    }
};

export const saveToStorage = (key, data) => {
    try {
        localStorage.setItem(key, JSON.stringify(data));
    } catch (error) {
        console.error(`Error saving ${key} to storage`, error);
    }
};

export const updateInStorageArray = (key, id, updates) => {
    const items = getFromStorage(key) || [];
    const index = items.findIndex(item => item._id === id || item.id === id);
    if (index !== -1) {
        items[index] = { ...items[index], ...updates };
        saveToStorage(key, items);
        return items[index];
    }
    return null;
};

export const addToStorageArray = (key, item) => {
    const items = getFromStorage(key) || [];
    items.push(item);
    saveToStorage(key, items);
    return item;
};

export { STORAGE_KEYS };
