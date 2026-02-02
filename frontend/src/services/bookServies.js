import api from "./api";

export const getLastFourBooks = async () => {
  const response = await api.get("/books/getlastfourbooks");
  return response.data.books;
};
export const addBook = async (book) => {
  const response = await api.post("/books/books", book);
  return response.data;
};
export const updateBook = async (id, book) => {
  const response = await api.put(`/books/books/${id}`, book);
  return response.data;
};
export const deleteBook = async (id) => {
  const response = await api.delete(`/books/books/${id}`);
  return response.data;
};
export const getBookById = async (id) => {
  const response = await api.get(`/books/books/${id}`);
  return response.data;
};
export const getallBooks = async (page = 1, limit = 12, category = "") => {
  let url = `/books/getbooks?page=${page}&limit=${limit}`;
  if (category) {
    url += `&category=${category}`;
  }
  const response = await api.get(url);
  return response.data;
};
