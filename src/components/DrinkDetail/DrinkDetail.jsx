import './DrinkDetail.css';
import LineItem from '../LineItem/LineItem';
import Customize from '../Customize/Customize';

export default function DrinkDetail({ drink, handleRemoveDrink, handleCreate, drinkName, setDrinkName, items }) {
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

          {lineItems.map(item => (
              <Customize 
                lineItem={item}
                key={item._id}
              />
            ))}

            

    </div>
  );
}