import React from 'react';
import { useState, useEffect } from 'react';
import NewDrinkForm from '../../components/NewDrinkForm/NewDrinkForm';
import DrinkTags from '../../components/DrinkTag/DrinkTag';
import * as itemsAPI from '../../utilities/items-api';

export default function NewDrinkPage() {
  const [menuItems, setMenuItems] = useState([]);

  useEffect(function () {
    async function getItems(){
      const items = await itemsAPI.getAll();
      setMenuItems(items);
    }
    getItems();
  }, []);

  return (
    <>
      <h1>NewDrinkPage</h1>
    </>
  );
}