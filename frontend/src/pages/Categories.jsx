import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { getAllCategories } from "../services/categories";
import Pagination from "../features/admin/components/ui/Pagination";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShapes } from "@fortawesome/free-solid-svg-icons";

export default function Categories() {
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(true);
  const [page, setPage] = useState(1);
  const [pages, setPages] = useState(1);
  const [totalCategories, setTotalCategories] = useState(0);

  useEffect(() => {
    fetchCategories(page);
  }, [page]);

  const fetchCategories = async (pageNum = 1) => {
    try {
      setLoading(true);
      const data = await getAllCategories(pageNum, 12);
      setCategories(data.categories || []);
      setPages(data.pages || 1);
      setTotalCategories(data.totalCategories || 0);
    } catch (error) {
      console.error("Error fetching categories:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="container mx-auto px-5 lg:px-20 py-12 mt-[70px]">
      <header className="mb-10 text-center">
        <h1 className="text-4xl font-serif font-bold text-slate-900 dark:text-white mb-4">
          تصفح التصنيفات
        </h1>
        <p className="text-slate-500 dark:text-slate-400 font-display">
          اختر من بين مجموعة واسعة من التصنيفات
        </p>
      </header>

      {loading ? (
        <div className="flex justify-center py-20">
          <p className="text-slate-500">جاري التحميل...</p>
        </div>
      ) : categories.length > 0 ? (
        <>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {categories.map((category) => (
              <Link
                key={category._id}
                to={`/categories/${category._id}`} // This would need a specific category page logic
                className="group relative overflow-hidden rounded-2xl border border-slate-100 dark:border-slate-800 bg-white dark:bg-slate-800 shadow-sm transition-all hover:shadow-lg hover:-translate-y-1 block"
              >
                <div className="aspect-square bg-slate-50 dark:bg-slate-700/50 flex items-center justify-center p-6">
                  {category.imageUri ? (
                    <img
                      src={category.imageUri}
                      alt={category.name}
                      className="w-1/2 h-1/2 object-contain filter group-hover:scale-110 transition-transform duration-300"
                      onError={(e) => (e.target.style.display = "none")}
                    />
                  ) : (
                    <FontAwesomeIcon
                      icon={faShapes}
                      className="text-6xl text-slate-300 group-hover:text-primary transition-colors"
                    />
                  )}
                </div>
                <div className="p-4 text-center">
                  <h3 className="font-bold text-slate-900 dark:text-white group-hover:text-primary transition-colors">
                    {category.name}
                  </h3>
                </div>
              </Link>
            ))}
          </div>
          <div className="mt-12">
            <Pagination
              page={page}
              limit={12}
              pages={pages}
              totalItems={totalCategories}
              onPageChange={setPage}
              itemsName="تصنيف"
            />
          </div>
        </>
      ) : (
        <div className="text-center py-20 text-slate-500">
          لا توجد تصنيفات متاحة حالياً.
        </div>
      )}
    </div>
  );
}
