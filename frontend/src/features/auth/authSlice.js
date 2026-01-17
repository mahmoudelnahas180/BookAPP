import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { loginUser, registerUser, logoutUser } from '../../services/userService';
const initialState = {
    user: null,
    token: localStorage.getItem('token') || null,
    isLoading: false,
    error: null,
}
export const loginThunk = createAsyncThunk("/signin", async (userData, thunkAPI) => {
    try {
        const data = await loginUser(userData)
        localStorage.setItem('token', data.token)
        localStorage.setItem('user', JSON.stringify(data.user))


        return data
    } catch (error) {
        return thunkAPI.rejectWithValue(error.response.data.message)
    }
})
export const logoutThunk = createAsyncThunk("/logout", async (_, thunkAPI) => {
    try {
        await logoutUser()
        localStorage.removeItem('token')
        localStorage.removeItem('user')
        return true
    } catch (error) {
        return thunkAPI.rejectWithValue(error.response.data.message)
    }
})
const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        logout: (state) => {
            localStorage.removeItem('token')
            localStorage.removeItem('user')
            state.user = null
            state.token = null
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(loginThunk.pending, (state) => {
                // state.user = action.payload.user;
                // state.token = action.payload.token;
                state.isLoading = true;
                state.error = null;
            })
            .addCase(loginThunk.fulfilled, (state, action) => {
                state.user = action.payload.user;
                state.token = action.payload.token;
                state.isLoading = false;
                state.error = null;
            })
            .addCase(loginThunk.rejected, (state, action) => {
                state.isLoading = false;
                state.error = action.payload;
            })
            .addCase(logoutThunk.fulfilled, (state) => {
                state.user = null;
                state.token = null;
            });
    }

})
export const { logout } = authSlice.actions
export default authSlice.reducer