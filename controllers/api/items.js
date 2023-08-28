const Item = require('../../models/item');
const mongoose = require("mongoose");

module.exports = {
  index,
  show,
  getItemInEditFormat
};

async function index(req, res) {
  const items = await Item.find({}).sort('name').populate('category').exec();
  items.sort((a, b) => a.category.sortOrder - b.category.sortOrder);
  res.json(items);
}

async function getItemInEditFormat(req, res) {
  const item = await Item.findById(req.params.itemId);
  res.json(
      {
        item,
        _id: new mongoose.mongo.ObjectId()
      }
  )
}

async function show(req, res) {
  const item = await Item.findById(req.params.id);
  res.json(item);
}