import styles from './Slider.module.css'
import { useState, useEffect } from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import womenswear from '../../assets/womenswear.jpg'
import menswear from '../../assets/menswear.jpg'
import accessories from '../../assets/accessories.jpg'

function Slide ({ url, content }) {
    return (
        <div className={styles.slide}>
            <div className={styles.centralDiv}>
                <h1>{content}</h1>
                <button><Link to="/">Shop now</Link></button>
            </div>
            <img src={url} alt="" />
        </div>
    )
}

Slide.propTypes = {
    url: PropTypes.string,
    content: PropTypes.string,
}

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
                    <Slide url={womenswear} content={"For Her"}/>
                    <Slide url={menswear} content={"For Him"}/>
                    <Slide url={accessories} content={"For Both"}/>
                    <Slide url={womenswear} content={"For Her"}/>
                </div>
            </div>
        )
    } else {
        return (
            <div className={styles.slider} >
                <div className={styles.imageCarousel} style={{left: left + 'vw', transition: "left 1s ease-in-out"}}>
                    <Slide url={womenswear} content={"For Her"}/>
                    <Slide url={menswear} content={"For Him"}/>
                    <Slide url={accessories} content={"For Both"}/>
                    <Slide url={womenswear} content={"For Her"}/>
                </div>
            </div>
        )
    }
}