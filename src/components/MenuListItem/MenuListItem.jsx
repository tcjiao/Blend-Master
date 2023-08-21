import './MenuListItem.css';

export default function MenuListItem({ menuItem, handleAddToDrink }) {
  return (
    <div className="MenuListItem">
      <div className="name">{menuItem.name}</div>
      <div className="add">
        <button className="btn-sm" onClick={() => handleAddToDrink(menuItem._id)}>
          ADD
        </button>
      </div>
    </div>
  );
}