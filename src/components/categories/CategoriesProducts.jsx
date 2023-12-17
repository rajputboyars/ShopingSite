import React, { useState,useEffect } from 'react'
import Cards from '../Cards'

const CategoriesProducts = ({categorie}) => {
    const [products, setProducts] = useState([])

    // console.log("cate",products);
    const categorieProducts = async() => {
        const response = await fetch(`https://dummyjson.com/products/category/${categorie}`)
        const data = await response.json()
        setProducts(data.products)
        console.log("product",products);
    }
    useEffect(() => {
    
        categorieProducts()
    
    },[categorie]);
  return (
    <>
        <div className={`w-fit h-fit p-[10px] m-auto flex flex-wrap `}>
            {
                products.map(({title,price,description,thumbnail, id})=>{
                    return(
                        <div key={id}>

                            <Cards title={title} price={price} description={description} thumbnail={thumbnail} id={id}/>
                        </div>
                    )
                })
            }
        </div>
    </>
  )
}

export default CategoriesProducts