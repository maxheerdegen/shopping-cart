import styles from "./Footer.module.css"

function Footer () {
    return (
        <footer>
            <div className={styles.column}>
                <ul>
                    <li className={styles.title}>About Us</li>
                    <li><a>Career</a></li>
                    <li><a>Press Releases</a></li>
                    <li><a>Imprint</a></li>
                    <li><a>Blog</a></li>
                </ul>
            </div>
            <div className={styles.column}>
                <ul>
                    <li className={styles.title}>Customer Service</li>
                    <li><a>Help Center</a></li>
                    <li><a>Shipping & Delivery</a></li>
                    <li><a>Returns & Exchanges</a></li>
                    <li><a>Contact Us</a></li>
                </ul>
            </div>
            <div className={styles.column}>
                <ul>
                    <li className={styles.title}>Information</li>
                    <li><a>Terms & Conditions</a></li>
                    <li><a>Privancy Notice</a></li>
                    <li><a>Data Preferences</a></li>
                    <li><a>Community Guidelines</a></li>
                </ul>
            </div>
            <div className={styles.column}>
                <ul>
                    <li className={styles.title}>You can also find us on</li>
                    <li><a>Instagram</a></li>
                    <li><a>Facebook</a></li>
                    <li><a>X</a></li>
                    <li><a>Pinterest</a></li>
                </ul>
            </div>
        </footer>
    )
}

export default Footer;