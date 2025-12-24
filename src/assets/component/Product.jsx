import React, { useEffect, useState } from 'react'
import axios from 'axios';

const Product = () => {
    const [products, setProducts] = useState([]);

    async function productFetch() {
        try {
            const res= await fetch("https://dummyjson.com/products")
            const data= await res.json();
            console.log(data);
            setProducts(data.products);
            
        } catch (error) {
            console.log("error", error);
            
        }
        
    }

    useEffect(()=>{
        productFetch();
    },[]);

  return (
    <div>
        <h1>Products</h1>
        <div className="product-container">
      {products.map((product) => (
        <div key={product.id} className="product-card">
          <img
            src={product.thumbnail}
            alt={product.title}
            className="product-img"
          />
          <h3 className="product-title">{product.title}</h3>
          <p className="product-price">Rs{product.price}</p>
          <p className="product-rating">⭐ {product.rating}</p>
          
        </div>
        
      ))}
      
      
    </div>
    <hr />

    </div>
  )
}

export default Product