import {  useContext, useEffect, useState} from 'react'
import Cards from './Cards'
import CartContext from './cartcontext/CartContext';



const ApiFetch = () => {
  const {cardsData, setCardsdata} = useContext(CartContext)
  const {input, setInput} = useContext(CartContext)

 

  const productsData = async() => {
    try {
      const response = await fetch(`https://dummyjson.com/products/search?q=${input}`)
      const productsdata = await response.json()
      const Data = productsdata.products
      setCardsdata(Data)
  const wishlistLocalData = JSON.parse(localStorage.getItem("wishListLocalData")) || []
      if(wishlistLocalData.length > 0){
        const nonWishlistedData = Data?.filter(e1 => !wishlistLocalData.some(e2 => e2.id === e1.id));
        const fetchProducts = [...nonWishlistedData, ...wishlistLocalData];
        const sortProducts = [...fetchProducts].sort((a,b)=>a.id - b.id)
        setCardsdata(sortProducts)
      }
      // console.log("productsData",Data);
    } catch (error) {
      console.log(error);
    }
  }

useEffect(()=>{   
      productsData()
},[])

console.log(cardsData, "cardsdata-----")
    
  return (
    <>
        <div>
          <div className="w-[600px] m-auto my-[20px] flex" >
            <input className=" pl-5 p-[10px] w-[500px] border border-zinc-400 rounded-3xl" type="text" value={input} onChange={(e) => setInput(e.target.value)}/>
            <button className="p-[10px] bg-blue-600 hover:bg-blue-500 active:bg-blue-800 mx-1 rounded-3xl text-white w-[100px]"onClick={productsData}>Search</button>
          </div>
        </div>
        {
          cardsData ?
        <div className={`w-[1600px] h-fit p-[10px] m-auto flex flex-wrap `}>
          {
            cardsData.map(({id,title,price,description,thumbnail, wishListFlag}) => {
              return(
                <div key={id}>
                  <Cards title={title} price={price} wishlistflag={wishListFlag} description={description} thumbnail={thumbnail} id={id} />
                </div>
              )
            })
          }
        </div>
        :
        <div className='w-full h-[800px] bg-white'>
          <div className='text-[100px]'></div>
        </div>
        }
    </>
  )
}

export default ApiFetch