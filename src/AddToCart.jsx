import React,{useReducer} from 'react'
import { CartReducer } from './CartReducer';
 
const products = [
    { id: 1, name: 'Product 1', price: 22 },
    { id: 2, name: 'Product 2', price: 444 },
  ];

  var init={
    cartItems: [],
  }
function AddToCart() {
    let [state, dispatch ]=useReducer(CartReducer, init)
    return (
        <div className='container'>
            <div className="row">
                <div className="col-lg-6">
                    <h3>Product List</h3>
                    <table className="table table-striped">
                        <thead>
                            <tr>
                                <th scope="col">id</th>
                                <th scope="col">Product Name</th>
                                <th scope="col">Price</th>
                                <th scope="col">action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {products.map((a)=>(
                                <tr key={a.id}>
                                <th scope="row">{a.id}</th>
                                <td>{a.name}</td>
                                <td>{a.price}</td>
                                <td> <button className='btn btn-primary btn-sm'
                                onClick={()=> dispatch({ type: "add_to_cart", payload: a})}>Add to Cart</button></td>
                            </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
                <div className="col-lg-6">
                    <h3>Cart List</h3>
                    {state.cartItems.map((a)=>(
                        <li key={a.id}>{a.name}  <button  className='btn btn-danger btn-sm'
                        onClick={()=> dispatch({ type: "remove_to_cart", payload: a})}> Remove</button></li>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default AddToCart
