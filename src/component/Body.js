import Search from "./Search";
import RestaurantComponent from "./RestaurantComponent";
import { useEffect, useState } from "react";
import ShimmerComponent from "./ShimmerComponent";
import { Link } from "react-router-dom";
const Body = ()=> {
  const [resList, setResList] = useState([]);
  const [filteredResList, setFilterdResList] = useState([]);
  const [searchText, setSearchText] = useState("")
  useEffect(() => {
    getList();
  }, []);
  const getList = async () => {
    const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=20.6999015&lng=77.0003067&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING")
    const json = await data.json()
    const list = json?.data?.cards?.filter(item => item.card.card.id === "restaurant_grid_listing")
    if(list[0]?.card?.card?.gridElements?.infoWithStyle?.restaurants) {
      console.log('list[0].card.card.gridElements.infoWithStyle.restaurants', list[0].card.card.gridElements.infoWithStyle.restaurants)
      setResList(list[0].card.card.gridElements.infoWithStyle.restaurants)
      setFilterdResList(list[0].card.card.gridElements.infoWithStyle.restaurants)
    }
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