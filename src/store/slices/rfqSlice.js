import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { mockRFQService } from '../../services/mock/rfqService';

export const createRFQ = createAsyncThunk('rfqs/create', async (rfqData, thunkAPI) => {
    try {
        const response = await mockRFQService.createRFQ(rfqData);
        return response.data;
    } catch (error) {
        return thunkAPI.rejectWithValue(error.message);
    }
});

export const fetchMyRFQs = createAsyncThunk('rfqs/fetchMy', async (_, thunkAPI) => {
    try {
        const response = await mockRFQService.getMyRFQs();
        return response.data;
    } catch (error) {
        return thunkAPI.rejectWithValue(error.message);
    }
});

export const updateRFQStatus = createAsyncThunk('rfqs/updateStatus', async ({ id, status, quoteDetails }, thunkAPI) => {
    // We do this inline for mock simplicity, ideally mockService would handle it
    const { updateInStorageArray, STORAGE_KEYS } = require('../../services/mock/storage');
    await new Promise(r => setTimeout(r, 500));

    const updates = { status };
    if (quoteDetails) {
        updates.quote = quoteDetails;
    }

    const updated = updateInStorageArray(STORAGE_KEYS.RFQS, id, updates);
    return updated;
});

const rfqSlice = createSlice({
    name: 'rfqs',
    initialState: {
        items: [],
        currentRFQ: null,
        loading: false,
        success: false,
        error: null
    },
    reducers: {
        resetRFQStatus: (state) => {
            state.success = false;
            state.error = null;
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(createRFQ.pending, (state) => { state.loading = true; state.success = false; })
            .addCase(createRFQ.fulfilled, (state, action) => {
                state.loading = false;
                state.success = true;
                state.items.unshift(action.payload);
            })
            .addCase(createRFQ.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload;
            })
            .addCase(fetchMyRFQs.pending, (state) => { state.loading = true; })
            .addCase(fetchMyRFQs.fulfilled, (state, action) => {
                state.loading = false;
                state.items = action.payload;
            })
            .addCase(updateRFQStatus.fulfilled, (state, action) => {
                const index = state.items.findIndex(i => i._id === action.payload._id);
                if (index !== -1) {
                    state.items[index] = action.payload;
                }
            });
    }
});

export const { resetRFQStatus } = rfqSlice.actions;
export default rfqSlice.reducer;
