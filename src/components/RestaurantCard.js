import {RESTAURANT_IMAGE_BASE_URL} from "../utils/constants";

const RestaurantCard = (props) =>{

    const {restaurantData} = props;
    const { name, cloudinaryImageId, locality, costForTwo, cuisines, avgRating} = restaurantData?.info;
    const {slaString} = restaurantData?.info?.sla;
    return(
        <div className="res-card">
            <img className="res-img" 
            src={RESTAURANT_IMAGE_BASE_URL + cloudinaryImageId}></img>
            <h3>{name}</h3>
            <h3>{cuisines.join(", ")}</h3>
            <h3>{avgRating}</h3>
            <h3>{costForTwo}</h3>
            <h3>{slaString}</h3>
        </div>
    )
}

export default RestaurantCard;