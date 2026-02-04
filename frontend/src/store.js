/**
 * @file store.js
 * @description إعداد مخزن الحالة المركزي (Redux Store).
 * يقوم بتجميع جميع الـ Reducers الخاصة بالميزات المختلفة (مثل المصادقة، الكتب) في مكان واحد.
 */

import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./features/auth/authSlice";
import cartReducer from "./features/cart/cartSlice";

export const store = configureStore({
  reducer: {
    // تعريف الـ Slices (أجزاء الحالة)
    auth: authReducer, // الحالة الخاصة بالمصادقة (login, user data)
    cart: cartReducer,
  },
});
