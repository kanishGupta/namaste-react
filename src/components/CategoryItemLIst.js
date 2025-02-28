import { useDispatch } from "react-redux";
import {RESTAURANT_IMAGE_BASE_URL} from "../utils/constants";
import {addItem}  from "../utils/cartSlice";

const CategoryItemList = ({items}) => {

    const dispatch = useDispatch();
    const addToCart = (e, item) => {
        e.stopPropagation();
        dispatch(addItem(item));
    };

    return(
        <div>
            {items.map((item) => (
                <div className="border-b-2 border-gray-300 m-2 text-left flex" key= {item?.card?.info?.id}>
                    <div className="w-9/12">
                    <span className="font-bold">{item?.card?.info?.name} </span>
                    <span className="font-bold"> - ₹{item?.card?.info?.defaultPrice?  item?.card?.info?.defaultPrice/100 : item?.card?.info?.price/100}</span>
                    <p> {item?.card?.info?.description} </p>
                    </div>
                    <div className="w-3/12">
                    <div className="m-2 absolute">
                    <button className="bg-black text-white rounded-lg"
                        onClick={(e)=>addToCart(e,item)}
                    >
                        Add+
                        </button>
                    </div>
                    <img className="w-auto m-2" src={RESTAURANT_IMAGE_BASE_URL + '/' + item?.card?.info?.imageId} />
                    </div>
                </div>
            ))}
        </div>
    );
}

export default CategoryItemList;