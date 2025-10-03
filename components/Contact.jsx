'use client'
import React from "react";
import { motion } from 'framer-motion'
import { fadeIn } from "@/variants";

const Contact = () => {
  return (
    <>
      {/* source https://tailblocks.cc/ */}
      <section className="relative p-20 text-gray-600 body-font">
        <motion.h1 variants={fadeIn("left", 0.1)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.2 }}  className="text-primaryText font-black text-center text-[30px] ">
          Contact
        </motion.h1>
        <div className="container flex flex-wrap px-5 py-10 mx-auto sm:flex-nowrap">
          <motion.div variants={fadeIn("right", 0.2)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.2 }}  className="relative flex items-end justify-start p-10 overflow-hidden bg-gray-300 rounded-lg lg:w-2/3 md:w-1/2 sm:mr-10">
            <iframe
              width="100%"
              height="100%"
              className="absolute inset-0 hidden md:flex"
              title="map"
              src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d6667.462!2d34.781533!3d25.887025!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x15217e76b01567ef%3A0xfefb26c1df11c668!2s!5e0!3m2!1sar!2s!4v1722345678901!5m2!1sar!2s"
            />
            <div className="relative flex flex-wrap py-6 rounded shadow-md bg-primary">
              <div className="px-6 lg:w-1/2">
                <h2 className="text-xs font-semibold tracking-widest text-primaryText title-font">
                  ADDRESS
                </h2>
                <p className="mt-1 text-primaryText/70">
                  طرطوس - شارع الثورة - مقابل فندق كليوباترا - دخلة صاج الضيافة
                  - جانب روضة الانوار
                </p>
              </div>
              <div className="px-6 mt-4 lg:w-1/2 lg:mt-0">
                <h2 className="text-xs font-semibold tracking-widest text-primaryText title-font">
                  EMAIL
                </h2>
                <a className="leading-relaxed text-red-500">
                  example@email.com
                </a>
                <h2 className="mt-4 text-xs font-semibold tracking-widest text-primaryText title-font">
                  PHONE
                </h2>
                <p className="leading-relaxed text-primaryText/70">
                  123-456-7890
                </p>
              </div>
            </div>
          </motion.div>
          <motion.div variants={fadeIn("left", 0.2)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.2 }}  className="flex flex-col w-full mt-8 lg:w-1/3 md:w-1/2 md:ml-auto md:py-8 md:mt-0">
            <h2 className="mb-1 text-lg font-medium text-gray-900 title-font">
              Feedback
            </h2>
            <p className="mb-5 leading-relaxed text-gray-600">
              Post-ironic portland shabby chic echo park, banjo fashion axe
            </p>
            <div className="relative mb-4">
              <label htmlFor="name" className="text-sm leading-7 text-gray-600">
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                className="w-full px-3 py-1 text-base leading-8 text-gray-700 transition-colors duration-200 ease-in-out bg-white border border-gray-300 rounded outline-none focus:border-red-500 focus:ring-2 focus:ring-red-200"
              />
            </div>
            <div className="relative mb-4">
              <label
                htmlFor="email"
                className="text-sm leading-7 text-gray-600"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                className="w-full px-3 py-1 text-base leading-8 text-gray-700 transition-colors duration-200 ease-in-out bg-white border border-gray-300 rounded outline-none focus:border-red-500 focus:ring-2 focus:ring-red-200"
              />
            </div>
            <div className="relative mb-4">
              <label
                htmlFor="message"
                className="text-sm leading-7 text-gray-600"
              >
                Message
              </label>
              <textarea
                id="message"
                name="message"
                className="w-full h-32 px-3 py-1 text-base leading-6 text-gray-700 transition-colors duration-200 ease-in-out bg-white border border-gray-300 rounded outline-none resize-none focus:border-red-500 focus:ring-2 focus:ring-red-200"
              />
            </div>
            <button className="px-6 py-2 text-lg transition-all duration-200 ease-in-out border-0 rounded bg-accent-gold text-primaryText/70 focus:outline-none hover:bg-accent-Default/70 hover:text-primaryText">
              Submit
            </button>
            <p className="mt-3 text-xs text-gray-500">
              Chicharrones blog helvetica normcore iceland tousled brook viral
              artisan.
            </p>
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default Contact;
