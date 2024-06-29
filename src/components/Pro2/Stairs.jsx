import React from 'react';
import { motion } from 'framer-motion';

const panelVariants = {
  initial: { x: '0%' },
  animate: { x: '100%' },
  exit: { x: '0%' },
};

export default function Stairs() {
  return (
    <motion.div
      variants={panelVariants}
      initial="initial"
      animate="animate"
      exit="exit"
      transition={{ duration: 0.6, ease: 'easeInOut' }}
      className="fixed top-0 left-0 z-50 flex items-center justify-center w-full h-full bg-white"
    >
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="text-6xl font-bold text-black">
          Milinda Jayawardhana {/* Replace with your actual name */}
        </div>
      </div>
    </motion.div>
  );
}


/*
const panelVariants = {
  initial: { x: '0%' },
  animate: { x: '100%' },
  exit: { x: '0%' },
};

export default function Stairs() {
  return (
    <motion.div
      variants={panelVariants}
      initial="initial"
      animate="animate"
      exit="exit"
      transition={{ duration: 0.6, ease: 'easeInOut' }}
      className="fixed top-0 left-0 z-50 flex items-center justify-center w-full h-full bg-white"
    >
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.6, ease: 'easeInOut' }}
        className="text-6xl font-bold text-black" // Tailwind classes for styling
      >
        Milinda Jayawardhana 
      </motion.div>
    </motion.div>
  );
}*/



/*
const panelVariants = {
  initial: { x: '0%' },
  animate: { x: '100%' },
  exit: { x: '0%' },
};

export default function Stairs() {
  return (
    <motion.div
      variants={panelVariants}
      initial="initial"
      animate="animate"
      exit="exit"
      transition={{ duration: 0.6, ease: 'easeInOut' }}
      className="fixed top-0 left-0 z-50 w-full h-full bg-white"
    />
  );
}*/


/*
const stairAnimation ={
  initial: {
    top: "0%"
  },
  animate:{
    top: "100%"
  },
  exit: {
    top: ["100%", "0%"],
  },
}

const reverseIndex = (index)=>{
  const totalSteps = 6;
  return totalSteps - index -1;
}
export default function Stairs() {
  return (
    <>
      {[...Array(6)].map((_, index)=>{
        return(
          <motion.div 
            key={index}
            variants={stairAnimation}
            initial = "initial"
            animate= "animate"
            exit="exit"
            transition={{
              duration: 0.4,
              ease: "easeInOut",
              delay: reverseIndex(index) * 0.1,
            }}
            className='relative w-full h-full border-white '
          />
        );
      })}
    </>
  )
}*/


/*
const stairAnimation = {
  initial: { top: '0%' },
  animate: { top: '100%' },
  exit: { top: ['100%', '0%'] },
};

const reverseIndex = (index) => {
  const totalSteps = 6;
  return totalSteps - index - 1;
};

export default function Stairs() {
  return (
    <>
      {[...Array(6)].map((_, index) => (
        <motion.div
          key={index}
          variants={stairAnimation}
          initial="initial"
          animate="animate"
          exit="exit"
          transition={{
            duration: 0.4,
            ease: 'easeInOut',
            delay: reverseIndex(index) * 0.1,
          }}
          className="relative w-full h-full border-white"
        />
      ))}
    </>
  );
}*/
