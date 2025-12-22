import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { mockProductService } from '../../services/mock/productService';

export const fetchProducts = createAsyncThunk('products/fetchAll', async (filters, thunkAPI) => {
    try {
        const response = await mockProductService.getAllProducts(filters);
        return response.data;
    } catch (error) {
        return thunkAPI.rejectWithValue(error.message);
    }
});

export const fetchProductDetail = createAsyncThunk('products/fetchDetail', async (id, thunkAPI) => {
    try {
        const response = await mockProductService.getProductById(id);
        return response.data;
    } catch (error) {
        return thunkAPI.rejectWithValue(error.message);
    }
});

const productSlice = createSlice({
    name: 'products',
    initialState: {
        items: [],
        currentProduct: null,
        loading: false,
        error: null,
        filters: {}
    },
    reducers: {
        setFilters: (state, action) => {
            state.filters = { ...state.filters, ...action.payload };
        },
        clearFilters: (state) => {
            state.filters = {};
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchProducts.pending, (state) => { state.loading = true; })
            .addCase(fetchProducts.fulfilled, (state, action) => {
                state.loading = false;
                state.items = action.payload;
            })
            .addCase(fetchProducts.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload;
            })
            .addCase(fetchProductDetail.pending, (state) => { state.loading = true; })
            .addCase(fetchProductDetail.fulfilled, (state, action) => {
                state.loading = false;
                state.currentProduct = action.payload;
            });
    }
});

export const { setFilters, clearFilters } = productSlice.actions;
export default productSlice.reducer;
