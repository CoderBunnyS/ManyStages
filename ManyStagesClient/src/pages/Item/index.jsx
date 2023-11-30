import { useParams } from "react-router-dom"

function Item() {
    const { id } = useParams();
  return (
    <div><p>This is one piece of Jewelry</p>
    <p>Item Name</p>
    <img src="https://via.placeholder.com/150" alt="item" />
    <p>Price: $000</p>
    <p>Color Options</p>
    <p>Size Options</p>
    <p>Description</p>
    <p>Item #: {id} </p>
    <button>Add to Cart</button>
    </div>
  )
}

export default Item