import CustomizeItem from '../CustomizeItem/CustomizeItem';
import LineItem from '../LineItem/LineItem';
import './Customize.css';


export default function Customize({ drink, handleRemoveDrink, handleCreate, drinkName, setDrinkName, items }) {
    if (!drink) return null;

    const lineItems = drink.lineItems || []; 


  return (

    
    <div className="Customize" style={{ position:"relative" }}>
        <div className="section-heading">
            <span>Preview</span>
        </div>

        {lineItems.map(item => (
              <CustomizeItem
                lineItem={item}
                key={item._id}
              />
            ))}
    </div>
  );
}