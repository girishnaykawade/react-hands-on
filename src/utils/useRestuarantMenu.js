import { useEffect, useState } from "react"
import { MENU_API } from "./constant";

const useRestuarantMenu = (resId) => {
    const [resInfo, setResInfo] = useState(null);
    useEffect(() => {
        getMenu();
    }, []);

    const getMenu = async ()=> {
        const data = await fetch(MENU_API+resId);
        const json = await data.json();
        setResInfo(json.data.cards[0].card.card.info)
    }
    return resInfo;
}

export default useRestuarantMenu;