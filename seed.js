require('dotenv').config();
require('./config/database');

const Category = require('./models/category');
const Item = require('./models/item');

// IIFE
// Immediately Invoked Function Expression
(async function() {
  await Category.deleteMany({});
  const categories = await Category.create([
    {name: 'Milk', sortOrder: 10},
    {name: 'Tea', sortOrder: 20},
    {name: 'Topping', sortOrder: 30},
    {name: 'Extra', sortOrder: 40},
  ]);

  await Item.deleteMany({});
  const items = await Item.create([
    {name: 'Chocolate Milk', category: categories[0]},
    {name: 'Almond Milk', category: categories[0]},
    {name: 'Black Tea', category: categories[1]},
    {name: 'Wulong Tea', category: categories[1]},
    {name: 'Green Tea', category: categories[1]},
    {name: 'Boba', category: categories[2]},
    {name: 'Pudding', category: categories[2]},
    

  ]);

  console.log(items)

  process.exit();

})();
