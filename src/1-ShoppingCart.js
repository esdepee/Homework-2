class ShoppingCart {
  constructor() {
    this.cartItems = []
  }

  getItems() {
    return this.cartItems;
  }

  addItem(name, quantity, price) {
    this.cartItems.push({
      name: name,
      quantity: quantity,
      pricePerUnit: price
    })
  }
  clear() {
    this.cartItems = []
  }

  total() {
    return this.cartItems.reduce((total, cartItem) =>
    total + (cartItem.quantity * cartItem.pricePerUnit), 0)
  }
}

module.exports = ShoppingCart
