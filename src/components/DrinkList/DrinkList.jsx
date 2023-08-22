import './DrinkList.css';
import DrinkListItem from '../DrinkListItem/DrinkListItem';

export default function DrinkList({ drinks, activeDrink, setActiveDrink }) {


  const drinkList = drinks.map(drink => <DrinkListItem
    key={drink._id}
    drink={drink}
    activeDrink={activeDrink}
    setActiveDrink={setActiveDrink}
  />);

  return (
    <>
    {drinkList}
    </>
  );
}