'use client'
import React from "react";
import { fadeIn } from "@/variants";
import { motion } from "framer-motion"
import { articles } from "../data";

const page = () => {
  return (
    <div className="min-h-screen w-full ">
      <section className="flex flex-col justify-center max-w-7xl px-4 py-10 mx-auto sm:px-6">
        <motion.h2 variants={fadeIn("right", 0.2)}
  initial="show"
  animate="show" className="mb-6 text-2xl font-bold text-accent-Default md:text-3xl dark:text-white">
          More Articles
        </motion.h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 px-1">
          {articles.map((article, index) => {
            return (
              <motion.div variants={fadeIn("right", 0.2)}
            initial="show"
            animate="show"
                key={index}
                className="p-4 flex flex-col justify-between gap-2 border rounded-lg shadow-md bg-white dark:bg-gray-700 dark:border-gray-400/40"
              >
                <p className="text-xl font-semibold text-primaryText two-lines dark:text-blue-100">
                  {article.title}
                </p>

                <div className="flex flex-wrap gap-2 text-xs text-gray-600 dark:text-gray-300">
                  <span className="px-2 py-0.5 rounded-full bg-gray-100 dark:bg-gray-600">
                    {article.tags[0]}
                  </span>
                  <span className="px-2 py-0.5 rounded-full bg-gray-100 dark:bg-gray-600">
                    {article.tags[1]}
                  </span>
                  <span className="px-2 py-0.5 rounded-full bg-gray-100 dark:bg-gray-600">
                    {article.tags[2]}
                  </span>
                </div>

                <p className="text-gray-800 two-lines dark:text-gray-300">
                  {article.description}
                </p>

                <div className="flex items-center justify-between text-sm">
                  <button className="text-gray-500 dark:text-gray-300">
                    {article.date.toLocaleDateString("en-US", {
                      year: "numeric",
                      month: "long",
                      day: "numeric",
                    })}
                  </button>
                </div>
              </motion.div>
            );
          })}
        </div>
      </section>
    </div>
  );
};

export default page;
