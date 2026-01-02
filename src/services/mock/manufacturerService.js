import { manufacturers } from './data/manufacturers';

// Get all manufacturers
console.log("ManufacturerService Loaded - Version Authentic Data 12345");
const getAllManufacturers = async () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            // Force use of static data for development/demo to ensure new added data shows up
            resolve(manufacturers);
        }, 100);
    });
};

// Get manufacturer by ID
const getManufacturerById = async (id) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            const manufacturer = manufacturers.find(m => m._id === id);
            resolve(manufacturer || null);
        }, 100);
    });
};

// Get verified manufacturers
const getVerifiedManufacturers = async () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(manufacturers.filter(m => m.isVerified));
        }, 100);
    });
};

export const manufacturerService = {
    getAllManufacturers,
    getManufacturerById,
    getVerifiedManufacturers
};
