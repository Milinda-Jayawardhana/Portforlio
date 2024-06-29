import { motion, AnimatePresence } from 'framer-motion';
import React from 'react'
import { FaCss3, FaReact, FaHtml5 } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io";
import { SiTailwindcss, SiVite} from "react-icons/si"; 
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { ScrollArea } from "@/components/ui/scroll-area"
import { useState } from "react";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip"
import { HoverEffect } from './HoverEffUI/HoverEffect';


const about = {
  title: "About me",
  Description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Animi inventore corrupti repellat, laboriosam, adipisci, cumque molestiae suscipit incidunt aliquam quam at sit error omnis excepturi.",
  info: [
    {
      fieldName: "Name",
      fieldValue: "Milinda Jayawardhana",
    },
    {
      fieldName: "Experience",
      fieldValue: "6+ months",
    },
    {
      fieldName: "Mobile No",
      fieldValue: "(+94) 71 550 8827",
    },
    {
      fieldName: "Email",
      fieldValue: "shehanj809@gmail.com",
    },
    {
      fieldName: "Location",
      fieldValue: "Matara, Sri Lanka",
    },
    {
      fieldName: "Freelance",
      fieldValue: "Available",
    },
    {
      fieldName: "Languages",
      fieldValue: "English & Sinhala",
    },
  ]  
}

const experience ={
  title: "My Experiences",
  descripition: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Pariatur suscipit natus molestias doloribus cum! Eaque magni voluptatum expedita quidem et laborum vero, necessitatibus.",
  items: [
    {
      company: "Oracle",
      position: "Software Engineer",
      duration: "Currently-3 months",
    },
    {
      company: "3D Solution",
      position: "Graphic Designer",
      duration: "2023.07-2024.02",
    },
    {
      company: "Mobiler",
      position: "Mobile Application Designer",
      duration: "2023.01-2023.07",
    },
    {
      company: "Software Solution",
      position: "Web Designer",
      duration: "2022-2023",
    },
    {
      company: "Software Solution",
      position: "Web Designer",
      duration: "2022-2023",
    },
  ]
}

const education = {
  title: "My Education",
  descripition: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Pariatur suscipit natus molestias doloribus cum! Eaque magni voluptatum expedita quidem et laborum vero, necessitatibus.",
  items: [
    {
      institute: "FoE-UoR",
      Course: "Electrical Engineering",
      duration: "Since 2022",
    },
    {
      institute: "Online Course",
      Course: "Web Development",
      duration: "Since 2024",
    },
    {
      institute: "SLIT",
      Course: "Diploma fin English",
      duration: "2021-2023",
    },
    {
      institute: "SLIT",
      Course: "Diploma in IT",
      duration: "2021-2023",
    },

  ]

}

const skills = {
  title: "My Skills",
  descripition: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Pariatur suscipit natus molestias doloribus cum! Eaque magni voluptatum expedita quidem et laborum vero, necessitatibus.",
  items: [
    {
      icon: <FaReact />,
      name: "React",
    },
    {
      icon: <SiVite />,
      name: "Vite",
    },
    {
      icon: <IoLogoJavascript />,
      name: "Java Script",
    },
    {
      icon: <FaCss3 />,
      name: "css 3",
    },
    {
      icon: <SiTailwindcss />,
      name: "Tailwind css",
    },
    {
      icon: <FaHtml5 />,
      name: "Html5",
    },
  ]
}

