import Card from "../card/Card";
import PropTypes from 'prop-types'
import { useState } from "react";
import styles from "./Featured.module.css"

function randomNumbers (length) {
    const numbers = []
  
    for (let i = 0; i < 3; i++) {
      let num = Math.floor(Math.random() * length);
  
      while (numbers.includes(num)) {
        num = Math.floor(Math.random() * length);
      }
  
      numbers.push(num)
    }
  
    return numbers
  
  }

export default function Featured ({ products, callback }) {
    const [featured] = useState(randomNumbers(products.length))
    return (
        <div className={styles.featuredHolder}>
            <h2>Most bought</h2>
            <section className={styles.sectionClass}>
                { products.filter( (product, i) => (featured.includes(i))).map( (product) => {
                    return (
                        <Card key={product.id} someObj={product} callback={callback}></Card>
                    )
                })
                }
            </section>
        </div>
    )
}

Featured.propTypes = {
    products: PropTypes.array,
    callback: PropTypes.func
}