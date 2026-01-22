/**
 * @file authSlice.js
 * @description شريحة الحالة (Slice) الخاصة بالمصادقة باستخدام Redux Toolkit.
 * تدير حالة المستخدم (مسجل دخول أم لا)، التوكن، وحالات التحميل والأخطاء.
 */

import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { loginUser, registerUser, logoutUser } from '../../services/userService';

// الحالة الأولية (Initial State)
const initialState = {
    user: null, // بيانات المستخدم
    token: localStorage.getItem('token') || null, // التوكن المخزن محلياً
    isLoading: false, // حالة التحميل
    error: null, // رسائل الخطأ
}

/**
 * @function loginThunk
 * @description دالة غير متزامنة (Thunk) للقيام بعملية تسجيل الدخول.
 * تقوم باستدعاء API وتسجيل التوكن وبيانات المستخدم في التخزين المحلي عند النجاح.
 */
export const loginThunk = createAsyncThunk("/signin", async (userData, thunkAPI) => {
    try {
        const data = await loginUser(userData)
        // حفظ التوكن وبيانات المستخدم في المتصفح لاستمرار الجلسة
        localStorage.setItem('token', data.token)
        localStorage.setItem('user', JSON.stringify(data.user))
        return data
    } catch (error) {
        // في حالة الخطأ، نرجع رسالة الخطأ القادمة من الباك إند
        return thunkAPI.rejectWithValue(error.response.data.message)
    }
})

/**
 * @function logoutThunk
 * @description دالة غير متزامنة لتسجيل الخروج.
 * تمسح البيانات من التخزين المحلي وتستدعي API الخروج (إذا لزم الأمر).
 */
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
        // Reducer عادي لتسجيل الخروج (تحديث المتجر مباشرة)
        logout: (state) => {
            localStorage.removeItem('token')
            localStorage.removeItem('user')
            state.user = null
            state.token = null
        }
    },
    extraReducers: (builder) => {
        builder
            // حالات تسجيل الدخول (Login)
            .addCase(loginThunk.pending, (state) => {
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
            // حالات تسجيل الخروج (Logout)
            .addCase(logoutThunk.fulfilled, (state) => {
                state.user = null;
                state.token = null;
            });
    }

})
export const { logout } = authSlice.actions
export default authSlice.reducer