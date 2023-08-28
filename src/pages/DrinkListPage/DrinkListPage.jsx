import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './DrinkListPage.css';
import * as drinksAPI from '../../utilities/drinks-api';
import DrinkDetail from '../../components/DrinkDetail/DrinkDetail';
import DrinkList from '../../components/DrinkList/DrinkList';
import EditDrinkForm from '../../components/EditDrinkForm/EditDrinkForm'; // Import the EditDrinkForm component



export default function DrinkListPage({ user, setUser }) {
  const [drinks, setDrinks] = useState([]);
  const [activeDrink, setActiveDrink] = useState(null);
  const [editDrinkId, setEditDrinkId] = useState(null); // State to track the drink being edited
  const [editedName, setEditedName] = useState('');


  useEffect(function() {
    async function getDrinks() {
      const drinks = await drinksAPI.getAllForUser();
      setActiveDrink(drinks[0] || null);
      setDrinks(drinks);
    }
    getDrinks();

  }, []);

  async function handleEditDrink(drinkId, newName) {
    await drinksAPI.updateDrink(drinkId, { name: newName });
    setEditDrinkId(null); 
    setEditedName('');
  }


  return (
    <main className="DrinkListPage">
      <div className="left-pane">
        <DrinkList
          drinks={drinks}
          activeDrink={activeDrink}
          setActiveDrink={setActiveDrink}
        />
      </div>
      <div className="right-pane">
        <DrinkDetail drink={activeDrink} setEditDrinkId={setEditDrinkId} />
      </div>
    </main>
  );
}
