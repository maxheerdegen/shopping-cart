import { Link } from "react-router-dom";

function Header () {
    return (
        <>
            <div>My awesome shop</div>
            <div>
                <ul>
                    <li><Link to="homepage">Homepage</Link></li>
                    <li><Link to="Products">Products</Link></li>
                    <li><Link to="Cart">Cart</Link></li>
                </ul>
            </div>
        </>
    )
}

export default Header;