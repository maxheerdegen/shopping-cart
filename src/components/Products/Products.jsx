import { useEffect, useState } from "react";
import styles from "./Products.module.css";

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

    console.log(items);

    return { items, error, loading };
}

function Products () {
    const { items, error, loading } = useProducts();

    if (loading) return <p>Loading...</p>
    if (error) return <p>A nework error was encountered.</p>
    console.log(typeof items);

    return (
        <div className={styles.container}>
            {items && 
            items.map((item) => (
                <div className={styles.card} key={item.id}>
                    <div>{item.title}</div>
                </div>
            ))}
        </div>
    )
}

export default Products;