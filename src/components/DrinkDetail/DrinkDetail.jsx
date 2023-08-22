import './DrinkDetail.css';
import LineItem from '../LineItem/LineItem';

export default function DrinkDetail({ drink, handleRemoveDrink, handleCreate, drinkName, setDrinkName }) {
  if (!drink) return null;

  const lineItems = drink.lineItems || []; 

  return (
    <div className="DrinkDetail">
      <div className="section-heading">
      {drink.isCreated ?
          <span>{drink.name}</span>
          :
          <span>NEW Drink</span>
        }
      </div>
      {lineItems.map(item => (
        <LineItem
          isCreated={drink.isCreated}
          lineItem={item}
          key={item._id}
          handleRemoveDrink={handleRemoveDrink}
        />
      ))}
        {drink.isCreated ? 

              <button
                className='btn-sm'
                onClick={handleCreate}
              >Update</button>
            : 
            <div className='New-Drink-Show'>


              <input
                type="text"
                placeholder="Enter drink name"
                value={drinkName}
                onChange={(e) => setDrinkName(e.target.value)}
              />
              <button
                className='btn-sm'
                onClick={handleCreate}
              >Create</button>
            </div>
            }
    </div>
  );
}