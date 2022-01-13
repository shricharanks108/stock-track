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

function App() {
  return (
    <BrowserRouter>
      <div>
        <Header />
      </div>
      <Routes>
        <Route path='/home' element={ <HomePage/> } />
        <Route path='/login' element={ <LoginPage/> } />
        <Route path='/dashboard' element={ <UserDashboard/> } />
        <Route path='/admin-dashboard' element={ <AdminDashboard/> } />
        <Route path='/product-listings' element={ <ProductListings/> } />
        <Route path='/product-page' element={ <ProductPage/> } />
        <Route path='/product-search' element={ <SearchPage/> } />
        <Route path='/*' element={ <NotFound/> } />
      </Routes>
      <div>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
