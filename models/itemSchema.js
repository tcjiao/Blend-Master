const Schema = require('mongoose').Schema;

const itemSchema = new Schema({
  name: { type: String, required: true },
  category: {type: Schema.Types.ObjectId, ref: 'Category'},
  isAddOn: { type: Boolean, default: false },
}, {
  timestamps: true
});

module.exports = itemSchema;