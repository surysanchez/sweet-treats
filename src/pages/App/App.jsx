import { useState } from 'react';
import './App.css';
import AuthPage from '../AuthPage/AuthPage';
import MenuPage from '../MenuPage/MenuPage';
import NewOrderPage from '../NewOrderPage/NewOrderPage';
import OrderHistoryPage from '../OrderHistoryPage/OrderHistoryPage';
import { Routes, Route } from 'react-router-dom';
import NavBar from '../../components/NavBar/NavBar';

export default function App() {
  const [user, setUser] = useState(null)
  return (
    <main className="App">
     <>
     < NavBar />
      <Routes>
        <Route path="/menu" element={<MenuPage />}></Route>
      </Routes>
      { user ?
      < Routes >
          <Route path="/orders/new" element={<NewOrderPage />}></Route>
          <Route path="/orders" element={<OrderHistoryPage />}></Route>
      </Routes>
       :
       < AuthPage />

      }
     
     </>
    </main>
  );
}


