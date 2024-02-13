import { useEffect, useState } from "react"
import { RES_LIST_API } from "./constant";

const useRestuarantList = () => {
    const [rList, setRList] = useState(null);
    useEffect(()=> {
        getResList();
    },[]);

    const getResList = async () => {
        const data = await fetch(RES_LIST_API);
        const json = await data.json();
        const list = json?.data?.cards?.filter(item => item.card.card.id === "restaurant_grid_listing");
        if(list[0]?.card?.card?.gridElements?.infoWithStyle?.restaurants) {
            setRList(list[0].card.card.gridElements.infoWithStyle.restaurants)
        }
    }
    return rList;
}

export default useRestuarantList;