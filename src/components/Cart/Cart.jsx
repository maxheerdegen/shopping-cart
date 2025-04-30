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
        <>
        <ul>
            {cartItems.length === 0 ? (
                <div>No items in cart</div>
            ) : (
            cartItems.map((item) => {
                return <ShopItem key={item.id} item={item} handleButtonClick={removeFromCart} itemQuantity={item.quantity} buttonTitle="Remove from cart"/>;
            }))}
        </ul>
        <div>Total number of items: {cartItems.reduce((total, item) => total+= item.quantity, 0)}</div>
        <div>Total: {cartItems.reduce((total, item) => total += item.price, 0)} €</div>
        </>
    )
}

export default Cart;