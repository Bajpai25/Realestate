import { useState } from "react"
import React from 'react'
import {BiHomeCircle} from "react-icons/bi"
import {GiHamburgerMenu} from "react-icons/gi"
function Header() {
const [click,setclick]=useState(false);
const handleclick=()=>{
  setclick(!click);
}

  return (
    <div className='  flex flex-col flex-wrap h-full md:flex md:flex-row text-xl  justify-between md:mt-2'>
    <h1 className='text-2xl font-bold flex flex-row justify-between  text-purple-700'>
    <BiHomeCircle className='w-8 h-full ml-2 text-purple-700'/> EstateEnvision
    <GiHamburgerMenu onClick={handleclick} className=" align-right md:hidden h-full w-10 text-purple-700" /></h1>
    <div className={`md:flex md:space-x-4 ${
          click ? 'mt-2 md:mt-0' : 'hidden'
        } md:block`}>
    <h1 className='text-center  m-2 md:mt-2 font-semibold hover:bg-purple-700 hover:text-white h-full rounded-lg w-16'>Rent</h1>
    <h1 className='text-center  m-2 md:mt-2 font-semibold hover:bg-purple-700 hover:text-white h-full rounded-lg w-16'>Buy</h1>
    <h1 className='text-center  m-2 md:mt-2 font-semibold hover:bg-purple-700 hover:text-white h-full rounded-lg w-16'>Sell</h1>
    </div>
    <div className='flex flex-row flex-wrap ml-2 '>
    <button className='bg-purple-700 text-center rounded-lg w-20 h-10 text-lg font-sans text-white mr-7'>Login</button>
    <button className='bg-purple-700 text-lg text-center w-20 h-10 rounded-lg  mr-2 font-sans text-white'>Signup</button>
    </div>
    </div>
  )
}

export default Header