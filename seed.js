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
    {name: 'Juice', sortOrder: 30},
    {name: 'Topping', sortOrder: 40},
  ]);

  await Item.deleteMany({});
  const items = await Item.create([
    { name: 'Chocolate Milk', category: categories[0] },
    { name: 'Fresh Milk', category: categories[0] },
    { name: 'Coconut Milk', category: categories[0] },
    { name: 'Almond Milk', category: categories[0] },
    { name: 'Soy Milk', category: categories[0] },
    { name: 'Taro Milk', category: categories[0] },
    { name: 'Black Tea', category: categories[1] },
    { name: 'Green Tea', category: categories[1] },
    { name: 'Wulong Tea', category: categories[1] },
    { name: 'Apple Juice', category: categories[2] },
    { name: 'Orange Juice', category: categories[2] },
    { name: 'Watermelon Juice', category: categories[2] },
    { name: 'Grape Juice', category: categories[2] },
    { name: 'Lychee Juice', category: categories[2] },
    { name: 'Peach Juice', category: categories[2] },
    { name: 'Boba', category: categories[3] },
    { name: 'Pudding', category: categories[3] },
    { name: 'Icecream', category: categories[3] },
    { name: 'Secret Gift', category: categories[3] }
    

  ]);

  console.log(items)

  process.exit();

})();
