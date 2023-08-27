import React from 'react';
import LineItem from '../LineItem/LineItem'; // Import the LineItem component
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
      await drinksAPI.updateDrink(drink._id, { name: drinkName }); // Use drink._id here
      onUpdate(drinkName); // Update the name in the parent component
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

      {/* Render LineItem components */}
      {lineItems.map(item => (
        <LineItem
          isCreated={true} // Adjust this as needed
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