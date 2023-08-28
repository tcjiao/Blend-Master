import './DrinkDetail.css';
import LineItem from '../LineItem/LineItem';
import * as drinksAPI from '../../utilities/drinks-api';
import {Link, useNavigate} from 'react-router-dom';




export default function DrinkDetail({ drink, handleRemoveDrink, handleCreate, drinkName, setDrinkName, setEditDrinkId, editable = false }) {

  const navigate = useNavigate();
  if (!drink) return null;
  const lineItems = drink.lineItems || []; 

  const handleDelete = async () => {
    if (window.confirm('Are you sure you want to delete this drink?')) {
      try {
        await drinksAPI.deleteDrink(drink._id);
        window.location.reload(); // Force a complete page refresh
        // Perform any necessary UI updates here (e.g., remove the drink from the list)
      } catch (error) {
        console.error('Error deleting drink:', error);
      }
    }
  };



  return (

    
    <div className="DrinkDetail" style={{ position:"relative" }}>


      
      <div className="section-heading">
      {drink.isCreated ?
          <span>{drink.name}</span>
          :
          <span>NEW Drink</span>
        }
      </div>

    
     


      {lineItems.map(item => (
        <LineItem
            editable={editable}
        isCreated={drink.isCreated}
        lineItem={item}
        key={item._id}
        handleRemoveDrink={handleRemoveDrink}
        />
        ))}

        <div className='buttons' >
        {(drink.isCreated && !editable) ?
         <>
         {/* <button className="btn-sm" onClick={() => setEditDrinkId(drink._id)}>
          Edit
        </button> */}
           <button className="btn-sm" onClick={() => {
             navigate(`/drinks/${drink._id}`)
           }}>
             Edit
           </button>
         <button className="btn-sm" onClick={handleDelete}>
           Delete
         </button>
       </>
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
              >
                {editable ? 'Update' : 'Create'}
              </button>

              </div>
              }
        </div>
          

    </div>
  );
}