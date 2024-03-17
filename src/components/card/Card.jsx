import styles from './Card.module.css'
import { useState } from 'react'
import PropTypes from 'prop-types'
import emptystar from '../../assets/emptystar.png'
import halfstar from '../../assets/halfstar.png'
import fullstar from '../../assets/fullstar.png'

function Reviews ({ rating }) {

    let url1, url2, url3, url4, url5

    switch (true) {

        case (rating.rate > 0 && rating.rate < 1):
                url1 = halfstar
                url2 = emptystar
                url3 = emptystar
                url4 = emptystar
                url5 = emptystar
            break;

        case (rating.rate >= 1 && rating.rate < 1.5):
                url1 = fullstar
                url2 = emptystar
                url3 = emptystar
                url4 = emptystar
                url5 = emptystar
            break;

        case (rating.rate >= 1.5 && rating.rate < 2):
                url1 = fullstar
                url2 = halfstar
                url3 = emptystar
                url4 = emptystar
                url5 = emptystar
            break;
        
        case (rating.rate >= 2 && rating.rate < 2.5):
                url1 = fullstar
                url2 = fullstar
                url3 = emptystar
                url4 = emptystar
                url5 = emptystar
            break;

        case (rating.rate >= 2.5 && rating.rate < 3):
                url1 = fullstar
                url2 = fullstar
                url3 = halfstar
                url4 = emptystar
                url5 = emptystar
            break;       
        case (rating.rate >= 3 && rating.rate < 3.5):
                url1 = fullstar
                url2 = fullstar
                url3 = fullstar
                url4 = emptystar
                url5 = emptystar
            break; 

        case (rating.rate >= 3.5 && rating.rate < 4):
                url1 = fullstar
                url2 = fullstar
                url3 = fullstar
                url4 = halfstar
                url5 = emptystar
            break; 

        case (rating.rate >= 4 && rating.rate < 4.5):
                url1 = fullstar
                url2 = fullstar
                url3 = fullstar
                url4 = fullstar
                url5 = emptystar
            break;
            
        case (rating.rate >= 4.5 && rating.rate < 5):
                url1 = fullstar
                url2 = fullstar
                url3 = fullstar
                url4 = fullstar
                url5 = halfstar
            break;

        case (rating.rate === 5):
                url1 = fullstar
                url2 = fullstar
                url3 = fullstar
                url4 = fullstar
                url5 = fullstar
            break;        

        default:
            url1 = emptystar
            url2 = emptystar
            url3 = emptystar
            url4 = emptystar
            url5 = emptystar
            break;
    }

    return (
        <div className={styles.reviewInfo}>
            <div className={styles.reviewDiv}>
                <img src={url1} alt="" />
                <img src={url2} alt="" />
                <img src={url3} alt="" />
                <img src={url4} alt="" />
                <img src={url5} alt="" />
            </div>
            <span>{rating.count + " reviews"}</span>
        </div>
    )
}

export default function Card ({ someObj }) {

    const [quantity, setQuantity] = useState(1)

    return (
        <div className={styles.card}>
            <span className={styles.cardCategory}>{someObj.category.slice(0, 1).toUpperCase() + someObj.category.slice(1)}</span>
            <img src={someObj.image} alt="" />
            <h3 className={styles.cardTitle}>{someObj.title}</h3>
            <Reviews rating={someObj.rating}></Reviews>
            <span className={styles.price}>{someObj.price + " €"}</span>
            <div className={styles.quantity}>
                <span>Quantity: {quantity}</span>
                <div className={styles.quantityButtonHolder}>
                    <div className={styles.quantityButton} onClick={() => { setQuantity(quantity + 1)}}>
                        <span>△</span>
                    </div>
                    <div className={styles.quantityButton} onClick={() => { if(quantity > 1) {setQuantity(quantity - 1)}}}>
                        <span>▽</span>
                    </div>
                </div>
            </div>
            <button>Add to Cart</button>
        </div>
    )
}


Card.propTypes = {
    someObj: PropTypes.object
}

Reviews.propTypes = {
    rating: PropTypes.object
}