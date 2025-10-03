"use client";
import { ads } from "@/app/data";
import { useParams } from "next/navigation";
import React from "react";
import { motion } from "framer-motion";
import { fadeIn } from "@/variants";
import { Button } from "@/components/ui/button";
import Link from "next/link";
const AdCard = () => {
  const params = useParams();
  const id = parseInt(params.id);
  const ad = ads.find((a) => a.id === id);
  return (
    <motion.div
      variants={fadeIn("right", 0.2)}
      initial="hidden"
      animate="show"
      className="max-w-md min-h-[50vh] mx-auto bg-white flex gap-2 flex-col items-center shadow-lg rounded-2xl overflow-hidden border border-gray-200"
    >
      <div className="z-10">{ad.image ? ad.image : null}</div>
      <div className="p-5">
        <h2 className="text-xl font-semibold text-gray-800 mb-2">{ad.title}</h2>
        <p className="text-primaryText/60 mb-3">{ad.description}</p>
        <p className="text-sm text-gray-400">📅 Published on: {ad.date}</p>
      </div>
    </motion.div>
  );
};

const page = () => {
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center gap-5 p-6">
      <AdCard />
      <Link href={"/contact"}><Button className="bg-accent-gold text-primaryText">Contact the center</Button></Link>
    </div>
  );
};

export default page;
