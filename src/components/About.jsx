import React from 'react'
import { Link } from 'react-router-dom'

const About = () => {
  return (
    <>
        <div className='flex flex-row justify-between mx-5 my-8'>
        <div>
          <img className='w-[800px] rounded-md' src="https://t3.ftcdn.net/jpg/02/41/43/18/360_F_241431868_8DFQpCcmpEPVG0UvopdztOAd4a6Rqsoo.jpg" alt="Cart" />
        </div>
        <div className='flex flex-col ml-[50px]'>
          <div className='font-bold text-[40px] tracking-tight mt-[50px]'>ABOUT US</div>
          <div className='text-[15px] font-semibold h-[200px] w-[900px] py-[20px]'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quas repellat veniam quisquam est dolorem nemo? Tenetur, ratione! Nulla, totam natus.
          Lorem ipsum dolor sit amet consectetur adipisicing elit. A hic exercitationem optio in repellat aliquid obcaecati excepturi omnis facere inventore?
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit quas itaque pariatur perferendis rem vel culpa cum voluptates deleniti illo tenetur repellat, officia optio odit quidem amet voluptatem qui hic unde dolorum modi maiores quasi consequatur eligendi? Assumenda totam modi excepturi voluptatum quo nihil officia? Nam dolores laboriosam hic repellendus!            
          </div>
          <Link to="/apifetch" className='p-5 font-bold bg-violet-600	 hover:bg-violet-500 rounded-md text-[25px] text-white w-[200px] text-center '>  
              Products
          </Link>
          
        </div>
      </div>
    </>
  )
}

export default About