import React from 'react'
import { useDispatch } from 'react-redux';
import { addItem } from '../redux/cartSlice';

const Product = ({product}) => {
  const dispatch = useDispatch();

  const handleAddItem = (product) => {
    dispatch(addItem(product))
  }

  const {id,name,brand,price} = product;
  return (
    <div className='h-[540px] pr-4'>
      <div onClick={()=>handleAddItem(product)}>
      <img className='h-[380px] w-[300px]' src='https://assets.ajio.com/medias/sys_master/root/20240314/rsG4/65f3213a05ac7d77bbb7fd2c/-473Wx593H-469290316-lightolive-MODEL.jpg'/>
      </div>
      <div className='text-center'>
        <p className='text-[#866528]'>{brand}</p>
        <p className='font-serif text-sm text-gray-600 my-2'>{name}</p>
        <div className='my-1'> 
          <div className='bg-green-600 flex flex-row w-[90px] text-white justify-center m-auto rounded-md'>3.8
          <img  className="mx-2" src={"https://assets.ajio.com/static/img/white-star-display.svg"}/>
          <p>| 8.2k</p>
          </div>
        </div>
        <div className='flex flex-row justify-center'>
        <p className='mr-3 text-sm font-semibold'>₹{price-150}</p>
        <p className='line-through text-sm font-semibold text-gray-500'>₹{price}</p>
        </div>
      </div>
    </div>
  )
}

export default Product