import  { useContext,useEffect } from 'react'
import CartCard from './CartCard'
import { FaOpencart } from "react-icons/fa";


import CartContext from '../cartcontext/CartContext'
import { Link } from 'react-router-dom';


const Cart = () => {

    const {cartData,setCartData} = useContext(CartContext)
    const {cartPriceArray} = useContext(CartContext)
    const {totalPrice,setTotalPrice} = useContext(CartContext)

    const total = cartPriceArray.reduce(
        (accumulator, {price}) => accumulator + price,
        0,
    );
    


    useEffect(() => {
        // localStorage.setItem("cartId",JSON.stringify(cartData))
        setTotalPrice(total)
    }, [total]);



    
  return (
    <>
        <div>
            {
                cartData.length == 0  ?
                    <div className='h-[600px] w-full select-none'>
                        <div className='flex flex-col justify-center w-[400px] m-auto content-center bg-zinc-50 p-5 rounded-xl mt-[100px]'>
                            <div className='text-[150px] text-pink-500 w-fit m-auto p-3'><FaOpencart/></div>
                            <div className='w-fit m-auto'>
                                <h2 className='w-fit m-auto p-2 text-[25px] font-[700]'>Hey, it feel so light!</h2>
                                <p className='w-fit m-auto text-zinc-600'>There is nothing in your bag. Let's add some items.</p>
                            </div>
                            <Link to="/apifetch" className=' w-[300px] m-auto py-2 px-3 flex justify-center border rounded-xl text-[20px] text-pink-600 border-pink-600 hover:text-white hover:bg-pink-400 active:bg-pink-800 cursor-pointer mt-5'>Add item in cart</Link>
                        </div>
                    </div>
                    :
                    <div>
                        <div className="min-h-[500px]">
                            {
                                cartData.map(({title,price,description,thumbnail,id})=>{
                                    // console.log(id);
                                    return(
                                        <div key={id} className="m-auto w-[1100px]">
                                            <CartCard title={title} price={price} description={description} thumbnail={thumbnail} id={id}/>
                                        </div>
                                    )
                                })
                            }
                        </div>
                        <div className="m-auto w-[1000px] text-[25px] bg-red-600 rounded-lg px-4 py-2 font-[800] text-white flex flex-row justify-between">
                            <div>Total Price</div>
                            <div>RS:- {totalPrice}</div>
                        </div>
                    </div>
            }
        </div>
    </>
  )
}

export default Cart