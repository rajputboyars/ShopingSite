import {useEffect, useState} from 'react'
import CartContext from './CartContext'
import { data } from 'autoprefixer';


const CartContextProvider = ({children}) => {
    const [cartData, setCartData] = useState([]);
    const [wishlistData, setWishlistData] = useState([]);
    const [cartPriceArray, setCartPriceArray] = useState([]);
    const [wishlistTotalPriceArray, setWishlistTotalPriceArray] = useState([]);
    const [totalPrice, setTotalPrice] = useState(0);
    const [wishlistTotalPrice, setWishlistTotalPrice] = useState(0);
    const [cardsData, setCardsdata] = useState([]);
    const [input, setInput] = useState("")



  

  

    
  return (
    <CartContext.Provider value={{input, setInput,wishlistTotalPrice, setWishlistTotalPrice,cartData, setCartData,wishlistData,setWishlistData,cartPriceArray,setCartPriceArray,wishlistTotalPriceArray,setWishlistTotalPriceArray,totalPrice, setTotalPrice ,cardsData, setCardsdata}}>
        {children}
    </CartContext.Provider>
  )
}

export default CartContextProvider