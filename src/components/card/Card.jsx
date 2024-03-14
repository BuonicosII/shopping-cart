export default function Card ({ someObj }) {

    return (
        <div>
            <h3>{someObj.title}</h3>
            <p>{someObj.price}</p>
            <p>{someObj.category}</p>
            <img src={someObj.image} alt="" />
        </div>
    )
}