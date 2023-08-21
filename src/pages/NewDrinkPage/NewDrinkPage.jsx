import React from 'react';
import { useState, useEffect, useRef } from 'react';
import * as itemsAPI from '../../utilities/items-api';
import * as drinksAPI from '../../utilities/drinks-api';
import './NewDrinkPage.css';
import { Link } from 'react-router-dom';
import MenuList from '../../components/MenuList/MenuList';
import CategoryList from '../../components/CategoryList/CategoryList';
import DrinkDetail from '../../components/DrinkDetail/DrinkDetail';

export default function NewDrinkPage({user, setuser}) {
  const [menuItems, setMenuItems] = useState([]);
  const categoriesRef = useRef([]);
  const [activeCat, setActiveCat] = useState('');
  const [cart, setCart] = useState(null);


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
    const updatedCart = drinksAPI.addItemToCart(itemId);
    setCart(updatedCart);
  }

  async function handleRemoveDrink(itemId) {
    const updatedCart = await drinksAPI.removeItemFromCart(itemId);
    setCart(updatedCart);
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
      />
      <DrinkDetail drink={cart} handleRemoveDrink={handleRemoveDrink} />
    </main>
  );
}