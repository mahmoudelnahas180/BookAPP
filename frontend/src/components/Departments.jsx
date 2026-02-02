import React from "react";
import Hero from "../components/Hero";
import { getAllCategories } from "../services/categories";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShapes, faArrowLeft } from "@fortawesome/free-solid-svg-icons";

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
      setCategories(data.categories.slice(0, s));
    });
  }, []);

  return (
    <section className="py-16 bg-white dark:bg-slate-900">
      <div className="container mx-auto px-5 lg:px-20">
        <div className="flex items-center justify-between mb-8">
          <div>
            <h2 className="text-2xl font-bold text-slate-900 dark:text-white font-serif mb-2">
              تصفح حسب التصنيف
            </h2>
            <p className="text-slate-500 dark:text-slate-400 text-sm font-display">
              اختر من بين مجموعة واسعة من التصنيفات
            </p>
          </div>
          <Link
            to="/categories"
            className="group flex items-center gap-2 text-primary hover:text-primary-dark transition-colors font-bold text-sm"
          >
            <span>عرض الكل</span>
            <FontAwesomeIcon
              icon={faArrowLeft}
              className="text-[18px] group-hover:-translate-x-1 transition-transform"
            />
          </Link>
        </div>

        <div className="hide-scrollbar flex gap-6 overflow-x-auto pb-6 w-full snap-x">
          {categories.map((category) => (
            <Link
              key={category._id}
              to={`/categories/${category._id}`}
              className="group flex min-w-[160px] flex-col items-center gap-4 rounded-2xl border border-slate-100 dark:border-slate-800 bg-slate-50 dark:bg-slate-800/50 p-6 text-center transition-all hover:-translate-y-2 hover:shadow-lg hover:shadow-primary/5 hover:bg-white dark:hover:bg-slate-800 snap-start"
            >
              <div className="flex size-16 items-center justify-center rounded-full bg-primary/10 text-primary transition-all duration-300 group-hover:bg-primary group-hover:text-white group-hover:scale-110 shadow-sm">
                {category.imageUri ? (
                  <img
                    src={category.imageUri}
                    alt={category.name}
                    className="w-8 h-8 object-contain filter group-hover:brightness-0 group-hover:invert transition-all"
                    onError={(e) => (e.target.style.display = "none")}
                  />
                ) : (
                  <FontAwesomeIcon icon={faShapes} className="text-3xl" />
                )}
              </div>
              <span className="font-bold text-slate-800 dark:text-slate-100 font-display transition-colors group-hover:text-primary">
                {category.name}
              </span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
