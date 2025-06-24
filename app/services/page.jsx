'use client'
import React from 'react'
import { BsArrowDownRight}  from 'react-icons/bs'
const services = [
  {
    num: "01",
    title: "Front-End Devlopment",
    description: "I provide you with interactive and easy-to-use user interfaces that enhance visitor experience and increase their engagement.",
    href: "",
  },
  {
    num: "02",
    title: "Correcting Code Errors",
    href: "",
    description: "I offer you software debugging services to ensure your applications run smoothly and efficiently.",
  },
  {
    num: "03",
    href: "",
    title: "Logo Design",
    description: "I design unique logos that express your brand identity and leave a lasting impression.",
  },
  {
    num: "04",
    href: "",
    title: "Video Design",
    description: "I create engaging visual content that reflects your vision and engages your audience in a professional manner.",
  },
]
import { motion } from 'framer-motion'
import Link from 'next/link'
const Services = () => {
  return (
    <section className='min-h-[80vh] flex flex-col justify-center py-12 xl:py-0 '>
      <div className="container mx-auto">
        <motion.div intial={{ opacity: 0 }} animate={{ opacity: 1, transition: {delay: 2.4, duration: 0.4, ease: "easeIn"}, }} className='grid grid-cols-1 md:grid-cols-2 gap-[60px]   ' >
          {services.map((service, index) => {
            return <div key={index} className='flex flex-col flex-1 gap-6 group '>
              <div className='flex items-center justify-between w-full'>
                <div className='text-5xl font-extrabold text-transparent transition-all duration-500 text-outline group-hover:text-outline-hover'>
                  {service.num}
                </div>
                <Link href={service.href} className='w-[70px] h-[70px] group-hover:bg-accent-Default transition-all duration-500 flex items-center justify-center hover:-rotate-45 bg-white rounded-full '>
                <BsArrowDownRight className='text-3xl text-primary ' />
                </Link>
              </div>
              <h2 className='text-3xl font-bold leading-none text-white group-hover:text-accent-Default transition-all duration-500 '>{service.title}</h2>
              <p className='text-white/60'>{service.description}</p>
              <div className='w-full border-b border-white/20'></div>
            </div>
          })}
        </motion.div>
      </div>
    </section>
  )
}

export default Services