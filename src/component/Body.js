import RestaurantComponent, {withPromotedLabel} from "./RestaurantComponent";
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
  const WithLabelComponent = withPromotedLabel(RestaurantComponent);
  if(resList && !filteredResList.length) {
    setFilterdResList(resList);
  }
  console.log('filteredResList', filteredResList)

  if(!onlineStatus) {
    return (<h2>Your offline, please check your internet connections!</h2>)
  } 
  
  return (!resList || resList.length === 0) 
  ? (<ShimmerComponent/>)
  : (<div className="flex flex-col flex-wrap">
    <div className="m-2 p-2">
      <input type="text" className="border rounded-lg p-1" value={searchText} onChange={(e) => setSearchText(e.target.value)}/>
      <button className="ml-2 px-4 bg-gray-400 py-1 rounded-lg" onClick={() => {
        const filtersList = resList.filter(item => item.info.name.toLowerCase().includes(searchText.toLocaleLowerCase()));
        setFilterdResList(filtersList);
      }}>Find</button>
      <button className="ml-2 px-4 bg-slate-600 py-1 rounded-lg text-white" onClick={() => {setFilterdResList(resList), setSearchText("")}}>Clear</button>
    </div>
    <div className="flex m-4 flex-wrap justify-center">
      {
        filteredResList?.map( (item) => 
        <Link to={"/restaurant/"+ item.info.id} key={item.info.id}>
          {item.info.avgRating >= 4.1 ? <WithLabelComponent  resObj={item.info}/> 
          : <RestaurantComponent  resObj={item.info}/>}
        </Link>)
      }
    </div>
  </div>)
};

export default Body;