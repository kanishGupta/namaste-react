import { useState } from "react";
import { useParams } from "react-router-dom";
import ShimmeringCard from "./ShimmeringCard";
import useRestaurantMenu from "../utils/useRestaurantMenu";
import RestaurantCategory from "./RestaurantCategory";

const RestaurantMenu = () => {

  const { resId } = useParams();
  const [showAccord, setShowAccord] = useState(0);

  const restInfo = useRestaurantMenu(resId);


  if (restInfo === null) {
    return <ShimmeringCard></ShimmeringCard>;
  }

  const { name, cuisines, costForTwoMessage } =
    restInfo?.data?.cards[2]?.card?.card?.info;

  let { itemCards } =
    restInfo?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card
      ?.card;

// For few restaurants itemCards was not present in cards[1], so fetching from cards[2]
  itemCards = itemCards
    ? itemCards
    : restInfo?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]
        ?.card?.card?.itemCards;

  const categories = restInfo?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards?.filter(categoryCard => 
    categoryCard.card.card?.["@type"] === "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory");

    //console.log(categories)

  return (
    <div className="text-center">
      <h1 className="font-bold text-2xl my-6"> {name} </h1>
      <h3 className="font-bold">
        {" "}
        {cuisines.join(", ")} - {costForTwoMessage}
      </h3>
      {categories.map((category, index)=>(
        //controlled component
        <RestaurantCategory 
        key={index} 
        categoryDetails = {category?.card?.card}
        showAccordion = {index===showAccord? true:false} 
        showCategory = {() => setShowAccord(index)}
        ></RestaurantCategory>
      ))}
    </div>
  );
};

export default RestaurantMenu;
