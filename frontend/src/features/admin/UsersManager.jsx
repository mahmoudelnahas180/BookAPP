import React, { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faUsers,
  faCheckCircle,
  faBan,
  faTrash,
} from "@fortawesome/free-solid-svg-icons";
import {
  getAllUsers,
  deleteUser,
  toggleBanUser,
  changeUserRole,
} from "../../services/userService";
import Pagination from "./components/ui/Pagination";

export default function UsersManager() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [page, setPage] = useState(1);
  const [pages, setPages] = useState(1);
  const [totalUsers, setTotalUsers] = useState(0);

  useEffect(() => {
    fetchUsers(page);
  }, [page]);

  const fetchUsers = async (pageNum) => {
    try {
      setLoading(true);
      const data = await getAllUsers(pageNum);
      setUsers(data.users || []);
      setPages(data.pages || 1);
      setTotalUsers(data.totalUsers || 0);
    } catch (error) {
      console.error("Error fetching users:", error);
    } finally {
      setLoading(false);
    }
  };

  const handleToggleBan = async (user) => {
    const action = user.isBanned ? "فك حظر" : "حظر";
    if (window.confirm(`هل أنت متأكد من ${action} هذا المستخدم؟`)) {
      try {
        const data = await toggleBanUser(user._id);
        // Update local state
        setUsers((prev) =>
          prev.map((u) =>
            u._id === user._id ? { ...u, isBanned: data.user.isBanned } : u,
          ),
        );
      } catch (error) {
        console.error("Error banning user", error);
        alert("فشل تغيير حالة الحظر");
      }
    }
  };

  const handleChangeRole = async (user, newRole) => {
    if (user.role === newRole) return;
    if (window.confirm(`هل تريد تغيير دور المستخدم إلى ${newRole}؟`)) {
      try {
        const data = await changeUserRole(user._id, newRole);
        setUsers((prev) =>
          prev.map((u) =>
            u._id === user._id ? { ...u, role: data.user.role } : u,
          ),
        );
      } catch (error) {
        console.error("Error changing role", error);
        alert("فشل تغيير الدور");
      }
    }
  };

  const handleDelete = async (id) => {
    if (window.confirm("هل أنت متأكد من حذف هذا المستخدم نهائياً؟")) {
      try {
        await deleteUser(id);
        setUsers((prev) => prev.filter((u) => u._id !== id));
        setTotalUsers((prev) => prev - 1);
      } catch (error) {
        console.error("Error deleting user:", error);
        alert("فشل حذف المستخدم");
      }
    }
  };

  return (
    <>
      <header className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6">
        <div>
          <h1 className="text-2xl md:text-3xl font-serif font-bold text-slate-900 dark:text-white mb-2">
            إدارة المستخدمين
          </h1>
          <p className="text-slate-500 dark:text-slate-400 font-display text-sm">
            عرض وإدارة حسابات المستخدمين المسجلين
          </p>
        </div>
      </header>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
        <div className="bg-surface-light dark:bg-surface-dark p-4 rounded-xl border border-slate-100 dark:border-slate-700 shadow-sm flex items-center justify-between">
          <div>
            <p className="text-xs text-slate-500 dark:text-slate-400 font-medium mb-1">
              إجمالي المستخدمين
            </p>
            <p className="text-xl font-bold text-slate-900 dark:text-white font-display">
              {totalUsers}
            </p>
          </div>
          <div className="bg-blue-500/10 p-2 rounded-lg text-blue-600">
            <FontAwesomeIcon icon={faUsers} className="text-[20px]" />
          </div>
        </div>
      </div>

      <div className="bg-surface-light dark:bg-surface-dark border border-slate-200 dark:border-slate-700 rounded-xl shadow-sm overflow-hidden flex flex-col">
        <div className="overflow-x-auto">
          <table className="w-full text-right border-collapse">
            <thead>
              <tr className="bg-slate-50/50 dark:bg-slate-800/50 border-b border-slate-100 dark:border-slate-700">
                <th className="px-4 py-2 text-xs font-bold text-slate-500 dark:text-slate-400 uppercase tracking-wider font-display">
                  الاسم
                </th>
                <th className="px-4 py-2 text-xs font-bold text-slate-500 dark:text-slate-400 uppercase tracking-wider font-display">
                  البريد الإلكتروني
                </th>
                <th className="px-4 py-2 text-xs font-bold text-slate-500 dark:text-slate-400 uppercase tracking-wider font-display">
                  الدور
                </th>
                <th className="px-4 py-2 text-xs font-bold text-slate-500 dark:text-slate-400 uppercase tracking-wider font-display">
                  تاريخ الانضمام
                </th>
                <th className="px-4 py-2 text-xs font-bold text-slate-500 dark:text-slate-400 uppercase tracking-wider font-display text-left">
                  إجراءات
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100 dark:divide-slate-700/50">
              {loading ? (
                <tr>
                  <td
                    colSpan="5"
                    className="px-4 py-8 text-center text-slate-500 text-sm"
                  >
                    جاري التحميل...
                  </td>
                </tr>
              ) : users.length === 0 ? (
                <tr>
                  <td
                    colSpan="5"
                    className="px-4 py-8 text-center text-slate-500 text-sm"
                  >
                    لا يوجد مستخدمين.
                  </td>
                </tr>
              ) : (
                users.map((user) => (
                  <tr
                    key={user._id}
                    className={`group hover:bg-slate-50 dark:hover:bg-slate-800/30 transition-colors ${user.isBanned ? "bg-red-50/50 dark:bg-red-900/10" : ""}`}
                  >
                    <td className="px-4 py-2">
                      <span
                        className={`font-bold text-slate-900 dark:text-slate-100 text-sm ${user.isBanned ? "line-through text-slate-500" : ""}`}
                      >
                        {user.name}
                      </span>
                      {user.isBanned && (
                        <span className="mr-2 text-[10px] text-red-600 font-bold bg-white px-1.5 py-0.5 rounded-full border border-red-100">
                          محظور
                        </span>
                      )}
                    </td>
                    <td className="px-4 py-2 text-slate-600 dark:text-slate-300 text-sm">
                      {user.email}
                    </td>
                    <td className="px-4 py-2">
                      <select
                        value={user.role}
                        onChange={(e) => handleChangeRole(user, e.target.value)}
                        className={`bg-transparent text-[10px] font-medium border rounded px-1.5 py-0.5 outline-none cursor-pointer transition-colors ${
                          user.role === "admin"
                            ? "text-purple-700 border-purple-200 bg-purple-50"
                            : "text-green-700 border-green-200 bg-green-50"
                        }`}
                      >
                        <option value="user">مستخدم</option>
                        <option value="admin">مسؤول</option>
                      </select>
                    </td>
                    <td className="px-4 py-2 text-slate-500 dark:text-slate-400 font-display text-sm">
                      {new Date(
                        user.createdAt || Date.now(),
                      ).toLocaleDateString("ar-EG")}
                    </td>
                    <td className="px-4 py-2">
                      <div className="flex items-center justify-end gap-1 text-left">
                        <button
                          onClick={() => handleToggleBan(user)}
                          className={`p-1 rounded-lg transition-colors ${
                            user.isBanned
                              ? "text-green-500 hover:bg-green-50"
                              : "text-red-600 hover:bg-orange-50"
                          }`}
                          title={user.isBanned ? "فك الحظر" : "حظر المستخدم"}
                        >
                          <FontAwesomeIcon
                            icon={user.isBanned ? faCheckCircle : faBan}
                            className="text-[18px]"
                          />
                        </button>

                        <button
                          onClick={() => handleDelete(user._id)}
                          className="p-1 rounded-lg text-slate-400 hover:text-red-500 hover:bg-red-50 transition-colors"
                          title="حذف نهائياً"
                        >
                          <FontAwesomeIcon
                            icon={faTrash}
                            className="text-[18px]"
                          />
                        </button>
                      </div>
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>

        {/* Pagination Controls */}
        <Pagination
          page={page}
          limit={10} // Or dynamic limit if you have it
          pages={pages}
          totalItems={totalUsers}
          onPageChange={setPage}
          itemsName="مستخدم"
        />
      </div>
    </>
  );
}
