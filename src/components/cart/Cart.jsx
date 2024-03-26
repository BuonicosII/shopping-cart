import PropTypes from 'prop-types'
import styles from './Cart.module.css'


function ProductSummary ( { item, fns}) {


    return (
        <div className={styles.productRecap}>
            <img src={item.product.image} alt="" />
            <h3>{item.product.title}</h3>
            <span>Quantity: {item.quantity}</span>
            <div className={styles.quantityButtonHolder}>
                <button onClick={() => { fns[0](item.product, 1)}} className={styles.quantityButton}>
                    △
                </button>
                <button onClick={() => { fns[1](item.product, 1)}} className={styles.quantityButton}>
                    ▽
                </button>
            </div>
            <button onClick={() => { fns[2](item.product)}}>Remove all</button>
        </div>
    )
}

export default function Cart ({ cart, fns }) {


    return (
        <div className={styles.cartBody}>
            <div className={styles.cartInfo}>
                <h1>Your Cart</h1>
                <hr />
                { cart.length === 0 ? <h2>Your cart is empty!</h2> : cart.map( item => {
                        return <><ProductSummary key={item.product.id} item={item} fns={fns} /><hr /></>
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