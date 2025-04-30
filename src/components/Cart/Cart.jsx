import { useOutletContext } from "react-router-dom";
import ShopItem from "../ShopItem/ShopItem";

function Cart () {
    const [cartItems, setCartItems] = useOutletContext();
    
    const removeFromCart = (item) => {
        setCartItems(cartItems.filter((cartItem) => {
            return cartItem.id !== item.id;
        }))
    }

    return (
        <ul>
            {cartItems.map((item) => {
                return <ShopItem key={item.id} item={item} handleButtonClick={removeFromCart} itemQuantity={item.quantity} buttonTitle="Remove from cart"/>;
            })}
        </ul>
    )
}

export default Cart;