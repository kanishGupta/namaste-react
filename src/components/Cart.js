import { useDispatch, useSelector } from "react-redux";
import CategoryItemList from "./CategoryItemLIst";
import { clearCart } from "../utils/cartSlice";

Cart = () => {

    cartItems = useSelector((store)=> store.cart.items);
    console.log('------------');
    console.log(cartItems);

    const dispatch = useDispatch();

    const handleClearCart = () => {
        dispatch(clearCart());
    }

    return(
        <div className=" text-center  m-4 p-4 ">
            <h1 className="font-bold">Cart</h1>
            <button className="rounded-lg bg-black text-white"
            onClick={()=> handleClearCart()}
            >Clear cart</button>
            <div className="w-6/12 m-auto">
                <CategoryItemList items={cartItems}></CategoryItemList>
            </div>
        </div>
    );
}

export default Cart;