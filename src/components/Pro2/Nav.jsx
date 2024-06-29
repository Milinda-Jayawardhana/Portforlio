import React from 'react'
import { Link, useLocation } from 'react-router-dom'

export default function Nav() {
  const location = useLocation();
  const currentPath = location.pathname;

  // Define a function to determine active class
  const getActiveClass = (path) => {
    return currentPath === path 
      ? 'text-orange-600 border-orange-600' 
      : 'border-slate-900 hover:text-orange-600 hover:border-orange-600';
  };

  return (
    <nav>
      <div className='items-center justify-end hidden font-normal lg:flex md:flex sm:flex lg:flex-1'>
        <div className=' flex-10'>
          <ul className='flex gap-8 text-[18px]'>
            <Link to="/">
              <li className={`transition border-b-2 cursor-pointer ${getActiveClass('/')}`}>
                Home
              </li>
            </Link>
            <Link to="/resume">
              <li className={`transition border-b-2 cursor-pointer ${getActiveClass('/resume')}`}>
                Resume
              </li>
            </Link>
            <Link to="/services">
              <li className={`transition border-b-2 cursor-pointer ${getActiveClass('/services')}`}>
                Services
              </li>
            </Link>
            <Link to="/projects">
              <li className={`transition border-b-2 cursor-pointer ${getActiveClass('/projects')}`}>
                Projects
              </li>
            </Link>
            <Link to="/contact">
              <li className={`transition border-b-2 cursor-pointer ${getActiveClass('/contact')}`}>
                Contact
              </li>
            </Link>
          </ul>
        </div>
      </div>
    </nav>
  )
}
