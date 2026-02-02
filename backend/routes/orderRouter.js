const express = require("express");
const router = express.Router();
const orderController = require("../controller/OrderController");
const verifyToken = require("../middlewares/verifyToken");
const allowedTo = require("../middlewares/allowedTo");

// Admin Routes
router.get("/", verifyToken, allowedTo("admin"), orderController.getAllOrders);

router.patch(
  "/:id/status",
  verifyToken,
  allowedTo("admin"),
  orderController.updateOrderStatus,
);

// User Routes
router.post("/", verifyToken, orderController.createOrder);

router.get("/my-orders", verifyToken, orderController.getUserOrders);

module.exports = router;
