import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { mockOrderService } from '../../services/mock/orderService';

export const createOrder = createAsyncThunk('orders/create', async (orderData, thunkAPI) => {
    try {
        const response = await mockOrderService.createOrder(orderData);
        return response.data;
    } catch (error) {
        return thunkAPI.rejectWithValue(error.message);
    }
});

export const fetchMyOrders = createAsyncThunk('orders/fetchMy', async (_, thunkAPI) => {
    try {
        const response = await mockOrderService.getMyOrders();
        return response.data;
    } catch (error) {
        return thunkAPI.rejectWithValue(error.message);
    }
});

const orderSlice = createSlice({
    name: 'orders',
    initialState: {
        items: [],
        loading: false,
        error: null,
        success: false
    },
    reducers: {
        resetOrderSuccess: (state) => {
            state.success = false;
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(createOrder.pending, (state) => { state.loading = true; state.success = false; })
            .addCase(createOrder.fulfilled, (state, action) => {
                state.loading = false;
                state.success = true;
                state.items.unshift(action.payload);
            })
            .addCase(createOrder.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload;
            })
            .addCase(fetchMyOrders.pending, (state) => { state.loading = true; })
            .addCase(fetchMyOrders.fulfilled, (state, action) => {
                state.loading = false;
                state.items = action.payload;
            });
    }
});

export const { resetOrderSuccess } = orderSlice.actions;
export default orderSlice.reducer;
