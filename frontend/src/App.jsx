import { Routes, Route } from 'react-router-dom';
import UserLayout from './layouts/UserLayout';
import AuthLayout from './layouts/AuthLayout'; // لو عملته
import Home from './pages/Home';
import Login from './pages/Login';
import SignUp from './pages/SignUp';

function App() {
  return (
    <Routes>
      {/* 1. الصفحات اللي محتاجة Header */}
      <Route element={<UserLayout />}>
        <Route path="/" element={<Home />} />
        {/* أي صفحة جديدة محتاجة هيدر حطها هنا بس */}
        {/* <Route path="/books" element={<Books />} /> */}
      </Route>

      {/* 2. الصفحات اللي مش محتاجة Header (Login, Signup) */}
      <Route element={<AuthLayout />}>
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
      </Route>

      {/* 3. مستقبلاً: صفحات الأدمن */}
      {/* <Route path="/admin" element={<AdminLayout />}> ... </Route> */}

    </Routes>
  );
}

export default App;