"use client";
import React, { useState } from "react";
import { useRouter } from "next/navigation"; // استخدام التوجيه في Next.js
import Link from "next/link"; // للتوجيه إلى صفحة تسجيل الدخول
import Cookie from "cookie-universal"; // للتحقق من الكوكيز

export default function Signup() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const cookie = Cookie(); // للوصول إلى الكوكيز
  const router = useRouter(); // لاستخدام التوجيه بعد التسجيل


const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");

    if (password !== confirmPassword) {
        setError("Passwords do not match");
        return;
    }

    const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA0-9]{2,4}$/;
    if (!emailPattern.test(email)) {
        setError("Please enter a valid email address");
        return;
    }

    const phonePattern = /^[0-9]{10}$/;
    if (!phonePattern.test(phone)) {
        setError("Please enter a valid phone number (10 digits)");
        return;
    }

    setLoading(true);

    
    try {
        const formData = new FormData();
        formData.append("name", username);
        formData.append("email", email);
        formData.append("password", password);
        formData.append("phone", phone);

        const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}api/register`, {
          method: "POST",
          body: formData,
            headers: {
            Accept: "application/json",
          },
        credentials: "include",
        });
console.log(res.json)
        const data = await res.json();
        if (!res.ok) {
          console.log(res)
        }

        if (data.token) {
          localStorage.setItem("token", data.token);
          router.push("/dashboard");
          alert("Account created successfully!"); 
        } else {
            alert("Account created successfully! Please log in.");
            router.push("/login");
        }
        
    } catch (err) {
        setError(err.message);
    } finally {
        setLoading(false);
    }
};


  return (
    <div className="w-full max-w-sm mx-auto my-20 overflow-hidden bg-white rounded-lg shadow-md">
      <div className="px-6 py-4">
        <h3 className="mt-3 text-xl font-medium text-center text-gray-600">Welcome</h3>
        <p className="mt-1 text-center text-gray-500">Create a new account</p>

        <form onSubmit={handleSubmit}>
          <div className="flex items-center mt-6">
            <input
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className="block w-full py-3 bg-white text-primaryText border outline-none rounded-lg px-7"
              placeholder="Username"
              required
            />
          </div>

          <div className="flex items-center mt-6">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="block w-full py-3 bg-white text-primaryText border outline-none rounded-lg px-7"
              placeholder="Email address"
              required
            />
          </div>

          <div className="flex items-center mt-4">
            <input
              type="tel"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              className="block w-full py-3 bg-white border text-primaryText outline-none rounded-lg px-7"
              placeholder="Phone"
              required
            />
          </div>

          <div className="flex items-center mt-4">
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="block w-full py-3 bg-white border text-primaryText outline-none rounded-lg px-7"
              placeholder="Password"
              required
            />
          </div>

          <div className="flex items-center mt-4">
            <input
              type="password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              className="block w-full py-3 bg-white border text-primaryText outline-none rounded-lg px-7"
              placeholder="Confirm Password"
              required
            />
          </div>

          {error && <p className="mt-3 text-sm text-red-500">{error}</p>}

          <div className="mt-6">
            <button
              type="submit"
              disabled={loading}
              className="w-full px-6 py-3 text-sm font-medium tracking-wide text-primaryText hover:text-primaryText/60 capitalize bg-yellow-400 rounded-lg"
            >
              {loading ? "Signing up..." : "Sign Up"}
            </button>

            <div className="mt-6 text-center">
              <Link href="/login" className="text-sm text-primaryText hover:underline">
                Already have an account?
              </Link>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}
