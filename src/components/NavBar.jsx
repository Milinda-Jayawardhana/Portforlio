import React, { useState } from 'react'
//import { Link } from 'react-scroll'
import {FaTimes} from 'react-icons/fa';
import { CiMenuFries } from 'react-icons/ci';
import { Outlet, Link } from "react-router-dom"

export default function NavBar() {

  const [click, setClick] = useState(false);
  const handleClick = ()=> setClick(!click);
  
  const content = <>
    <div className='absolute left-0 right-0 block w-full transition lg:hidden md:hidden sm:hidden top-16 bg-slate-900'>
      <ul className='p-20 py-10 text-xl text-center '>
        <Link to = "/">
        <li className='py-4 my-4 border-b border-blue-800 hover:bg-slate-800 hover:rounded'>Home</li>
        </Link>
        <Link to = "/about">
          <li className='py-4 my-4 border-b border-blue-800 hover:bg-slate-800 hover:rounded'>About</li>
        </Link>
        <Link to = "/services">
          <li className='py-4 my-4 border-b border-blue-800 hover:bg-slate-800 hover:rounded'>Services</li>
        </Link>
        <Link to = "/projects">
          <li className='py-4 my-4 border-b border-blue-800 hover:bg-slate-800 hover:rounded'>Projects</li>
        </Link>
        <Link to = "/contact">
          <li className='py-4 my-4 border-b border-blue-800 hover:bg-slate-800 hover:rounded'>Contact</li>
        </Link>
      </ul>

    </div>
  </>
  return (
    
    <>
      <nav>
        <div className='flex justify-between px-8 py-4 text-white bg-slate-900 lg:px-20 md:px-10 h-10vh'>
          <div className='flex items-center flex-1'>
            <span className='text-3xl font-bold '>MJ</span>
          </div>
          <div className='items-center justify-end hidden font-normal lg:flex md:flex sm:flex lg:flex-1'>
            <div className=' flex-10'>
              <ul className=' flex gap-8  text-[18px]'>
                <Link to = "/">
                  <li className='transition border-b-2 cursor-pointer hover:text-fuchsia-600 border-slate-900 hover:border-fuchsia-600'>Home</li>
                </Link>
                <Link to = "/about">
                  <li className='transition border-b-2 cursor-pointer hover:text-fuchsia-600 border-slate-900 hover:border-fuchsia-600'>About</li>
                </Link>
                <Link to = "/services">
                  <li className='transition border-b-2 cursor-pointer hover:text-fuchsia-600 border-slate-900 hover:border-fuchsia-600'>Services</li>
                </Link>
                <Link to = "/projects">
                  <li className='transition border-b-2 cursor-pointer hover:text-fuchsia-600 border-slate-900 hover:border-fuchsia-600'>Projects</li>
                </Link>
                <Link to = "/contact">
                  <li className='transition border-b-2 cursor-pointer hover:text-fuchsia-600 border-slate-900 hover:border-fuchsia-600'>Contact</li>
                </Link>
              </ul>
            </div>
          </div>
          <div>
            {click && content}
          </div>

          <button className='block sm:hidden transtion' onClick={handleClick}>
            {click? <FaTimes/> : <CiMenuFries/>}
          </button>
          
        </div>
      </nav>

      <Outlet></Outlet>
    </>
  )
}
