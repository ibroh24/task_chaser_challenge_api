const Cart = require("../models").Cart;
const CartItem = require("../models").CartItem;
const Product = require("../models").Product;


class CartService {
  async getOrCreateCart(userId) {
    const [cart] = await Cart.findOrCreate({
      where: { user_id: userId }
    });

    // Fetch the cart again with the included CartItems
    const fullCart = await Cart.findOne({
      where: { id: cart.id },
      include: [{ model: CartItem }]
    });

    return fullCart;
}

  async addItemToCart(userId, productId, quantity = 1) {
    const cart = await this.getOrCreateCart(userId);
    const product = await Product.findByPk(productId);
    
    return await CartItem.upsert({
      cart_id: cart.id,
      product_id: productId,
      quantity,
      price: product.price
    });
  }

  async removeItemFromCart(userId, productId) {
    const cart = await this.getOrCreateCart(userId);
    return await CartItem.destroy({
      where: {
        cart_id: cart.id,
        product_id: productId
      }
    });
  }

  async clearCart(userId) {
    const cart = await this.getOrCreateCart(userId);
    return await CartItem.destroy({ where: { cart_id: cart.id } });
  }
}

module.exports = new CartService();