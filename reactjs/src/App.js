import './App.css';
import { Routes, BrowserRouter, Route } from 'react-router-dom'
import { Header } from './components/Header/Header';
import Footer from './components/Footer/Footer';

import HomePage from './pages/HomePage/HomePage';
import NotFound from './pages/NotFound/NotFound';
import AdminDashboard from './pages/AdminDashboard/AdminDashboard';
import UserDashboard from './pages/UserDashboard/UserDashboard';
import LoginPage from './pages/LoginPage/LoginPage';
import ProductPage from './pages/ProductPage/ProductPage';
import SearchPage from './pages/SearchPage/SearchPage';
import ProductListings from './pages/ProductListings/ProductListings';
import { useState } from 'react';
import OrderCart from './pages/OrderCart/OrderCart';

function App() {
  // Stored in format {ID: qty}
  const [cartItems, setCartItems] = useState({});

  return (
    <BrowserRouter>
      <div>
        <Header cartItems={cartItems}/>
      </div>
      <Routes>
        <Route path='/home' element={ <HomePage/> } />
        <Route path='/' element={ <HomePage/> } /> {/* Default Page with No Path provided should be home */}
        <Route path='/login' element={ <LoginPage/> } />
        <Route path='/dashboard' element={ <UserDashboard/> } />
        <Route path='/admin-dashboard' element={ <AdminDashboard/> } />
        <Route path='/product-listings' element={ <ProductListings cartItems={cartItems} setCartItems={setCartItems} productID={2}/> } />
        <Route path='/product-page' element={ <ProductPage cartItems={cartItems} setCartItems={setCartItems} productID={2}/> } />
        <Route path='/product-search' element={ <SearchPage/> } />
        <Route path="/cart" element={ <OrderCart cartItems={cartItems} setCartItems={setCartItems} /> } />
        <Route path='/*' element={ <NotFound/> } />
      </Routes>
      <div>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
