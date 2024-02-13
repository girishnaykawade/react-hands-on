import { Link } from "react-router-dom";
import { HEADER_LOGO_IMG } from "../utils/constant";
import useOnlineStatus from "../utils/useOnlineStatus";

const Header = ()=> {
    const onlineStatus = useOnlineStatus();
    return (
    <div className="restro-header">
      <img className="logo-img" alt="logo-img" src={HEADER_LOGO_IMG}/>
      <ul className="nav-list">
        <li>
          {onlineStatus ?  '🟢': '🔴'}
        </li>
        <li>
          <Link to="/">Home</Link></li>
        <li>
          <Link to="/about">About Us</Link>
        </li>
        <li>Cart</li>
      </ul>
    </div>
  )
};

  export default Header;