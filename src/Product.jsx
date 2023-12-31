import { Link } from "react-router-dom"
let productData = [
    { id: 1, title: "Product1", image: "https://i.dummyjson.com/data/products/1/thumbnail.jpg", cat: "cloth" },
    { id: 2, title: "Product2 ", image: "https://i.dummyjson.com/data/products/2/thumbnail.jpg", cat: "cloth" },
    { id: 3, title: "Product1", image: "https://i.dummyjson.com/data/products/3/thumbnail.jpg", cat: "cloth" },
    { id: 4, title: "Product4", image: "https://i.dummyjson.com/data/products/4/thumbnail.jpg", cat: "watch" },
    { id: 5, title: "Product6", image: "https://i.dummyjson.com/data/products/5/thumbnail.jpg", cat: "watch" },
    { id: 6, title: "Product677", image: "https://i.dummyjson.com/data/products/6/thumbnail.jpg", cat: "cloth" },
]
function Product() {
    let pp=productData.filter((a)=>a.cat=='cloth')
    function abc(am)
    {
        console.log("Clicked",am)
    }
    let qq=(w)=>{
        w.preventDefault()
        console.log(w)
    }
    return (
        < >
            <div className="container">
                <h2>Product List</h2>
                <div className="row">
                    {pp.map((item) => (
                        <div className="col-lg-3">
                            <div className="shadow border p-3">
                            <img src={item.image} className="w-100" />
                            <h5> <Link to={`/Details/${item.id}`}>{item.title}</Link></h5>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            <form onSubmit={qq}>
            <input type="text" onChange={()=> console.log("chg")}/>
            <button onClick={()=>abc('sajan')}>CLick Me</button>
            </form>
        </ >
    )
}

export default Product
