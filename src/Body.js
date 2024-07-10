import React from 'react'
import Breadcrumb from './components/Breadcrumb.js'
import Sidebar from './components/Sidebar.js'
import Pagebrief from './components/Pagebrief.js'
import ProductList from './components/ProductList.js'
import { FilterProvider } from './FilterProvider';

const Body = () => {
  return (
    <FilterProvider>
    <div className='mt-3 w-full'>
        <Breadcrumb/>
        <div className='flex flex-row'>
            <Sidebar/>
            <div className='w-full'>
                <Pagebrief/>
                <ProductList />
            </div>
        </div>
    </div>
    </FilterProvider>
  )
}

export default Body