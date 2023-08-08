import { useState } from 'react';
import './App.css';
import AuthPage from '../AuthPage/AuthPage';
import { Routes, Route } from 'react-router-dom';
import NavBar from '../../components/NavBar/NavBar';
import { getUser } from '../../utilities/users-service';
import CakesPage from '../CakesPage/CakesPage';
import { treats, cakes } from '../../data.js';
import HomePage from '../HomePage/HomePage';
import AboutPage from '../AboutPage/AboutPage';
import ContactPage from '../ContactPage/ContactPage';

export default function App() {
  const [user, setUser] = useState(getUser());
  return (
    <main className="App">
     <>
    <NavBar user={user} setUser={setUser} />
       <Routes>

            <Route path='/cakes' element={ <CakesPage cakes={cakes} />}  >  </Route>  
            <Route path="/" element={<HomePage cakes={cakes} treats={treats} />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/contact" element={<ContactPage />} />

            
            {/* <Route path='/authpage' element={ < AuthPage setUser={setUser} /> }>  </Route> */}
            
          </Routes>
      
     </>
    </main>
  );
}


