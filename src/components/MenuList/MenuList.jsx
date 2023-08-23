import './MenuList.css';
import MenuListItem from '../MenuListItem/MenuListItem';

export default function MenuList({ menuItems, handleAddToDrink, addedItems }) {
  const items = menuItems.map(item =>
    <MenuListItem
      key={item._id}
      menuItem={item}
      handleAddToDrink={handleAddToDrink}
      addedItems={addedItems}
    />
  );
  return (
    <main className="MenuList">
      {items}
    </main>
  );
}