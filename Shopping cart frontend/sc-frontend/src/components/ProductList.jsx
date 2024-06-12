import React, { useEffect, useState } from "react";
import { deleteProduct, listProducts } from "../services/ProductService";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const ProductList = () => {
  const [products, setProducts] = useState([]);

  const navigator = useNavigate();

  useEffect(() => {
    getAllProducts();
  }, []);

  function getAllProducts() {
    listProducts()
      .then((response) => {
        setProducts(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  }

  function addNewProduct() {
    navigator("/addProduct");
  }

  function editProduct(prodID) {
    navigator(`/viewProductById/${prodID}`);
  }

  function removeProduct(prodID) {
    console.log(prodID);
    deleteProduct(prodID)
      .then((response) => {
        getAllProducts();
      })
      .catch((error) => {
        console.error(error);
      });
      toast.success('Deleted Successfully', {
        position: "bottom-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
        });
  }

  return (
    <div className="container" style={{ marginBottom: "80px" }}>
      <h2 className="text-center">List of Products</h2>
      <button className="btn btn-dark mb-2" onClick={addNewProduct}>
        Add Product
      </button>
      <table className="table table-hover table-bordered">
        <thead>
          <tr>
            <th className="text-center">Product ID</th>
            <th className="text-center" style={{ verticalAlign: "middle" }}>
              Product Name
            </th>
            <th className="text-center" style={{ verticalAlign: "middle" }}>
              Category
            </th>
            <th className="text-center" style={{ verticalAlign: "middle" }}>
              Price
            </th>
            <th className="text-center" style={{ verticalAlign: "middle" }}>
              Description
            </th>
            <th className="text-center" style={{ verticalAlign: "middle" }}>
              Stock Count
            </th>
            <th className="text-center" style={{ verticalAlign: "middle" }}>
              In Stock
            </th>
            <th className="text-center" style={{ verticalAlign: "middle" }}>
              Actions
            </th>
          </tr>
        </thead>
        <tbody>
          {products.map((product, num) => (
            <tr key={product.prodID}>
              <td className="text-center" style={{ verticalAlign: "middle" }}>
                {product.prodID}
              </td>
              <td className="text-center" style={{ verticalAlign: "middle" }}>
                {product.name}
              </td>
              <td className="text-center" style={{ verticalAlign: "middle" }}>
                {product.category}
              </td>
              <td className="text-center" style={{ verticalAlign: "middle" }}>
                Rs. {product.price}
              </td>
              <td style={{ verticalAlign: "middle" }}>{product.description}</td>
              <td className="text-center" style={{ verticalAlign: "middle" }}>
                {product.stockCount}
              </td>
              <td className="text-center" style={{ verticalAlign: "middle" }}>
                {product.inStock}
              </td>
              <td className="text-center">
                <button
                  className="btn btn-light"
                  onClick={() => editProduct(product.prodID)}
                  style={{
                    verticalAlign: "middle",
                    backgroundColor: "#FFEADA",
                  }}
                >
                  Update
                </button>
                <button
                  className="btn btn-light"
                  onClick={() => {
                    removeProduct(product.prodID);
                  }}
                  style={{
                    marginTop: "10px",
                    verticalAlign: "middle",
                    backgroundColor: "#C8A18F",
                  }}
                >
                  Remove
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <ToastContainer
        position="bottom-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
      />
    </div>
  );
};

export default ProductList;
