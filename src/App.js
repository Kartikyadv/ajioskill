import React from 'react'
import Header from "./components/Header.js"
import Cart from "./components/Cart.js"
import Body from "./Body.js"
import Shipping from "./components/Shipping.js"
import { Route, Routes } from 'react-router-dom'

const App = () => {
  return (
    <div className=''>
      <Header/>
      <div className='w-[80%] flex m-auto'>
      <Routes>
          <Route path="/" element={<Body />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/shipping" element={<Shipping />} />
       </Routes>
      </div>
    </div>
  )
}

export default App