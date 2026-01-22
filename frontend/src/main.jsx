/**
 * @file main.jsx
 * @description نقطة الدخول لتطبيق React (Entry Point).
 * هنا يتم ربط التطبيق بصفحة HTML وإحاطته بمزودي الخدمات (Providers).
 * 
 * المكونات المحيطة (Wrappers):
 * 1. Provider (Redux): لربط مخزن الحالة العام بالتطبيق.
 * 2. BrowserRouter: لتفعيل نظام التوجيه (Routing).
 * 3. StrictMode: أداة تطوير للكشف عن المشاكل المحتملة.
 */

import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom'
import { Provider } from 'react-redux'
import { store } from './store.js'

createRoot(document.getElementById('root')).render(
  // توفير الـ Store لجميع مكونات التطبيق
  <Provider store={store}>
    <StrictMode>
      {/* تفعيل التوجيه للمتصفح */}
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </StrictMode>
  </Provider>
)
