import React from 'react';
import LineItem from '../LineItem/LineItem';
import * as drinksAPI from '../../utilities/drinks-api';


export default function EditDrinkForm({
  drinkName,
  setDrinkName,
  onSave,
  onCancel,
  drink,
  onUpdate
}) {

  const lineItems = drink.lineItems || []; 


  const handleSave = async () => {
    try {
      await drinksAPI.updateDrink(drink._id, { name: drinkName });
      onUpdate(drinkName); 
    } catch (error) {
      console.error('Error updating drink name:', error);
    }
  };

  return (
    <div className="EditDrinkForm">
      <div className="section-heading">
      <input type="text" value={drinkName}  onChange={(e) => setDrinkName(e.target.value)}
 />
      </div>

      {lineItems.map(item => (
        <LineItem
          isCreated={true} 
          lineItem={item}
          key={item._id}
        />
      ))}

      <div className="btn-group">
        <button className="btn-sm" onClick={handleSave}>
          Save
        </button>
        <button className="btn-sm" onClick={onCancel}>
          Cancel
        </button>
      </div>
    </div>
  );
}