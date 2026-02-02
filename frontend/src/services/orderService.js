import api from "./api";

/**
 * @file orderService.js
 * @description Service to handle order API requests
 */

/**
 * @function getAllOrders
 * @description Get all orders (Admin)
 * @param {number} page
 * @param {number} limit
 */
export const getAllOrders = async (page = 1, limit = 10) => {
  const response = await api.get(`/orders?page=${page}&limit=${limit}`);
  return response.data;
};

/**
 * @function updateOrderStatus
 * @description Update order status (Admin)
 */
export const updateOrderStatus = async (id, status) => {
  const response = await api.patch(`/orders/${id}/status`, { status });
  return response.data;
};

/**
 * @function getMyOrders
 * @description Get logged-in user's orders
 */
export const getMyOrders = async () => {
  const response = await api.get("/orders/my-orders");
  return response.data;
};

export const createOrder = async (orderData) => {
  const response = await api.post("/orders", orderData);
  return response.data;
};
