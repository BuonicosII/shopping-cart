import { useParams } from "react-router-dom";
import Card from "../card/Card";
import PropTypes from 'prop-types'
import styles from "./Category.module.css"

export default function Category ({ products, callback }) {

    const { name } = useParams()

    let filter 

    switch (name) {
        case "menswear":
            filter = "men's clothing"
            break;
        
        case "womenswear":
            filter = "women's clothing"
            break;
        
        case "jewelery":
            filter = "jewelery"
            break;
        
        case "electronics":
            filter = "electronics"
            break;
    }

    return (
        <div className={styles.category}>
            <h1>{filter.slice(0, 1).toUpperCase() + filter.slice(1)}</h1>
            <div className={styles.productList}>
                {products.map( (product) => {
                    if (product.category === filter) {
                        return <Card key={product.id} someObj={product} callback={callback}/>
                    }
                })}
            </div>
        </div>
    )
}

Category.propTypes = {
    products: PropTypes.array,
    callback: PropTypes.func
}