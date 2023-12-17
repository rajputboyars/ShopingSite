import React, { useContext,useState } from 'react'
import { AiOutlineCloseSquare } from "react-icons/ai";
import CartContext from '../cartcontext/CartContext';
import { FaPlus } from "react-icons/fa";
import { FaMinus } from "react-icons/fa";


const WishlistCard = ({title,price,thumbnail,description,id}) => {

    const{wishlistData, setWishlistData} = useContext(CartContext)
    const{wishlistTotalPriceArray, setWishlistTotalPriceArray} = useContext(CartContext)
    const{wishlistTotalPrice, setWishlistTotalPrice} = useContext(CartContext)
    const [itemCount, setItemCount] = useState(1);

    const removeItem = (Id) =>{
        const restData = wishlistData.filter(({id}) => id !== Id)
        setWishlistData(restData)
        const restTotal = wishlistTotalPriceArray.filter(({id}) => id !== Id)
        setWishlistTotalPriceArray(restTotal)
    }

    const incCount = () =>{
        setItemCount(itemCount+1)
        setWishlistTotalPrice(wishlistTotalPrice + price)
        console.log("total price inc count",wishlistTotalPrice);
    }
    const decCount = () =>{
        if(itemCount>0){
            setItemCount(itemCount-1)
            setWishlistTotalPrice(wishlistTotalPrice - price)
        }
        
        console.log("total price dec count",wishlistTotalPrice);
    }
  return (
    <>
        <div className="w-[300px] h-[330px] flex flex-col bg-slate-100 m-3 relative">
            <div className=" absolute text-[35px] text-red-600 right-0 top-0" onClick={()=>removeItem(id)}><AiOutlineCloseSquare/></div>
            <div className='m-2'>
                <img className="w-[284px] h-[150px]" src={thumbnail} alt="thumbnail" />
            </div>
            <div className='m-3'>
                <div className='p-1'>{title}</div>
                <div className='p-1'>Price:- {price}</div>
                <div className="p-1 truncate">{description}</div>
            </div>
            <div className='flex flex-row justify-center'>
                <div className=" text-center self-center bg-red-600 p-2 rounded-md text-white" onClick={incCount}><FaPlus/></div>
                <div className=" text-center self-center text-red-600 py-1 font-[800] px-5 rounded-md bg-white">{itemCount}</div>
                <div className=" text-center self-center bg-red-600 p-2 rounded-md text-white" onClick={decCount}><FaMinus/></div>
            </div>
        </div>
    </>
  )
}

export default WishlistCard