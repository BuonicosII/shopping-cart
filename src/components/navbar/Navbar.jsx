import { Link, useParams } from "react-router-dom";
import styles from './Navbar.module.css'
import cartImg from '../../assets/shoppingcart.png'
import PropTypes from 'prop-types'

export default function NavBar ( { cart } ) {

    const { name } = useParams()

    return (
        <header className={styles.navbar}>
            <div>Logo</div>
            <nav>
                {name === undefined ? <div className={styles.highlight}><Link to="/">Home</Link></div> : <div className={styles.linkHolder}><Link to="/">Home</Link></div>}
                {name === "menswear" ? <div className={styles.highlight}><Link to="/menswear">Menswear</Link></div> : <div className={styles.linkHolder}><Link to="/menswear">Menswear</Link></div>}
                {name === "womenswear" ? <div className={styles.highlight}><Link to="/womenswear">Womenswear</Link></div> : <div className={styles.linkHolder}><Link to="/womenswear">Womenswear</Link></div>}
                {name === "jewelery" ? <div className={styles.highlight}><Link to="/jewelery">Jewelery</Link></div> : <div className={styles.linkHolder}><Link to="/jewelery">Jewelery</Link></div>}
                {name === "electronics" ? <div className={styles.highlight}><Link to="/electronics">Electronics</Link></div> : <div className={styles.linkHolder}><Link to="/electronics">Electronics</Link></div>}
            </nav>
            <Link to="cart">
                <div className={styles.cartIcon}>
                    <img src={cartImg} alt="" />
                    { cart.length > 0 &&
                        <div className={styles.itemsInCart}>
                            <span>{cart.length}</span>
                        </div>
                    }

                </div>
            </Link>
        </header>
    )
}

NavBar.propTypes = {
    cart: PropTypes.array
}