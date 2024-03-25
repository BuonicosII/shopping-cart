import PropTypes from 'prop-types'


function ProductSummary ( { item, fns}) {


    return (
        <div>
            <img src={item.product.image} alt="" />
            <h3>{item.product.title}</h3>
            <span>Quantity: {item.quantity}</span>
            <div>
                <button onClick={() => { fns[0](item.product, 1)}}>
                    △
                </button>
                <button onClick={() => { fns[1](item.product, 1)}}>
                    ▽
                </button>
            </div>
        </div>
    )
}

export default function Cart ({ cart, fns }) {


    return (
        <div>
            {cart.map( item => {
                return <ProductSummary key={item.product.id} item={item} fns={fns} />
            })}
        </div>
    )
}


ProductSummary.propTypes = {
    fns: PropTypes.array,
    item: PropTypes.object
}

Cart.propTypes = {
    cart: PropTypes.array,
    callback: PropTypes.func
}