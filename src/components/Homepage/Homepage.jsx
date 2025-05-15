import { Link } from "react-router-dom"
import styles from "./Homepage.module.css"
import aboutPicture from "/homepage-about.jpg"
import ReviewCarousel from "../ReviewCarousel/ReviewCarousel.jsx"

function Homepage () {
    return (
    <>
       <div className={styles.content}>
            <Link className={styles.shoppingLink} to="/products">Let's start shopping!</Link>
       </div>
       <div className={styles.about}>
        <img src={aboutPicture} alt="picture of clothes" width={500}/>
        <div>Welcome to our small but passionate online shop! We believe in quality,
            fair prices, and a shopping experience that’s simple and honest. 
            Every product is carefully selected—things we truly love and stand behind. 
            Take your time, have a look around, and enjoy exploring!</div>
       </div>
       <ReviewCarousel />
    </>
    )
}

export default Homepage;