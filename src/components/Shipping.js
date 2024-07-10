import React from 'react'
import ShippingAddress from "./ShippingAddress.js"
import Billing from './Billing.js'
import PreFooter from './PreFooter.js'

const Shipping = () => {
  return (
    <div className="w-full">
      <div className="flex flex-row mt-7">
        <div className="w-[75%]" >
          <ShippingAddress/>
        </div>
        <div className="w-[25%]">
          <Billing />
        </div>
      </div>
      <PreFooter />
    </div>
  )
}

export default Shipping