// HoverEffect.js
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { cn } from "./cn";
import { Link } from "react-router-dom"; // Use react-router-dom for client-side routing in Vite
import { Card, CardTitle, CardDescription } from "./Card"; // Adjust the path to your Card component

export const HoverEffect = ({ items, className }) => {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  return (
    <div className={cn("grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 py-10", className)}>
      {items.map((item, idx) => (
        <Link
          to={item.link} // Use `to` instead of `href` for react-router-dom
          key={item.link}
          className="relative block w-full h-full p-2 group"
          onMouseEnter={() => setHoveredIndex(idx)}
          onMouseLeave={() => setHoveredIndex(null)}
        >
          <AnimatePresence>
            {hoveredIndex === idx && (
              <motion.span
                className="absolute inset-0 h-full w-full bg-neutral-200 dark:bg-slate-800/[0.8] block rounded-3xl"
                layoutId="hoverBackground"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1, transition: { duration: 0.15 } }}
                exit={{ opacity: 0, transition: { duration: 0.15, delay: 0.2 } }}
              />
            )}
          </AnimatePresence>
          <Card>
            <CardTitle>{item.company}</CardTitle>
            <CardDescription>{item.position}</CardDescription>
          </Card>
        </Link>
      ))}
    </div>
  );
};
