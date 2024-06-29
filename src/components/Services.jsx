import React from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { CgUserlane } from "react-icons/cg";
import { MdOutlineComputer } from "react-icons/md";
import { IoLogoEdge } from "react-icons/io5";
import { FaMobileScreen } from "react-icons/fa6";

const services = [
  {
    num:"01.",
    title: "Web Development",
    description: "Create your dream profescional web site with cool animations.",
    href: "",
    logo: <MdOutlineComputer />
  },
  {
    num:"02.",
    title: "UI/UX Design",
    description: "Create your dream profescional UI/UX with cool animations.",
    href: "",
    logo: <CgUserlane />
  },
  {
    num:"03.",
    title: "Logo Design",
    description: "Create your dream profescional logo with cool animations.",
    href: "",
    logo: <IoLogoEdge />
  },
  {
    num:"04.",
    title: "Mobile App Design",
    description: "Create your dream profescional mobile application with cool animations.",
    href: "",
    logo: <FaMobileScreen />
  },
]


export default function Services() {
  return (
    <section className=' min-h-[80vh] flex flex-col justify-center py-12 md:py-0'>
      <div className='container mx-auto text-white '>
        <motion.div
          initial={{opacity:0}}
          animate={{
            opacity:1,
            transition: {delay:0.7, duration: 1.5, ease: "easeInOut"}
          }}
          className=' grid grid-cols-1 md:grid-cols-2 gap-[60px]'
        >
          
            {services.map((service, index)=>{
              return(
                <div key={index}
                  className='flex flex-col justify-center flex-1 gap-6 group'
                >
                  <div className='flex items-center justify-between w-full '>
                    <div className=' hover:text-orange-600'>
                    <div className="text-3xl font-extrabold">
                      {service.num}
                    </div>

                      <h2 className='text-4xl font-extrabold'>{service.title}</h2>
                    </div>
                    <div>
                      <Link href={services.href} className='flex items-center justify-center text-3xl text-white duration-500 rounded-full w-9 h-9 hover:text-orange-600 hover:transition-all'>
                        {service.logo}
                      </Link>
                    </div>
                  </div>
                  
                  <p>{service.description}</p>
                  <div className='w-full border-b border-white/30'></div>
                </div>
              )
            })}
          
        </motion.div>
      </div>
    </section>
  )
}

