import  { useContext,useEffect } from 'react'
import CartCard from './CartCard'
import CartContext from '../cartcontext/CartContext'


const Cart = () => {

    const {cartData,setCartData} = useContext(CartContext)
    const {cartPriceArray} = useContext(CartContext)
    const {totalPrice,setTotalPrice} = useContext(CartContext)
    // const {id} = cartPriceArray
    
    // console.log(cartPriceArray)
    const total = cartPriceArray.reduce(
        (accumulator, {price}) => accumulator + price,
        0,
    );


    // setTotalPrice(total)
    // console.log("total" , total);
    // console.log("totalprice",totalPrice);
    useEffect(() => {
        setTotalPrice(total)
    }, [total]);


    // localstorage
    // useEffect(() => {
    //     const cartData = JSON.parse(localStorage.getItem("id"));
    //         if(cartData){
    //             setCartData(cartData)
    //         }

    // }, []);
    
  return (
    <>
        <div>
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
            <div className="m-auto w-[1000px] text-[25px] bg-red-600 rounded-lg px-4 py-2 font-[800] text-white flex flex-row justify-between">
                <div>Total Price</div>
                <div>RS:- {totalPrice}</div>
            </div>
        </div>
    </>
  )
}

export default Cart