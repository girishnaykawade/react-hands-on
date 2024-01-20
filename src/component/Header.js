import { Link } from "react-router-dom";

const Header = ()=> (
    <div className="restro-header">
      <img className="logo-img" alt="logo-img" src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,h_1340/Lunch1_vlksgq"/>
      <ul className="nav-list">
        <li>
          <Link to="/">Home</Link></li>
        <li>
          <Link to="/about">About Us</Link>
        </li>
        <li>Cart</li>
      </ul>
    </div>
  );

  export default Header;