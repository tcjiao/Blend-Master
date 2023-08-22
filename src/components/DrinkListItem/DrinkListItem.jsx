import './DrinkListItem.css';

export default function DrinkListItem({ drink, activeDrink, setActiveDrink }) {
  return (
    <div
      className={`DrinkListItem ${drink === activeDrink ? 'selected' : ''}`}
      onClick={() => setActiveDrink(drink)}
    >
      <div>
        <div><span className="smaller">{drink.name}</span></div>
      </div>
      <div className="align-rt">
      </div>
    </div>
  );
}