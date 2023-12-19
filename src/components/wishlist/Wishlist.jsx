import React, { useContext,useEffect, useMemo, useState } from 'react'
import CartContext from '../cartcontext/CartContext'
import WishlistCard from './WishlistCard'
import { Link } from 'react-router-dom';
import { GiBeachBag } from "react-icons/gi";

const Wishlist = () => {
    const {wishlistData,setWishlistData} = useContext(CartContext)
    const {wishlistTotalPriceArray} = useContext(CartContext)
    const{wishlistTotalPrice, setWishlistTotalPrice} = useContext(CartContext)

    // console.log("wishlistprice",wishlistTotalPriceArray)
    const total = wishlistTotalPriceArray.reduce(
        (accumulator, {price}) => accumulator + price,
        0,
      );
    // console.log("total",total);
    // console.log("wishlistTotalPrice",wishlistTotalPrice);
    // console.log("wishlistTotalPricearray",wishlistTotalPriceArray);
    // console.log("wishlistdata",wishlistData);

    // localStorage
  
// let wish =  getLocalstorageData();
//    console.log(wish)
//    if(wish.length > 0){
//     wishlistData = wish || []
//    }


  


    useEffect(() => {
        
      

const wishlistLocalData =   JSON.parse(localStorage.getItem("wishlistId")) || []
  if(wishlistLocalData.length != 0){
 setWishlistData(wishlistLocalData)
  }
  setWishlistTotalPrice(total)

        // getLocalstorageData()
    }, []);

  return (
    <>
        <div>
            {
                wishlistData.length == 0  ?
                <div className='h-[600px] w-full select-none'>
                    <div className='flex flex-col justify-center w-[400px] m-auto content-center bg-zinc-50 p-5 rounded-xl mt-[100px] text-center'>
                        <div className='text-[150px] text-pink-500 w-fit m-auto p-3'><GiBeachBag/></div>
                        <div className='w-fit m-auto'>
                            <h2 className='w-fit m-auto p-2 text-[25px] font-[700]'>Hey, YOUR WISHLIST IS EMPTY!</h2>
                            <p className='w-fit m-auto text-zinc-600'>Add items that you like to your wishlist. Review them anytime and easily move them to the bag.</p>
                        </div>
                        <Link to="/apifetch" className=' w-[300px] m-auto py-2 px-3 flex justify-center border rounded-xl text-[20px] text-pink-600 border-pink-600 hover:text-white hover:bg-pink-400 active:bg-pink-800 cursor-pointer mt-5'>Continue Shooping</Link>
                    </div>
                </div>
                :
                <div className="flex flex-col flex-wrap w-full m-auto bg-zinc-100 min-h-[500px]">
                    <div className="flex flex-row flex-wrap justify-center">
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
            }
        </div>
        
    </>
  )
}

export default Wishlist