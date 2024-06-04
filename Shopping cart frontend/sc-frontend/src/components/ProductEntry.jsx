import React, { useEffect, useState } from 'react'
import { createProduct, getProduct, updateProduct } from '../services/ProductService'
import { useNavigate, useParams } from 'react-router-dom';


const ProductEntry = () => {
    const [name, setName]=useState('')
    const [category, setCategory] = useState('')
    const [price, setPrice] = useState('')
    const [description, setDescription] = useState('')
    const [stockCount, setStockCount] = useState('')
    const [inStock, setInStock] = useState('')

    const {prodID} = useParams();
    
    const[errors, setErrors] = useState({
        name:'',
        category:'',
        price:'',
        description:'',
        stockCount:'',
        inStock:''
    })

    const navigator = useNavigate();

    useEffect(()=>{
        if(prodID){
            getProduct(prodID).then((response) => {
                setName(response.data.name);
                setCategory(response.data.category);
                setPrice(response.data.price);
                setDescription(response.data.description);
                setStockCount(response.data.stockCount);
                setInStock(response.data.inStock);
            }).catch(error => {
                console.error(error)
            })
        }
    }, [prodID])

    function saveProduct(e){
        e.preventDefault();

        if(validateForm()){

            const product = {name, category, price, description, stockCount, inStock}
            console.log(product)

            if(prodID){
                updateProduct(prodID, product).then((response)=>{
                    console.log(response.data);
                    navigator('/products');
                }).catch(error => {
                    console.error(error);
                })
            }else{
                createProduct(product).then((response) =>{
                    console.log(response.data);
                    navigator('/products')
                }).catch(error => {
                    console.error(error);
                })
            }   
        }       
    }

    function validateForm(){
        let valid = true;

        const errorsCopy = {... errors}

        if(name.trim()){
            errorsCopy.name ='';
        }else{
            errorsCopy.name = 'Name is required';
            valid = false;
        }

        if(category.trim()){
            errorsCopy.category ='';
        }else{
            errorsCopy.category = 'Category is required';
            valid = false;
        }

        if(price.trim()){
            errorsCopy.price ='';
        }else{
            errorsCopy.price = 'Price is required';
            valid = false;
        }

        if(description.trim()){
            errorsCopy.description ='';
        }else{
            errorsCopy.description = 'Description is required';
            valid = false;
        }

        if(stockCount.trim()){
            errorsCopy.stockCount ='';
        }else{
            errorsCopy.stockCount = 'Stock count is required';
            valid = false;
        }

        if(inStock.trim()){
            errorsCopy.inStock ='';
        }else{
            errorsCopy.inStock = 'In stock is required';
            valid = false;
        }
        
        setErrors(errorsCopy);

        return valid;
    }

    function pageTitle(){
        if(prodID){
            return <h2 className='text-center'>Update Product</h2>
        }else{
            return <h2 className='text-center'>Add Product</h2>
        }
    }

  return (
    <div className='container'>
        <br/>  <br/>
        <div className='row'>
            <div className='card col-md-6 offset-md-3 offset-md-3'>
                {
                    pageTitle()
                }
                <div className='card-body'>
                    <form>
                        <div className='form-group mb-2'> {/*margin bottom -- mb2*/}
                            <label className='form-label'>Name</label>
                            <input
                                type='text'
                                placeholder='Enter product name'
                                name='name'
                                value={name}
                                className={`form-control ${errors.name ? 'is-invalid' : '' }`}
                                onChange={(e) => setName(e.target.value)}
                            >
                            </input>
                            { errors.name && <div className='invalid-feedback'>{errors.name}</div>}
                        </div>

                        <div className='form-group mb-2'>
                            <label className='form-label'>Category</label>
                            <input
                                type='text'
                                placeholder='Enter product category'
                                name='category'
                                value={category}
                                className={`form-control ${errors.category ? 'is-invalid' : '' }`}
                                onChange={(e) => setCategory(e.target.value)}
                            >
                            </input>
                            { errors.category && <div className='invalid-feedback'>{errors.category}</div>}
                        </div>

                        <div className='form-group mb-2'>
                            <label className='form-label'>Price</label>
                            <input
                                type='number'
                                placeholder='Enter product price'
                                name='price'
                                value={price}
                                className={`form-control ${errors.price ? 'is-invalid' : '' }`}
                                onChange={(e) => setPrice(e.target.value)}
                            >
                            </input>
                            { errors.price && <div className='invalid-feedback'>{errors.price}</div>}
                        </div>

                        <div className='form-group mb-2'>
                            <label className='form-label'>Description</label>
                            <input
                                type='text'
                                placeholder='Enter product description'
                                name='description'
                                value={description}
                                className={`form-control ${errors.description ? 'is-invalid' : '' }`}
                                onChange={(e) => setDescription(e.target.value)}
                            >
                            </input>
                            { errors.description && <div className='invalid-feedback'>{errors.description}</div>}
                        </div>

                        <div className='form-group mb-2'>
                            <label className='form-label'>Stock Count</label>
                            <input
                                type='number'
                                placeholder='Enter product stock count'
                                name='stockCount'
                                value={stockCount}
                                className={`form-control ${errors.stockCount ? 'is-invalid' : '' }`}
                                onChange={(e) => setStockCount(e.target.value)}
                            >
                            </input>
                            { errors.stockCount && <div className='invalid-feedback'>{errors.stockCount}</div>}
                        </div>

                        <div className='form-group mb-2'>
                            <label className='form-label'>In Stock</label>
                            <input
                                type='text'
                                placeholder='Whether in stock'
                                name='inStock'
                                value={inStock}
                                className={`form-control ${errors.inStock ? 'is-invalid' : '' }`}
                                onChange={(e) => setInStock(e.target.value)}
                            >
                            </input>
                            { errors.inStock && <div className='invalid-feedback'>{errors.inStock}</div>}
                        </div>

                        <button className='btn btn-primary' onClick = {saveProduct}> Add</button>
                    </form>
                </div>
            </div>
        </div>
    </div>
  )
}

export default ProductEntry