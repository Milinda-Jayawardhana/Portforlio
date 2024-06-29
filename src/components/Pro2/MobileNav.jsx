import React, { useState } from 'react'
import { CiMenuFries } from 'react-icons/ci';
import { Link } from "react-router-dom"
import { useLocation } from 'react-router-dom';
import { Sheet, SheetContent, SheetTrigger } from '../ui/sheet';

export default function MobileNav() {
  const location = useLocation();
  const currentPath = location.pathname;

  const getActiveClass = (path) => {
    return currentPath === path 
      ? 'text-orange-600' 
      : 'hover:text-orange-600 ';
  };
  
  const [click, setClick] = useState(false);
  const handleClick = ()=> setClick(!click);
  /*
  const content = <>
    <div className='absolute right-0 justify-end block w-2/3 transition bg-black top-20'>
      <ul className='p-10 py-4 text-xl text-center '>
        <Link to = "/">
        <li className='py-4 my-4 border-b border-orange-600 hover:slate-200 hover:rounded'>Home</li>
        </Link>
        <Link to = "/resume">
          <li className='py-4 my-4 border-b border-orange-600 hover:bg-slate-200 hover:rounded'>Resume</li>
        </Link>
        <Link to = "/services">
          <li className='py-4 my-4 border-b border-orange-600 hover:bg-slate-200 hover:rounded'>Services</li>
        </Link>
        <Link to = "/projects">
          <li className='py-4 my-4 border-b border-orange-600 hover:bg-slate-200 hover:rounded'>Projects</li>
        </Link>
        <Link to = "/contact">
          <li className='py-4 my-4 border-b border-orange-600 hover:bg-slate-200 hover:rounded'>Contact</li>
        </Link>
      </ul>

    </div>
  </>

  return (
    <nav>
      <div>
        <div>
          {click && content}
        </div>

        <button className='block transtion' onClick={handleClick}>
          {click? <FaTimes/> : <CiMenuFries/>}
        </button>
        
      </div>
    </nav>
  )*/

  return(
    <Sheet>
      <SheetTrigger className='flex items-center justify-center '>
        <CiMenuFries className=' text-[20px]  text-white'/>
      </SheetTrigger>
      <SheetContent className='flex flex-col '>
        <div className=''>
          <Link to ='/'>
            <h1 className='text-5xl font-semibold text-center text-white'>MJ
              <span className='text-orange-600 '>.</span>
            </h1>
          </Link>
          <div className='pt-10 '>
            <ul className='p-10 py-4 text-xl text-center text-white '>
              <Link to = "/">
              <li className={`transition py-4 my-4 cursor-pointer ${getActiveClass('/')}`}>Home</li>
              </Link>
              <Link to = "/resume">
                <li className={`transition py-4 my-4 cursor-pointer ${getActiveClass('/resume')}`}>Resume</li>
              </Link>
              <Link to = "/services">
                <li className={`transition py-4 my-4 cursor-pointer ${getActiveClass('/services')}`}>Services</li>
              </Link>
              <Link to = "/projects">
                <li className={`transition py-4 my-4 cursor-pointer ${getActiveClass('/projects')}`}>Projects</li>
              </Link>
              <Link to = "/contact">
                <li className={`transition py-4 my-4 cursor-pointer ${getActiveClass('/contact')}`}>Contact</li>
              </Link>
            </ul>
          </div>
        </div>
      </SheetContent>
    </Sheet>
  )
}
