import React, { useState } from "react"
import "./product.css"
import { product, cathegories } from "../../data/data"
import ProductBox  from "./ProductBox"

const Product = () => {
  const [showAll, setShowAll] = useState(true);

  const handleAll = () => {
    setShowAll(true);
  };
  const handleCath = () => {
    setShowAll(false);
  };

  return (
    <section className='product_flex '>
      <button className='displayOption button' onClick = {handleAll}>Show All</button>
      <button className='displayOption button ' onClick={handleCath}>Cathegories</button>
      <div className={showAll ? 'product_flex ' : 'hide'}>
        {product.map((item) => (
          <ProductBox 
            key={item.id} 
            id={item.id} 
            productImg={item.productImg} 
            name={item.name} 
          />
        ))}
      </div>
      <div className={showAll ?'hide' :'product_flex '}>
      {cathegories.map(cath => {
        const filteredProducts = product.filter(item => (item.category === cath.id))
        return (
          <div className=" product_flex">
            <h2>{cath.name}</h2>
            {filteredProducts.map(filteredItem => (
              <ProductBox 
                key={filteredItem.id} 
                id={filteredItem.id} 
                productImg={filteredItem.productImg} 
                name={filteredItem.name}  
              />
            ))}
          </div>
        )
      })}
      </div>
    </section>
  )
}

export default Product;