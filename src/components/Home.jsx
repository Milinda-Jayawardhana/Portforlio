import React from 'react'
import Header from './Pro2/Header'
import { Button } from './ui/button'
import { HiOutlineDownload } from "react-icons/hi";
import Socials from './Pro2/Socials';
import Photo from './Pro2/Photo';
import { GradientPhoto } from './GraPhotoUI/GradientPhoto';
import { motion } from 'framer-motion'
import Stats from './Pro2/Stats';


export default function Home() {
  return (
    <section className='h-full text-white'>
      <div className='container h-full mx-auto'>
        <motion.div
          initial={{opacity:0}}
          animate={{
            opacity:1,
            transition: {delay:0.7, duration: 1.5, ease: "easeInOut"}
          }}
        >
          <div className='flex flex-col items-center justify-between md:flex-row '>
            <div className='order-2 text-center md:text-left md:order-none xl:pt-[20px] lg:pt-[20px] md:pt-[50px]'>
                <span className='text-xl'>Software Developer</span>
                <h1 className=' text-[40px] xl:text-[60px] lg:text-[55px] md:text-5xl leading-[1,1] font-semibold md:pt-4 mb-6'>
                  Hello.. I'm <br /> <span className='text-orange-600 '>Milinda Jayawardhana</span>
                </h1>
                <p className=' max-w-[500px] mb-3 text-white/80'> I am Milinda, an undergraduate from Sri Lanka. I am currently pursuing my studies at the Faculty of Engineering, University of Ruhuna. Excited and professional at web development.</p>

                <div className='flex flex-col items-center gap-8 md:flex-row'>
                  <Button variant="outline" size="lg" className="flex items-center gap-2 uppercase">
                    <span>Download CV</span> <HiOutlineDownload className='text-xl '/>
                  </Button>
                  <div className='mb-8 md:pt-8'>
                    <Socials 
                      containerStyles= 'flex gap-4'
                      iconStyles="w-9 h-9 border border-orange-600 rounded-full flex justify-center items-center text-orange-600 text-base hover:bg-orange-600 hover:text-primary hover:transition-all duration-500"
                    />
                  </div>
                </div>
              
            </div>
            <div className='order-1 p-20 xl:pr-20 xl:pt-14 lg:pr-20 lg:pt-14 md:pr-16 md:pt-12 md:order-none md:pd-0'>
              <GradientPhoto />
            </div>
          </div>
          <div>
            <Stats></Stats>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
