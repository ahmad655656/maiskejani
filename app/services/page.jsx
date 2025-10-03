'use client'
import React from 'react'
import { BsArrowDownRight } from 'react-icons/bs'
import { motion } from 'framer-motion'
import Link from 'next/link'
import { services } from '../data'
import { fadeIn } from '@/variants'

const Services = () => {
  return (
    <section className='min-h-[110vh] flex flex-col justify-center py-12 xl:py-10'>
      <div className="container mx-auto">
        <div className='grid grid-cols-1 md:grid-cols-2 gap-[60px]'>
          {services.map((service, index) => (
            <motion.div
              key={index}
              variants={fadeIn("left", 0.2)}
            initial="show"
            animate="show"
              className='flex flex-col flex-1 gap-6 cursor-pointer p-10 hover:bg-white group'
            >
              <div className='flex items-center justify-between w-full'>
                <div className='text-5xl font-extrabold transition-all duration-500 text-primaryText text-outline group-hover:text-outline-hover'>
                  {service.num}
                </div>
                <Link
                  href={"/#"}
                  className='w-[70px] h-[70px] group-hover:bg-accent-Default transition-all duration-500 flex items-center justify-center group-hover:-rotate-45 bg-primaryText rounded-full'
                >
                  <BsArrowDownRight className='text-3xl' />
                </Link>
              </div>
              <h2 className='text-3xl font-bold leading-none transition-all duration-500 text-primaryText group-hover:text-accent-Default'>
                {service.title}
              </h2>
              <p className='text-primaryText/60'>{service.description}</p>
              <div className='w-full border-b border-white/20'></div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Services
