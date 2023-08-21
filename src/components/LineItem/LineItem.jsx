import './LineItem.css';

export default function LineItem({ lineItem, handleRemoveDrink }) {
  return (
    <div className="LineItem">
      <div className="flex-ctr-ctr flex-col">
        <span className="align-ctr">{lineItem.item.name}</span>
      </div>
          <button
            className="btn-xs"
            onClick={() => handleRemoveDrink(lineItem.item._id)}
          >−</button>
      </div>
  );
}