import { useParams } from "react-router-dom";
import useRestuarantMenu from "../utils/useRestuarantMenu";

const RestaurantMenus = ()=> {
    const {resId} = useParams()
    const menuList = useRestuarantMenu(resId)
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