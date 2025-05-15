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
                    <li><Link to="cart">Cart</Link></li>
                    {
                    cartItems.length != 0 &&
                    <li>{cartItems.reduce((total, item) => {
                        return total + item.quantity;
                    }, 0)}</li>
                }
                </ul>
            </div>
        </header>
    )
}

export default Header;