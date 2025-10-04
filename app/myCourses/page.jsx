"use client";

import { useEffect, useState } from "react";
import { useRouter, usePathname } from "next/navigation";
import Cookie from "cookie-universal";

export default function MyCourses() {
  const router = useRouter();
  const pathname = usePathname();
  const [loading, setLoading] = useState(true);
  const cookie = Cookie();
  useEffect(() => {
    const token = cookie.get("student");
    console.log(cookie);
    if (!token) {
      // خزّن الوجهة المطلوبة قبل ما تروح على login
      localStorage.setItem("redirectAfterLogin", pathname);
      router.replace("/login");
    } else {
      setLoading(false);
    }
  }, [router, pathname]);

  if (loading) return <p>جارٍ التحقق...</p>;

  return (
    <div className="w-full min-h-screen">
      <h1>📚 My Courses</h1>
      <p>هنا تظهر الدورات الخاصة بالمستخدم</p>
    </div>
  );
}
