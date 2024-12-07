

import { useState } from 'react'
import './App.css'
import foodData from './Data'


function App() {

  const [data,setData] =useState(foodData)

  const handelClick =(foodClick)=>{
  console.log(foodClick)
  let filterData = foodData.filter((item)=>{
    return item.category == foodClick
  })
  setData(filterData)
  }

  return (
    <>
    <div className=' bg-gray-300 p-4'>
      <div className='container'>
        <div className='flex gap-5 mb-5 p-3 rounded-lg  m-auto bg-[#FB923C] w-[600px] '>
         <div className=' flex items-center  m-auto gap-4'>
          <button onClick={()=> setData(foodData)}  className='hover:text-white transition-[.4s] text-lg font-medium'>All</button>
          <button onClick={()=> handelClick("Dinner")}  className='hover:text-white transition-[.4s] text-lg font-medium'>Dinner</button>
          <button onClick={()=> handelClick("Lunch")}  className='hover:text-white transition-[.4s] text-lg font-medium'>Lunch</button>
          <button onClick={()=> handelClick("appetizer")}  className='hover:text-white transition-[.4s] text-lg font-medium'>Appetizer</button>
         </div>
        </div>
        <div className='flex gap-5 flex-wrap'>
          {
            data.map((item)=>(

          <div className="box group relative w-[400px] h-[200px] flex  gap-5 bg-[#ffffff]  rounded-[10px] overflow-hidden ">
            <div className="box_img  w-[150px] h-[200px]  ">
              <img src={item.photo} alt="image" className='group-hover:scale-105 transition-[.3s]' />
            </div>
                {item.discount&&
                    <div className='offer absolute py-2 px-2 bg-orange-400 top-0 right-0 text-[12px] font-normal text-white overflow-hidden'>SALE</div>
                }

            <div className="foodData ">
              <h1 className='text-[18px] group-hover:text-[#FB923C] transition-[.4s] pt-5 font-semibold text-slate-600]'>{item.name}</h1>
              <p className='my-3 text-[14px] w-[200px] font-medium text-slate-600'>{item.details}</p>
              <h2 className='mt-[20px] flex flex-col text-[16px] font-medium text-slate-300'><span className={item.discount?'text-gray-400 line-through':"text-black"}> {item.price}$</span> 
              {item.discount&& <span className='text-orange-500 '> {item.discount_price}$</span>}</h2>
              <h2 className='text-[16px] font-medium text-black'>{item.category}</h2>
            </div>
          </div>

            ))
          }
        </div>
      </div>
      </div>
    </>
  )
}

export default App
