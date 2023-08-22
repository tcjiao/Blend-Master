import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './DrinkListPage.css';
import * as drinksAPI from '../../utilities/drinks-api';
import DrinkDetail from '../../components/DrinkDetail/DrinkDetail';
import DrinkList from '../../components/DrinkList/DrinkList';


export default function DrinkListPage({ user, setUser }) {
  const [drinks, setDrinks] = useState([]);
  const [activeDrink, setActiveDrink] = useState(null);

  useEffect(function() {
    async function getDrinks() {
      const drinks = await drinksAPI.getAllForUser();
      setActiveDrink(drinks[0] || null);
      setDrinks(drinks);
    }
    getDrinks();
  }, []);


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
        <DrinkDetail drink={activeDrink} />
      </div>
    </main>
  );
}
