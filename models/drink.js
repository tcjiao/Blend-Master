const mongoose = require('mongoose');

const drinkSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User'
  },
  name: String,
  ingredients: [{
    ingredient: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Ingredient'
    },
    tags: [String]
  }]
});

const Drink = mongoose.model('Drink', drinkSchema);

module.exports = Drink;