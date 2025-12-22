import { delay } from './delay';
import { getFromStorage, STORAGE_KEYS } from './storage';

export const productService = {
    getAllProducts: async () => {
        const products = getFromStorage(STORAGE_KEYS.PRODUCTS) || [];
        return products;
    },
    getProductById: async (id) => {
        const products = getFromStorage(STORAGE_KEYS.PRODUCTS) || [];
        return products.find(p => p._id === id) || null;
    }
};

export const mockProductService = {
    getAllProducts: async (filters = {}) => {
        await delay(600);
        let products = getFromStorage(STORAGE_KEYS.PRODUCTS) || [];
        const manufacturers = getFromStorage(STORAGE_KEYS.MANUFACTURERS) || [];

        // Join Manufacturer Data
        products = products.map(p => {
            const manufacturer = manufacturers.find(m => m._id === p.manufacturerId);
            return { ...p, manufacturer };
        });

        // Simulate filtering
        if (filters.category) {
            products = products.filter(p =>
                p.basicInfo.category.level1 === filters.category ||
                p.basicInfo.category.level2 === filters.category ||
                p.basicInfo.category.level3 === filters.category
            );
        }
        if (filters.search) {
            const searchLower = filters.search.toLowerCase();
            products = products.filter(p =>
                p.basicInfo.name.toLowerCase().includes(searchLower) ||
                p.basicInfo.tags.some(tag => tag.toLowerCase().includes(searchLower))
            );
        }

        // Pagination (Simple slice for now)
        return { success: true, data: products };
    },

    getProductById: async (id) => {
        await delay(400);
        const products = getFromStorage(STORAGE_KEYS.PRODUCTS) || [];
        const product = products.find(p => p._id === id);
        const manufacturers = getFromStorage(STORAGE_KEYS.MANUFACTURERS) || [];

        if (product) {
            const manufacturer = manufacturers.find(m => m._id === product.manufacturerId);
            return { success: true, data: { ...product, manufacturer } };
        }
        throw new Error('Product not found');
    },

    getFeaturedProducts: async () => {
        await delay(400);
        let products = getFromStorage(STORAGE_KEYS.PRODUCTS) || [];
        const manufacturers = getFromStorage(STORAGE_KEYS.MANUFACTURERS) || [];

        // Join Manufacturer Data
        products = products.map(p => {
            const manufacturer = manufacturers.find(m => m._id === p.manufacturerId);
            return { ...p, manufacturer };
        });

        // Just return first 4 for now
        return { success: true, data: products.slice(0, 4) };
    }
};
