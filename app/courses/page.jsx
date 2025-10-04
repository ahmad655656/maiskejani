"use client";
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
import { fadeIn } from "@/variants";
import { motion } from "framer-motion";
import Image from "next/image";
import { useEffect, useState } from "react";

export default function Page() {
  const [courses, setCourses] = useState([]);
  const [loading, setLoading] = useState(true);

  // 🆕 form states
  const [selectedCourse, setSelectedCourse] = useState(null);
  const [form, setForm] = useState({ name: "", email: "", phone: "" });
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
        console.log(json.data?.data)
        // Laravel عادة بيرجع data داخل data
        setCourses(Array.isArray(json.data?.data) ? json.data.data : []);
        console.log(courses)
      } catch (err) {
        console.error("Fetch error:", err);
      } finally {
        setLoading(false);
      }
    }
    fetchCourses();
  }, []);

  // 🆕 handle submit
  async function handleSubmit(e) {
    e.preventDefault();
    if (!selectedCourse) return;

    setSubmitting(true);
    try {
      const res = await fetch("https://test.course.start-tech.ae/api/enroll", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          name: form.name,
          email: form.email,
          phone: form.phone,
          course_id: selectedCourse.id,
        }),
      });

      if (!res.ok) throw new Error("Failed to send request");

      const data = await res.json();
      alert("Enrollment request sent successfully ✅");
      console.log("Response:", data);

      // reset form
      setForm({ name: "", email: "", phone: "" });
      setSelectedCourse(null);
    } catch (err) {
      console.error(err);
      alert("Something went wrong ❌");
    } finally {
      setSubmitting(false);
    }
  }

  if (loading) return <p>Loading...</p>;

  return (
    <div className="w-full max-h-full flex flex-col items-center gap-10 pt-10 pb-32 bg-light">
      <div className="flex flex-col justify-center max-w-7xl px-4 py-10 mx-auto sm:px-6">
        <h1 className="mb-6 text-2xl md:text-start text-center font-bold text-accent-Default md:text-3xl">
          Available courses
        </h1>

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

              {/* زر الشراء + الفورم */}
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
                    <DialogTitle>
                      Enroll in {selectedCourse?.title}
                    </DialogTitle>
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
                      <Button type="submit" disabled={submitting}>
                        {submitting ? "Sending..." : "Send Request"}
                      </Button>
                    </DialogFooter>
                  </form>
                </DialogContent>
              </Dialog>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
