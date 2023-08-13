import React, { useState } from 'react'
import propertydata from './data'
import {FaLocationDot} from "react-icons/fa6"
import {IoBedOutline} from "react-icons/io5"
import {LuBath} from "react-icons/lu"
import {MdLandscape} from "react-icons/md"
function Main() {
  const [location,setlocation]=useState('Any');
  const [propertytype,setpropertytype]=useState('Any');
  const [date,setdate]=useState('Any');
  const [price,setprice]=useState('Any');
  return (
    <div className='bg-gray-200'>
      <div className='text-3xl font-semibold text-center mt-8 mb-4 '>Search properties to rent</div>
      <div className=' md:flex md:flex-row md:flex-wrap justify-evenly items-center rounded-md border-2
       border-white bg-white shadow-gray-300 shadow-lg 
      mr-8 ml-8 '>
        <div className='flex flex-col  shadow-gray-300 shadow-lg m-2 p-2 rounded-md '>
          <p className='text-gray-500'>Location</p>
          <select value={location} onChange={(e)=>{
            setlocation(e.target.value)
          }} className='text-lg font-semibold'>
            <option value="Any">Any</option>
            <option value="London">London</option>
            <option value="India">India</option>
            <option value="Australia">Australia</option>
            <option value="Dubai">Dubai</option>
            <option value="America">America</option>
          </select>
        </div>
        <div className='flex flex-col  shadow-gray-300 shadow-lg m-2 p-2 rounded-md'>
          <p>Date</p>
          <select value={date} onChange={(e)=>{
            setdate(e.target.value)
          }}className='text-lg font-semibold'>
            <option value="Any">Select Move-in Date</option>
            <option value="2 weeks">2 weeks</option>
            <option value="3 months">3 months</option>
            <option value="6 months">6 months</option>
            <option value="8 months">8 months</option>
            <option value="1 year">1 year</option>
          </select>
        </div>
        <div className='flex flex-col  shadow-gray-300 shadow-lg m-2 p-2 rounded-md'>
          <p>Price</p>
          <select value={price} onChange={(e)=>{
            setprice(e.target.value);
          }} className='text-lg font-semibold '>
            <option value="Any">Any</option>
            <option value="$200,000">$200,000</option>
            <option value="$400,000">$400,000</option>
            <option value="$500,000">$500,000</option>
            <option value="$600,000">$600,000</option>
            <option value="$800,000">$800,000</option>
          </select>
        </div>
        <div className='flex flex-col shadow-gray-300 shadow-lg m-2 p-2 rounded-md'>
          <p>Property Type</p>
          <select value={propertytype} onChange={(e)=>{setpropertytype(e.target.value)}} className='text-lg font-semibold'>
            <option value="Any">Any</option>
            <option value="House">House</option>
            <option value="Land">Land</option>
            <option value="Apartment">Apartment</option>
            <option value="Condo">Condo</option>
          </select>
        </div>
        <button className='bg-purple-700 text-center rounded-lg w-20 h-10 text-lg font-sans text-white'>Search</button>
      </div>
      <div className='flex flex-row flex-wrap justify-around'>
        {propertydata
        .filter((item)=>(propertytype==="Any"|| item.propertyType===propertytype)&&
        (location==="Any"||item.location===location)&&(price==="Any"|| item.price===price)&&(date==="Any"|| item.date===date))
        .map((item)=>(
            <div key={item.id} className='bg-white w-[400px] pb-3 m-3  text-black shadow-lg shadow-gray-400'>
            <img src={item.imageUrl} className='drop-shadow-lg' alt={item.imageUrl}></img>
            <div className='text-purple-600 text-2xl font-semibold mt-2 mb-2 pl-2'>{item.price}<span className='text-gray-300 text-lg font-mono'>/year</span></div>
            <div className='border-b-2 flex flex-row border-gray-200 text-4xl font-bold text-[#333333]'>
            <FaLocationDot className='text-purple-600 mb-4'/>{item.location}</div>
            <p className='flex flex-row  justify-around m-1'>
            <p className='flex flex-row font-mono text-lg md:text-xl pt-1.5 text-gray-600'><IoBedOutline className='text-purple-600 
            h-6 w-6 mt-1 mr-2'/>{item.bedrooms} beds</p>
            <p className='flex flex-row font-mono text-lg md:text-xl pt-1.5 text-gray-600'><LuBath className='text-purple-600 mr-2 h-6 w-6 mt-1'/>{item.bathrooms} bathrooms</p>
            <p className='flex flex-row font-mono text-lg md:text-xl pt-1.5 text-gray-600'><MdLandscape className='text-purple-600 mr-2 h-6 w-6 mt-1'/>{item.area} m²</p>
            </p>
            <p className='text-lg text-center font-semibold text-white bg-purple-600 rounded-md w-26 h-10 p-1 m-1'>{item.propertyType}</p>
            </div>
        ))}
        </div>
        </div>
  )
      }
export default Main