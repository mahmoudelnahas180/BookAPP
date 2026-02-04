import { useEffect, useState } from "react";
import {
  getallBooks,
  deleteBook,
  updateBook,
} from "../../services/bookServies";
import { useNavigate } from "react-router-dom";

// Import sub-components
import BooksHeader from "./components/BooksManager/BooksHeader";
import BooksStats from "./components/BooksManager/BooksStats";
import BooksToolbar from "./components/BooksManager/BooksToolbar";
import BooksTable from "./components/BooksManager/BooksTable";
import Pagination from "./components/ui/Pagination";

export default function BooksManager() {
  const [allbook, setBooks] = useState([]);
  const [numberOfBook, setNumberOfBook] = useState(null);
  const [page, setPage] = useState(1);
  const [limit, setLimit] = useState(5);
  const [pages, setPages] = useState(null);
  const [statusFilter, setStatusFilter] = useState("all");
  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    const timer = setTimeout(() => {
      fetchBooks(1);
    }, 500);
    return () => clearTimeout(timer);
  }, [statusFilter, searchQuery]);

  const fetchBooks = (pageNum = 1) => {
    // getallBooks(page, limit, category, status, createdBy, search)
    getallBooks(pageNum, limit, "", statusFilter, "", searchQuery).then(
      (data) => {
        setBooks(data.books || []);
        setPage(data.page);
        setLimit(data.limit);
        setPages(data.pages);
        setNumberOfBook(data.numberOfBook);
      },
    );
  };

  const handlePageChange = (newPage) => {
    if (newPage >= 1 && newPage <= pages) {
      fetchBooks(newPage);
    }
  };

  const handleDelete = async (id) => {
    if (window.confirm("هل أنت متأكد من حذف هذا الكتاب؟")) {
      try {
        await deleteBook(id);
        setBooks((prev) => prev.filter((b) => b._id !== id));
      } catch (error) {
        console.error("Error deleting book:", error);
        alert("فشل حذف الكتاب");
      }
    }
  };

  const handleStatusUpdate = async (id, newStatus) => {
    try {
      await updateBook(id, { status: newStatus });
      // Refresh list or update local state
      setBooks((prev) =>
        prev.map((b) => (b._id === id ? { ...b, status: newStatus } : b)),
      );
      alert(
        `تم تحديث حالة الكتاب إلى: ${newStatus === "approved" ? "مقبول" : "مرفوض"}`,
      );
    } catch (error) {
      console.error("Error updating status:", error);
      alert("فشل تحديث الحالة");
    }
  };

  const navigate = useNavigate();

  const handleEdit = (book) => {
    navigate(`/admin/products/edit/${book._id}`);
  };

  return (
    <>
      <BooksHeader />
      <div className="flex gap-4 mb-6 border-b border-slate-200 dark:border-slate-700 pb-2">
        {["all", "pending", "approved", "rejected"].map((tab) => (
          <button
            key={tab}
            onClick={() => {
              setStatusFilter(tab === "all" ? "all" : tab);
              setPage(1);
            }}
            className={`px-4 py-2 rounded-lg font-bold transition-colors ${
              statusFilter === tab || (tab === "all" && statusFilter === "")
                ? "bg-primary text-white"
                : "text-slate-500 hover:bg-slate-100 dark:hover:bg-slate-700"
            }`}
          >
            {tab === "all"
              ? "الكل"
              : tab === "pending"
                ? "قيد المراجعة"
                : tab === "approved"
                  ? "مقبول"
                  : "مرفوض"}
          </button>
        ))}
      </div>
      <BooksStats numberOfBook={numberOfBook} />
      <BooksToolbar searchQuery={searchQuery} onSearchChange={setSearchQuery} />
      <div className="bg-surface-light dark:bg-surface-dark border border-slate-200 dark:border-slate-700 rounded-xl shadow-sm overflow-hidden flex flex-col">
        <BooksTable
          books={allbook}
          onEdit={handleEdit}
          onDelete={handleDelete}
          onStatusUpdate={handleStatusUpdate}
        />
        <Pagination
          page={page}
          limit={limit}
          pages={pages}
          totalItems={numberOfBook}
          onPageChange={handlePageChange}
          itemsName="كتاب"
        />
      </div>
    </>
  );
}
