import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { mockAuthService } from '../../services/mock/authService';

// Thunks
export const login = createAsyncThunk('auth/login', async ({ email, password }, thunkAPI) => {
    try {
        const response = await mockAuthService.login(email, password);
        return response.data;
    } catch (error) {
        return thunkAPI.rejectWithValue(error.message);
    }
});

export const register = createAsyncThunk('auth/register', async (userData, thunkAPI) => {
    try {
        const response = await mockAuthService.register(userData);
        return response.data;
    } catch (error) {
        return thunkAPI.rejectWithValue(error.message);
    }
});

export const logout = createAsyncThunk('auth/logout', async (_, thunkAPI) => {
    await mockAuthService.logout();
    return;
});

export const checkSession = createAsyncThunk('auth/checkSession', async (_, thunkAPI) => {
    const response = await mockAuthService.checkSession();
    if (!response.success) {
        return thunkAPI.rejectWithValue('Session expired');
    }
    return response.data;
});

const initialState = {
    user: null,
    token: null,
    isAuthenticated: false,
    isLoading: true, // Start loading to check session
    error: null,
};

const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        clearError: (state) => {
            state.error = null;
        }
    },
    extraReducers: (builder) => {
        builder
            // Login
            .addCase(login.pending, (state) => { state.isLoading = true; state.error = null; })
            .addCase(login.fulfilled, (state, action) => {
                state.isLoading = false;
                state.isAuthenticated = true;
                state.user = action.payload.user;
                state.token = action.payload.token;
            })
            .addCase(login.rejected, (state, action) => {
                state.isLoading = false;
                state.error = action.payload;
            })
            // Register
            .addCase(register.fulfilled, (state, action) => {
                state.isLoading = false;
                state.isAuthenticated = true;
                state.user = action.payload.user;
                state.token = action.payload.token;
            })
            // Logout
            .addCase(logout.fulfilled, (state) => {
                state.user = null;
                state.token = null;
                state.isAuthenticated = false;
            })
            // Check Session
            .addCase(checkSession.fulfilled, (state, action) => {
                state.isLoading = false;
                state.isAuthenticated = true;
                state.user = action.payload.user;
                state.token = action.payload.token;
            })
            .addCase(checkSession.rejected, (state) => {
                state.isLoading = false;
                state.isAuthenticated = false;
                state.user = null;
                state.token = null;
            });
    },
});

export const { clearError } = authSlice.actions;
export default authSlice.reducer;
