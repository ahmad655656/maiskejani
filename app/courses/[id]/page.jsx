"use client";
import { courses } from "@/app/data";
import { useParams } from "next/navigation";
import React from "react";
const page = () => {
  const params = useParams();
  const courseId = parseInt(params.id);

  const course = courses.find((c) => c.id === courseId);

  if (!course) return <p className="mt-10 text-center">Course not found</p>;

  return (
    <div className="font-['Poppins']">
      {/* قسم تفاصيل الكورس */}
      <section className="flex items-center justify-center bg-black bg-opacity-20 h-[100vh]">
        <div className="flex w-[1300px] p-10 bg-white border-gray-400 rounded-xl border-2">
          <img
            className="w-[556px] ml-3 mr-6"
            src={course.image}
            alt={course.title}
          />
          <div>
            <div className="flex items-center gap-2">
              <h1 className="text-[36px] leading-[44px] font-semibold text-black">
                {course.title}
              </h1>
              <span className="text-sm text-[#2C742F] px-2 py-1 bg-[#20B526] bg-opacity-20">
                {course.academicYear}
              </span>
            </div>
            <p className="w-[500px] text-justify text-[#7f7f7f] text-sm font-normal mt-4 leading-[21px]">
              {course.description}
            </p>
          </div>
        </div>
      </section>

      {/* قسم الفيديوهات */}
      <section className="max-w-6xl px-6 py-12 mx-auto">
        <h2 className="mb-6 text-2xl font-semibold text-primaryText">
          Course Videos
        </h2>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {course.videos?.map((video) => (
            <div
              key={video.id}
              className="overflow-hidden bg-white rounded-lg shadow"
            >
              <iframe
                className="w-full h-60"
                src={video.url}
                title={video.title}
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
              <div className="p-4">
                <h3 className="text-sm font-medium text-gray-800">
                  {video.title}
                </h3>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default page;
