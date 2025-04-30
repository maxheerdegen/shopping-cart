import styles from "./ShopItem.module.css";
import { useState } from "react";

function ShopItem ({item, handleButtonClick, buttonTitle, itemQuantity = 1, changeQuantity = null}) {

    const [quantity, setQuantity] = useState(itemQuantity);

    return (
        <div className={styles.card}>
        <div>{item.title}</div>
        <img src={item.image} alt="product image" height={150} />
        <div>{item.price} €</div>
        <div className="quantity">
            <input 
            type="number" 
            min={1} 
            step={1} 
            defaultValue={quantity}
            onChange= {(e) => changeQuantity ? changeQuantity(item, +e.target.value) : setQuantity(+e.target.value)}/>
            <button onClick={() => handleButtonClick(item, quantity)}>{buttonTitle}</button>
        </div>
    </div>
    )
}


export default ShopItem;