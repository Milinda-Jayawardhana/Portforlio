import React from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { useLocation } from 'react-router-dom';
import Stairs from './Stairs';

export default function PageTransition({ children }) {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={location.pathname}
        className="relative"
      >
        <Stairs />
        <div>{children}</div>
      </motion.div>
    </AnimatePresence>
  );
}


/*
export default function PagesTransition({ children }) {
  const location = useLocation();

  return (
    <AnimatePresence>
      <div key={location}>
        <motion.div
          initial={{ opacity: 1 }}
          animate={{ 
            opacity: 0,
            transition: { delay: 1, duration: 0.4, ease: 'easeInOut' }
          }}
          
          className="fixed top-0 w-screen h-screen pointer-events-none bg-primary"
        />
      </div>

      <div>
        {children}
      </div>
    </AnimatePresence>
  );
}



export default function PagesTransition({ children }) {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={location.pathname} // Use pathname to uniquely identify each page
        initial={{ opacity: 1 }}
        animate={{ opacity: 0 }}
        transition={{ delay: 1, duration: 0.4, ease: 'easeInOut' }}
        className="fixed top-0 w-screen h-screen pointer-events-none bg-primary"
      />
      <div>{children}</div>
    </AnimatePresence>
  );
}*/
