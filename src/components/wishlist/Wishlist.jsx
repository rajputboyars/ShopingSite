import React, { useContext,useEffect } from 'react'
import CartContext from '../cartcontext/CartContext'
import WishlistCard from './WishlistCard'

const Wishlist = () => {
    const {wishlistData} = useContext(CartContext)
    const {wishlistTotalPriceArray} = useContext(CartContext)
    const{wishlistTotalPrice, setWishlistTotalPrice} = useContext(CartContext)

    // console.log(wishlistTotalPriceArray)
    const total = wishlistTotalPriceArray.reduce(
        (accumulator, {price}) => accumulator + price,
        0,
      );
    console.log("wishlistTotalPrice",total);

    useEffect(() => {
        setWishlistTotalPrice(total)
    }, [total]);
    
  return (
    <>
        <div className="flex flex-col flex-wrap w-full m-auto bg-zinc-100">
            <div className="flex flex-row justify-center">
                {
                    wishlistData.map(({title,price,description,thumbnail,id})=>{
                        // console.log(id);
                        return(
                            <div key={id} >
                                <WishlistCard title={title} price={price} description={description} thumbnail={thumbnail} id={id}/>
                            </div>
                        )
                    })
                }
            </div>
             <div className="m-auto w-[1000px] text-[25px] bg-red-600 rounded-lg px-4 py-2 font-[800] text-white flex flex-row justify-between">
                <div>Total Price</div>
                <div>RS:- {wishlistTotalPrice}</div>
            </div>
        </div>
    </>
  )
}

export default Wishlist