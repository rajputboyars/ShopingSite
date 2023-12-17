import React from 'react'
import { FaCartPlus,FaHeart } from "react-icons/fa";
import { Link, NavLink } from 'react-router-dom'

const Header = () => {
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
            <NavLink to="/cart" className={({isActive})=>`p-5 font-[800] text-[30px] tracking-tighter hover:text-orange-300 ${isActive ? "text-orange-400" : "text-red-600"}`}><FaCartPlus/></NavLink>
            <NavLink to="/wishlist" className={({isActive})=>`p-5 font-[800] text-[30px] tracking-tighter hover:text-orange-300 ${isActive ? "text-orange-400" : "text-red-600"}`}><FaHeart/></NavLink>
          </ul>
        </div>
      </div>
    </>
    )
}

export default Header