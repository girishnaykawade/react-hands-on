import { Link } from "react-router-dom";
import { HEADER_LOGO_IMG } from "../utils/constant";
import useOnlineStatus from "../utils/useOnlineStatus";

const Header = ()=> {
    const onlineStatus = useOnlineStatus();
    return (
    <div className="flex justify-between bg-red-50 shadow-lg mb-2">
      <img className="w-[100px]" alt="logo-img" src={HEADER_LOGO_IMG}/>
      <ul className="flex items-center">
        <li className="p-1 m-2">
          {onlineStatus ?  '🟢': '🔴'}
        </li>
        <li className="p-1 m-2">
          <Link to="/">Home</Link></li>
        <li className="p-1 m-2">
          <Link to="/about">About Us</Link>
        </li>
        <li className="p-1 m-2">Cart</li>
      </ul>
    </div>
  )
};

  export default Header;