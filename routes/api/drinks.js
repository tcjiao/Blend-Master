const express = require('express');
const router = express.Router();
const drinkCtrl = require('../../controllers/api/drinks');

// Define the route for fetching drink data
router.get('/drinks', drinkCtrl.getAllDrinks);

module.exports = router;