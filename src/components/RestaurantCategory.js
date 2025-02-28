import { useState } from "react";
import CategoryItemList from "./CategoryItemLIst";

const RestaurantCategory = ({categoryDetails, showAccordion, showCategory}) => {

    const [showIndividualAccord, setShowIndividualAccord] = useState(false);

    const handleClick = () => {
        showCategory();
        setShowIndividualAccord(!showIndividualAccord);
    }

    return(
        <div className="w-6/12 my-4 mx-auto bg-gray-100 p-4 shadow-lg" onClick={(handleClick)}>
            <div className="flex justify-between">
                <span className="font-bold">{categoryDetails.title} ({categoryDetails.itemCards.length})</span>
                <span>⬇️</span>
            </div>
            {showIndividualAccord && showAccordion && <CategoryItemList items = {categoryDetails.itemCards}></CategoryItemList>}
        </div>
    )
}

export default RestaurantCategory;