import './App.css'
import FooterComponent from './components/Footer'
import HeaderComponent from './components/Header'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import ProductEntry from './components/ProductEntry'
import DisplayProductComponent from './components/DisplayProduct'
import ProductList from './components/ProductList'
import Cart from './components/Cart'
import Home from './components/Home'
import { useState } from 'react'

function App() {

 
  

  return (
    <>
      <BrowserRouter>
        <HeaderComponent/>
        <Routes>
          {/* //http://localhost:3000 */}
          <Route path='/home' element = { <Home/> }></Route>
          {/* //http://localhost:3000/products */}
          <Route path='/products' element={ <ProductList/> }></Route>
          {/* //http://localhost:3000/addProduct */}
          <Route path='/addProduct' element = {<ProductEntry/>}></Route>
          {/* //http://localhost:3000/viewProductById/1 */}
          <Route path = '/viewProductById/:prodID' element={<ProductEntry/>}></Route>
          {/* //http://localhost:3000/displayProducts */}
          <Route path = '/displayProducts' element={<DisplayProductComponent/>}></Route>
          {/* //http://localhost:3000/cart */}
          {/* <Route path='/cart' element={<Cart cart1={cart}/>}></Route> */}
        </Routes>
         
        <FooterComponent/>
      </BrowserRouter>  
    </>
  )
}

export default App
