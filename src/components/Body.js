import { useState, useEffect, useContext } from "react";
import RestaurantCard, {withTopRatedLabelRestaurantCard} from "./RestaurantCard";
import ShimmeringCard from "./ShimmeringCard";
import { Link } from "react-router-dom";
import useNetworkStatus from "../utils/useNetworkStatus";
import UserContext from "../utils/UserContext";

const Body = () => {
  const [restaurantDataList, setRestaurantDataList] = useState([]);
  const [filteredRestaurantDataList, setfilteredRestaurantDataList] = useState(
    []
  );
  const [inputText, setInputText] = useState("");

  const TopRatedRestaurantCard = withTopRatedLabelRestaurantCard(RestaurantCard);

  const {loggedInUser, setUserName} = useContext(UserContext);

  useEffect(() => {
    fetchRestaurantData();
  }, []);

  const fetchRestaurantData = async () => {
    let restaurantDataJson = {};
    const response = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.65420&lng=77.23730&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );

    if (response.ok) {
      restaurantDataJson = await response.json();
      
      setfilteredRestaurantDataList(
        restaurantDataJson?.data?.cards[1]?.card?.card?.gridElements
          ?.infoWithStyle?.restaurants
      );
      setRestaurantDataList(
        restaurantDataJson?.data?.cards[1]?.card?.card?.gridElements
          ?.infoWithStyle?.restaurants
      );
    }
  };

  const onlineStatus  = useNetworkStatus();

  if(!onlineStatus){
    return(
      <h1>Hey user, your internet is down!! Please check your connection</h1>
    );
  }

  //conditional rendering
  if (filteredRestaurantDataList.length === 0) {
    return <ShimmeringCard />;
  }

  return (
    <div className="px-4 py-4">
      <div  className="px-4 py-4 flex">
        <input
          className = "border border-solid border-black"
          type="text"
          value={inputText}
          onChange={(e) => {
            setInputText(e.target.value);
          }}
        ></input>

        <button 
        className="mx-4 px-4 py-0 bg-green-400 rounded-lg"
          onClick={() => {
            setfilteredRestaurantDataList(
              restaurantDataList.filter((res) =>
                res.info.name.toLowerCase().includes(inputText.toLowerCase())
              )
            );
          }}
        >
          Search
        </button>

        <button
          className="mx-4 px-4 py-0 bg-gray-200 rounded-lg"
          onClick={() => {
            setfilteredRestaurantDataList(
              restaurantDataList.filter(
                (restaurant) => restaurant.info.avgRating >= 4.6
              )
            );
          }}
        >
          Top Rated Restaurant
        </button>

        <input
          className = "border border-solid border-black"
          type="text"
          value={loggedInUser }
          placeholder="type username..."
          onChange={(e) => {
            setUserName(e.target.value);
          }}>
          </input>

      </div>
      <div className="flex flex-wrap">
        {filteredRestaurantDataList.map((restaurant) => (
          <Link
            className="no-style-link"
            to={"/restaurant/" + restaurant.info.id}
            key={restaurant.info.id}
          >
            {restaurant.info.avgRating>=4.6?<TopRatedRestaurantCard restaurantData={restaurant} />:<RestaurantCard restaurantData={restaurant} />}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Body;
