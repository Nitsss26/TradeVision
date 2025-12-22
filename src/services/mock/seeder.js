import { saveToStorage, getFromStorage, STORAGE_KEYS } from './storage';
import { manufacturers as staticManufacturers } from './data/manufacturers';
import { products as staticProducts } from './data/products';
import { extraProducts } from './data/extraProducts';

export const seedMockData = () => {
    try {
        // Check if already initialized
        const isInitialized = getFromStorage(STORAGE_KEYS.INIT);

        if (!isInitialized) {
            console.log("🌱 Initializing Mock Data Seed...");

            // Use static data directly
            const manufacturers = [...staticManufacturers];
            const products = [...staticProducts, ...extraProducts];

            console.log(`📦 Loaded ${manufacturers.length} Manufacturers and ${products.length} Products.`);

            // Seed Users (Basic Test Accounts)
            const users = [
                { id: 'u1', name: 'Rajesh Kumar', email: 'manufacturer@test.com', role: 'manufacturer', manufacturerId: 'm1' },
                { id: 'b1', name: 'Nitesh Buyer', email: 'buyer@test.com', role: 'buyer' },
                { id: 'a1', name: 'Admin', email: 'admin@test.com', role: 'admin' }
            ];

            saveToStorage(STORAGE_KEYS.USERS, users);
            saveToStorage(STORAGE_KEYS.MANUFACTURERS, manufacturers);
            saveToStorage(STORAGE_KEYS.PRODUCTS, products);
            saveToStorage(STORAGE_KEYS.RFQS, []);
            saveToStorage(STORAGE_KEYS.ORDERS, []);

            // Mark as initialized
            saveToStorage(STORAGE_KEYS.INIT, true);
            console.log("✅ Mock Data Seeded Successfully!");
        } else {
            console.log("⚡ Mock Data already exists. Skipping seed.");
        }
    } catch (error) {
        console.error("❌ Error seeding mock data:", error);
        // Don't block the app from loading even if seeding fails
    }
};

export const clearMockData = () => {
    localStorage.clear();
    console.log("🗑️ LocalStorage cleared.");
    window.location.reload();
};
