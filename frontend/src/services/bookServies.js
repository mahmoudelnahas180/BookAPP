import api from "./api";

export const getLastFourBooks = async () => {
  const response = await api.get("/books/getlastfourbooks");
  return response.data.books;
};
