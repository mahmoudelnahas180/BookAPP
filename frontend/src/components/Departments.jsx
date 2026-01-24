import React from "react";
import Hero from "../components/Hero";
import { getAllCategories } from "../services/categories";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

/**
 * @component Departments
 * @description الصفحة الرئيسية للتطبيق.
 * تعمل كواجهة هبوط (Landing Page) وتعرض المكونات الترويجية مثل Hero Section.
 */
export default function Departments() {
  const [categories, setCategories] = useState([]);
  const s = 5;

  useEffect(() => {
    getAllCategories().then((data) => {
      console.log(data);

      setCategories(data.categories.slice(0, s));
    });
  }, []);
  return (
    <section className="py-12 bg-gray-50 ">
      <div className="container mx-auto px-5 lg:px-20">
        <div className="flex items-center justify-between mb-4 mt-4  ">
          <p className="font-bold text-2xl ">تصفح حسب التصنيف</p>
          <Link
            to="/categories"
            className="text-primary hover:underline font-bold"
          >
            عرض الكل
          </Link>
        </div>
        <div className="hide-scrollbar flex gap-6 overflow-x-auto pb-4 w-full">
          {categories.map((category) => {
            return (
              <Link
                key={category._id}
                to={`/categories/${category._id}`}
                className="group flex min-w-[140px] flex-col items-center gap-4 rounded-2xl border border-gray-100 bg-white p-6 text-center shadow-card transition-all hover:-translate-y-1 hover:border-primary/30 hover:shadow-soft "
              >
                <div className="flex size-14 items-center justify-center rounded-full bg-primary/10 text-primary transition-colors group-hover:bg-primary group-hover:text-white">
                  <img
                    src={category.imageUri}
                    alt={category.name}
                    className="w-8 h-8 object-contain"
                  />
                </div>
                <span className="font-bold text-[#111618]">
                  {category.name}
                </span>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}
