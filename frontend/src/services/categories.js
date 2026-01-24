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
export const getAllCategories=async()=>{
    const response=await api.get("/categories")
    return response.data

}