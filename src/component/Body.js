import RestaurantComponent from "./RestaurantComponent";
import { useState } from "react";
import ShimmerComponent from "./ShimmerComponent";
import { Link } from "react-router-dom";
import useRestuarantList from "../utils/useRestuarantList";
import useOnlineStatus from "../utils/useOnlineStatus";
const Body = ()=> {
  const [filteredResList, setFilterdResList] = useState([]);
  const [searchText, setSearchText] = useState("")

  const onlineStatus = useOnlineStatus();

  const resList = useRestuarantList();
  if(resList && !filteredResList.length) {
    setFilterdResList(resList);
  }
  if(!onlineStatus) {
    return (<h2>Your offline, please check your internet connections!</h2>)
  } 
  return (!resList || resList.length === 0) 
  ? (<ShimmerComponent/>)
  : (<div className="body-main">
    <div className="search-section">
      <input type="text" value={searchText} onChange={(e) => setSearchText(e.target.value)}/>
      <button onClick={() => {
        const filtersList = resList.filter(item => item.info.name.toLowerCase().includes(searchText.toLocaleLowerCase()));
        setFilterdResList(filtersList);
      }}>Find</button>
      <button onClick={() => {setFilterdResList(resList), setSearchText("")}}>Clear</button>
    </div>
    <div className="restro-section">
      {
        filteredResList?.map( (item) => 
        <Link to={"/restaurant/"+ item.info.id} key={item.info.id}>
          <RestaurantComponent  resObj={item.info}/>
        </Link>)
      }
    </div>
  </div>)
};

export default Body;