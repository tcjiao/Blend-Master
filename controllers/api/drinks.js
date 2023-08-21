const Drink = require('../../models/drink');

module.exports = {
  cart,
  addToCart,
  removeFromCart,
  checkout,
};

async function cart(req, res) {
  const cart = await Drink.getCart(req.user._id);
  res.json(cart);
}

async function addToCart(req, res) {
  console.log("123", req.user._id)
  const cart = await Drink.getCart(req.user._id);
  console.log(cart);
  await cart.addItemToCart(req.params.id);
  res.json(cart);
}

async function removeFromCart(req, res) {
  const cart = await Drink.getCart(req.user._id);
  await cart.removeItemFromCart(req.body.itemId); 
  res.json(cart); 
}

async function checkout(req, res) {
  const cart = await Drink.getCart(req.user._id);
  cart.isPaid = true;
  await cart.save();
  res.json(cart);
}
