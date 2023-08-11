import React from 'react'
import MainComponent from '../components/MainComponent'
const HomePage = ({products,setProducts}) => {
  return (
    <div>  
          <MainComponent products={products} setProducts={setProducts}/>
    </div>
  )
}

export default HomePage