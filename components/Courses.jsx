"use client";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { Button } from "./ui/button";
import { fadeIn } from "@/variants";
import { motion } from "framer-motion";
import Image from "next/image";
import Cookie from "cookie-universal";

const Courses = () => {
  const [courses, setCourses] = useState([]);
  const [loading, setLoading] = useState(true);
  const [submitting, setSubmitting] = useState(false);

  useEffect(() => {
    async function fetchCourses() {
      try {
        const res = await fetch(
          "https://test.course.start-tech.ae/api/courses?per_page=6&page=1",
          {
            headers: {
              Accept: "application/json",
            },
          }
        );
        const json = await res.json();
        setCourses(Array.isArray(json.data?.data) ? json.data.data : []);
      } catch (err) {
        console.error("Fetch error:", err);
      } finally {
        setLoading(false);
      }
    }
    fetchCourses();
  }, []);

  // 🆕 زر الدفع
  async function handlePay(courseId) {
    setSubmitting(true);
    try {
      const cookies = Cookie();
      const token = cookies.get("student");

      if (!token) {
        alert("⚠️ يجب تسجيل الدخول أولاً للشراء");
        return;
      }

      const formData = new FormData();
      formData.append("course_id", courseId);

      const res = await fetch(
        `${process.env.NEXT_PUBLIC_API_URL}api/pay-now`,
        {
          method: "POST",
          headers: {
            Accept: "application/json",
            Authorization: `Bearer ${token}`,
          },
          body: formData,
        }
      );

      if (!res.ok) throw new Error("فشل إرسال طلب الدفع");

      const data = await res.json();
      alert("✅ تم إرسال طلب الدفع بنجاح!");
      console.log("Response:", data);
    } catch (err) {
      console.error(err);
      alert("❌ حدث خطأ أثناء الدفع");
    } finally {
      setSubmitting(false);
    }
  }

  if (loading) return <p>Loading...</p>;

  return (
    <div className="flex flex-col items-center gap-5 md:p-20 p-10 bg-white">
      <div className="text-center">
        <motion.h1
          variants={fadeIn("left", 0.3)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: false, amount: 0.2 }}
          className="text-[30px] font-black text-primaryText"
        >
          Courses
        </motion.h1>
      </div>

      <div className="xl:w-[100%] w-full mx-auto grid xl:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-6 place-items-center justify-center px-4 pt-6">
        {courses.map((course) => (
          <motion.div
            variants={fadeIn("up", course.id * 0.2)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.2 }}
            key={course.id}
            className="flex flex-col max-w-full max-h-full rounded-lg"
          >
            <div className="relative z-10 px-8 pt-6 top-6">
              <Image
                width={500}
                height={500}
                className="sm:w-[18rem] sm:h-[18rem] xs:w-[14rem] xs:h-[14rem] w-[8rem] h-[8rem] mx-auto object-cover rounded-full outline outline-[1rem] outline-lightOrange/10 shadow-4xl"
                src={course.thumbnail}
                alt={course.title}
              />
            </div>

            <div className="flex items-center justify-between w-full gap-4 px-6 pt-10 rounded-xl bg-lightOrange/10">
              <h2 className="mt-8 min-h-[60px] text-sm text-center text-primaryText sm:text-sm font-black">
                {course.title}
              </h2>
              <h3 className="px-2 py-1 text-sm text-white bg-accent-Default sm:text-lg rounded-3xl">
                {course.price}
              </h3>
            </div>

            {/* زر الدفع */}
            <Button
              onClick={() => handlePay(course.id)}
              className="mt-4 w-full"
              disabled={submitting}
            >
              {submitting ? "Processing..." : "Buy now"}
            </Button>
          </motion.div>
        ))}
      </div>

      <Link href={"/courses"}>
        <Button className="bg-accent-gold text-primaryText/70">
          show more
        </Button>
      </Link>
    </div>
  );
};

export default Courses;
