'use client'
import React from "react";
import { Button } from "./ui/button";
import Link from "next/link";
import { motion } from 'framer-motion'
import { fadeIn } from "@/variants";
import Image from "next/image";
import { services } from "@/app/data";


const Services = () => {
  
  return (
    <div className="md:p-20 p-10">
      <div id="features" className="max-w-6xl mx-auto text-center">
        <motion.p variants={fadeIn("left", 0.1)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.2 }} className="text-[30px] font-black text-primaryText mb-3">Services</motion.p>
        <motion.h2 variants={fadeIn("left", 0.2)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.2 }} className="text-xl md:text-2xl font-bold tracking-tight font-display text-slate-900">
          Writing has never been so easy
        </motion.h2>

        {/* الخدمات */}
        <ul className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-16 text-center text-slate-700">
          {services.slice(0, 3).map((service,index) => {
            return (
              <motion.li variants={fadeIn("top", index/3)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.2 }}
                key={service.id}
                className="md:px-6 px-2 py-8 flex flex-col items-center bg-white shadow-sm rounded-xl"
              >
                {service.icon}
                <h3 className="my-3 font-medium">
                  {service.title}
                </h3>
                <p className="mt-1.5 text-sm leading-6 text-secondary-500">
                  {service.description}
                </p>
              </motion.li>
            );
          })}
        </ul>

        {/* زر show more */}
        <Link href="/services">
          <Button className="mt-5 bg-accent-gold text-primaryText/70">Show more</Button>
        </Link>
      </div>
    </div>
  );
};

export default Services;
