import './DrinkDetail.css';
import LineItem from '../LineItem/LineItem';

export default function DrinkDetail({ drink, handleRemoveDrink }) {
  if (!drink) return null;

  const lineItems = drink.lineItems || []; 

  return (
    <div className="DrinkDetail">
      <div className="section-heading">
        <span>NEW Drink</span>
      </div>
      {lineItems.map(item => (
        <LineItem
          lineItem={item}
          key={item._id}
          handleRemoveOrder={handleRemoveDrink}
        />
      ))}
    </div>
  );
}