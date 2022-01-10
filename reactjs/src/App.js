import './App.css';
import { Routes, BrowserRouter, Route } from 'react-router-dom'
import { Header } from './components/Header';
import HomePage from './pages/HomePage/HomePage';
import NotFound from './pages/NotFound/NotFound';
import AdminDashboard from './pages/AdminDashboard/AdminDashboard';
import UserDashboard from './pages/UserDashboard/UserDashboard';
import LoginPage from './pages/LoginPage/LoginPage';


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
        <Route path='/*' element={ <NotFound/> } />
      </Routes>
    </BrowserRouter>
    
  );
}

export default App;
