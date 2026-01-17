// src/features/auth/components/LoginForm.jsx
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { loginThunk } from '../authSlice';
import { useNavigate } from 'react-router-dom'
import { loginUser } from '../../../services/userService';

export default function LoginForm() {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState('')
    const [showPassword, setShowPassword] = useState(false);
    // reduxHook
    const dispatch = useDispatch();
    const navigate = useNavigate()
    const { isLoading, error } = useSelector((state) => state.auth)
    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log("تم تقديم النموذج");

        try {
            const resultAction = await dispatch(loginThunk({ email, password })).unwrap()
            navigate('/')
        } catch (err) {
            console.log(err);

        }
    };

    return (
        <form onSubmit={handleSubmit} className="space-y-5">
            {/* Email Field */}
            <div className="space-y-2">
                <label className="block text-sm font-medium text-text-main" htmlFor="email">البريد الإلكتروني</label>
                <div className="relative">
                    <input
                        className="block w-full h-12 pr-4 pl-10 rounded-xl border-gray-200 bg-gray-50 text-text-main focus:border-primary focus:ring-primary/20 focus:ring-4 transition-all duration-200 placeholder:text-gray-400"
                        id="email"
                        type="email"
                        placeholder="user@example.com"
                        required
                        onChange={(e) => setEmail(e.target.value)}
                    />
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                        <span className="material-symbols-outlined text-gray-400 text-[20px]">mail</span>
                    </div>
                </div>
            </div>

            {/* Password Field */}
            <div className="space-y-2">
                <div className="flex justify-between items-center">
                    <label className="block text-sm font-medium text-text-main" htmlFor="password">كلمة المرور</label>
                </div>
                <div className="relative">
                    <input
                        className="block w-full h-12 pr-4 pl-10 rounded-xl border-gray-200 bg-gray-50 text-text-main focus:border-primary focus:ring-primary/20 focus:ring-4 transition-all duration-200 placeholder:text-gray-400"
                        id="password"
                        type={showPassword ? "text" : "password"}
                        placeholder="********"
                        required
                        onChange={(e) => setPassword(e.target.value)}
                    />
                    <button
                        type="button"
                        className="absolute inset-y-0 left-0 pl-3 flex items-center text-gray-400 hover:text-primary transition-colors focus:outline-none"
                        onClick={() => setShowPassword(!showPassword)}
                    >
                        <span className="material-symbols-outlined text-[20px]">
                            {showPassword ? "visibility" : "visibility_off"}
                        </span>
                    </button>
                </div>
                <div className="flex justify-end pt-1">
                    <a className="text-sm text-primary hover:text-primary-hover font-medium underline-offset-4 hover:underline transition-all" href="#">نسيت كلمة المرور؟</a>
                </div>
            </div>

            {/* Submit Button */}
            <button type='submit' disabled={isLoading} className="w-full h-12 bg-primary hover:bg-primary-hover text-white font-bold rounded-xl shadow-lg shadow-primary/30 hover:shadow-primary/40 transition-all duration-300 transform active:scale-[0.98] flex items-center justify-center gap-2" type="submit">
                {isLoading ? (
                    <span>جاري التحقق...</span>
                ) : (
                    <>
                        <span>تسجيل الدخول</span>
                        <span className="material-symbols-outlined text-[20px] rtl:-scale-x-100">login</span>
                    </>
                )}
            </button>
        </form>
    );
}