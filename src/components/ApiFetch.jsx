import { useCallback, useEffect, useState,useLayoutEffect} from 'react'
import Cards from './Cards'
import { Link } from 'react-router-dom';
import { data } from 'autoprefixer';


const ApiFetch = () => {
    const [cardsData, setCardsdata] = useState([]);
    const [input, setInput] = useState("")
    const [data, setData] = useState([]);




    const productsData = async() => {
      const response = await fetch(`https://dummyjson.com/products/search?q=${input}`)
      const productsdata = await response.json()
      const Data = productsdata.products
      setCardsdata(Data)
      const wishlistLocalData =   JSON.parse(localStorage.getItem("wishlistItem")) || []
      if(wishlistLocalData.length > 0){
        let result = Data.filter(o1 => !wishlistLocalData.some(o2 => o1.id === o2.id));
        const updateArr =[ ...wishlistLocalData, ...result]
        cardsData.length = 0;
           setCardsdata(updateArr.sort((a,b)=> a.id-b.id))
          console.log(updateArr, "updatearrr=====")
      }
      
      

      // localStorage.setItem("cardsData",JSON.stringify(Data))

    };
    // const wishlistLocalData =   JSON.parse(localStorage.getItem("wishlistId")) || []
    // console.log(wishlistLocalData);
    localStorage.setItem("cardsData",JSON.stringify(data))
    const localdata = JSON.parse(localStorage.getItem("cardsData"))


    useEffect(() => {
      productsData()
    },[]);
  return (
    <>
        <div>
          <div className="w-[600px] m-auto my-[20px] flex" >
            <input className=" pl-5 p-[10px] w-[500px] border border-zinc-400 rounded-3xl" type="text" value={input} onChange={(e) => setInput(e.target.value)}/>
            <button className="p-[10px] bg-blue-600 hover:bg-blue-500 active:bg-blue-800 mx-1 rounded-3xl text-white w-[100px]"onClick={productsData}>Search</button>
          </div>
        </div>
        {
          cardsData ?
        <div className={`w-[1600px] h-fit p-[10px] m-auto flex flex-wrap `}>
          {
            cardsData.map(({id,title,price,description,thumbnail, wishListFlag}) => {
              return(
                <div key={id}>
                  <Cards title={title} price={price} wishlistflag={wishListFlag} description={description} thumbnail={thumbnail} id={id} />
                </div>
              )
            })
          }
        </div>
        :
        <div className='w-full h-[800px] bg-white'>
          <div className='text-[100px]'></div>
        </div>
        }
    </>
  )
}

export default ApiFetch