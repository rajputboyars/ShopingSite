import { useContext,useEffect } from 'react'
import { FaHeart } from "react-icons/fa";
import CartContext from './cartcontext/CartContext'


const Cards = ({
    id,
    title,
    price,
    description,
    thumbnail
}) => {

    const{cartData,setCartData} = useContext(CartContext)
    const{setWishlistData} = useContext(CartContext)
    const{setWishlistTotalPriceArray} = useContext(CartContext)
    const{setCartPriceArray} = useContext(CartContext)



    const addToCart =() =>{
        setCartData((prev)=>[...prev,{id,title,description,price,thumbnail}])
        setCartPriceArray((prev)=>[...prev,{price,id}])
        
        
    }
    const addWishlist = () =>{
        setWishlistData((prev)=> [...prev,{id,title,description,price,thumbnail}])
        setWishlistTotalPriceArray((prev)=>[...prev,{price,id}])
        // console.log(wishlistTotalPrice);
    }
    // localstorage 
    // useEffect(() => {
    //     localStorage.setItem("id",JSON.stringify(cartData))
    // }, [cartData]);
    return (
    <>
        <div className={`w-[500px] h-[220px] flex flex-row bg-gradient-to-r from-indigo-500 rounded-md hover:bg-blue-300 hover:text-black m-2 justify-between`} >
            <div className={`w-[300px] h-[200px] `}>
                <div className={`capitalize text-black text-left p-2 my-2 ml-3 font-bold`}>{title}</div>
                <div className={`capitalize text-black text-left p-1 my-2 ml-3`}>Price :- {price}</div>
                <div className={`capitalize text-black text-left p-1 my-2 ml-3 truncate`}>{description}</div>
                <div className={`capitalize p-1 my-2 ml-3 flex flex-row`}>
                    <button className="bg-red-600 px-3 py-2 rounded-3xl text-white hover:bg-red-500 hover:text-black active:bg-red-700" onClick={addToCart}>Add to Cart</button>
                    <div className=' text-[30px] text-red-600 ml-8 hover:text-red-800 active:text-red-500' onClick={addWishlist}><FaHeart/></div>
                </div>
            </div>
            <div>
                <img src={thumbnail} alt="products.thumbnail" className={`w-[150px] h-[180px] m-[10px]`} />
            </div>
        </div>
    </>
    )
}

export default Cards