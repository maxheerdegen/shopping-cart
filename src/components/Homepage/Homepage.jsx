import { Link } from "react-router-dom"
import styles from "./Homepage.module.css"

function Homepage () {
    return (
       <div className={styles.content}>
            <button className={styles.shoppingBtn}>
                <Link to="/products">
                    Let's start shopping!
                </Link>
            </button>
       </div>
    )
}

export default Homepage;