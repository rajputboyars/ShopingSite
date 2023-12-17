import React, { useContext, useState } from 'react'
import { useParams } from 'react-router-dom'
import { useEffect } from 'react'
import CartContext from './cartcontext/CartContext'

const Card = () => {
    const [cardData, setCardData] = useState({})
    const {id} = useParams()
    const {setCartData} = useContext(CartContext)
    const {
        images,
        title,
        price,
        description,
        thumbnail
    } = cardData

    const renderData = async()=>{
        const response = await fetch(`https://dummyjson.com/products/${id}`)
        const data = await response.json()
        // console.log("card",data);
        setCardData(data)

    }
    const handelclick = () => {
        setCartData((prev)=>[...prev,{id,title,description,price,thumbnail,images}])
    }
    useEffect(() => {
        
    renderData()
        
    },[]);
  return (
    <>
        <div className='bg-zinc-900'>
            <div className='w-11 m-auto'>
                <h1>{id}</h1>
            </div>
            <div className={`w-[800px] h-[500px] bg-slate-200 flex flex-row justify-between bg-gradient-to-l from-indigo-500 hover:bg-blue-200 hover:text-white m-auto rounded-lg`}>
                <div >
                    <img className={`w-[450px] h-[380px] m-[10px] rounded-md`} src={thumbnail} alt="thumbnail" />
                    <div className='flex flex-row m-[10px] justify-between'>

                        {images &&
                            images.map((image, index)=>{
                                return(
                                    <div key={index}>
                                        <img className='h-[70px] w-[80px] m-2' src={image} alt={`${image}`} />
                                    </div>
                                )
                            })
                        }
                    </div>
                    {/* <div>
                        <div><img src={images[4]} alt="" /></div>
                    </div> */}
                </div>
                <div className={`w-[300px] flex flex-col h-[450px] m-[10px]`}>
                    <div className={`text-[40px] pt-[20px] leading-none h-[180px] max-w-[280px]`}>{title}</div>
                    <div className='flex flex-row'>
                        <div className={`font-[500] text-[20px] p-3 pl-0 text-red-500 self-end`}>Rs:-</div>
                        <div className={`font-[500] text-[40px] p-3 pl-0 text-red-500 self-end`}> {price}</div>
                    </div>
                    <div className={`underline font-[500] p-2`}>Description</div>
                    <div className={`h-[300px] p-2`}>{description}</div>
                    <button className={`bg-yellow-500 rounded-md text-black p-2 text-[15px] font-[600] hover:bg-yellow-400 hover:text-white active:bg-yellow-700 active:text-black`} onClick={handelclick}>Add to Cart</button>
                </div>
            </div>
        </div>
    </>
  )
}

export default Card