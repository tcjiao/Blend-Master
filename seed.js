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
    { name: 'Chocolate Milk', category: categories[0], isAdd: false },
    { name: 'Almond Milk', category: categories[0], isAdd: false },
    { name: 'Black Tea', category: categories[1], isAdd: false },
    { name: 'Wulong Tea', category: categories[1], isAdd: false },
    { name: 'Green Tea', category: categories[1], isAdd: false },
    { name: 'Boba', category: categories[2], isAdd: false },
    { name: 'Pudding', category: categories[2], isAdd: false },
    

  ]);

  console.log(items)

  process.exit();

})();
