import React, { useEffect, useState } from "react";
import api from "../../services/api";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight, faSave } from "@fortawesome/free-solid-svg-icons";

// Import new sub-components
import BookBasicInfo from "./components/BookBasicInfo";
import BookPricing from "./components/BookPricing";
import BookCategory from "./components/BookCategory";
import BookVisibility from "./components/BookVisibility";
import BookMedia from "./components/BookMedia";

export default function AddBook() {
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors, isSubmitting },
  } = useForm({
    defaultValues: {
      isFeatured: false,
      isSale: false,
      stock: 0,
    },
  });

  const [categories, setCategories] = useState([]);
  const [loadingCategories, setLoadingCategories] = useState(true);

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const response = await api.get("/categories");
        // Backend returns { categories: [...] }
        setCategories(response.data.categories || []);
      } catch (error) {
        console.error("Error fetching categories:", error);
      } finally {
        setLoadingCategories(false);
      }
    };
    fetchCategories();
  }, []);

  const isSale = watch("isSale");

  const onSubmit = async (data) => {
    try {
      // Prepare payload
      const payload = {
        title: data.title,
        author: data.author,
        description: data.description,
        price: Number(data.price),
        stock: Number(data.stock),
        category: data.category,
        isFeatured: data.isFeatured,
        isSale: data.isSale,
        discountParcent: data.isSale ? String(data.discountParcent) : "0", // Backend expects String currently
        coverImage: data.coverImage || "", // Placeholder until file upload is implemented
      };

      console.log("Sending Payload:", payload);

      const response = await api.post("/books/books", payload);

      console.log("Response:", response.data);

      // Navigate back to products list on success
      navigate("/admin/products");
    } catch (error) {
      console.error("Error adding book:", error);
      const errorMessage =
        error.response?.data?.message ||
        "Failed to add book. Please try again.";
      alert(errorMessage);
    }
  };

  return (
    <div className="max-w-4xl mx-auto">
      {/* Header */}
      <div className="flex items-center justify-between mb-8">
        <div>
          <h1 className="text-3xl font-serif font-bold text-slate-900 dark:text-white mb-2">
            إضافة كتاب جديد
          </h1>
          <p className="text-slate-500 dark:text-slate-400 font-display">
            أدخل تفاصيل الكتاب الجديد لإضافته إلى المخزون
          </p>
        </div>
        <button
          onClick={() => navigate(-1)}
          className="flex items-center gap-2 px-4 py-2 text-slate-600 dark:text-slate-300 bg-white dark:bg-slate-800 rounded-lg shadow-sm border border-slate-200 dark:border-slate-700 hover:bg-slate-50 dark:hover:bg-slate-700 transition-all font-medium"
        >
          <FontAwesomeIcon icon={faArrowRight} className="rtl:rotate-180" />
          <span>رجوع</span>
        </button>
      </div>

      <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Main Info Section */}
          <div className="md:col-span-2 space-y-6">
            <BookBasicInfo register={register} errors={errors} />
            <BookPricing register={register} errors={errors} />
          </div>

          {/* Sidebar Section */}
          <div className="space-y-6">
            <BookCategory
              register={register}
              errors={errors}
              categories={categories}
              loadingCategories={loadingCategories}
            />
            <BookVisibility
              register={register}
              errors={errors}
              isSale={isSale}
            />
            <BookMedia register={register} />
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex items-center justify-end gap-3 pt-6 border-t border-slate-200 dark:border-slate-700">
          <button
            type="button"
            onClick={() => navigate(-1)}
            className="px-6 py-2.5 text-sm font-medium text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-lg transition-colors"
          >
            إلغاء
          </button>
          <button
            type="submit"
            disabled={isSubmitting}
            className="px-6 py-2.5 text-sm font-bold text-white bg-primary hover:bg-primary-dark rounded-lg shadow-lg shadow-primary/30 transition-all flex items-center gap-2 disabled:opacity-70 disabled:cursor-not-allowed"
          >
            {isSubmitting ? (
              <>
                <svg
                  className="animate-spin -ml-1 mr-3 h-5 w-5 text-white"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <circle
                    className="opacity-25"
                    cx="12"
                    cy="12"
                    r="10"
                    stroke="currentColor"
                    strokeWidth="4"
                  ></circle>
                  <path
                    className="opacity-75"
                    fill="currentColor"
                    d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                  ></path>
                </svg>
                <span>جاري الحفظ...</span>
              </>
            ) : (
              <>
                <FontAwesomeIcon icon={faSave} />
                <span>حفظ الكتاب</span>
              </>
            )}
          </button>
        </div>
      </form>
    </div>
  );
}
