const Drink = require('../../models/drink');

module.exports = {
  cart,
  addToCart,
  removeFromCart,
  createDrink,
  getAllForUser,
  deleteDrink,
  updateDrink,
  getDrinkById
};


async function getDrinkById(req, res) {
  const {drinkId} = req.params;
  const drink = await Drink.findById(drinkId);
  res.json(drink);
}

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

async function deleteDrink(req, res) {
  try {
    const { id } = req.params;
    await Drink.findByIdAndDelete(id);
    res.json({ message: 'Drink deleted successfully.' });
  } catch (error) {
    console.error('Error deleting drink:', error);
    res.status(500).json({ error: 'An error occurred while deleting the drink.' });
  }
}

async function updateDrink(req, res) {
  const { drinkId } = req.params;
  const { name, items } = req.body;
  
  try {
    const drink = await Drink.findById(drinkId);
    drink.name = name;
    drink.lineItems = items.map(item => {
      return {
        item
      }
    });
    await drink.save();
    res.json(drink);
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: 'Failed to update drink' });
  }
}