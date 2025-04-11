import { Link } from "react-router-dom";
import styles from "./Header.module.css";

function Header () {
    return (
        <header>
            <div>My awesome shop</div>
            <div>
                <ul className={styles.navBar}>
                    <li><Link to="homepage">Homepage</Link></li>
                    <li><Link to="Products">Products</Link></li>
                    <li><Link to="Cart">Cart</Link></li>
                </ul>
            </div>
        </header>
    )
}

export default Header;