const Order = require("../models/OrderSchema");

class OrderController {
  /**
   * @function getAllOrders
   * @description Get all orders with pagination and filtering (Admin only)
   * @route GET /api/orders
   */
  async getAllOrders(req, res) {
    try {
      const page = parseInt(req.query.page) || 1;
      const limit = parseInt(req.query.limit) || 10;
      const skip = (page - 1) * limit;

      const totalOrders = await Order.countDocuments();
      const pages = Math.ceil(totalOrders / limit);

      const orders = await Order.find()
        .populate("user", "name email")
        .populate("items.book", "title price")
        .sort({ createdAt: -1 })
        .skip(skip)
        .limit(limit);

      res.status(200).json({
        orders,
        page,
        limit,
        pages,
        totalOrders,
      });
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  }

  /**
   * @function updateOrderStatus
   * @description Update order status (Admin only)
   * @route PATCH /api/orders/:id/status
   */
  async updateOrderStatus(req, res) {
    try {
      const { status } = req.body;
      const order = await Order.findByIdAndUpdate(
        req.params.id,
        { status },
        { new: true },
      );

      if (!order) {
        return res.status(404).json({ message: "Order not found" });
      }

      res.status(200).json({ message: "Order status updated", order });
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  }

  /**
   * @function createOrder
   * @description Create a new order (User)
   * @route POST /api/orders
   */
  async createOrder(req, res) {
    try {
      const { items, totalAmount, shippingAddress, paymentMethod } = req.body;

      const newOrder = new Order({
        user: req.user.id, // Assuming auth middleware sets req.user
        items,
        totalAmount,
        shippingAddress,
        paymentMethod,
      });

      await newOrder.save();
      res
        .status(201)
        .json({ message: "Order created successfully", order: newOrder });
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  }

  /**
   * @function getUserOrders
   * @description Get logged in user's orders
   * @route GET /api/orders/my-orders
   */
  async getUserOrders(req, res) {
    try {
      const orders = await Order.find({ user: req.user.id })
        .populate("items.book", "title coverImage")
        .sort({ createdAt: -1 });

      res.status(200).json(orders);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  }
}

module.exports = new OrderController();
