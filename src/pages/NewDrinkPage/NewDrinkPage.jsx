import React from 'react';
import { useState, useEffect, useRef } from 'react';
import * as itemsAPI from '../../utilities/items-api';
import * as drinksAPI from '../../utilities/drinks-api';
import './NewDrinkPage.css';
import { Link, useNavigate } from 'react-router-dom';
import MenuList from '../../components/MenuList/MenuList';
import CategoryList from '../../components/CategoryList/CategoryList';
import DrinkDetail from '../../components/DrinkDetail/DrinkDetail';

export default function NewDrinkPage({user, setuser}) {
  const [menuItems, setMenuItems] = useState([]);
  const categoriesRef = useRef([]);
  const [activeCat, setActiveCat] = useState('');
  const [cart, setCart] = useState(null);
  const navigate = useNavigate();
  const [drinkName, setDrinkName] = useState('');
  const [addedItems, setAddedItems] = useState([]);




  useEffect(function () {
    async function getItems(){
      const items = await itemsAPI.getAll();
      categoriesRef.current = [...new Set(items.map(item => item.category.name))];
      setMenuItems(items);
      setActiveCat(categoriesRef.current[0]);
    }
    getItems();

    async function getCart() {
      const cart = await drinksAPI.getCart();
      setCart(cart);
    }
    getCart();
  }, []);

  async function handleAddToDrink(itemId) {
    const updatedCart = await drinksAPI.addItemToCart(itemId);
    setCart(updatedCart);
    setAddedItems([...addedItems, itemId]);
  }

  async function handleRemoveDrink(itemId) {
    const updatedCart = await drinksAPI.removeItemFromCart(itemId);
    setCart(updatedCart);
    setAddedItems((prevItems) => prevItems.filter((id) => id !== itemId));
  }

  async function handleCreate() {
    await drinksAPI.createDrink({ name: drinkName });
    navigate('/drinks')
  }

  return (
    <main className="NewDrinkPage">
        <CategoryList
          categories={categoriesRef.current}
          activeCat={activeCat}
          setActiveCat={setActiveCat}
        />
      <MenuList
        menuItems={menuItems.filter(item => item.category.name === activeCat)}
        handleAddToDrink={handleAddToDrink}
        addedItems={addedItems}
      />
      <DrinkDetail drink={cart} handleRemoveDrink={handleRemoveDrink} handleCreate={handleCreate} drinkName={drinkName} setDrinkName={setDrinkName} />
    </main>
  );
}