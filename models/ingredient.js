const mongoose = require('mongoose');

const ingredientSchema = new mongoose.Schema({
  ingredient: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Category'
  },
  tags: [String]
});

const Ingredient = mongoose.model('Ingredient', ingredientSchema);

module.exports = Ingredient;