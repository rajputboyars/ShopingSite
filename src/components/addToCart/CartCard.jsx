import { useContext,useState } from 'react'
import CartContext from '../cartcontext/CartContext'
import { FaPlus } from "react-icons/fa";
import { FaMinus } from "react-icons/fa";




const CartCard = ({title,price,thumbnail,description,id}) => {

    const{cartData,setCartData} = useContext(CartContext)
    const{cartPriceArray,setCartPriceArray} = useContext(CartContext)
    const [itemCount, setItemCount] = useState(1);
    const {totalPrice,setTotalPrice} = useContext(CartContext)


    const removeItem = (Id) =>{
        const restData = cartData.filter(({id}) => id !== Id)
        setCartData(restData)
        const restTotal = cartPriceArray.filter(({id}) => id !== Id)
        setCartPriceArray(restTotal)
        // localStorage.removeItem(`id`)
    }
    const incCount = () =>{
        setItemCount(itemCount+1)
        setTotalPrice(totalPrice + price)
        // console.log("total price inc count",totalPrice);
    }
    const decCount = () =>{
        if(itemCount>0){
            setItemCount(itemCount-1)
            setTotalPrice(totalPrice - price)
        }
        // console.log("total price dec count",totalPrice);
    }
    
  return (
    <>
        <div className="flex flex-row w-[1000px] h-[100px] align-middle bg-zinc-100 p-[10px] my-2 justify-between text-left m-auto">
            <div>
                <img className="h-[80px]" src={thumbnail} alt="image" />
            </div>
            <div className='flex flex-row justify-between w-[700px] self-center'>
                <div className=" h-fit w-fit align-middle items-center">
                    {title}
                </div>
                <div className=" h-fit w-fit align-middle truncate px-5">
                    {description}
                </div>
                <div className=" h-fit w-fit align-middle">
                    Price :- {price * itemCount}
                </div>
                <div className='flex flex-row'>
                    <div className=" text-center self-center bg-red-600 p-2 rounded-md text-white" onClick={incCount}><FaPlus/></div>
                    <div className=" text-center self-center text-red-600 py-1 font-[800] px-3 rounded-md bg-white">{itemCount}</div>
                    <div className=" text-center self-center bg-red-600 p-2 rounded-md text-white" onClick={decCount}><FaMinus/></div>
                </div>
            </div>
                <div className=" h-fit cursor-pointer bg-red-600 hover:bg-red-500 active:bg-red-700 text-white p-5 rounded-md" onClick={()=>removeItem(id)}>X</div>
        </div>
    </>
  )
}

export default CartCard