import React from 'react'
import Address from './Address.js'
import { useSelector } from 'react-redux'

const UserAddress = () => {
    const userAddress = useSelector((store)=>store.useraddress.userAddress);
    console.log(userAddress);
  return (
    <div>
        <div>
            {userAddress.map((address,idx)=>(
                <Address key={idx} address={address}/>
            ))}
        </div>
    </div>
  )
}

export default UserAddress