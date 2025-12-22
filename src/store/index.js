import { configureStore } from '@reduxjs/toolkit';
import authReducer from './slices/authSlice';
import productReducer from './slices/productSlice';
import rfqReducer from './slices/rfqSlice';
import orderReducer from './slices/orderSlice';

export const store = configureStore({
    reducer: {
        auth: authReducer,
        products: productReducer,
        rfqs: rfqReducer,
        orders: orderReducer
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat([
            // Add API middleware here
        ]),
});

export default store;
