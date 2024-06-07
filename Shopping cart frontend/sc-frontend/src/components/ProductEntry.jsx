import React, { useEffect, useState } from "react";
import {
  createProduct,
  getProduct,
  updateProduct,
} from "../services/ProductService";
import { useNavigate, useParams } from "react-router-dom";
import * as Yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

const ProductEntry = () => {
  const [products, setProducts] = useState("");

  const { prodID } = useParams();

  const navigator = useNavigate(); 

  useEffect(() => {
    if (prodID) {
      getProduct(prodID)
        .then((response) => {
          setProducts(response.data.products);
          reset(response.data);
        })
        .catch((error) => {
          console.error(error);
        });
    }
  }, [prodID]);

  const saveProduct = (input) => {
    console.log(input);

    if (prodID) {
      updateProduct(prodID, input)
        .then((response) => {
          console.log(response.data);
          navigator("/products");
        })
        .catch((error) => {
          console.error(error);
        });
    } else {
      createProduct(input)
        .then((response) => {
          console.log(response.data);
          navigator("/products");
        })
        .catch((error) => {
          console.error(error);
        });
    }
  };

  const validateForm = Yup.object({
    name: Yup.string()
      .max(200, "Must be within 200 characters").required("Name is required"),
    category: Yup.string()
      .max(20, "Must be within 20 characters").required("Category is required"),
    price: Yup.number()
      .min(0, "Should be greater than zero").required("Price is required").typeError("Price is required"),
    description: Yup.string()
      .max(1000, "Must be within 1000 characters").required("Description is required"),
    stockCount: Yup.number()
      .min(1, "Must be greater than 0").required("Stock Count is required").typeError("Stock Count is required"),
    inStock: Yup.string("Enter either true or false").required("inStock is required")
  });

  const {
    register,
    handleSubmit,
    control,
    reset,
    trigger,
    formState: { errors, isSubmitting },
  } = useForm({
    resolver: yupResolver(validateForm),
  });

  function title() {
    if (prodID) {
      return <h2 className="text-center">Update Product</h2>;
    } else {
      return <h2 className="text-center">Add Product</h2>;
    }
  }

  return (
    <div className="container">
      <br /> <br />
      <div className="row">
        <div className="card col-md-6 offset-md-3 offset-md-3">
          {title()}
          <div className="card-body">
            <form onSubmit={handleSubmit(saveProduct)}>
              <div className="form-group mb-2">
                <label className="form-label">Name</label>
                <input
                  type="text"
                  placeholder="Enter product name"
                  name="name"
                  className={`form-control ${errors.name ? "is-invalid" : ""}`}
                  id="name"
                  {...register("name")}
                ></input>
                {errors.name && (
                  <div className="invalid-feedback">{errors.name.message}</div>
                )}
              </div>

              <div className="form-group mb-2">
                <label className="form-label">Category</label>
                <input
                  type="text"
                  placeholder="Enter product category"
                  name="category"
                  className={`form-control ${
                    errors.category ? "is-invalid" : ""
                  }`}
                  id="category"
                  {...register("category")}
                ></input>
                {errors.category && (
                  <div className="invalid-feedback">
                    {errors.category.message}
                  </div>
                )}
              </div>

              <div className="form-group mb-2">
                <label className="form-label">Price</label>
                <input
                  type="number"
                  placeholder="Enter product price"
                  name="price"
                  className={`form-control ${errors.price ? "is-invalid" : ""}`}
                  id="price"
                  {...register("price")}
                ></input>
                {errors.price && (
                  <div className="invalid-feedback">{errors.price.message}</div>
                )}
              </div>

              <div className="form-group mb-2">
                <label className="form-label">Description</label>
                <input
                  type="text"
                  placeholder="Enter product description"
                  name="description"
                  className={`form-control ${
                    errors.description ? "is-invalid" : ""
                  }`}
                  id="description"
                  {...register("description")}
                ></input>
                {errors.description && (
                  <div className="invalid-feedback">
                    {errors.description.message}
                  </div>
                )}
              </div>

              <div className="form-group mb-2">
                <label className="form-label">Stock Count</label>
                <input
                  type="number"
                  placeholder="Enter product stock count"
                  name="stockCount"
                  className={`form-control ${
                    errors.stockCount ? "is-invalid" : ""
                  }`}
                  id="stockCount"
                  {...register("stockCount")}
                ></input>
                {errors.stockCount && (
                  <div className="invalid-feedback">
                    {errors.stockCount.message}
                  </div>
                )}
              </div>

              <div className="form-group mb-2">
                <label className="form-label">In Stock</label>
                <input
                  type="text"
                  placeholder="Whether in stock"
                  name="inStock"
                  className={`form-control ${
                    errors.inStock ? "is-invalid" : ""
                  }`}
                  id="inStock"
                  {...register("inStock")}
                ></input>
                {errors.inStock && (
                  <div className="invalid-feedback">
                    {errors.inStock.message}
                  </div>
                )}
              </div>
                <div className=" d-flex ">
              <button
                type="submit"
                className="btn btn-light"
                disabled={isSubmitting}
                style={{backgroundColor: "#C8A18F", display: "flex", margin:'auto'}}
              >
                Add
              </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductEntry;
