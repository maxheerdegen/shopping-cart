import { useState } from "react";
import styles from "./ShopItem.module.css";

function ShopItem ({key, title, image, price}) {

    const [quantity, setQuantity] = useState(1);

    return (
        <div className={styles.card} key={key}>
        <div>{title}</div>
        <img src={image} alt="product image" height={150} />
        <div>{price} €</div>
        <div className="amount">
            <input 
            type="number" 
            min={1} 
            step={1} 
            defaultValue={quantity}
            onChange={(e) => setQuantity(e.target.value)}/>
            <button>Add to cart</button>
        </div>
    </div>
    )
}


export default ShopItem;