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
    <>
      <section className='product'>
        <button className='displayOption' onClick = {handleAll}>Show All</button>
        <button className='displayOption' onClick={handleCath}>Cathegories</button>
        <div className={'container grid3'}>
          {
            cathegories.forEach(cath => {
              <p>{cath.name}</p>
              product.filter(item => (item.category === cath.id)).map(filteredItem => (
                <ProductBox key={filteredItem.id} id={filteredItem.id} productImg={filteredItem.productImg} name={filteredItem.name}  />
              ))
              
              })
          }
        </div>
        <div className={showAll ? 'container grid3' : 'hide'}>
          {product.map((item) => (
            <ProductBox key={item.id} id={item.id} productImg={item.productImg} name={item.name}  />
          ))}
        </div>
        {/* SOR BUrayi neden olmadi  */}
       


      </section>
    </>
  )

}
export default Product;