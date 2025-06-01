import { useSelector } from "react-redux"


const Cart = () => {
    const productItems = useSelector((state) => state.cart.cart)
  return (
    <>
      <div className="container mt-5">
        {productItems.length === 0 ?(
            <h1>Your Cart is empty</h1>
        ):(
            <table className="table">
                <tr>
                    <th>S.No.</th>
                    <th>Product Image</th>
                    <th>Product Name</th>
                    <th>Price</th>
                    <th>Quantity</th>
                </tr>
                {productItems.map((item, index)=>(
                    <tr key={item.id}>
                        <td className="ps-3">{index+1}</td>
                        <td>
                            <img src={item.images} alt={item.title} style={{width:'60px'}} className="ms-3"/>
                        </td>
                        <td className="ps-3">{item.title}</td>
                        <td className="ps-1">{item.price}</td>
                        <td className="ps-3">{item.stock}</td>

                    </tr>
                ))}
            </table>
        )}
      </div>
    </>
  )
}

export default Cart
