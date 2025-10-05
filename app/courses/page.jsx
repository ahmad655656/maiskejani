"use client";

import { Button } from "@/components/ui/button";
import { fadeIn } from "@/variants";
import { motion } from "framer-motion";
import Image from "next/image";
import { useEffect, useState } from "react";
import Cookie from "cookie-universal";
import Loading from "../Loading";

export default function Page() {
  const [courses, setCourses] = useState([]);
  const [loading, setLoading] = useState(true);
  const [submittingId, setSubmittingId] = useState(null);

  useEffect(() => {
    async function fetchCourses() {
      try {
        setLoading(true);
        const cookies = Cookie();
        const token = cookies.get("student");

        // 🟢 1. جلب جميع الكورسات
        const resAll = await fetch(
          "https://test.course.start-tech.ae/api/courses?per_page=50&page=1",
          {
            headers: { Accept: "application/json" },
          }
        );
        const jsonAll = await resAll.json();
        const allCourses = Array.isArray(jsonAll.data?.data)
          ? jsonAll.data.data
          : [];

        // إذا المستخدم غير مسجل دخول ← اعرض كل الكورسات
        if (!token) {
          const sortedAllCourses = [...allCourses].sort((a, b) => 
            new Date(b.created_at) - new Date(a.created_at)
          );
          setCourses(sortedAllCourses);
          setLoading(false);
          return;
        }

        // 🟡 2. جلب الكورسات المدفوعة والمعلقة بشكل منفصل
        const API_BASE = process.env.NEXT_PUBLIC_API_URL;

        // جلب الكورسات المدفوعة (status=paid)
        const resPaid = await fetch(
          `${API_BASE}api/myCourses?status=paid`,
          {
            headers: { Accept: "application/json", Authorization: `Bearer ${token}` },
          }
        );
        const jsonPaid = await resPaid.json();
        const paidCourses = Array.isArray(jsonPaid.data) ? jsonPaid.data : [];

        // جلب الكورسات المعلقة (status=pending)
        const resPending = await fetch(
          `${API_BASE}api/myCourses?status=pending`,
          {
            headers: { Accept: "application/json", Authorization: `Bearer ${token}` },
          }
        );
        const jsonPending = await resPending.json();
        const pendingCourses = Array.isArray(jsonPending.data) ? jsonPending.data : [];

        // 🟠 3. استخراج معرفات الكورسات من كلتا المجموعتين
        
        // استخراج IDs الكورسات المدفوعة
        const paidIds = paidCourses.map((c) => c.course?.id).filter(id => id != null);
        
        // استخراج IDs الكورسات المعلقة
        const pendingIds = pendingCourses.map((c) => c.course?.id).filter(id => id != null);
        
        // دمج المعرفات في قائمة واحدة مستبعدة
        const excludedIds = [...new Set([...paidIds, ...pendingIds])]; 
        
        // 🔴 4. فلترة الكورسات العامة لاستبعاد المعرفات
        let availableCourses = allCourses.filter(
          (course) => !excludedIds.includes(course.id)
        );
        
        // 🔴 5. فرز الكورسات المتاحة لعرض الأحدث (الجديدة) أولاً
        availableCourses = availableCourses.sort((a, b) => 
          new Date(b.created_at) - new Date(a.created_at) // فرز تنازلي (الأحدث أولاً)
        );
        
        // ✅ 6. عرض فقط الكورسات المتاحة والمفرزة
        setCourses(availableCourses);
      } catch (err) {
        console.error("Fetch error:", err);
      } finally {
        setLoading(false);
      }
    }

    fetchCourses();
  }, []);

  // 🔵 عند الضغط على زر الشراء (لم يتم تغيير هذا الجزء)
  async function handlePay(courseId) {
    const cookies = Cookie();
    const token = cookies.get("student");

    if (!token) {
      alert("⚠️ يجب تسجيل الدخول أولاً للشراء");
      return;
    }

    setSubmittingId(courseId);
    try {
      const formData = new FormData();
      formData.append("course_id", courseId);

      const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}api/pay-now`, {
        method: "POST",
        headers: {
          Accept: "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: formData,
      });

      if (!res.ok) throw new Error("فشل إرسال طلب الدفع");

      const data = await res.json();
      console.log("✅ Response:", data);
      alert("✅ تم إرسال طلب الدفع بنجاح! سيتم إزالة الكورس من القائمة.");

      // 🧹 إزالة الكورس من الواجهة مباشرة بعد الطلب (سيصبح حالته "pending")
      setCourses((prev) => prev.filter((c) => c.id !== courseId));
    } catch (err) {
      console.error(err);
      alert("❌ حدث خطأ أثناء معالجة الدفع");
    } finally {
      setSubmittingId(null);
    }
  }

  if (loading) return <Loading content={"⏳ Loading courses..."} />;

  return (
    <div className="w-full max-h-full flex flex-col items-center gap-10 pt-10 pb-32 bg-light">
      <div className="flex flex-col justify-center max-w-7xl px-4 py-10 mx-auto sm:px-6">
        <h1 className="mb-6 text-2xl md:text-center text-center font-bold text-accent-Default md:text-3xl">
          Available Courses
        </h1>

        {courses.length === 0 ? (
          <p className="text-gray-500 text-center text-lg">
            🎉 You already purchased or requested all available courses!
          </p>
        ) : (
          <div className="xl:w-[100%] w-full mx-auto grid xl:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-6 place-items-center justify-center px-4 pt-6">
            {courses.map((course) => (
              <motion.div
                variants={fadeIn("up", courses.indexOf(course) * 0.1)} 
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

                <Button
                  onClick={() => handlePay(course.id)}
                  className="mt-4 w-full"
                  disabled={submittingId === course.id}
                >
                  {submittingId === course.id ? "Processing..." : "Buy now"}
                </Button>
              </motion.div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}