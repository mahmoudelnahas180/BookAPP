/**
 * @module asyncWrapper
 * @description دالة عالية الرتبة (Higher-Order Function) لتغليف الدوال غير المتزامنة (Async Functions).
 * 
 * الهدف:
 * تجنب كتابة try-catch في كل Route Handler. إذا حدث خطأ داخل الدالة المغلفة،
 * يتم تحويله تلقائياً إلى الـ Error middleware القادم باستخدام next().
 * 
 * @param {Function} fn - الدالة المراد تنفيذها (الـ Controller).
 */
module.exports = (fn) => {
  return (req, res, next) => {
    // تنفيذ الدالة والتقاط أي خطأ (Promise Rejection) وتمريره لـ next
    Promise.resolve(fn(req, res, next)).catch(next);
  };
};
