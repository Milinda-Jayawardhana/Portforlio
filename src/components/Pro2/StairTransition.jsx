import React from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { useLocation } from 'react-router-dom';
import Stairs from './Stairs';


export default function StairTransition() {

  const location = useLocation();

  return (
    <div>
      <AnimatePresence mode='wait'>
      
        <div key={location}>
          <div className='fixed top-0 left-0 right-0 z-40 flex w-screen h-screen pointer-events-none '>
            <Stairs></Stairs>
          </div>

          <motion.div className = "fixed top-0 w-screen h-screen pointer-events-none border-primary" initial = {{opacity: 1}} animate={{opacity:0, transition:{delay:1, duration:0.4, ease: "easeInOut"},
        }}/>
        </div>

      </AnimatePresence>
    </div>
  )
}


/*
export default function StairTransition() {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={location.pathname}
        className="fixed top-0 left-0 right-0 z-40 flex w-screen h-screen pointer-events-none"
      >
        <Stairs />
        <motion.div
          initial={{ opacity: 1 }}
          animate={{ opacity: 0 }}
          transition={{ delay: 1, duration: 0.4, ease: 'easeInOut' }}
          className="fixed top-0 w-screen h-screen pointer-events-none border-primary"
        />
      </motion.div>
    </AnimatePresence>
  );
}

*/