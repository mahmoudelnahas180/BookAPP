import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEnvelope,
  faPhone,
  faMapMarkerAlt,
} from "@fortawesome/free-solid-svg-icons";

export default function Contact() {
  return (
    <div className="container mx-auto px-5 lg:px-20 py-12 mt-[70px]">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        {/* Contact Info */}
        <div className="space-y-8">
          <div>
            <h1 className="text-4xl font-bold font-serif text-slate-900 dark:text-white mb-4">
              تواصل معنا
            </h1>
            <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
              نحن هنا لمساعدتك. إذا كان لديك أي استفسار، اقتراح، أو واجهت أي
              مشكلة، لا تتردد في التواصل معنا. فريقنا جاهز للرد عليك في أقرب
              وقت.
            </p>
          </div>

          <div className="space-y-6">
            <div className="flex items-start gap-4">
              <div className="bg-primary/10 p-3 rounded-full text-primary">
                <FontAwesomeIcon icon={faPhone} className="text-xl" />
              </div>
              <div>
                <h3 className="font-bold text-slate-900 dark:text-white mb-1">
                  اتصل بنا
                </h3>
                <p className="text-slate-500 text-sm" dir="ltr">
                  +20 123 456 7890
                </p>
                <p className="text-slate-500 text-sm" dir="ltr">
                  +20 100 000 0000
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="bg-primary/10 p-3 rounded-full text-primary">
                <FontAwesomeIcon icon={faEnvelope} className="text-xl" />
              </div>
              <div>
                <h3 className="font-bold text-slate-900 dark:text-white mb-1">
                  البريد الإلكتروني
                </h3>
                <p className="text-slate-500 text-sm">support@bookapp.com</p>
                <p className="text-slate-500 text-sm">info@bookapp.com</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="bg-primary/10 p-3 rounded-full text-primary">
                <FontAwesomeIcon icon={faMapMarkerAlt} className="text-xl" />
              </div>
              <div>
                <h3 className="font-bold text-slate-900 dark:text-white mb-1">
                  موقعنا
                </h3>
                <p className="text-slate-500 text-sm">
                  123 شارع المعرفة، القاهرة، مصر
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Contact Form */}
        <div className="bg-white dark:bg-slate-800 p-8 rounded-3xl shadow-sm border border-slate-100 dark:border-slate-700">
          <h2 className="text-2xl font-bold font-serif text-slate-900 dark:text-white mb-6">
            أرسل لنا رسالة
          </h2>
          <form className="space-y-4">
            <div>
              <label className="block text-sm font-bold text-slate-700 dark:text-slate-300 mb-2">
                الاسم الكامل
              </label>
              <input
                type="text"
                className="w-full px-4 py-3 rounded-xl border border-slate-200 dark:border-slate-600 bg-slate-50 dark:bg-slate-900 focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all dark:text-white"
                placeholder="اسمك الكريم"
              />
            </div>
            <div>
              <label className="block text-sm font-bold text-slate-700 dark:text-slate-300 mb-2">
                البريد الإلكتروني
              </label>
              <input
                type="email"
                className="w-full px-4 py-3 rounded-xl border border-slate-200 dark:border-slate-600 bg-slate-50 dark:bg-slate-900 focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all dark:text-white"
                placeholder="example@mail.com"
              />
            </div>
            <div>
              <label className="block text-sm font-bold text-slate-700 dark:text-slate-300 mb-2">
                الرسالة
              </label>
              <textarea
                rows="4"
                className="w-full px-4 py-3 rounded-xl border border-slate-200 dark:border-slate-600 bg-slate-50 dark:bg-slate-900 focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all dark:text-white"
                placeholder="كيف يمكننا مساعدتك؟"
              ></textarea>
            </div>
            <button
              type="submit"
              className="w-full py-3 bg-primary text-white rounded-xl font-bold hover:bg-primary/90 transition-colors shadow-lg shadow-primary/20"
            >
              إرسال الرسالة
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
