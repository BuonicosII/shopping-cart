import styles from './Section.module.css'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'

export default function Section ({ imageUrl, order, heading}) {
    if (order === "left") {
        return (
            <div className={styles.sectionHolder}>
                <section className={styles.sectionClass}>
                    <img src={imageUrl} alt="" />
                    <div>
                        <h2>{heading}</h2>
                        <p>Lorem ipsum dolor sit amet</p>
                        <button><Link to="/">Find out more</Link></button>
                    </div>
                </section>
            </div>
        )
    } else {
        return (
            <div className={styles.sectionHolder}>
                <section className={styles.sectionClass}>
                    <div>
                        <h2>{heading}</h2>
                        <p>Lorem ipsum dolor sit amet</p>
                        <button><Link to="/">Find out more</Link></button>
                    </div>
                    <img src={imageUrl} alt="" />
                </section>
            </div>
        )
    }
}

Section.propTypes = {
    imageUrl: PropTypes.string,
    order: PropTypes.string,
    heading: PropTypes.string,
}
