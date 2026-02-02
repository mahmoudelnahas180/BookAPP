import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import {
  getAllCategories,
  addCategory,
  updateCategory,
  deleteCategory,
} from "../../services/categories";

import Pagination from "./components/ui/Pagination";

export default function CategoriesManager() {
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(true);
  const [editingCategory, setEditingCategory] = useState(null); // For edit mode
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [page, setPage] = useState(1);
  const [pages, setPages] = useState(1);
  const [totalCategories, setTotalCategories] = useState(0);

  const {
    register,
    handleSubmit,
    reset,
    setValue,
    formState: { errors, isSubmitting },
  } = useForm();

  useEffect(() => {
    fetchCategories(page);
  }, [page]);

  const fetchCategories = async (pageNum = 1) => {
    try {
      setLoading(true);
      const data = await getAllCategories(pageNum, 6);
      setCategories(data.categories || []);
      setPages(data.pages || 1);
      setTotalCategories(data.totalCategories || 0);
    } catch (error) {
      console.error("Error fetching categories:", error);
    } finally {
      setLoading(false);
    }
  };

  const handleOpenModal = (category = null) => {
    if (category) {
      setEditingCategory(category);
      setValue("name", category.name);
      setValue("imageUri", category.imageUri);
    } else {
      setEditingCategory(null);
      reset();
    }
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setEditingCategory(null);
    reset();
  };

  const onSubmit = async (data) => {
    try {
      if (editingCategory) {
        await updateCategory(editingCategory._id, data);
        alert("تم تحديث التصنيف بنجاح");
      } else {
        await addCategory(data);
        alert("تم إضافة التصنيف بنجاح");
      }
      handleCloseModal();
      fetchCategories();
    } catch (error) {
      console.error("Error saving category:", error);
      alert("فشل حفظ التصنيف");
    }
  };

  const handleDelete = async (id) => {
    if (window.confirm("هل أنت متأكد من حذف هذا التصنيف؟")) {
      try {
        await deleteCategory(id);
        setCategories((prev) => prev.filter((c) => c._id !== id));
      } catch (error) {
        console.error("Error deleting category:", error);
        alert("فشل حذف التصنيف");
      }
    }
  };

  return (
    <>
      <header className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-10">
        <div>
          <h1 className="text-3xl md:text-4xl font-serif font-bold text-slate-900 dark:text-white mb-2">
            إدارة التصنيفات
          </h1>
          <p className="text-slate-500 dark:text-slate-400 font-display">
            تصفح وإضافة وتعديل تصنيفات الكتب
          </p>
        </div>
        <button
          onClick={() => handleOpenModal()}
          className="bg-primary hover:bg-primary-dark text-white px-6 py-3 rounded-lg shadow-lg hover:shadow-primary/30 transition-all duration-200 flex items-center gap-2 font-bold font-display group shrink-0"
        >
          <span className="material-symbols-outlined group-hover:rotate-90 transition-transform duration-300">
            add
          </span>
          <span>أضف تصنيفاً جديداً</span>
        </button>
      </header>

      {/* Grid List for Categories */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {loading ? (
          <p className="text-slate-500 col-span-full text-center py-10">
            جاري التحميل...
          </p>
        ) : categories.length === 0 ? (
          <p className="text-slate-500 col-span-full text-center py-10">
            لا توجد تصنيفات حالياً.
          </p>
        ) : (
          categories.map((category) => (
            <div
              key={category._id}
              className="bg-white dark:bg-slate-800 rounded-xl shadow-sm border border-slate-100 dark:border-slate-700 overflow-hidden group hover:shadow-md transition-all"
            >
              <div
                className="h-32 bg-slate-100 dark:bg-slate-700 bg-cover bg-center"
                style={{
                  backgroundImage: category.imageUri
                    ? `url(${category.imageUri})`
                    : "none",
                }}
              >
                {!category.imageUri && (
                  <div className="w-full h-full flex items-center justify-center text-slate-400">
                    <span className="material-symbols-outlined text-4xl">
                      category
                    </span>
                  </div>
                )}
              </div>
              <div className="p-4">
                <h3 className="font-bold text-slate-900 dark:text-white mb-1">
                  {category.name}
                </h3>
                <div className="flex items-center justify-end gap-2 mt-4 pt-4 border-t border-slate-100 dark:border-slate-700">
                  <button
                    onClick={() => handleOpenModal(category)}
                    className="p-2 rounded-lg text-slate-400 hover:text-primary hover:bg-primary/5 transition-colors"
                    title="تعديل"
                  >
                    <span className="material-symbols-outlined text-[20px]">
                      edit
                    </span>
                  </button>
                  <button
                    onClick={() => handleDelete(category._id)}
                    className="p-2 rounded-lg text-slate-400 hover:text-red-500 hover:bg-red-50 dark:hover:bg-red-900/20 transition-colors"
                    title="حذف"
                  >
                    <span className="material-symbols-outlined text-[20px]">
                      delete
                    </span>
                  </button>
                </div>
              </div>
            </div>
          ))
        )}
      </div>

      {/* Pagination */}
      <div className="mt-4">
        <Pagination
          page={page}
          limit={6}
          pages={pages}
          totalItems={totalCategories}
          onPageChange={setPage}
          itemsName="تصنيف"
        />
      </div>

      {/* Modal / Dialog for Add/Edit */}
      {isModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm">
          <div className="bg-white dark:bg-slate-900 rounded-2xl shadow-2xl w-full max-w-md p-6 animate-in fade-in zoom-in duration-200">
            <h2 className="text-xl font-bold text-slate-900 dark:text-white mb-6">
              {editingCategory ? "تعديل التصنيف" : "إضافة تصنيف جديد"}
            </h2>
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1">
                  اسم التصنيف
                </label>
                <input
                  type="text"
                  {...register("name", { required: "اسم التصنيف مطلوب" })}
                  className="w-full bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-lg px-4 py-2.5 outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all"
                  placeholder="مثال: روايات"
                />
                {errors.name && (
                  <p className="text-red-500 text-xs mt-1">
                    {errors.name.message}
                  </p>
                )}
              </div>
              <div>
                <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1">
                  رابط الصورة (اختياري)
                </label>
                <input
                  type="text"
                  {...register("imageUri")}
                  className="w-full bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-lg px-4 py-2.5 outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all"
                  placeholder="https://example.com/image.jpg"
                />
              </div>
              <div className="flex items-center justify-end gap-3 mt-8">
                <button
                  type="button"
                  onClick={handleCloseModal}
                  className="px-4 py-2 text-sm font-medium text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-lg transition-colors"
                >
                  إلغاء
                </button>
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="px-4 py-2 text-sm font-bold text-white bg-primary hover:bg-primary-dark rounded-lg shadow-lg shadow-primary/30 transition-all"
                >
                  {isSubmitting ? "جاري الحفظ..." : "حفظ"}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </>
  );
}
