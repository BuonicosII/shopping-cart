import styles from './Slider.module.css'
import { useState, useEffect } from 'react'

export default function Slider () {
    const [left, setLeft] = useState(0)
    const [firstLoop, setFirstLoop] = useState(true)

    useEffect(() => {

        if (left === 0 && firstLoop === true) {       
            setTimeout(() => {
                setFirstLoop(false)     
                setLeft(left - 100)
            }, 7000)
        } else if (left === 0 && firstLoop === false) {
            setTimeout(() => {
                setLeft(left - 100)
            }, 3500)
        } else if (left === -300) {
            setTimeout(() => {
                setLeft(0)
            }, 3500)
        } else {
            setTimeout(() => {
                    setLeft(left - 100)
                }, 7000)
        }
    }, [left, firstLoop])

    if (left === 0) {
        return (
            <div className={styles.slider} >
                <div className={styles.imageCarousel} style={{left: left + 'vw'}}>
                    <img className={styles.slide} src="https://images.pexels.com/photos/1126993/pexels-photo-1126993.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />
                    <img className={styles.slide} src="https://images.pexels.com/photos/450212/pexels-photo-450212.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />
                    <img className={styles.slide} src="https://images.pexels.com/photos/834872/pexels-photo-834872.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />
                    <img className={styles.slide} src="https://images.pexels.com/photos/1126993/pexels-photo-1126993.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />
                </div>
            </div>
        )
    } else {
        return (
            <div className={styles.slider} >
                <div className={styles.imageCarousel} style={{left: left + 'vw', transition: "left 1s ease-in-out"}}>
                    <img className={styles.slide} src="https://images.pexels.com/photos/1126993/pexels-photo-1126993.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />
                    <img className={styles.slide} src="https://images.pexels.com/photos/450212/pexels-photo-450212.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />
                    <img className={styles.slide} src="https://images.pexels.com/photos/834872/pexels-photo-834872.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />
                    <img className={styles.slide} src="https://images.pexels.com/photos/1126993/pexels-photo-1126993.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />
                </div>
            </div>
        )
    }
}