import { useEffect, useState } from "react"
import { useDispatch } from "react-redux"
import { addNewItem } from "../redux/addToCart"


const ProductList = () => {
    const [products, setProducts] = useState([])

    const dispatch = useDispatch()

    useEffect(()=>{
        fetch('https://dummyjson.com/products')
        .then((response)=>response.json())
        .then((data)=> setProducts(data.products))
    }, [])

    const addToCart = (product) =>{
        dispatch(addNewItem(product))
    }
  return (
    <>
      <div className="container mt-5">
        <div className="row">
            {products.length?(
                products.map((product)=>(
                    <div key={product.id} className="col-md-4 mb-3">
                        <div className="card">
                            <img src={product.images} className="card-img-top"alt={product.title} style={{width:'413px', height:'250px'}}/>
                        </div>
                        <div className="card-body">
                            <h5 className="card-title">{product.title}</h5>
                            <p className="card-text">{product.description}</p>
                            <p className="card-text">$ {product.price}</p>
                            <button className="btn btn-primary" onClick={()=> addToCart(product)}>Add To Cart</button>
                        </div>
                    </div>
                ))
            ):(
                <div className="display-1 mt-3">Data is loading...</div>
            )}
        </div>
      </div>
    </>
  )
}

export default ProductList
