import { Link } from 'react-router-dom';
import * as userService from '../../utilities/users-service';
import './NavBar.css';

export default function NavBar({ user, setUser }) {
  function handleLogOut() {
    userService.logOut();
    setUser(null);
  }

  return (
    <nav className="navbar">
      <Link className="navbar-link" to="/drinks">
      <img src="/icon2.png" alt="Blend Master Icon" className="navbar-icon" />
      </Link>
      <Link to="/drinks" className="navbar-link">Drink List</Link>
      <Link to="/drinks/new" className="navbar-link">New Drink</Link>
      <span className="navbar-user">Welcome, {user.name}</span>
      <Link to="" className="navbar-link" onClick={handleLogOut}>Log Out</Link>
    </nav>
  );
}


