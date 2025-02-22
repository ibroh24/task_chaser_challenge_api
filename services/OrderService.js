const Order = require("../models").Order;
const OrderItem = require("../models").OrderItem;
const Cart = require("../models").Cart;
const CartItem = require("../models").CartItem;
const Product = require("../models").Product;
const User = require("../models").User;

const EmailService = require('./EmailService');

class OrderService {
  async createOrder(userId) {
    return await sequelize.transaction(async (t) => {
      const cart = await Cart.findOne({
        where: { user_id: userId },
        include: [CartItem],
        transaction: t
      });

      if (!cart.CartItems.length) throw new Error('Cart is empty');

      const total = cart.CartItems.reduce((sum, item) => sum + (item.price * item.quantity), 0);
      const order = await Order.create({
        user_id: userId,
        total_amount: total,
        status: 'completed'
      }, { transaction: t });

      await Promise.all(cart.CartItems.map(async (cartItem) => {
        await OrderItem.create({
          order_id: order.id,
          product_id: cartItem.product_id,
          quantity: cartItem.quantity,
          price: cartItem.price
        }, { transaction: t });

        await Product.decrement('stock_quantity', {
          by: cartItem.quantity,
          where: { id: cartItem.product_id },
          transaction: t
        });
      }));

      await CartItem.destroy({ where: { cart_id: cart.id }, transaction: t });
      
      const user = await User.findByPk(userId);
      await EmailService.sendOrderConfirmation(user.email, order);
      
      return order;
    });
  }
}

module.exports = new OrderService();