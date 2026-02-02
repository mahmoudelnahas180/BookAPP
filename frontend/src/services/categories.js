import api from "./api";
/**
 * @file categories.js
 * @description خدمة إدارة الفئات (Categories Service).
 * تحتوي على دوال الاتصال بالخادم (API Calls) الخاصة بالفئات.
 */

/**
 * @function getAllCategories
 * @description جلب جميع الفئات.
 */
export const getAllCategories = async (page = 1, limit = 10) => {
  const response = await api.get(`/categories?page=${page}&limit=${limit}`);
  return response.data;
};

export const addCategory = async (category) => {
  const response = await api.post("/categories", category);
  return response.data;
};

export const updateCategory = async (id, category) => {
  const response = await api.put(`/categories/${id}`, category);
  return response.data;
};

export const deleteCategory = async (id) => {
  const response = await api.delete(`/categories/${id}`);
  return response.data;
};
