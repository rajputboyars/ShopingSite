import { useCallback, useContext,useEffect, useMemo, useState } from 'react'
import { FaHeart } from "react-icons/fa";
import CartContext from './cartcontext/CartContext'
import { Link } from 'react-router-dom';
import { CiHeart } from "react-icons/ci";



const Cards = ({
    id,
    title,
    price,
    description,
    thumbnail, 
    wishlistflag,
   
}) => {
     const [flag, setFlag] = useState(false)
    const{wishlistData,setWishlistData} = useContext(CartContext)
    const{wishlistTotalPrice,setWishlistTotalPriceArray} = useContext(CartContext)
    
    // console.log(flag);

   

    // const addToCart =() =>{
    //     setCartData((prev)=>[...prev,{id,title,description,price,thumbnail}])
        // setCartPriceArray((prev)=>[...prev,{price,id}])
    // }



    const addWishlist = () =>{
        let wishListFlag = true;
        setFlag(true)
        const updateWishlistData = [...wishlistData, {id,title,description,price,thumbnail,wishListFlag}]
        if(wishlistData.find((x)=>x.id === id) && wishlistTotalPrice.find((x)=>x.id === id)){
            setWishlistData(wishlistData)
            setWishlistTotalPriceArray(wishlistTotalPrice)
        }
        else{
            setWishlistData( [...updateWishlistData])
            setWishlistTotalPriceArray((prev)=>[...prev,{price,id}])
        }
        localStorage.setItem("wishlistItem", JSON.stringify(updateWishlistData))
        // setWishlistData((prev)=> [...prev,{id,title,description,price,thumbnail,flag}])
        // setWishlistTotalPriceArray((prev)=>[...prev,{price,id}])
        // console.log(wishlistTotalPrice);
        // console.log(wishlistData);
       
    }
  
    useEffect(()=>{
        setFlag(wishlistflag)
      
    })
    // console.log(wishlistData);
    return (
    <>
        <div className={`w-[500px] h-[220px] flex flex-row bg-gradient-to-r from-indigo-500 rounded-md hover:bg-blue-300 hover:text-black m-2 justify-between`} >
            <div className={`w-[300px] h-[200px] `}>
                <Link to={`/id/${id}`} >
                    <div className={`capitalize text-black text-left p-2 my-2 ml-3 font-bold`}>{title}</div>
                    <div className={`capitalize text-black text-left p-1 my-2 ml-3`}>Price :- {price}</div>
                    <div className={`capitalize text-black text-left p-1 my-2 ml-3 truncate`}>{description}</div>
                </Link>
                <div className="w-[250px] uppercase p-2 m-auto border border-white flex flex-row justify-center mt-6 rounded-lg font-[600] text-red-600 bg-yellow-300 hover:bg-yellow-600 hover:text-white active:text-red-600"onClick={addWishlist}>
                {/* <button className="bg-red-600 px-3 py-2 rounded-3xl text-white hover:bg-red-500 hover:text-black active:bg-red-700" onClick={addToCart}>Add to Cart</button> */}
                    <div className="mx-2 align-bottom self-center text-[25px]" >
                        {
                            flag ? <FaHeart/> : <CiHeart/>
                        }
                    </div>
                    <div className="mx-3"> Wishlist</div>
                </div>
            </div>
            <div>
                <Link to={`/id/${id}`} >
                    <img src={thumbnail} alt="products.thumbnail" className={`w-[150px] h-[180px] m-[10px]`} />
                </Link>
            </div>
        </div>
    </>
    )
}

export default Cards