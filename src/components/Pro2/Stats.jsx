import React from 'react'
import CountUp from "react-countup";

export default function Stats() {

  const stats = [
    {
      num: 160,
      text: "Days of Experience",
    },
    {
      num: 23,
      text: "Years Old",
    },
    {
      num: 7,
      text: "Technologies Use",
    },
    {
      num: 5,
      text: "Projects",
    },
    
  ]
  return (
    <section className='pb-12 md:pb-none'>
      <div className='container mx-auto '>
        <div className=' flex flex-wrap gap-6 max-w-[80vw] mx-auto md:max-w-none'>
          {stats.map((item, index)=>{
            return(
              <div 
                className='flex items-center justify-center flex-1 gap-4 md:justify-start'
                key={index}
              >
                <CountUp
                  end={item.num}
                  duration={5}
                  delay={2}
                  className="text-4xl font-semibold lg:text-6xl md:text-5xl"
                />
                <p className={`${
                  item.text.length<15? "max-w-[100px]": "max-w-[100px]"}
                  leading-snug text-white/80
                `}>{item.text}</p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
