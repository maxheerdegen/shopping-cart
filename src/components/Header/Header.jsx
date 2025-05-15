import { Link } from "react-router-dom";
import styles from "./Header.module.css";

function Header ({ cartItems }) {

    return (
        <header>
            <Link to="homepage">My Awesome Shop</Link>
            <div>
                <ul className={styles.navBar}>
                    <li><Link to="homepage">Homepage</Link></li>
                    <li><Link to="products">Products</Link></li>
                    <li className={styles.cart}><Link to="cart">Cart</Link>
                    {
                    cartItems.length != 0 &&
                    <div className={styles.cartQuantity}>{cartItems.reduce((total, item) => {
                        return total + item.quantity;
                    }, 0)}</div>
                    }</li>
                </ul>
            </div>
        </header>
    )
}

export default Header;