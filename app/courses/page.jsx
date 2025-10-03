"use client";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  DialogFooter,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import Link from "next/link";
import { courses } from "../data";
import { fadeIn } from "@/variants";
import { motion } from "framer-motion"


export default function Page() {
  const [selectedCourse, setSelectedCourse] = useState(null);
  const [form, setForm] = useState({ name: "", email: "", phone: "" });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Course:", selectedCourse);
    console.log("Form Data:", form);

    alert("تم إرسال الطلب للمسؤول ✅");
  };

  return (
    <div className="w-full max-h-full flex flex-col items-center gap-10 pt-10 pb-32 bg-light">
      <div className="flex flex-col justify-center max-w-7xl px-4 py-10 mx-auto sm:px-6">
        <motion.h1 variants={fadeIn("right", 0.2)} 
                      initial="hidden"
                      whileInView="show"
                      viewport={{ once: false, amount: 0.2 }} className="mb-6 text-2xl font-bold text-accent-Default md:text-3xl dark:text-white">
          Available courses
        </motion.h1>
        <motion.p variants={fadeIn("right", 0.3)} 
                      initial="hidden"
                      whileInView="show"
                      viewport={{ once: false, amount: 0.2 }} className="px-4 text-start text-gray-500">
          The school offers a vibrant kids' class, teaching athletics, language,
          dance, art, drawing, and more, fostering creativity and skills.
        </motion.p>

        <div className="xl:w-[100%] w-full mx-auto grid xl:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-6 place-items-center justify-center px-4 pt-6">
          {courses.map((course) => (
            <motion.div variants={fadeIn("up", course.id * 0.2)} 
                      initial="hidden"
                      whileInView="show"
                      viewport={{ once: false, amount: 0.2 }}
              key={course.id}
              className="flex flex-col w-full max-h-full rounded-lg"
            >
              <div className="relative z-10 px-8 pt-6 top-6">
                <img
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
                    <img
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
        </div>
      </div>
      <div className="flex flex-col justify-center max-w-7xl px-4 py-10 mx-auto sm:px-6">
        <motion.h1 variants={fadeIn("right", 0.2)} 
                      initial="hidden"
                      whileInView="show"
                      viewport={{ once: false, amount: 0.2 }} className="mb-6 text-2xl font-bold text-accent-Default md:text-3xl dark:text-white">
          Paid courses
        </motion.h1>
        <motion.p variants={fadeIn("right", 0.3)} 
                      initial="hidden"
                      whileInView="show"
                      viewport={{ once: false, amount: 0.2 }} className="px-4 text-start text-gray-500">
          The school offers a vibrant kids' class, teaching athletics, language,
          dance, art, drawing, and more, fostering creativity and skills.
        </motion.p>

        <div className="xl:w-[90%] w-full mx-auto grid xl:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-6 place-items-center justify-center px-4 pt-6">
          {courses.map((course) => (
            <Link href={`/courses/${course.id}`}
              key={course.id}
              className="flex flex-col hover:bg-white/30 transition-all duration-200 ease-in-out w-full max-h-full rounded-lg"
            >
              <motion.div variants={fadeIn("up", course.id * 0.2)} 
                      initial="hidden"
                      whileInView="show"
                      viewport={{ once: false, amount: 0.2 }}>
                <div className="relative z-10 px-8 pt-6 top-6">
                <img
                  className="sm:w-[18rem] sm:h-[18rem] xs:w-[14rem] xs:h-[14rem] w-[8rem] h-[8rem] mx-auto object-cover rounded-full outline outline-[1rem] outline-lightOrange/10 shadow-4xl"
                  src={course.image}
                  alt={course.title}
                />
              </div>

              <div className="flex flex-col w-full gap-4 px-6 pb-5 pt-8 rounded-xl bg-lightOrange/10">
                <h2 className="mt-8 min-h-[60px] text-xl text-center text-primaryText sm:text-xl font-black">
                  {course.title}
                </h2>

                <div className="flex items-center justify-between w-full pt-2 pb-2">
                  <div className="flex gap-4">
                    <img
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
                </div>
              </div>
              </motion.div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
