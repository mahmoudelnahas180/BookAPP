import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { getallBooks } from "../services/bookServies";
import Card from "../components/Card";
import Pagination from "../features/admin/components/ui/Pagination";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBookOpen } from "@fortawesome/free-solid-svg-icons";

export default function CategoryBooks() {
  const { id } = useParams(); // Category ID
  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(true);
  const [page, setPage] = useState(1);
  const [pages, setPages] = useState(1);
  const [totalBooks, setTotalBooks] = useState(0);
  const [categoryName, setCategoryName] = useState("");

  useEffect(() => {
    setPage(1); // Reset page when category changes
  }, [id]);

  useEffect(() => {
    fetchBooks(page);
  }, [page, id]);

  const fetchBooks = async (pageNum = 1) => {
    try {
      setLoading(true);
      const data = await getallBooks(pageNum, 12, id);
      setBooks(data.books || []);
      setPages(data.pages || 1);
      setTotalBooks(data.numberOfBook || 0);

      // Attempt to set category name from the first book if available
      // Ideally, there should be a separate API to get category details by ID
      if (data.books && data.books.length > 0 && data.books[0].category) {
        setCategoryName(data.books[0].category.name);
      }
    } catch (error) {
      console.error("Error fetching category books:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="container mx-auto px-5 lg:px-20 py-12 mt-[70px]">
      <header className="mb-10 text-center">
        <h1 className="text-3xl font-serif font-bold text-slate-900 dark:text-white mb-4">
          {categoryName ? `كتب قسم ${categoryName}` : "الكتب في هذا القسم"}
        </h1>
        <p className="text-slate-500 dark:text-slate-400 font-display">
          تصفح جميع الكتب المتاحة في هذا التصنيف
        </p>
      </header>

      {loading ? (
        <div className="flex justify-center items-center py-20">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary"></div>
        </div>
      ) : books.length > 0 ? (
        <>
          <Card books={books} />
          <div className="mt-12">
            <Pagination
              page={page}
              limit={12}
              pages={pages}
              totalItems={totalBooks}
              onPageChange={setPage}
              itemsName="كتاب"
            />
          </div>
        </>
      ) : (
        <div className="text-center py-20 text-slate-500 bg-slate-50 dark:bg-slate-800 rounded-2xl border border-dashed border-slate-300 dark:border-slate-700">
          <FontAwesomeIcon
            icon={faBookOpen}
            className="text-4xl mb-2 block mx-auto"
          />
          <p>لا توجد كتب في هذا القسم حالياً.</p>
          <Link
            to="/categories"
            className="text-primary hover:underline mt-4 inline-block font-bold"
          >
            تصفح أقسام أخرى
          </Link>
        </div>
      )}
    </div>
  );
}
