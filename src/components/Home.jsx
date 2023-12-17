import React from 'react'
import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <>  
      <div className='flex flex-row justify-between mx-5 my-8'>
        <div className='flex flex-col text-left ml-[50px]'>
          <div className='font-bold text-[40px] tracking-tight mt-[100px]'>ONLINE SHOPPING</div>
          <div className='text-[15px] font-semibold h-[200px] w-[300px] py-[20px]'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quas repellat veniam quisquam est dolorem nemo? Tenetur, ratione! Nulla, totam natus.            
          </div>
          <Link to="/apifetch" className='p-5 font-bold bg-violet-600	 hover:bg-violet-500 rounded-md text-[25px] text-white w-[200px] text-center '>  
              Products
          </Link>
          
        </div>
        <div>
          <img className='w-[800px] rounded-md' src="https://p1.pxfuel.com/preview/685/460/964/shopping-cart-shopping-purchasing-candy.jpg" alt="Cart" />
        </div>
      </div>
    </>
    
  )
}

export default Home