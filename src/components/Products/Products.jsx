import { useEffect, useState } from "react";
import styles from "./Products.module.css";
import itemStyles from "../ShopItem/ShopItem.module.css"
import ShopItem from "../ShopItem/ShopItem.jsx";
import { useOutletContext } from "react-router-dom";

function useProducts() {
    const [items, setIems] = useState([]);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetch("https://fakestoreapi.com/products", {mode: "cors"})
        .then((response) => {
            if(response.status >= 400) {
                throw new Error("server error")
            }
            return response.json();
        })
        .then((response) => setIems(response))
        .catch((error) => setError(error))
        .finally(() => setLoading(false));
    }, []);

    return { items, error, loading };
}

function Products () {
    const { items, error, loading } = useProducts();
    const [cartItems, setCartItems] = useOutletContext();
    
    const addToCart = (item, quantity) => {
        let isInCart = false;
        for (let i = 0; i < cartItems.length; i++) {
            if (cartItems[i].id === item.id) {
                isInCart = true;
                break;
            }
        }
        if (isInCart) {
            setCartItems(cartItems.map((cartItem) => {
                return cartItem.id === item.id ? {...cartItem, quantity: cartItem.quantity + quantity} : cartItem;
            }))
        } else {
            setCartItems([...cartItems, { ...item, quantity: quantity}])
        }
    }

    if (loading) return <p>Loading...</p>
    if (error) return <p>A nework error was encountered.</p>
    
    return (
        <div className={styles.container}>
            {items && 
            items.map((item) => (
             <ShopItem className={itemStyles.onProductPage} key={item.id} item={item} handleButtonClick={addToCart} buttonTitle="Add to cart"/>
            ))}
        </div>
    )
}

export default Products;