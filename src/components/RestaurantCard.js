import {  useContext } from "react";
import {RESTAURANT_IMAGE_BASE_URL} from "../utils/constants";
import UserContext from "../utils/UserContext";

const RestaurantCard = (props) =>{

    const {restaurantData} = props;
    const { name, cloudinaryImageId, locality, costForTwo, cuisines, avgRating} = restaurantData?.info;
    const {slaString} = restaurantData?.info?.sla;
    const { loggedInUser } = useContext(UserContext);
    return(
        <div className="m-4 p-4 w-[250px] bg-gray-100 rounded-xl hover:bg-gray-200">
            <img className="rounded-xl" 
            src={RESTAURANT_IMAGE_BASE_URL + cloudinaryImageId}></img>
            <h3 className="py-2 font-bold text-lg">{name}</h3>
            <h3>{cuisines.join(", ")}</h3>
            <h3>{avgRating}</h3>
            <h3>{costForTwo}</h3>
            <h3>{slaString}</h3>
            <h3>User: {loggedInUser}</h3>
        </div>
    )
}

//Higher order component

// input => RestaurantCard => TopRatedRestaurantCard

export const withTopRatedLabelRestaurantCard = (RestaurantCard) => {
    return(props)=>{
        return(
        <div>
        <label className="absolute m-1 p-1 text-white bg-black">Top Rated</label>
        <RestaurantCard  {...props}/>
        </div>
        )
        } 
}

export default RestaurantCard;