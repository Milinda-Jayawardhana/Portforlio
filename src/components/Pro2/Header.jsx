import React from 'react'
import { Link } from 'react-router-dom'
import Nav from './Nav'
import { GradientBttn } from '../FromUI/GradientBttn'
import MobileNav from './MobileNav'


export default function Header() {
  return (
    <>
      <div className='py-8 text-white xl:py-12'>
        <div className='container flex items-center justify-between mx-auto'>
          <Link to ='/'>
            <h1 className='text-5xl font-bold '>MJ
              <span className='text-orange-600 '>.</span>
            </h1>
          </Link>

          <div className='items-center hidden gap-8 md:flex'>
            <Nav />

            <Link to ='/contact'>
              <GradientBttn></GradientBttn>
            </Link>
          </div>

          <div className=' md:hidden'>
            <MobileNav></MobileNav>
          </div>
        </div>
      </div>
    </>
  )
}




