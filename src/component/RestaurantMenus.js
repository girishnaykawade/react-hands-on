import { useEffect, useState } from "react";
import { Params, useParams } from "react-router-dom";


const RestaurantMenus = ()=> {
    const {resId} = useParams()
    let API_URL = "https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=20.6999015&lng=77.0003067&restaurantId="+resId;
    const [menuList, setMenuList] = useState([])
    console.log('resid', resId)
    useEffect(() => {
        getMenus();
    }, [resId]);

    const getMenus = async()=> {
        const data = await fetch(API_URL);
        const json = await data.json();
        console.log(json.data.cards[0].card.card.info) 
        setMenuList(json.data.cards[0].card.card.info);
    }
    return menuList ? (
        <div>
            <div>
                <h1>{menuList.name}</h1>
            </div>
            <div>
                <h2>
                    Cuisines
                </h2>
                <ul>
                    {menuList?.cuisines?.map(item => {
                        return <li key={item}>{item}</li>
                    })}
                </ul>
            </div>
        </div>
    ) : ""
}
export default RestaurantMenus;