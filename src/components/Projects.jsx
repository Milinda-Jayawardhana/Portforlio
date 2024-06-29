import React, { useState } from 'react'
import Demo from './HoverEffUI/Demo'
import { motion } from 'framer-motion'
import { Swiper, SwiperSlide } from 'swiper/react';
import "swiper/css"

import { BsArrowUpRight, BsGithub} from "react-icons/bs"
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip"
 import { Link } from 'react-router-dom';
import ProjectBttnSlider from './ProjectBttnSlider';


 const projects = [
  {
    num:"01",
    category: "Frontend",
    title: "project 1",
    description: "Frontent design for login page using html, css and with using vsCode",
    stack: [{name: "Html 5"}, {name:"Css 3"}, {name: "React"}],
    image: "/pro-1.jpg",
    github: "",
    live: "",
  },
  {
    num:"02",
    category: "Graphic Design",
    title: "project 2",
    description: "Black and white logo design for a brand name using illustrator",
    stack: [{name: "Adobe Illustrator"}],
    image: "/pro-2.jpg",
    github: "",
    live: "",
  },
  {
    num:"03",
    category: "Frontend",
    title: "project 3",
    description: "Frontent design for a shoe shop using html, css and with using vsCode",
    stack: [{name: "Html 5"}, {name:"Css 3"}, {name: "React"}],
    image: "/pro-4.jpg",
    github: "",
    live: "",
  },
  {
    num:"04",
    category: "Graphic Design",
    title: "project 4",
    description: "Graphic design by using adobe illustrator for a brand",
    stack: [{name: "Adobe Illustrator"}],
    image: "/pro-3.jpg",
    github: "",
    live: "",
  },
  
 ]
export default function Projects() {

  const [project, setProject] = useState(projects[0]);

  const handleSlideChange = (swiper) => {
    //get current active index
    const currentIndex = swiper.activeIndex;
    //updatevproject state based on current slide index
    setProject(projects[currentIndex]);
  }
  return (
    <motion.div
      initial={{opacity:0}}
      animate={{
        opacity:1,
        transition: {delay:0.7, duration: 1.5, ease: "easeInOut"}
      }}
      className=' min-h-[80vh] flex flex-col items-center justify-center py:12 lg:px-0'
    >
      <div className='container mx-auto text-white'>
        <div className=' flex flex-col lg:flex-row lg:gap-[30px]'>
          <div className='w-full lg:w-[50%] lg:h-[460px] flex flex-col lg:justify-between order-2 lg:order-none'>
            <div className=' flex flex-col gap-[30px] h-[50%]'>
              
              <div className='font-extrabold leading-none text-8xl'>
                {project.num}
              </div>

              <h2 className=' text-[42px] font-bold leading-none text-white group-hover:text-orange-600 transition-all duration-500 capitalize'>{project.category} project</h2>

              <p className=' text-white/60'>{project.description}</p>

              <ul className='flex gap-4 '>
                {project.stack.map((item, index)=>{
                  return(
                    <li key={index} className='text-xl text-orange-600 '>{item.name}
                      {/*remove the last comma*/}
                      {index !== project.stack.length -1 && ","}  
                    </li>
                    
                  )
                })}
              </ul>
              <div className='w-full border border-white/20'></div>
              <div className='flex items-center gap-4 '>
                {/*live project button */}
                <Link href={project.live}>
                  <TooltipProvider delayDuration={100}>
                    <Tooltip>
                      <TooltipTrigger className=' w-[70px] h-[70px] rounded-full bg-white/10 hover:bg-white/30 flex justify-center items-center  group'>
                        <BsArrowUpRight className='text-3xl text-white group-hover:text-orange-600'></BsArrowUpRight>
                      </TooltipTrigger>
                      <TooltipContent>
                        <p>Live Project</p>
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                </Link>

                {/*github project button */}
                <Link href={project.github}>
                  <TooltipProvider delayDuration={100}>
                    <Tooltip>
                      <TooltipTrigger className=' w-[70px] h-[70px] rounded-full bg-white/10 hover:bg-white/30 flex justify-center items-center  group'>
                        <BsGithub className='text-3xl text-white group-hover:text-orange-600'></BsGithub>
                      </TooltipTrigger>
                      <TooltipContent>
                        <p>Github Repository</p>
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                </Link>

              </div>

            </div>
          </div>

          <div className='w-full lg:w-[50%]'>
            <Swiper
              spaceBetween={30}
              slidesPerView={1}
              className='lg:h-[520px] mb-12'
              onSlideChange={handleSlideChange}
            >
              {projects.map((project, index) => {
                return (
                  <SwiperSlide key={index} className='w-full'>
                    <div className='relative flex items-center justify-center group bg-pink-50/20'>
                      {/* Aspect ratio box */}
                      <div className='w-full pb-[75%] relative'> {/* 75% padding-bottom maintains 4:3 aspect ratio */}
                        {/* Overlay */}
                        <div className='absolute top-0 bottom-0 left-0 right-0 z-10 bg-black/10'></div>
                        {/* Image */}
                        <img
                          src={project.image}
                          className='absolute top-0 left-0 object-cover w-full h-full'
                          alt=''
                        />
                      </div>
                    </div>
                  </SwiperSlide>
                );
              })}
              <ProjectBttnSlider containerStyles="flex gap-2 absolute right-0 bottom-[calc(50%_-_22px)] lg:bottom-0 z-20 w-full justify-between lg:w-max lg:justify-none " btnStyles="bg-orange-600 hover:bg-orange-hover text-primary text-[22px] w-[44px] h-[44px] flex justify-center items-center transition-all "/>
            </Swiper>
          </div>

        </div>
      </div>

    </motion.div>
  )
}
