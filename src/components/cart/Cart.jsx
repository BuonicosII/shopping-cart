import PropTypes from 'prop-types'
import styles from './Cart.module.css'


function ProductSummary ( { item, fns}) {


    return (
        <div className={styles.productRecap}>
            <div className={styles.flexDiv}>
                <img src={item.product.image} alt="" />
            </div>
            <div className={styles.flexDiv}>
                <h3>{item.product.title}</h3>
            </div>
            <div className={styles.flexDiv}>
                <span>x {item.quantity}</span>
                <div className={styles.quantityButtonHolder}>
                    <button onClick={() => { fns[0](item.product, 1)}} className={styles.quantityButton}>
                        △
                    </button>
                    <button onClick={() => { fns[1](item.product, 1)}} className={styles.quantityButton}>
                        ▽
                    </button>
                </div>
            </div>
            <div className={styles.flexDiv}><span>€ {item.product.price.toFixed(2)}</span></div>
            <div className={styles.flexDiv}><span>€ {(item.product.price * item.quantity).toFixed(2)}</span></div>
            <div className={styles.flexDiv}><button onClick={() => { fns[2](item.product)}} className={styles.removeButton}>✕</button></div>
        </div>
    )
}

export default function Cart ({ cart, fns }) {


    return (
        <div className={styles.cartBody}>
            <div className={styles.cartInfo}>
                <h1>Your Cart</h1>
                <div className={styles.productRecap}>
                    <div className={`${styles.flexDiv} ${styles.productLabel}`}>
                        <span>Product</span>
                    </div>
                    <div className={styles.flexDiv}>
                        <span>Quantity</span>
                    </div>
                    <div className={styles.flexDiv}>
                        <span>Price</span>
                    </div>
                    <div className={styles.flexDiv}>
                        <span>Subtotal</span>
                    </div>
                </div>
                <hr />
                { cart.length === 0 ? <h2>Your cart is empty!</h2> : cart.map( (item, index) => {
                        return <>
                        { index !== 0 && <hr />}
                        <ProductSummary key={item.product.id} item={item} fns={fns} />
                        </>
                })}
            </div>
        </div>
    )
}


ProductSummary.propTypes = {
    fns: PropTypes.array,
    item: PropTypes.object
}

Cart.propTypes = {
    fns: PropTypes.array,
    cart: PropTypes.array,
    callback: PropTypes.func
}