export default function Resume() {

  const [hoveredIndex, setHoveredIndex] = useState(null);
  
  return (
    <div>
      <motion.div
          initial={{opacity:0}}
          animate={{
            opacity:1,
            transition: {delay:0.7, duration: 1.5, ease: "easeInOut"}
          }}
          className=' min-h-[80vh] flex items-center justify-center py:12 md:pl-0'
        >
          <div className='container mx-auto '>
            <Tabs defaultValue='experience' className=' flex flex-col md:flex-row gap-[60px]'>
              <TabsList className=" flex flex-col w-full max-w-[380px] mx-auto md-mx-0 gap-6">
                <TabsTrigger value="experience">Experience</TabsTrigger>
                <TabsTrigger value="education">Educations</TabsTrigger>
                <TabsTrigger value="skills">Skills</TabsTrigger>
                <TabsTrigger value="about">About me</TabsTrigger>
              </TabsList>

              {/*content*/}
              <div className='w-full text-white min-h-[70vh]'>
                <TabsContent value="experience" className="w-full">
                  <div className=' flex flex-col gap-[30px] text-center md:text-left lg:text-left'>
                    <h3 className='text-4xl font-bold '>{experience.title}</h3>
                    <p className=' max-w-[600px] text-white/60 mx-auto md:mx-0'>{experience.descripition}</p>
                    <ScrollArea className="h-[300px]">
                      <ul className=' grid grid-cols-1 lg:grid-cols-2 gap-[15px]'>
                        {experience.items.map((item, index)=>{
                          return(
                            <li key={index} className=' bg-[#232329] h-[160px] py-6 px-10 rounded-xl flex flex-col justify-center items-center md:items-start gap-1 hover:bg-white/30'>
                              <span className='text-orange-600 '>{item.duration}</span>
                              <h3 className=' text-xl max-w-[260px] min-h-[60px] text-center md:text-left font-semibold'>{item.position}</h3>
                              <div className='flex items-center gap-3 '>
                                <span className=' w-[6px] h-[6px] rounded-full bg-orange-600'></span>
                                <p className=' text-white/60'>{item.company}</p>
                              </div>
                            </li>
                          )
                        })}
                      </ul>
                    </ScrollArea>
                  </div>
                </TabsContent>

                <TabsContent value="education" className="w-full">
                  <div className=' flex flex-col gap-[30px] text-center md:text-left lg:text-left'>
                    <h3 className='text-4xl font-bold '>{education.title}</h3>
                    <p className=' max-w-[600px] text-white/60 mx-auto md:mx-0'>{education.descripition}</p>
                    <ScrollArea className="h-[300px]">
                      <ul className=' grid grid-cols-1 lg:grid-cols-2 gap-[15px]'>
                        {education.items.map((item, index)=>{
                          return(
                            <li key={index} className=' bg-[#232329] h-[160px] py-6 px-10 rounded-xl flex flex-col justify-center items-center md:items-start gap-1 hover:bg-white/30'>
                              <span className='text-orange-600 '>{item.duration}</span>
                              <h3 className=' text-xl max-w-[260px] min-h-[60px] text-center md:text-left font-semibold'>{item.Course}</h3>
                              <div className='flex items-center gap-3 '>
                                <span className=' w-[6px] h-[6px] rounded-full bg-orange-600'></span>
                                <p className=' text-white/60'>{item.institute}</p>
                              </div>
                            </li>
                          )
                        })}
                      </ul>
                    </ScrollArea>
                  </div>
                </TabsContent>

                <TabsContent value="skills" className="w-full">
                  <div className=' flex flex-col gap-[30px] text-center md:text-left lg:text-left'>
                    <h3 className='text-4xl font-bold '>{skills.title}</h3>
                    <p className=' max-w-[600px] text-white/60 mx-auto md:mx-0'>{skills.descripition}</p>
                    <ScrollArea className="h-[300px]">
                      <ul className=' grid grid-cols-2 lg:grid-cols-4 gap-[10px] justify-center'>
                        {skills.items.map((item, index)=>{
                          return(
                            <li key={index} className=' bg-[#232329] h-[184px] py-6 px-10 rounded-xl flex flex-col justify-center items-center gap-1 hover:bg-white/30'>
                              <h3 className=' text-5xl max-w-[600px] min-h-[60px] text-center justify-center font-semibold hover:text-orange-600 text-white hover:transition-all duration-500'>{item.icon}</h3>
                              <div className='flex items-center gap-3 '>
                                <span className=' w-[6px] h-[6px] rounded-full bg-orange-600'></span>
                                <p className='text-white '>{item.name}</p>
                              </div>
                            </li>
                          )
                        })}
                      </ul>
                    </ScrollArea>
                  </div>
                </TabsContent>

                <TabsContent value="about" className="w-full">
                  <div className=' flex flex-col gap-[30px] text-center md:text-left lg:text-left'>
                    <h3 className='text-4xl font-bold '>{about.title}</h3>
                    <p className=' max-w-[600px] text-white/60 mx-auto md:mx-0'>{about.Description}</p>
                    <ScrollArea className="h-[300px]">
                      <ul className=' grid grid-cols-1 lg:grid-cols-2 gap-[10px] justify-center'>
                        {about.info.map((item, index)=>{
                          return(
                            <li key={index} className=' bg-[#232329] h-[130px] py-6 px-10 rounded-xl flex flex-col justify-center items-center md:items-start gap-1 hover:bg-white/30'>
                              <span className='text-orange-600 '>{item.fieldName}</span>
                              <h3 className=' text-xl max-w-[260px] min-h-[60px] text-center md:text-left font-semibold'>{item.fieldValue}</h3>
                              
                            </li>
                          )
                        })}
                      </ul>
                    </ScrollArea>
                  </div>
                </TabsContent>
              </div>
            </Tabs>
          </div>
        </motion.div>
    </div>
  )
}
