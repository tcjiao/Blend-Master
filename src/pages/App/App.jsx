import { useState, useEffect } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import { getUser } from '../../utilities/users-service';
import './App.css';
import AuthPage from '../AuthPage/AuthPage';
import NewDrinkPage from '../NewDrinkPage/NewDrinkPage';
import DrinkListPage from '../DrinkListPage/DrinkListPage';
import NavBar from '../../components/NavBar/NavBar';
import UpdateDrinkPage from "../UpdateDrinkPage/UpdateDrinkPage";

export default function App() {
  const [user, setUser] = useState(getUser());

  return (
    <main className="App">
      { user ?
          <>
            <NavBar user={user} setUser={setUser} />
            <Routes>

              <Route path="/drinks/new" element={<NewDrinkPage user={user} setUser={setUser}/>} />
              <Route path="/drinks/:drinkId" element={<UpdateDrinkPage user={user} setuser={setUser}/>}/>
              <Route path="/drinks" element={<DrinkListPage />} />
              <Route path="/*" element={<Navigate to="/drinks/new" />} />

            </Routes>
          </>
          :
          <AuthPage setUser={setUser} />
      }
    </main>
  );
}
