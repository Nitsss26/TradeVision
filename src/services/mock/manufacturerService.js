import { manufacturers } from './data/manufacturers';

// Get all manufacturers
const getAllManufacturers = async () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            // Try localStorage first
            const stored = localStorage.getItem('tradevision_manufacturers');
            if (stored) {
                resolve(JSON.parse(stored));
            } else {
                // Initialize from static data
                localStorage.setItem('tradevision_manufacturers', JSON.stringify(manufacturers));
                resolve(manufacturers);
            }
        }, 100);
    });
};

// Get manufacturer by ID
const getManufacturerById = async (id) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            const stored = localStorage.getItem('tradevision_manufacturers');
            const data = stored ? JSON.parse(stored) : manufacturers;
            const manufacturer = data.find(m => m._id === id);
            resolve(manufacturer || null);
        }, 100);
    });
};

// Get verified manufacturers
const getVerifiedManufacturers = async () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            const stored = localStorage.getItem('tradevision_manufacturers');
            const data = stored ? JSON.parse(stored) : manufacturers;
            resolve(data.filter(m => m.isVerified));
        }, 100);
    });
};

export const manufacturerService = {
    getAllManufacturers,
    getManufacturerById,
    getVerifiedManufacturers
};
