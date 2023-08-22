const Drink = require('../../models/drink');

module.exports = {
  cart,
  addToCart,
  removeFromCart,
  createDrink,
  getAllForUser
};

async function cart(req, res) {
  const cart = await Drink.getCart(req.user._id);
  res.json(cart);
}

async function addToCart(req, res) {
  const cart = await Drink.getCart(req.user._id);
  await cart.addItemToCart(req.params.id);
  res.json(cart);
}

async function removeFromCart(req, res) {
  const cart = await Drink.getCart(req.user._id);
  await cart.removeItemFromCart(req.body.itemId); 
  res.json(cart); 
}


async function createDrink(req, res) {
  const { name } = req.body;
  const cart = await Drink.getCart(req.user._id);
  cart.name = name;
  cart.isCreated = true;
  await cart.save();
  res.json(cart);
}

async function getAllForUser(req, res) {
  const drinks = await Drink.find({user: req.user._id, isCreated: true}).sort('-updatedAt');
  res.json(drinks);
}
