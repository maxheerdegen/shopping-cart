import { useOutletContext } from "react-router-dom";
import ShopItem from "../ShopItem/ShopItem";
import styles from "./Cart.module.css";
import itemStyles from "../ShopItem/ShopItem.module.css"

function Cart () {
    const [cartItems, setCartItems] = useOutletContext();
    
    const removeFromCart = (item) => {
        setCartItems(cartItems.filter((cartItem) => {
            return cartItem.id !== item.id;
        }))
    }

    const changeQuantity = (item, quantity) => {
       setCartItems(cartItems.map((cartItem) => {
        return cartItem.id === item.id ? {...cartItem, quantity} : cartItem;
       }))
    }

    return (
        <div className={styles.container}>
            <ul>
                {cartItems.length === 0 ? (
                    <div>There are no items in your cart :(</div>
                ) : (
                cartItems.map((item) => {
                    return <ShopItem className={itemStyles.inCart} key={item.id} item={item} handleButtonClick={removeFromCart} itemQuantity={item.quantity} buttonTitle="Remove from cart" changeQuantity={changeQuantity}/>;
                }))}
            </ul>
            <div className={styles.total}>
                <div>Total number of items: {cartItems.reduce((total, item) => total+= item.quantity, 0)}</div>
                <div>Total: {cartItems.reduce((total, item) => total += item.price * item.quantity, 0).toFixed(2)} €</div>
            </div>
        </div>
    )
}

export default Cart;
