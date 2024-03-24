import { Link, useLocation } from "react-router-dom";
import styles from './Navbar.module.css'
import cartImg from '../../assets/shoppingcart.png'
import PropTypes from 'prop-types'

export default function NavBar ( { cart } ) {

    const { pathname } = useLocation()

    const itemsInCart = () => {
        let totalQuantity = 0

        for (const product of cart) {
            totalQuantity += product.quantity
        }

        return totalQuantity
    }

    return (
        <header className={styles.navbar}>
            <div>Logo</div>
            <nav>
                {pathname === "/" ? <div className={styles.highlight}><Link to="/">Home</Link></div> : <div className={styles.linkHolder}><Link to="/">Home</Link></div>}
                {pathname === "/menswear" ? <div className={styles.highlight}><Link to="/menswear">Menswear</Link></div> : <div className={styles.linkHolder}><Link to="/menswear">Menswear</Link></div>}
                {pathname === "/womenswear" ? <div className={styles.highlight}><Link to="/womenswear">Womenswear</Link></div> : <div className={styles.linkHolder}><Link to="/womenswear">Womenswear</Link></div>}
                {pathname === "/jewelery" ? <div className={styles.highlight}><Link to="/jewelery">Jewelery</Link></div> : <div className={styles.linkHolder}><Link to="/jewelery">Jewelery</Link></div>}
                {pathname === "/electronics" ? <div className={styles.highlight}><Link to="/electronics">Electronics</Link></div> : <div className={styles.linkHolder}><Link to="/electronics">Electronics</Link></div>}
            </nav>
            <Link to="/cart">
                <div className={styles.cartIcon}>
                    <img src={cartImg} alt="" />
                    { itemsInCart() > 0 &&
                        <div className={styles.itemsInCart}>
                            <span>{itemsInCart()}</span>
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