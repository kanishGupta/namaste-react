import { useParams } from "react-router-dom";
import ShimmeringCard from "./ShimmeringCard";
import useRestaurantMenu from "../utils/useRestaurantMenu";

const RestaurantMenu = () => {

  const { resId } = useParams();

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

  return (
    <div>
      <h1> {name} </h1>
      <h3>
        {" "}
        {cuisines.join(", ")} - {costForTwoMessage}
      </h3>
      <ul>
        {itemCards?.map((item) => (
          <li key={item.card.info.id}>
            {item.card.info.name} - Rs{" "}
            {item.card.info.defaultPrice / 100 || item.card.info.price / 100}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default RestaurantMenu;
