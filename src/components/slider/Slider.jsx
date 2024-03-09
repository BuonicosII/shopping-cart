import styles from './Slider.module.css'
import { useState, useEffect } from 'react'

export default function Slider () {
    const [left, setLeft] = useState(0)

    useEffect(() => {
        setTimeout(() => {
            if (left === -200) {
                setLeft(0)
            } else {
                setLeft(left - 100)
            }
        }, 2000)
    }, [left])

    return (
        <div className={styles.slider} >
            <div className={styles.imageCarousel} style={{left: left + 'vw'}}>
                <img className={styles.slide} src="https://images.pexels.com/photos/1126993/pexels-photo-1126993.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />
                <img className={styles.slide} src="https://images.pexels.com/photos/450212/pexels-photo-450212.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />
                <img className={styles.slide} src="https://images.pexels.com/photos/834872/pexels-photo-834872.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />
            </div>
        </div>
    )
}