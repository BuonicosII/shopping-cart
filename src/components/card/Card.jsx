import styles from './Card.module.css'
import PropTypes from 'prop-types'

export default function Card ({ someObj }) {

    return (
        <div className={styles.card}>
            <span className={styles.cardCategory}>{someObj.category.slice(0, 1).toUpperCase() + someObj.category.slice(1)}</span>
            <img src={someObj.image} alt="" />
            <h3 className={styles.cardTitle}>{someObj.title}</h3>
            <span className={styles.price}>{someObj.price + " €"}</span>
            <button>Add to Cart</button>
        </div>
    )
}


Card.propTypes = {
    someObj: PropTypes.object
}