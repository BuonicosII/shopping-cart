
export default function Cart ({ cart }) {
    return (
        <div>
            {cart.map( item => {
                return <div key={item.product.id}>{item.product.title + " " + item.quantity}</div>
            })}
        </div>
    )
}