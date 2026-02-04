import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { addBook } from "../services/bookServies";
import { getAllCategories } from "../services/categories";
import { useSelector } from "react-redux";

export default function AddBook() {
  const navigate = useNavigate();
  const { user } = useSelector((state) => state.auth);

  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    title: "",
    author: "",
    description: "",
    price: "",
    stock: "",
    category: "",
    coverImage: "",
    isSale: false,
    discountParcent: "",
  });
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const data = await getAllCategories(1, 100);
        setCategories(data.categories || []);
      } catch (err) {
        console.error("Failed to fetch categories", err);
      }
    };
    fetchCategories();
  }, []);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setLoading(true);

    try {
      await addBook(formData);
      alert(
        user.role === "admin"
          ? "تم إضافة الكتاب بنجاح!"
          : "تم إرسال الكتاب للمراجعة بنجاح! سيتم نشره بعد موافقة الإدارة.",
      );
      navigate("/profile");
    } catch (err) {
      setError(
        err.response?.data?.message ||
          "حدث خطأ أثناء إضافة الكتاب. حاول مرة أخرى.",
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="container mx-auto px-5 py-12 mt-[70px]">
      <div className="max-w-2xl mx-auto bg-white dark:bg-slate-800 rounded-3xl shadow-sm border border-slate-100 dark:border-slate-700 p-8">
        <h2 className="text-3xl font-bold text-center mb-8 text-slate-900 dark:text-white font-serif">
          إضافة كتاب جديد
        </h2>

        {error && (
          <div className="bg-red-50 text-red-600 p-4 rounded-xl mb-6 text-center">
            {error}
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Title */}
          <div>
            <label className="block text-sm font-bold text-slate-700 dark:text-slate-300 mb-2">
              عنوان الكتاب
            </label>
            <input
              type="text"
              name="title"
              value={formData.title}
              onChange={handleChange}
              required
              className="w-full px-4 py-3 rounded-xl border border-slate-200 dark:border-slate-600 bg-slate-50 dark:bg-slate-900 focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all dark:text-white"
            />
          </div>

          {/* Author */}
          <div>
            <label className="block text-sm font-bold text-slate-700 dark:text-slate-300 mb-2">
              اسم المؤلف
            </label>
            <input
              type="text"
              name="author"
              value={formData.author}
              onChange={handleChange}
              required
              className="w-full px-4 py-3 rounded-xl border border-slate-200 dark:border-slate-600 bg-slate-50 dark:bg-slate-900 focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all dark:text-white"
            />
          </div>

          {/* Description */}
          <div>
            <label className="block text-sm font-bold text-slate-700 dark:text-slate-300 mb-2">
              وصف الكتاب
            </label>
            <textarea
              name="description"
              value={formData.description}
              onChange={handleChange}
              required
              rows="4"
              className="w-full px-4 py-3 rounded-xl border border-slate-200 dark:border-slate-600 bg-slate-50 dark:bg-slate-900 focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all dark:text-white"
            ></textarea>
          </div>

          <div className="grid grid-cols-2 gap-6">
            {/* Price */}
            <div>
              <label className="block text-sm font-bold text-slate-700 dark:text-slate-300 mb-2">
                السعر (ج.م)
              </label>
              <input
                type="number"
                name="price"
                value={formData.price}
                onChange={handleChange}
                required
                min="0"
                className="w-full px-4 py-3 rounded-xl border border-slate-200 dark:border-slate-600 bg-slate-50 dark:bg-slate-900 focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all dark:text-white"
              />
            </div>

            {/* Stock */}
            <div>
              <label className="block text-sm font-bold text-slate-700 dark:text-slate-300 mb-2">
                الكمية المتاحة
              </label>
              <input
                type="number"
                name="stock"
                value={formData.stock}
                onChange={handleChange}
                required
                min="0"
                className="w-full px-4 py-3 rounded-xl border border-slate-200 dark:border-slate-600 bg-slate-50 dark:bg-slate-900 focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all dark:text-white"
              />
            </div>
          </div>

          {/* Category */}
          <div>
            <label className="block text-sm font-bold text-slate-700 dark:text-slate-300 mb-2">
              التصنيف
            </label>
            <select
              name="category"
              value={formData.category}
              onChange={handleChange}
              required
              className="w-full px-4 py-3 rounded-xl border border-slate-200 dark:border-slate-600 bg-slate-50 dark:bg-slate-900 focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all dark:text-white"
            >
              <option value="">اختر التصنيف</option>
              {categories.map((cat) => (
                <option key={cat._id} value={cat._id}>
                  {cat.name}
                </option>
              ))}
            </select>
          </div>

          {/* Cover Image URL */}
          <div>
            <label className="block text-sm font-bold text-slate-700 dark:text-slate-300 mb-2">
              رابط صورة الغلاف
            </label>
            <input
              type="url"
              name="coverImage"
              value={formData.coverImage}
              onChange={handleChange}
              className="w-full px-4 py-3 rounded-xl border border-slate-200 dark:border-slate-600 bg-slate-50 dark:bg-slate-900 focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all dark:text-white"
              placeholder="https://example.com/image.jpg"
            />
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            disabled={loading}
            className="w-full bg-primary hover:bg-primary/90 text-white font-bold py-4 rounded-xl transition-all shadow-lg shadow-primary/30 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {loading ? "جاري الإضافة..." : "إضافة الكتاب"}
          </button>
        </form>
      </div>
    </div>
  );
}
