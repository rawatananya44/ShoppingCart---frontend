import axios from "axios";

const REST_API_BASE_URL = 'http://localhost:8080/api/products/viewAllProducts';
const POST_PRODUCT_URL = 'http://localhost:8080/api/products/createProduct';
const GET_PRODUCT_BY_ID_URL = 'http://localhost:8080/api/products/viewProductById';
const UPDATE_PRODUCT_URL = 'http://localhost:8080/api/products/updateProduct';
const DELETE_PRODUCT_URL = 'http://localhost:8080/api/products/deleteProduct';
// const ADD_TO_CART_URL = 'http://localhost:8080/cart';

export const listProducts = ()=> axios.get(REST_API_BASE_URL);
export const createProduct = (product) => axios.post(POST_PRODUCT_URL, product);
export const getProduct = (productId) => axios.get(GET_PRODUCT_BY_ID_URL + '/' + productId); 
export const updateProduct = (productId, product) => axios.put(UPDATE_PRODUCT_URL + '/' + productId , product);
export const deleteProduct = (productID) => axios.delete(DELETE_PRODUCT_URL + '/' + productID);
// export const addToCart = (productID) => axios.get(GET_PRODUCT_BY_ID_URL + '/' + productId);