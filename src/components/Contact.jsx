import React from 'react'
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
  SelectGroup,
  SelectLabel,
} from "@/components/ui/select"

import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";
import { motion } from 'framer-motion';
import { Button } from './ui/button';

const info =[
  {
    icon: <FaPhoneAlt />,
    title: "Mobile No",
    value: "(+94) 71 550 8827",
  },
  {
    icon: <FaEnvelope />,
    title: "Email",
    value: "shehanj809@gmail.com",
  },
  {
    icon: <FaMapMarkerAlt />,
    title: "Location",
    value: "Matara, Sri Lanka",
  },
];

export default function Contact() {
  return (
    <div>
      <motion.div
        initial={{opacity:0}}
        animate={{
          opacity:1,
          transition: {delay:0.7, duration: 1.5, ease: "easeIn"}
        }}
        className='py-6 text-white'
      >
        <div className='container mx-auto '>
          <div className=' flex flex-col lg:flex-row gap-[30px] px-10 lg:px-20'>
            <div className=' lg:w-[54%] order-2 lg:order-none justify-center'>
              <form className=' flex flex-col gap-6 p-10 bg-[#27272c] rounded-xl'>
                <h3 className='text-4xl font-semibold text-orange-600'>Pick Me</h3>
                <p className=' text-white/60'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos, quibusdam! Aperiam, corporis ullam quam sit eaque natus aut magni consequatur consequuntur dignissimos nemo.</p>

                <div className='grid grid-cols-1 gap-6 md:grid-cols-2'>
                  <Input type="firstname" placeholder="First name"/>
                  <Input type="lastname" placeholder="Last name"/>
                  <Input type="email" placeholder="Email"/>
                  <Input type="phone" placeholder="Mobile number"/>
                </div>
                <Select>
                  <SelectTrigger className="w-full clss">
                    <SelectValue placeholder = "Select a Service" className=''/>
                  </SelectTrigger>
                  <SelectContent>
                    <SelectGroup>
                      <SelectLabel> Select a Service</SelectLabel>
                      <SelectItem value = "est">Web Development</SelectItem>
                      <SelectItem value = "cst">UI/UX Design</SelectItem>
                      <SelectItem value = "mst">Logo Design</SelectItem>
                      <SelectItem value = "bst">Mobile App Design</SelectItem>

                    </SelectGroup>
                  </SelectContent>
                </Select>

                <Textarea className=" h=[200px]" placeholder="Anything for me Suddahh.."></Textarea>
                <Button className="font-bold border-[#19191d] max-w-40 hover:text-orange-600 hover:border-orange-600 rounded-xl">Submit</Button>
              </form>
            </div>

            <div className='flex items-center justify-start flex-1 order-1 pb-8 mb-8 lg:justify-end lg:order-none md:mb-0'>
              <ul className='flex flex-col justify-center gap-10 text-white '>
                {info.map((item, index)=>{
                  return(
                    <li key={index} className='flex items-center gap-6'>
                      <div className=' w-[52px] h-[52px] md:w-[72px] md:h-[72px] bg-[#27272c] text-orange-600 rounded-md flex items-center justify-center'>
                        <div className='text-3xl '>
                          {item.icon}
                        </div>
                      </div>
                      <div className='flex-1 '>
                        <h3 className=' text-white/60'>{item.title}</h3>
                        <p className='text-xl '>{item.value}</p>
                      </div>
                      
                    </li>
                  )
                })}
              </ul>
            </div>

          </div>
          
        </div>
      </motion.div>
    </div>
  )
}
