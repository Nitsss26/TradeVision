import { delay } from './delay';
import { getFromStorage, STORAGE_KEYS } from './storage';

import { products as staticProducts } from './data/products';
import { manufacturers as staticManufacturers } from './data/manufacturers';

export const productService = {
    getAllProducts: async () => {
        return staticProducts;
    },
    getProductById: async (id) => {
        return staticProducts.find(p => p._id === id) || null;
    }
};

export const mockProductService = {
    getAllProducts: async (filters = {}) => {
        await delay(600);
        let products = staticProducts; // Use static data directly
        const manufacturers = getFromStorage(STORAGE_KEYS.MANUFACTURERS) || []; // Keep this or use static as well? Better to trust staticProducts which has manufacturerName

        // Join Manufacturer Data (Optional if static data is rich enough, but good to keep)
        // Note: staticProducts already has manufacturerName, but joining gets full manufacturer object
        // For now, let's just use staticProducts as source and join if needed.

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
        const product = staticProducts.find(p => p._id === id);

        if (product) {
            const manufacturer = staticManufacturers.find(m => m._id === product.manufacturerId);
            return { success: true, data: { ...product, manufacturer } };
        }
        throw new Error('Product not found');
    },

    getFeaturedProducts: async () => {
        await delay(400);
        // Just return first 4 for now
        return { success: true, data: staticProducts.slice(0, 4) };
    }
};
