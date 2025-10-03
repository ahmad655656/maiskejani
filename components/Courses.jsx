'use client'
import Link from "next/link";
import React, { useState } from "react";
import { Button } from "./ui/button";
import { fadeIn } from "@/variants";
import { motion } from 'framer-motion'
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  DialogFooter,
} from "@/components/ui/dialog";
import { Label } from "./ui/label";
import { Input } from "./ui/input";
import { courses } from "@/app/data";
import Image from "next/image";
const Courses = () => {
   const [selectedCourse, setSelectedCourse] = useState(null);
    const [form, setForm] = useState({ name: "", email: "", phone: "" });
  
    const handleSubmit = (e) => {
      e.preventDefault();
      console.log("Course:", selectedCourse);
      console.log("Form Data:", form);
  
      alert("تم إرسال الطلب للمسؤول ✅");
    };
  
  return (
    <div className="flex flex-col items-center gap-5 p-20 bg-white">
      <div className="text-center">
        <motion.h1 variants={fadeIn("left", 0.3)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.2 }} className="text-[30px] font-black text-primaryText">Courses</motion.h1>
      </div>
      <section
        id="Projects"
        className="grid justify-center grid-cols-1 mx-auto mb-5 bg-white w-fit lg:grid-cols-3 md:grid-cols-2 justify-items-center gap-y-20 gap-x-14"
      >
        {courses.map((course) => (
          <motion.div variants={fadeIn("top", course.id/3)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.2 }}  
              key={course.id}
              className="flex flex-col w-full max-h-full rounded-lg"
            >
              <div className="relative z-10 px-8 pt-6 top-6">
                <Image width={500}
                height={500}
                  className="sm:w-[18rem] sm:h-[18rem] xs:w-[14rem] xs:h-[14rem] w-[8rem] h-[8rem] mx-auto object-cover rounded-full outline outline-[1rem] outline-lightOrange/10 shadow-4xl"
                  src={course.image}
                  alt={course.title}
                />
              </div>

              <div className="flex flex-col w-full gap-4 px-6 pt-10 rounded-xl bg-lightOrange/10">
                <h2 className="mt-8 min-h-[60px] text-xl text-center text-primaryText sm:text-xl font-black">
                  {course.title}
                </h2>

                <div className="flex items-center justify-between w-full pt-2 pb-2">
                  <div className="flex gap-4">
                    <Image width={500}
                height={500}
                      className="w-[3.5rem] h-[3.5rem] object-contain rounded-full"
                      src={course.teacherImg}
                      alt={course.teacher}
                    />
                    <div className="flex flex-col gap-1 font-sans">
                      <h2 className="text-sm font-semibold sm:text-lg text-primaryText">
                        {course.teacher}
                      </h2>
                      <p className="text-sm text-gray-500 sm:text-base">
                        {course.role}
                      </p>
                    </div>
                  </div>
                  <div>
                    <h3 className="px-2 py-1 text-sm text-white bg-accent-Default sm:text-lg rounded-3xl">
                      {course.price}
                    </h3>
                  </div>
                </div>
              </div>

              {/* زر + فورم */}
              <Dialog>
                <DialogTrigger asChild>
                  <Button
                    onClick={() => setSelectedCourse(course)}
                    className="mt-4"
                  >
                    Buy <span className="-translate-x-1">now</span>
                  </Button>
                </DialogTrigger>
                <DialogContent>
                  <DialogHeader>
                    <DialogTitle>Enroll in {selectedCourse?.title}</DialogTitle>
                    <DialogDescription>
                      Fill the form below to complete your request.
                    </DialogDescription>
                  </DialogHeader>

                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div>
                      <Label htmlFor="name">Full Name</Label>
                      <Input
                        id="name"
                        value={form.name}
                        onChange={(e) =>
                          setForm({ ...form, name: e.target.value })
                        }
                        required
                        placeholder="Your name"
                      />
                    </div>
                    <div>
                      <Label htmlFor="email">Email</Label>
                      <Input
                        id="email"
                        type="email"
                        value={form.email}
                        onChange={(e) =>
                          setForm({ ...form, email: e.target.value })
                        }
                        required
                        placeholder="you@example.com"
                      />
                    </div>
                    <div>
                      <Label htmlFor="phone">Phone</Label>
                      <Input
                        id="phone"
                        type="tel"
                        value={form.phone}
                        onChange={(e) =>
                          setForm({ ...form, phone: e.target.value })
                        }
                        required
                        placeholder="+123 456 789"
                      />
                    </div>
                    <DialogFooter>
                      <Button type="submit">Send Request</Button>
                    </DialogFooter>
                  </form>
                </DialogContent>
              </Dialog>
            </motion.div>
        ))}
      </section>

      <Link href={"/courses"}>
        <Button className="bg-accent-gold text-primaryText/70">show more</Button>
      </Link>
    </div>
  );
};

export default Courses;
