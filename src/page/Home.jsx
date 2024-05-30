import React from 'react'
import FilterCategory from '../components/ui/FilterCategory'
import ProductsContainer from '../components/product-components/ProductsContainer'

export default function Home() {
  return (
    <div className='grid gap-5'>
      <h1>
      جميع منتجات القهوة
      </h1>
      <FilterCategory />
       <ProductsContainer/>
    </div>
  )
}
