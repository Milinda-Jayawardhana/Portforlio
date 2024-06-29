import React from 'react'
import { motion } from 'framer-motion'

export default function Photo() {
  return (
    <div>
      <motion.div
        initial={{opacity:0}}
        animate={{
          opacity:1,
          transition: {delay:1, duration: 0.2, ease: "easeIn"}
        }}
      >
        <motion.div
          initial={{opacity:0}}
          animate={{
            opacity:1,
            transition: {delay:1.4, duration: 0.4, ease: "easeInOut"}
          }}
          className=' w-52 h-52 lg:pr-20 xl:w-96 lg:w-[300px] md:w-60 xl:h-[360px] lg:h-[300px] md:h-60 mix-blend-lighten'
        >
          <div className='w-full h-full overflow-hidden rounded-full '>

            <img src="public/1678284806396-removebg-preview.png" 
              quality={100}
              alt="" 
              className='object-contain '
            />
            <div className='absolute bottom-0 left-0 w-full h-1/3 bg-gradient-to-b from-transparent to-black'/>
          </div>
        </motion.div>

        <motion.svg
          initial={{ opacity: 0 }}
          animate={{
            opacity: 1,
            transition: { delay: 1.4, duration: 0.4, ease: 'easeInOut' }
          }}
          className="absolute top-0 left-0 w-full h-full"
          viewBox="0 0 100 100"
          xmlns="http://www.w3.org/2000/svg"
        >
          <motion.circle
            cx="118"
            cy="43"
            r="35"
            stroke="#ff7b00"
            strokeWidth="1"
            fill="transparent"
            style={{ pathLength: 1 }}
          />
        </motion.svg>

      </motion.div>
    </div>
  )
}
