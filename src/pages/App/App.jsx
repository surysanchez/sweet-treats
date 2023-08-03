import { useState } from 'react';
import './App.css';
import AuthPage from '../AuthPage/AuthPage';
import MenuPage from '../MenuPage/MenuPage';
import NewOrderPage from '../NewOrderPage/NewOrderPage';
import OrderHistoryPage from '../OrderHistoryPage/OrderHistoryPage';
import { Routes, Route } from 'react-router-dom';
import NavBar from '../../components/NavBar/NavBar';
import { getUser } from '../../utilities/users-service';

export default function App() {
  const [user, setUser] = useState(getUser());
  return (
    <main className="App">
     <>
     {/* < NavBar user={user} /> */}
      {/* <Routes>
        <Route path="/menu" element={<MenuPage />}></Route>
      </Routes> */}
      { user ?
       <><NavBar user={user} setUser={setUser} />
       <Routes>
            <Route path="/orders/new" element={<NewOrderPage />}></Route>
            <Route path="/orders" element={<OrderHistoryPage />}></Route>
          </Routes></>
       :
       < AuthPage setUser={setUser} />

      }
     
     </>
    </main>
  );
}


