import './MenuList.css';
import MenuListItem from '../MenuListItem/MenuListItem';

export default function MenuList({ menuItems, handleAddToDrink }) {
  const items = menuItems.map(item =>
    <MenuListItem
      key={item._id}
      menuItem={item}
      handleAddToDrink={handleAddToDrink}
    />
  );
  return (
    <main className="MenuList">
      {items}
    </main>
  );
}