"use client";
import React, { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectLabel,
  SelectValue,
  SelectGroup,
} from "@/components/ui/select";
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";
import { motion } from "framer-motion";
import { fadeIn } from "@/variants";

const Contact = () => {
   // ✅ حالة لتخزين إعدادات الموقع القادمة من لوحة التحكم
    const [settings, setSettings] = useState({
      phone: "(+963) 937-944-041",
      email: "maiskejani2222@gmail.com",
      address:
        "طرطوس - شارع الثورة - مقابل فندق كليوباترا - دخلة صاج الضيافة - جانب روضة الانوار",
    });
  
    const [formData, setFormData] = useState({
      firstname: "",
      lastname: "",
      email: "",
      phone: "",
      service: "",
      message: "",
    });
    const [loading, setLoading] = useState(false);
    const [status, setStatus] = useState("");
  
    // ✅ اجلب الإعدادات من API
    useEffect(() => {
      const fetchSettings = async () => {
        try {
          const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}api/site-setting`, {
            cache: "no-store",
          });
          if (!res.ok) throw new Error("Failed to fetch site settings");
  
          const data = await res.json();
  
          // تأكد من وجود بيانات الهاتف والإيميل والعنوان
          setSettings({
            phone: data?.data?.phone || settings.phone,
            email: data?.data?.email || settings.email,
            address: data?.data?.address || settings.address,
          });
        } catch (error) {
          console.error("Error fetching site settings:", error);
        }
      };
  
      fetchSettings();
    }, []); // 👈 يستدعي مرة واحدة عند تحميل الصفحة
  
    // 📨 معالجة الإدخال في النموذج
    const handleChange = (e) => {
      const { name, value } = e.target;
      setFormData({ ...formData, [name]: value });
    };
  
    // 📨 إرسال النموذج
    const handleSubmit = async (e) => {
      e.preventDefault();
      setLoading(true);
      setStatus("");
  
      try {
        const form = new FormData();
        form.append("name", `${formData.firstname} ${formData.lastname}`);
        form.append("email", formData.email);
        form.append("phone", formData.phone);
        form.append("msg", `${formData.service} - ${formData.message}`);
  
        const response = await fetch(
          `${process.env.NEXT_PUBLIC_API_URL}/api/contact/send-message`,
          {
            method: "POST",
            headers: { Accept: "application/json" },
            body: form,
          }
        );
  
        const result = await response.json();
        if (response.ok && result.status) {
          setStatus("✅ Message sent successfully!");
          setFormData({
            firstname: "",
            lastname: "",
            email: "",
            phone: "",
            service: "",
            message: "",
          });
        } else {
          setStatus("❌ Failed to send message. Please try again.");
        }
      } catch (error) {
        console.error(error);
        setStatus("❌ An error occurred while sending the message.");
      } finally {
        setLoading(false);
      }
    };
  
    // 🧭 قائمة المعلومات تُحدَّث ديناميكياً من settings
    const info = [
      {
        icon: <FaPhoneAlt />,
        title: "Phone",
        description: settings.phone,
      },
      {
        icon: <FaEnvelope />,
        title: "Email",
        description: settings.email,
      },
      {
        icon: <FaMapMarkerAlt />,
        title: "Address",
        description: settings.address,
      },
    ];
  
  return (
    <section className="py-6">
      <div className="container mx-auto">
        <div className="flex flex-col xl:flex-row gap-[30px]">
          <motion.div
            variants={fadeIn("right", 0.2)}
            initial="show"
            animate="show"
            className="xl:h-[54%] order-2 xl:order-none"
          >
            <form
              method="POST"
              className="flex flex-col gap-6 p-10 bg-white rounded-xl"
              onSubmit={handleSubmit}
            >
              <h3 className="text-4xl text-accent-Default">
                Let's work together
              </h3>
              <p className="text-primaryText/60">Eng.Mais Kejani</p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <Input
                  name="firstname"
                  type="text"
                  className="placeholder:text-primaryText"
                  placeholder="Firstname"
                  value={formData.firstname}
                  onChange={handleChange}
                />
                <Input
                  name="lastname"
                  type="text"
                  className="placeholder:text-primaryText"
                  placeholder="Lastname"
                  value={formData.lastname}
                  onChange={handleChange}
                />
                <Input
                  name="email"
                  type="email"
                  className="placeholder:text-primaryText"
                  placeholder="Email address"
                  value={formData.email}
                  onChange={handleChange}
                />
                <Input
                  name="phone"
                  type="text"
                  placeholder="Phone number"
                  className="placeholder:text-primaryText"
                  value={formData.phone}
                  onChange={handleChange}
                />
              </div>
              <Select
                onValueChange={(value) =>
                  setFormData({ ...formData, service: value })
                }
              >
                <SelectTrigger className="w-full placeholder:text-primaryText">
                  <SelectValue placeholder="Select a service" />
                </SelectTrigger>
                <SelectContent>
                  <SelectGroup>
                    <SelectLabel className="text-primaryText">
                      Select a service
                    </SelectLabel>
                    <SelectItem value="Front-End Development">
                      Front-End Development
                    </SelectItem>
                    <SelectItem value="Correcting Code Errors">
                      Correcting Code Errors
                    </SelectItem>
                    <SelectItem value="Logo Design">Logo Design</SelectItem>
                    <SelectItem value="Video Design">Video Design</SelectItem>
                  </SelectGroup>
                </SelectContent>
              </Select>

              <Textarea
                name="message"
                className="h-[200px] placeholder:text-primaryText"
                placeholder="Type your message here"
                value={formData.message}
                onChange={handleChange}
              />
              <Button
                type="submit"
                className="max-w-40 hover:text-white text-black bg-accent-Default p-2 hover:bg-accent-hover rounded-lg"
              >
                Send message
              </Button>
            </form>
          </motion.div>
          <motion.div
            variants={fadeIn("left", 0.2)}
            initial="show"
            animate="show"
            className="flex items-start order-1 xl:order-none mb-8 xl:mb-0 xl:justify-end"
          >
            <ul className="flex flex-col gap-10">
              {info.map((item, index) => {
                return (
                  <li key={index} className="flex items-center gap-6">
                    <div className="w-[52px] h-[52px] xl:w-[72px] xl:h-[72px] bg-accent-hover text-accent-Default rounded-md flex items-center justify-center">
                      <div className="text-[28px]">{item.icon}</div>
                    </div>
                    <div className="flex-1">
                      <p className="text-primaryText">{item.title}</p>
                      <h3 className="text-lg text-primaryText/60">
                        {item.description}
                      </h3>
                    </div>
                  </li>
                );
              })}
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
