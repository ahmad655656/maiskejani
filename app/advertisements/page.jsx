'use client'
import React from 'react'
import { motion } from 'framer-motion'
import { ads } from '../data'
import { fadeIn } from '@/variants'
import Link from 'next/link'

const Advertisements = () => {
  return (
    <section className='min-h-[110vh] items-center flex flex-col gap-7 py-12 xl:py-10'>
      <h1 className='mb-6 text-2xl md:text-start text-center font-bold text-accent-Default md:text-3xl'>All ads are safe and reliable</h1>
      <div className="container mx-auto">
        
        <div className='grid grid-cols-1 md:grid-cols-2 gap-[60px]'>
          {ads.map((service, index) => (
         <Link href={`/advertisements/${index}`}>
           <motion.li variants={fadeIn("top", index/3)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.2 }}
                key={service.id}
                className="md:px-6 relative shadow-md px-2 py-8 flex flex-col items-center cursor-pointer bg-white rounded-xl"
              >
                {service.icon}
                <h3 className="absolute bg-accent-gold w-[200px] text-center px-10 text-primaryText font-bold -top-4 mx-auto my-3 ">
                  New
                </h3>
                <p className="mt-1.5 text-lg font-bold line-clamp-1 text-primaryText">
                  {service.title}
                </p>
              </motion.li>
         </Link>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Advertisements
