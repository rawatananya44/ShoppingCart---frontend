import React, { useEffect, useState } from "react";
import { listProducts } from "../services/ProductService";
import Cart from "./Cart";


const DisplayProductComponent = () => {
  const [displayProduct, setDisplayProduct] = useState([]);
  const [searchItems, setSearchItems] = useState('')

  useEffect(() => {
    displayAllProducts();
  }, []);

  function displayAllProducts() {
    listProducts()
      .then((response) => {
        setDisplayProduct(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  }

  const [cart, setCart] = useState([])
  console.log(cart)
  const addToCart=(item)=>{
    setCart([ ...cart, {...item , quantity : 1}])
  }

  <Cart cart1={cart}></Cart>

  // const handleChange = (e) =>{
  //   e.prevenrDefault();
  //   setSearchItems(e.target.value);

    
  // }

  function filteredResults(displayProduct, searchItems) {
      if(!searchItems){
        return displayProduct;
      }
      return displayProduct.filter(item => item.displayProductName.toLowerCase().includes(searchItems.toLowerCase()));
  }

  const result = filteredResults(displayProduct, searchItems);



  return (
  
    <div className="container" style={{ marginBottom: "80px" }}>
      <h2 className="text-center">Products</h2>
      {/* <input 
      type="text"
      placeholder="Search here"
      onChange={(e) => setSearchItems(e.target.value)}
      value={searchItems}/> */}
      <table className="table table-striped table-bordered">
        <thead>
          <tr>
            <th className="text-center" style={{ verticalAlign: "middle" }}>
              Product Name
            </th>
            <th className="text-center" style={{ verticalAlign: "middle" }}>
              Category
            </th>
            <th className="text-center" style={{ verticalAlign: "middle" }}>
              Description
            </th>
            <th className="text-center" style={{ verticalAlign: "middle" }}>
              Price
            </th>
            <th className="text-center" style={{ verticalAlign: "middle" }}>
              Add to Cart
            </th>
          </tr>
        </thead>
        <tbody>
          {
            displayProduct.map((product) => (
              (product.inStock === "True")?
              (<tr key={product.prodID}> 
              <td>{product.name}</td>
              <td>{product.category}</td>
              <td>{product.description}</td>
              <td>Rs {product.price}</td>
              <td>
                <button className="btn btn-light text-center" onClick={()=> addToCart(product)} style={{verticalAlign:'middle', backgroundColor:'#C8A18F'}}>Add to Cart</button>
              </td>
            </tr>):('')
          
            ))
          }
          
        </tbody>
      </table>
      <br/>
      <Cart cart1={cart}></Cart>
    </div>
  );
};

export default DisplayProductComponent;
