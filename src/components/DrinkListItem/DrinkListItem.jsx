import './DrinkListItem.css';

export default function DrinkListItem({ drink, activeDrink, setActiveDrink }) {
  return (
    <div
      className={`DrinkListItem ${drink === activeDrink ? 'selected' : ''}`}
      onClick={() => setActiveDrink(drink)}
    >
      <div>
        {drink ? (
          <span className="smaller">{drink.name}</span>
        ) : (
          <span className="smaller">No drinks available</span>
        )}
      </div>
      <div className="align-rt">
      </div>
    </div>
  );
}