export const delay = (ms = 500) => new Promise(resolve => setTimeout(resolve, ms));

export const simulateNetworkError = (probability = 0.05) => {
    if (Math.random() < probability) {
        throw new Error("Network Error: Simulation");
    }
};
