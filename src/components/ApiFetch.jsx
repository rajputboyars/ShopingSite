import { useEffect, useState} from 'react'
import Cards from './Cards'
import { Link } from 'react-router-dom';


const ApiFetch = () => {
    const [cardsData, setCardsdata] = useState([]);
    const [input, setInput] = useState("")
  
    const productsData = async() => {
      const response = await fetch(`https://dummyjson.com/products/search?q=${input}`)
      const productsdata = await response.json()
      const Data = productsdata.products
      setCardsdata(Data)
      // console.log(data);
    };

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
        <div className={`w-[1600px] h-fit p-[10px] m-auto flex flex-wrap `}>
        {
          cardsData.map(({id,title,price,description,thumbnail}) => {
            return(
              <div key={id}>

              <Link to={`/id/${id}`} >
                <Cards title={title} price={price} description={description} thumbnail={thumbnail} id={id} />
              </Link>
              </div>
            )
            
          })
        }
          
      </div> 
      
    </>
  )
}

export default ApiFetch