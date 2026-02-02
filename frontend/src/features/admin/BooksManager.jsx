import { useEffect, useState } from "react";
import { getallBooks, deleteBook } from "../../services/bookServies";
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
  useEffect(() => {
    fetchBooks(1);
  }, []);

  const fetchBooks = (pageNum = 1) => {
    getallBooks(pageNum, limit).then((data) => {
      setBooks(data.books || []);
      setPage(data.page);
      setLimit(data.limit);
      setPages(data.pages);
      setNumberOfBook(data.numberOfBook);
    });
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

  const navigate = useNavigate();

  const handleEdit = (book) => {
    navigate(`/admin/products/edit/${book._id}`);
  };

  return (
    <>
      <BooksHeader />
      <BooksStats numberOfBook={numberOfBook} />
      <BooksToolbar />
      <div className="bg-surface-light dark:bg-surface-dark border border-slate-200 dark:border-slate-700 rounded-xl shadow-sm overflow-hidden flex flex-col">
        <BooksTable
          books={allbook}
          onEdit={handleEdit}
          onDelete={handleDelete}
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
