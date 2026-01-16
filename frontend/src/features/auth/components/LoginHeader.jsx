// src/features/auth/components/LoginHeader.jsx
export default function LoginHeader() {
    return (
        <>
            {/* Logo */}
            <div className="flex justify-center mb-8">
                <div className="flex items-center gap-3 text-primary">
                    <div className="bg-primary/10 p-2 rounded-xl">
                        <span className="material-symbols-outlined text-3xl text-primary">auto_stories</span>
                    </div>
                    <h1 className="text-2xl font-bold tracking-tight text-text-main font-serif">BookApp</h1>
                </div>
            </div>

            {/* Welcome Text */}
            <div className="mb-8 text-center">
                <h2 className="text-3xl font-serif font-bold text-text-main mb-2 leading-tight">أهلاً بك مجدداً</h2>
                <p className="text-text-muted text-base">تابع رحلة القراءة الخاصة بك، نحن سعداء بعودتك</p>
            </div>
        </>
    );
}