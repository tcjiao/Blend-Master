const express = require('express');
const router = express.Router();
const drinksCtrl = require('../../controllers/api/drinks');

router.get('/cart', drinksCtrl.cart);
router.get('/', drinksCtrl.getAllForUser);
router.post('/cart/items/:id', drinksCtrl.addToCart);
router.post('/cart/createDrink', drinksCtrl.createDrink);
router.put('/cart/remove', drinksCtrl.removeFromCart);

module.exports = router;
