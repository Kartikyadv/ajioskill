import React from 'react'

const Address = ({address}) => {
    const {name,addressType,buildingName,city,landmark,mobile,pinCode,state,street} = address;
  return (
    <div>
        <div className='text-xs'>{name}</div>
        <div className='text-xs'>{buildingName}</div>
        <div className='text-xs'>{addressType}</div>
        <div className='text-xs'>{landmark},{state}</div>
        <div className='text-xs'>india - {pinCode}</div>
        <div className='text-xs'>Phone: {mobile}</div>
    </div>
  )
}

export default Address