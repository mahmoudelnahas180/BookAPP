/**
 * @file App.jsx
 * @description المكون الرئيسي للتطبيق (Root Component).
 * يحتوي على خريطة المسارات (Routing Configuration) باستخدام React Router.
 *
 * الهيكلية العامة (Architecture Highlights):
 * - يستخدم Layout Pattern (UserLayout, AuthLayout, AdminLayout) لتنظيم الواجهات.
 * - يستخدم ProtectedRoute لحماية المسارات بناءً على حالة تسجيل الدخول ودور المستخدم.
 * - يفصل بين صفحات الزوار، المستخدمين، والأدمن.
 */

import { Routes, Route } from 'react-router-dom';

// Layouts - قوالب التصميم الأساسية
import UserLayout from './layouts/UserLayout';   // القالب العام للمستخدمين (يحتوي على Navbar)
import AuthLayout from './layouts/AuthLayout';   // قالب صفحات المصادقة (بدون Navbar غالباً)
import AdminLayout from './layouts/AdminLayout'; // قالب لوحة تحكم الأدمن (SideBar + Header)

// Pages - صفحات التطبيق
import Home from './pages/Home';
import Login from './pages/Login';
import SignUp from './pages/SignUp';
import Unauthorized from './pages/Unauthorized'; // صفحة "غير مسموح الدخول"
// import Cart from './pages/Cart'; 
// import AdminDashboard from './pages/Admin/Dashboard';

// Guards - حماية المسارات
import ProtectedRoute from './features/auth/components/ProtectedRoute';

function App() {
  return (
    <Routes>

      {/* 1. صفحات المصادقة (Authentication) */}
      {/* تستخدم AuthLayout الذي يوفر تصميماً بسيطاً للدخول والتسجيل */}
      <Route element={<AuthLayout />}>
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/unauthorized" element={<Unauthorized />} />
      </Route>

      {/* 2. التطبيق الرئيسي (Main Application) */}
      {/* يستخدم UserLayout الذي يوفر الهيدر والفوتر */}
      <Route element={<UserLayout />}>

        {/* أ) مسارات عامة (Public Routes) - متاحة للجميع */}
        <Route path="/" element={<Home />} />
        <Route path="/books/:id" element={<h1>تفاصيل الكتاب</h1>} />

        {/* ب) مسارات محمية (Protected Routes) - تتطلب تسجيل دخول */}
        {/* allowedRoles: تحدد من يستطيع الدخول. هنا المستخدم والأدمن كلاهما مسموح */}
        {/* لاحظ: حطيناها جوه UserLayout عشان يفضل الـ Header موجود */}
        <Route element={<ProtectedRoute allowedRoles={['user', 'admin']} />}>
          <Route path="/cart" element={<h1>🛒 سلة الشراء</h1>} />
          <Route path="/profile" element={<h1>👤 ملفي الشخصي</h1>} />
          <Route path="/checkout" element={<h1>💳 الدفع</h1>} />
        </Route>

      </Route>

      {/* 3. لوحة تحكم المسؤول (Admin Dashboard) */}
      {/* محمية بالكامل، وتتطلب دور 'admin' حصراً */}
      <Route element={<ProtectedRoute allowedRoles={['admin']} />}>
        <Route path="/admin" element={<AdminLayout />}>
          <Route index element={<h1>📊 لوحة التحكم</h1>} />
          <Route path="users" element={<h1>👥 المستخدمين</h1>} />
          <Route path="products" element={<h1>📚 الكتب</h1>} />
        </Route>
      </Route>

      {/* 4. مسار "Catch-all" للأخطاء (404 Not Found) */}
      <Route path="*" element={<h1>404 - الصفحة غير موجودة</h1>} />

    </Routes>
  );
}

export default App;