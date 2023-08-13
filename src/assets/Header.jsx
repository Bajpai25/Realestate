import React from 'react'
import {BiHomeCircle} from "react-icons/bi"
function Header() {
  return (
    <div className=' bg-white  flex flex-col flex-wrap md:h-4 md:flex md:flex-row   justify-between md:mt-2'>
    <h1 className='text-2xl font-bold flex flex-row  text-purple-700'>
    <BiHomeCircle className='w-8 h-8 ml-2 text-purple-700'/> EstateEnvision</h1>
    <h1 className='text-center m-2 md:mt-2 font-semibold hover:bg-purple-700 hover:text-white h-8 rounded-lg w-16'>Rent</h1>
    <h1 className='text-center m-2 md:mt-2 font-semibold hover:bg-purple-700 hover:text-white h-8 rounded-lg w-16'>Buy</h1>
    <h1 className='text-center m-2 md:mt-2 font-semibold hover:bg-purple-700 hover:text-white h-8 rounded-lg w-16'>Sell</h1>
    <div className='flex flex-row ml-2 '>
    <button className='bg-purple-700 text-center rounded-lg w-20 h-10 text-lg font-sans text-white mr-7'>Login</button>
    <button className='bg-purple-700 text-lg text-center w-20 h-10 rounded-lg  mr-2 font-sans text-white'>Signup</button>
    </div>
    </div>
  )
}

export default Header