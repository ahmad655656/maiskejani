import Image from "next/image";
import Link from "next/link";
import React from "react";

const page = () => {
  return (
    <div className="w-full max-w-sm mx-auto my-20 overflow-hidden bg-white rounded-lg shadow-md">
      <div className="px-6 py-4">
        <div className="flex justify-center mx-auto">
          <Image
            alt="logo"
            width={200}
            height={20}
            className=""
            src="/asset/Primary_logo.png"
          />
        </div>

        <h3 className="mt-3 text-xl font-medium text-center text-gray-600 dark:text-gray-200">
          Welcome Back
        </h3>

        <p className="mt-1 text-center text-gray-500 dark:text-gray-400">
          Login or create account
        </p>

        <form>
          <div className=" flex items-center mt-8">
            <input
              type="text"
              className="block w-full py-3 text-primaryText bg-white border outline-none rounded-lg px-7"
              placeholder="Username"
            />
          </div>

          <label
            htmlFor="dropzone-file"
            className="flex items-center px-3 py-3 mx-auto mt-6 text-center bg-white border-2 border-dashed rounded-lg cursor-pointer"
          >
            <h2 className="mx-3 text-gray-400">Profile Photo</h2>

            <input id="dropzone-file" type="file" className="hidden" />
          </label>

          <div className="flex items-center mt-6">
            <input
              type="email"
              className="block w-full py-3 text-primaryText bg-white border outline-none rounded-lg px-7"
              placeholder="Email address"
            />
          </div>

          <div className="flex items-center mt-4">
            <input
              type="password"
              className="block w-full py-3 text-primaryText bg-white border outline-none rounded-lg px-7"
              placeholder="Password"
            />
          </div>

          <div className="flex items-center mt-4">
            <input
              type="password"
              className="block w-full py-3 text-primaryText bg-white border outline-none rounded-lg px-7"
              placeholder="Confirm Password"
            />
          </div>

          <div className="mt-6">
            <button className="w-full px-6 py-3 text-sm font-medium tracking-wide text-primaryText hover:text-primaryText/60 capitalize bg-accent-gold rounded-lg ">
              Sign Up
            </button>

            <div className="mt-6 text-center ">
              <Link
                href="/login"
                className="text-sm text-primaryText hover:underline "
              >
                Already have an account?
              </Link>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default page;
