import { Link } from "react-router-dom";
import styles from "./Header.module.css";

function Header () {
    return (
        <header>
            <Link to="homepage">My Awesome Shop</Link>
            <div>
                <ul className={styles.navBar}>
                    <li><Link to="homepage">Homepage</Link></li>
                    <li><Link to="products">Products</Link></li>
                    <li><Link to="cart">Cart</Link></li>
                </ul>
            </div>
        </header>
    )
}

export default Header;