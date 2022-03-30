import './App.css';
import { Routes, BrowserRouter, Route } from 'react-router-dom'

import { Header } from './components/Header/Header';
import Footer from './components/Footer/Footer';

import HomePage from './pages/HomePage/HomePage';
import NotFound from './pages/NotFound/NotFound';
import AdminDashboard from './pages/AdminDashboard/AdminDashboard';
import UserDashboard from './pages/UserDashboard/UserDashboard';
import LoginPage from './pages/LoginPage/LoginPage';
import RegisterPage from './pages/RegisterPage/RegisterPage';
import ProductPage from './pages/ProductPage/ProductPage';
import SearchPage from './pages/SearchPage/SearchPage';
import ProductListings from './pages/ProductListings/ProductListings';
import { useEffect, useState } from 'react';
import OrderCart from './pages/OrderCart/OrderCart';
import ContactUs from './pages/ContactUs/ContactUs';
import AboutUs from './pages/AboutUs/AboutUs';
import OrderPlacement from './pages/OrderPlacement/OrderPlacement';
import UserProfile from './pages/UserProfile/UserProfile';
import { Axios } from 'axios';

// import ProtectedRoute from './components/ProtectedRoute/ProtectedRoute';

async function getSavedOrder(id){
  var cartItems = await Axios.post("http://localhost:8080/cartItmes", {
    id: id
  });
  return cartItems.data;
}

async function addProductToSavedOrder(orderId, productId, qty){
  await Axios.post("https://localhost:8000/addCartItem", {
    orderId: orderId,
    productId: productId,
    qty: qty
  });
}

async function getAndSetSavedOrder(id, setCartItems){
  var savedOrder = await getSavedOrder(id);
  setCartItems(savedOrder);
}

function App() {
  // Stored in format {ID: qty}
  const [cartItems, setCartItems] = useState({});
  if(localStorage.getItem("loginStatus") == true) {
    getAndSetSavedOrder(localStorage.getItem("userEmail"), setCartItems);
  }

  useEffect(() => {
    // TODO: should not be null
    addProductToSavedOrder(null, null, null);
  }, [cartItems]);

  return (
    <BrowserRouter>
      <div>
        <Header cartItems={cartItems}/>
      </div>
      <Routes>
        <Route path='/home' element={ <HomePage/> } />
        <Route path='/' element={ <HomePage/> } /> {/* Default Page with No Path provided should be home */}
        <Route path='/contact-us' element={ <ContactUs/> } />
        <Route path='/about-us' element={ <AboutUs/> } />
        <Route path='/login' element={ <LoginPage/> } />
        <Route path='/register' element={ <RegisterPage/> } />
        <Route path='/dashboard' element={ <UserDashboard/> } />
        <Route path='/admin-dashboard' element={ <AdminDashboard/> } />
        <Route path='/user-profile' element={ <UserProfile/> } />
        {/* <Route path='/product/:id' element={ <ProductPage/> } /> */}
        <Route path='/product-listings' element={ <ProductListings cartItems={cartItems} setCartItems={setCartItems} productID={2}/> } />
        <Route path='/product-page' element={ <ProductPage cartItems={cartItems} setCartItems={setCartItems} productID={2}/> } />
        <Route path='/product-search' element={ <SearchPage/> } />
        <Route path="/cart" element={ <OrderCart cartItems={cartItems} setCartItems={setCartItems} /> } />
        <Route path='/order-placement' element={ <OrderPlacement/> } />
        <Route path='/*' element={ <NotFound/> } />
      </Routes>
      <div>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
