import styles from './Slider.module.css'
import { useState, useEffect } from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import womenswear from '../../assets/womenswear.jpg'
import menswear from '../../assets/menswear.jpg'
import accessories from '../../assets/accessories.jpg'

function Slide ({ imgUrl, content, pageUrl }) {
    return (
        <div className={styles.slide}>
            <div className={styles.centralDiv}>
                <h1>{content}</h1>
                <button><Link to={pageUrl}>Shop now</Link></button>
            </div>
            <img src={imgUrl} alt="" />
        </div>
    )
}

Slide.propTypes = {
    imgUrl: PropTypes.string,
    pageUrl: PropTypes.string, 
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
                    <Slide imgUrl={womenswear} content={"For Her"} pageUrl="/womenswear"/>
                    <Slide imgUrl={menswear} content={"For Him"} pageUrl="/menswear"/>
                    <Slide imgUrl={accessories} content={"For Both"} pageUrl="/jewelery"/>
                    <Slide imgUrl={womenswear} content={"For Her"} pageUrl="/womenswear"/>
                </div>
            </div>
        )
    } else {
        return (
            <div className={styles.slider} >
                <div className={styles.imageCarousel} style={{left: left + 'vw', transition: "left 1s ease-in-out"}}>
                    <Slide imgUrl={womenswear} content={"For Her"} pageUrl="/womenswear"/>
                    <Slide imgUrl={menswear} content={"For Him"} pageUrl="/menswear"/>
                    <Slide imgUrl={accessories} content={"For Both"} pageUrl="/jewelery"/>
                    <Slide imgUrl={womenswear} content={"For Her"} pageUrl="/womenswear"/>
                </div>
            </div>
        )
    }
}