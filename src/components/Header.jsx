import React, { useContext } from 'react'
import { FaCartPlus,FaHeart } from "react-icons/fa";
import { Link, NavLink } from 'react-router-dom'
import CartContext from './cartcontext/CartContext';

const Header = () => {
  const{wishlistData} =useContext(CartContext)
  const{cartData} =useContext(CartContext)
  return (
    <>
      <div className="flex flex-row justify-between bg-slate-100 w-full">
        <div className="text-red-600 p-5 font-bold text-[20px]">LOGOTYPE</div>
        <div >
          <ul className='flex flex-row'>
            <NavLink to="/" className={({isActive})=>`p-5 font-semibold text-[20px] tracking-tighter hover:text-orange-300 ${isActive ? "text-orange-400" : "text-gray-600"}`}>HOME</NavLink>
            <NavLink to={`/apifetch`} className={({isActive})=>`p-5 font-semibold text-[20px] tracking-tighter hover:text-orange-300 ${isActive ? "text-orange-400" : "text-gray-600"}`}>PRODUCTS</NavLink>
            <NavLink to={`/categorie`} className={({isActive})=>`p-5 font-semibold text-[20px] tracking-tighter hover:text-orange-300 ${isActive ? "text-orange-400" : "text-gray-600"}`}>CATEGORIES</NavLink>
            <NavLink to="/about" className={({isActive})=>`p-5 font-semibold text-[20px] tracking-tighter hover:text-orange-300 ${isActive ? "text-orange-400" : "text-gray-600"}`}>ABOUT</NavLink>
            <NavLink to="/contact" className={({isActive})=>`p-5 font-semibold text-[20px] tracking-tighter hover:text-orange-300 ${isActive ? "text-orange-400" : "text-gray-600"}`}>CONTACT US</NavLink>
            <NavLink to="/cart" className={({isActive})=>`p-5 font-[800] text-[30px] tracking-tighter hover:text-orange-300 ${isActive ? "text-orange-400" : "text-red-600"}`}>
              {
                <div className='flex flex-row relative'>
                <FaCartPlus/>
                {cartData.length == 0 ? "" : <div className='bg-red-500 p-0 px-2 align-top text-[15px] text-white rounded-full absolute left-6 top-[-10px]'>{cartData.length}</div>}
              </div>
              }
            </NavLink>
            <NavLink to="/wishlist" className={({isActive})=>`p-5 font-[800] text-[30px] tracking-tighter hover:text-orange-300 ${isActive ? "text-orange-400" : "text-red-600"}`}>
              <div className='flex flex-row relative'>
                <FaHeart/>
                {wishlistData.length == 0 ? "" : <div className='bg-red-500 p-0 px-2 align-top text-[15px] text-white rounded-full absolute left-6 top-[-10px]'>{wishlistData.length}</div>}
              </div>
            </NavLink>
          </ul>
        </div>
      </div>
    </>
    )
}

export default Header