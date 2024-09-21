import { useEffect, useState } from "react";
import { REST_INFO_URL } from "./constants";

const useRestaurantMenu = (resId) => {

    const [restInfo, setRestInfo] = useState(null);

    useEffect(()=>{
        fetchMenu();
    },[]);

    const fetchMenu = async () => {
        const response = await fetch(REST_INFO_URL + resId);
        const json = await response.json();
        setRestInfo(json); 
    }

    return restInfo;
}

export default useRestaurantMenu;