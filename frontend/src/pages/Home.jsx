import React from "react";
import Hero from "../components/Hero";
import Departments from "../components/Departments";
import Footer from "../components/Footer";
import LastBookShow from "../features/books/LastBookShow";
/**
 * @component Home
 * @description الصفحة الرئيسية للتطبيق.
 * تعمل كواجهة هبوط (Landing Page) وتعرض المكونات الترويجية مثل Hero Section.
 */
export default function Home() {
  return (
    <>
      {/* قسم العرض الرئيسي (Slider) */}
      <Hero />
      {/* قسم الأقسام */}
      <Departments />
      {/* قسم آخر الكتب */}
      <LastBookShow />
      {/* قسم الفوتر */}
      <Footer />
    </>
  );
}
