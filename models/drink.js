const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const itemSchema = require('./itemSchema');

const lineItemSchema = new Schema({
  item: itemSchema
}, {
  timestamps: true,
  toJSON: { virtuals: true }
});


const drinkSchema = new Schema({
  user: {
    type: Schema.Types.ObjectId,
    ref: 'User',
  },
  lineItems: [lineItemSchema],
}, {
  timestamps: true,
  toJSON: { virtuals: true }
});


drinkSchema.statics.getCart = function(userId) {
  return this.findOneAndUpdate(
    { user: userId },
    { user: userId },
    { upsert: true, new: true }
  );
};

drinkSchema.methods.addItemToCart = async function (itemId) {
  const cart = this;
  const Item = mongoose.model('Item');
  const item = await Item.findById(itemId);
  cart.lineItems.push({ item });
  return cart.save();
};

drinkSchema.methods.removeItemFromCart = async function (itemId) {
  const cart = this;

  const itemIndex = cart.lineItems.findIndex(lineItem =>
    lineItem.item.equals(itemId)
  );

  if (itemIndex !== -1) {
    cart.lineItems.splice(itemIndex, 1);
    return cart.save();
  } else {
    throw new Error('Item not found in cart');
  }
};

module.exports = mongoose.model('Drink', drinkSchema);