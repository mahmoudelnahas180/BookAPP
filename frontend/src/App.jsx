import { Routes, Route } from 'react-router-dom';

// Layouts
import UserLayout from './layouts/UserLayout';
import AuthLayout from './layouts/AuthLayout';
import AdminLayout from './layouts/AdminLayout'; // افترضنا إنك عملته

// Pages
import Home from './pages/Home';
import Login from './pages/Login';
import SignUp from './pages/SignUp';
import Unauthorized from './pages/Unauthorized'; // صفحة مهمة لازم تعملها
// import Cart from './pages/Cart'; 
// import AdminDashboard from './pages/Admin/Dashboard';

// Guard
import ProtectedRoute from './features/auth/components/ProtectedRoute';

function App() {
  return (
    <Routes>

      {/* 1. صفحات المصادقة (بدون Header) */}
      <Route element={<AuthLayout />}>
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/unauthorized" element={<Unauthorized />} />
      </Route>

      {/* 2. صفحات المتجر (بوجود Header & Footer) */}
      <Route element={<UserLayout />}>

        {/* أ) صفحات عامة (الكل يشوفها حتى الزائر) */}
        <Route path="/" element={<Home />} />
        <Route path="/books/:id" element={<h1>تفاصيل الكتاب</h1>} />

        {/* ب) صفحات محمية للمستخدم المسجل فقط (User & Admin) */}
        {/* لاحظ: حطيناها جوه UserLayout عشان يفضل الـ Header موجود */}
        <Route element={<ProtectedRoute allowedRoles={['user', 'admin']} />}>
          <Route path="/cart" element={<h1>🛒 سلة الشراء</h1>} />
          <Route path="/profile" element={<h1>👤 ملفي الشخصي</h1>} />
          <Route path="/checkout" element={<h1>💳 الدفع</h1>} />
        </Route>

      </Route>

      {/* 3. منطقة الأدمن (محمية + Layout مختلف) */}
      {/* الترتيب: حماية الأول -> ثم الـ Layout */}
      <Route element={<ProtectedRoute allowedRoles={['admin']} />}>
        <Route path="/admin" element={<AdminLayout />}>
          <Route index element={<h1>📊 لوحة التحكم</h1>} />
          <Route path="users" element={<h1>👥 المستخدمين</h1>} />
          <Route path="products" element={<h1>📚 الكتب</h1>} />
        </Route>
      </Route>

      {/* 4. صفحة الخطأ 404 (لو الرابط غلط) */}
      <Route path="*" element={<h1>404 - الصفحة غير موجودة</h1>} />

    </Routes>
  );
}

export default App;