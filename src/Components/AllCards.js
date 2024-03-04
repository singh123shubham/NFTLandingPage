import React from 'react'
import Card from "./Card"

const AllCards = () => {
  return (
    <>
    <div className='m-10'>
    <div className='absolute left-1/2 transform -translate-x-1/2 -translate-y-1/2'>
      <h1 className=' text-lg  font-bold bg-lime-500 w-40 rounded-lg flex justify-center'>
        Feature
      </h1>
    </div>

    <div className='flex flex-wrap w-full justify-center border-4 border-lime-500 rounded-lg bg-black '>
       <Card/>  
       <Card/>
       <Card/>        
       <Card/>
       <Card/>
       <Card/>
    </div >
    </div>
    </>
  )
}


export default AllCards

