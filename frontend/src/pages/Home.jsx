import React from 'react'
import Hero from '../components/Hero'

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
    </>
  )
}
