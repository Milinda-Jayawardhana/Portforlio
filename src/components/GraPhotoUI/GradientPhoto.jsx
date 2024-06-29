"use client";
import React from "react";
import { BackgroundGradient } from "./BackgroundGradient";
import { motion } from 'framer-motion'

export function GradientPhoto() {
  return (
    <div>
      <motion.div
        initial={{opacity:0}}
        animate={{
          opacity:1,
          transition: {delay:0.8, duration: 0.2, ease: "easeIn"}
        }}
      >
          <BackgroundGradient className="rounded-[22px] max-w-sm p-3  bg-black dark:bg-zinc-900"
        
          >
            <img
              src="public/1678284806396-removebg-preview-removebg-preview.png"
              alt=""
              height="400"
              width="400"
              className="object-contain xl:w-[250px] xl:h-[300px] lg:w-[200px] lg:h-[250px] md:w-[150px] md:h-[200px] w-[180px] h-[230px] "
            />
          
            
          </BackgroundGradient>
        
      </motion.div>
      
    </div>
  );
}
