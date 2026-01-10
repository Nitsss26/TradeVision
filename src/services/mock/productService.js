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
            // 1. Manufacturer Priority
            const aPriority = priorityIds.includes(a.manufacturerId) ? priorityIds.indexOf(a.manufacturerId) : 999;
            const bPriority = priorityIds.includes(b.manufacturerId) ? priorityIds.indexOf(b.manufacturerId) : 999;

            if (aPriority !== bPriority) return aPriority - bPriority;

            // 2. Image Availability (Has Image -> Top)
            // Check if image exists and is not a placeholder
            const aHasImage = a.media?.images?.[0]?.url && !a.media.images[0].url.includes('via.placeholder') ? 1 : 0;
            const bHasImage = b.media?.images?.[0]?.url && !b.media.images[0].url.includes('via.placeholder') ? 1 : 0;

            return bHasImage - aHasImage; // Higher value (1) comes first
        });

        const manufacturers = getFromStorage(STORAGE_KEYS.MANUFACTURERS) || [];

        // Simulate filtering
        if (filters.category) {
            products = products.filter(p => {
                // Fix for "Home" filter matching "Home & Garden"
                if (filters.category === 'Home' && (p.basicInfo.category.level1.includes('Home') || p.basicInfo.category.level1 === 'Home & Garden')) {
                    return true;
                }
                return p.basicInfo.category.level1 === filters.category ||
                    p.basicInfo.category.level2 === filters.category ||
                    p.basicInfo.category.level3 === filters.category
            });
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
        // Return sorted products (Real Manufacturers First, then Images)
        let products = [...staticProducts];
        const priorityIds = ['m11', 'm10', 'm9'];

        products.sort((a, b) => {
            // 1. Manufacturer Priority
            const aPriority = priorityIds.includes(a.manufacturerId) ? priorityIds.indexOf(a.manufacturerId) : 999;
            const bPriority = priorityIds.includes(b.manufacturerId) ? priorityIds.indexOf(b.manufacturerId) : 999;

            if (aPriority !== bPriority) return aPriority - bPriority;

            // 2. Image Availability
            const aHasImage = a.media?.images?.[0]?.url && !a.media.images[0].url.includes('via.placeholder') ? 1 : 0;
            const bHasImage = b.media?.images?.[0]?.url && !b.media.images[0].url.includes('via.placeholder') ? 1 : 0;

            return bHasImage - aHasImage;
        });

        return { success: true, data: products.slice(0, 8) }; // Return top 8
    }
};
