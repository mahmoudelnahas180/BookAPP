import { Link } from "react-router-dom";
import { faArrowRight, faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Button from "./Button";

export default function JoinReaderClup() {
  return (
    <section className="py-20 bg-white dark:bg-slate-900">
      <div className="container mx-auto px-5 lg:px-20">
        <div className="relative overflow-hidden rounded-3xl bg-primary shadow-2xl shadow-primary/30">
          {/* Decorative Background Pattern */}
          <div className="absolute inset-0 opacity-10">
            <svg
              className="h-full w-full"
              viewBox="0 0 100 100"
              preserveAspectRatio="none"
            >
              <path d="M0 0 L100 100 L0 100 Z" fill="white" />
              <path d="M100 0 L0 100 L100 100 Z" fill="black" />
            </svg>
          </div>

          <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between p-10 lg:p-16 gap-10">
            <div className="flex-1 text-center lg:text-right text-white">
              <span className="inline-block px-4 py-1.5 bg-white/20 backdrop-blur-md rounded-full text-sm font-bold mb-6 border border-white/30">
                ✨ انضم لأكثر من 10,000 قارئ
              </span>
              <h2 className="text-3xl lg:text-5xl font-bold font-serif mb-6 leading-tight">
                انضم إلى نادي القراءة
                <br />
                <span className="text-yellow-300">واحصل على خصومات مميزة</span>
              </h2>
              <p className="text-slate-100 text-lg lg:text-xl font-display max-w-xl mx-auto lg:mx-0 leading-relaxed">
                اشترك نشرتنا البريدية واحصل على خصم 20% على أول طلب لك، وكن أول
                من يعرف عن الكتب الجديدة والفعاليات.
              </p>
            </div>

            <div className="w-full lg:w-auto bg-white/10 backdrop-blur-sm p-2 rounded-2xl border border-white/20 max-w-md shrink-0">
              <div className="flex flex-col gap-3 bg-white dark:bg-slate-800 p-6 rounded-xl shadow-lg">
                <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-2 text-center lg:text-right">
                  سجل الآن مجاناً
                </h3>
                <input
                  type="email"
                  placeholder="البريد الإلكتروني"
                  className="w-full bg-slate-50 dark:bg-slate-700 border border-slate-200 dark:border-slate-600 rounded-lg px-4 py-3 outline-none focus:ring-2 focus:ring-primary/50 transition-all font-display text-slate-900 dark:text-white"
                />
                <button className="w-full bg-primary hover:bg-primary-dark text-white font-bold py-3.5 rounded-lg shadow-lg shadow-primary/20 transition-all hover:-translate-y-1">
                  اشترك الآن
                </button>
                <p className="text-xs text-slate-400 text-center mt-2">
                  نحترم خصوصيتك، لا رسائل مزعجة.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
