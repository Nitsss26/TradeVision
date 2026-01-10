import { delay } from './delay';
import { getFromStorage, STORAGE_KEYS } from './storage';

import { products as staticProducts } from './data/products';
import { manufacturers as staticManufacturers } from './data/manufacturers';
console.log("ProductService Loaded - Version Authentic Data Prices Updated");


export const productService = {
    getAllProducts: async () => {
        return staticProducts;
    },
    getProductById: async (id) => {
        const product = staticProducts.find(p => p._id === id);
        if (product) {
            const manufacturer = staticManufacturers.find(m => m._id === product.manufacturerId);
            return { ...product, manufacturer: { ...product.manufacturer, ...manufacturer } };
        }
        return null;
    },
    getProductsByManufacturer: async (manufacturerId) => {
        return staticProducts.filter(p => p.manufacturerId === manufacturerId);
    }
};

export const mockProductService = {
    getAllProducts: async (filters = {}) => {
        await delay(600);
        let products = [...staticProducts]; // Create a copy to sort

        // Prioritize Real Manufacturers: Fermoscapes (m11), Giriraj (m10), Jasch (m9)
        const priorityIds = ['m11', 'm10', 'm9'];

        products.sort((a, b) => {
            const aPriority = priorityIds.includes(a.manufacturerId) ? priorityIds.indexOf(a.manufacturerId) : 999;
            const bPriority = priorityIds.includes(b.manufacturerId) ? priorityIds.indexOf(b.manufacturerId) : 999;
            return aPriority - bPriority;
        });

        const manufacturers = getFromStorage(STORAGE_KEYS.MANUFACTURERS) || [];

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
        // Return sorted products (Real Manufacturers First)
        let products = [...staticProducts];
        const priorityIds = ['m11', 'm10', 'm9'];

        products.sort((a, b) => {
            const aPriority = priorityIds.includes(a.manufacturerId) ? priorityIds.indexOf(a.manufacturerId) : 999;
            const bPriority = priorityIds.includes(b.manufacturerId) ? priorityIds.indexOf(b.manufacturerId) : 999;
            return aPriority - bPriority;
        });

        return { success: true, data: products.slice(0, 8) }; // Return top 8
    }
};
