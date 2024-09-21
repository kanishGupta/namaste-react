import { useState, useEffect } from "react";
import RestaurantCard from "./RestaurantCard";
import ShimmeringCard from "./ShimmeringCard";
import { Link } from "react-router-dom";
import useNetworkStatus from "../utils/useNetworkStatus";

const Body = () => {
  const [restaurantDataList, setRestaurantDataList] = useState([]);
  const [filteredRestaurantDataList, setfilteredRestaurantDataList] = useState(
    []
  );
  const [inputText, setInputText] = useState("");

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
      // console.log(restaurantDataJson);
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
    <div>
      <div className="filter">
        <input
          type="text"
          value={inputText}
          onChange={(e) => {
            setInputText(e.target.value);
          }}
        ></input>

        <button
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
          className="btn-cls"
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
      </div>
      <div className="res-container">
        {filteredRestaurantDataList.map((restaurant) => (
          <Link
            className="no-style-link"
            to={"/restaurant/" + restaurant.info.id}
            key={restaurant.info.id}
          >
            <RestaurantCard restaurantData={restaurant} />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Body;
