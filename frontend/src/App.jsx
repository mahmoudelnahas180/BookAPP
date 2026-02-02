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

import { Routes, Route } from "react-router-dom";

// Layouts - قوالب التصميم الأساسية
import UserLayout from "./layouts/UserLayout"; // القالب العام للمستخدمين (يحتوي على Navbar)
import AuthLayout from "./layouts/AuthLayout"; // قالب صفحات المصادقة (بدون Navbar غالباً)
import AdminLayout from "./layouts/AdminLayout"; // قالب لوحة تحكم الأدمن (SideBar + Header)
import AdminDashboard from "./features/admin/AdminDashboard";
import BooksManager from "./features/admin/BooksManager";
import AddBook from "./features/admin/AddBook";
import EditBook from "./features/admin/EditBook";
import CategoriesManager from "./features/admin/CategoriesManager";
import UsersManager from "./features/admin/UsersManager";
import OrdersManager from "./features/admin/OrdersManager";

// Pages - صفحات التطبيق
import Home from "./pages/Home";
import Login from "./pages/Login";
import SignUp from "./pages/SignUp";
import Books from "./pages/Books";
import BookDetails from "./pages/BookDetails";
import Categories from "./pages/Categories";
import CategoryBooks from "./pages/CategoryBooks";
import Cart from "./pages/Cart";
import Profile from "./pages/Profile";
import Unauthorized from "./pages/Unauthorized";
import ProtectedRoute from "./features/auth/components/ProtectedRoute";

function App() {
  return (
    <Routes>
      <Route element={<AuthLayout />}>
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/unauthorized" element={<Unauthorized />} />
      </Route>

      <Route element={<UserLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/books" element={<Books />} />
        <Route path="/books/:id" element={<BookDetails />} />
        <Route path="/categories" element={<Categories />} />
        <Route path="/categories/:id" element={<CategoryBooks />} />
        <Route path="/cart" element={<Cart />} />
        {/* ب) مسارات محمية (Protected Routes) - تتطلب تسجيل دخول */}
        {/* allowedRoles: تحدد من يستطيع الدخول. هنا المستخدم والأدمن كلاهما مسموح */}
        {/* لاحظ: حطيناها جوه UserLayout عشان يفضل الـ Header موجود */}
        <Route element={<ProtectedRoute allowedRoles={["user", "admin"]} />}>
          {/* <Route path="/cart" element={<h1>🛒 سلة الشراء</h1>} /> moved to public/semi-public for now */}
          <Route path="/profile" element={<Profile />} />
          <Route path="/checkout" element={<h1>💳 الدفع</h1>} />
        </Route>
      </Route>

      {/* 3. لوحة تحكم المسؤول (Admin Dashboard) */}
      {/* محمية بالكامل، وتتطلب دور 'admin' حصراً */}
      <Route element={<ProtectedRoute allowedRoles={["admin"]} />}>
        <Route path="/admin" element={<AdminLayout />}>
          <Route index element={<AdminDashboard />} />
          <Route path="users" element={<UsersManager />} />
          <Route path="products" element={<BooksManager />} />
          <Route path="products/add" element={<AddBook />} />
          <Route path="products/edit/:id" element={<EditBook />} />
          <Route path="categories" element={<CategoriesManager />} />
          <Route path="orders" element={<OrdersManager />} />
        </Route>
      </Route>

      {/* 4. مسار "Catch-all" للأخطاء (404 Not Found) */}
      <Route path="*" element={<h1>404 - الصفحة غير موجودة</h1>} />
    </Routes>
  );
}

export default App;
