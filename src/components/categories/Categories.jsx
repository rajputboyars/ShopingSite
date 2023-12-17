import React, { useState } from 'react'
import { useEffect } from 'react'
import CategoriesProducts from './CategoriesProducts'

const Categories = () => {
    const [categories,setCategories] = useState([])
    const [productCategorie,setProductCategorie] =useState()
    const categoriedata = async()=>{
        const response = await fetch("https://dummyjson.com/products/categories")
        const data = await response.json()
        setCategories(data)
        // console.log(categorie);
    }
    const handleclick = (categorie) =>{
        setProductCategorie(categorie)
    }
    // console.log("productcategorie",productCategorie);

    useEffect(() => {
        categoriedata()
    }, []);
  return (
    <>
        <div className="flex flex-row">
            <div className="bg-zinc-100">
                <div className="text-[30px] m-2 px-4 ">Category</div>
                <div className="w-[300px] h-screen  flex flex-col m-2 float-left overflow-y-scroll rounded-md">
                    {
                        categories.map((categorie,index)=>{
                            return(
                                <div key={index} className="p-2 m-1 hover:bg-zinc-400" onClick={()=>handleclick(categorie)}>{categorie}</div>
                                )
                            })
                        }
                </div>
            </div>
            <div className='flex flex-col w-full'>
                <div className="text-zinc-600 text-[45px] my-3 m-auto">Shop by Category</div>
                <div className="m-auto">
                    <div className="bg-zinc-100 w-[1100px]  rounded-md">
                        {productCategorie && <CategoriesProducts categorie={productCategorie}/>
            }        </div>
                </div>
            </div>
        </div>
    </>
  )
}

export default Categories