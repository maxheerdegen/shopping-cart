import { useState } from "react";
import styles from "./ShopItem.module.css";
import { useOutletContext } from "react-router-dom";

function ShopItem ({item}) {

    const [quantity, setQuantity] = useState(1);
    const [cartItems, setCartItems] = useOutletContext();

    const handleButtonClick = (id) => {
        for (let i = 0; i < cartItems.length; i++) {
            if (id === cartItems[i].id) {
                    cartItems[i].quantity += quantity;
                    return;
            }
        }
        console.log(id);
        item.quantity = quantity
        setCartItems([...cartItems, item]);
        console.log([...cartItems]);
    }

    return (
        <div className={styles.card}>
        <div>{item.title}</div>
        <img src={item.image} alt="product image" height={150} />
        <div>{item.price} €</div>
        <div className="amount">
            <input 
            type="number" 
            min={1} 
            step={1} 
            defaultValue={quantity}
            onChange={(e) => setQuantity(+e.target.value)}/>
            <button onClick={() => handleButtonClick(item.id)}>Add to cart</button>
        </div>
    </div>
    )
}


export default ShopItem;