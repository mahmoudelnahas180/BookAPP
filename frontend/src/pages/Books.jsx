import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { getallBooks } from "../services/bookServies";
import Card from "../components/Card";
import Pagination from "../features/admin/components/ui/Pagination";

export default function Books() {
  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(true);
  const [page, setPage] = useState(1);
  const [pages, setPages] = useState(1);
  const [totalBooks, setTotalBooks] = useState(0);

  useEffect(() => {
    fetchBooks(page);
  }, [page]);

  const fetchBooks = async (pageNum = 1) => {
    try {
      setLoading(true);
      const data = await getallBooks(pageNum, 12);
      setBooks(data.books || []);
      setPages(data.pages || 1);
      setTotalBooks(data.numberOfBook || 0);
    } catch (error) {
      console.error("Error fetching books:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="container mx-auto px-5 lg:px-20 py-12 mt-[70px]">
      <header className="mb-10 text-center">
        <h1 className="text-4xl font-serif font-bold text-slate-900 dark:text-white mb-4">
          تصفح الكتب
        </h1>
        <p className="text-slate-500 dark:text-slate-400 font-display">
          اكتشف مجموعتنا المميزة من الكتب في شتى المجالات
        </p>
      </header>

      {/* Filters (Placeholder for now) */}
      <div className="flex justify-end mb-8">
        {/* You can add filters here later */}
      </div>

      {loading ? (
        <div className="flex justify-center py-20">
          <p className="text-slate-500">جاري التحميل...</p>
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
        <div className="text-center py-20 text-slate-500">
          لا توجد كتب متاحة حالياً.
        </div>
      )}
    </div>
  );
}
