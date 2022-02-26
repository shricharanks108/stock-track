import './HomePage.css';
import { Header } from '../../components/Header/Header';
import Logo from "../HomePage/logo.PNG"
import { Link } from "react-router-dom";
 
function Home() {
  return (
    <div className="home" style={{ backgroundImage: `url(${Logo})` }}>
      <div className="headerContainer">
        <h1> GOVStem Scholars </h1>
        <h3>       </h3>
        <p> Welcome to Stock Track</p>
        <Link to="/login">
          <button> Login / Sign Up </button>
        </Link>
      </div>
    </div>
  );
}
 
export default Home;
