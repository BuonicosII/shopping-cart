import { Link, useParams } from "react-router-dom";
import styles from './Navbar.module.css'

export default function NavBar ( { cart } ) {

    const { name } = useParams()

    return (
        <header className={styles.navbar}>
            <nav>
                {name === undefined ? <div className={styles.highlight}><Link to="/">Home</Link></div> : <div className={styles.linkHolder}><Link to="/">Home</Link></div>}
                {name === "menswear" ? <div className={styles.highlight}><Link to="/menswear">Menswear</Link></div> : <div className={styles.linkHolder}><Link to="/menswear">Menswear</Link></div>}
                {name === "womenswear" ? <div className={styles.highlight}><Link to="/womenswear">Womenswear</Link></div> : <div className={styles.linkHolder}><Link to="/womenswear">Womenswear</Link></div>}
                {name === "jewelery" ? <div className={styles.highlight}><Link to="/jewelery">Jewelery</Link></div> : <div className={styles.linkHolder}><Link to="/jewelery">Jewelery</Link></div>}
                {name === "electronics" ? <div className={styles.highlight}><Link to="/electronics">Electronics</Link></div> : <div className={styles.linkHolder}><Link to="/electronics">Electronics</Link></div>}
            </nav>
            <div> { cart.length }</div>
        </header>
    )
}