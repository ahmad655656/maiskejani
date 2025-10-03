"use client";
import React, { useState } from "react";
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
import emailjs from "emailjs-com"; // استيراد مكتبة EmailJS

const info = [
  {
    icon: <FaPhoneAlt />,
    title: "Phone",
    description: "(+963) 983 796 029",
  },
  {
    icon: <FaEnvelope />,
    title: "Email",
    description: "haedarahasan69@gmail.com",
  },
  {
    icon: <FaMapMarkerAlt />,
    title: "Address",
    description: "Syria, Tartous, AlSheikh-Badr",
  },
];

import { motion } from "framer-motion";
import { fadeIn } from "@/variants";

const Contact = () => {
  const [formData, setFormData] = useState({
    firstname: "",
    lastname: "",
    email: "",
    phone: "",
    service: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs
      .send(
        "service_a0qqwbf",
        "template_jiml93v",
        {
          from_name: `${formData.firstname} ${formData.lastname}`,
          to_name: "Ahmad Salloum",
          from_email: formData.email,
          phone: formData.phone,
          service: formData.service,
          message: formData.message,
          to_email: "haedarahasan69@gmail.com",
        },
        "GMi_Grh4yynlwtzVU"
      )
      .then((response) => {
        console.log(
          "Message sent successfully!",
          response.status,
          response.text
        );
        setFormData({
          firstname: "",
          lastname: "",
          email: "",
          phone: "",
          service: "",
          message: "",
        });
      })
      .catch((err) => {
        console.error("Failed to send message. Error:", err);
      });
  };

  return (
    <section
      className="py-6"
    >
      <div className="container mx-auto">
        <div className="flex flex-col xl:flex-row gap-[30px]">
          <motion.div variants={fadeIn("right", 0.2)} 
                      initial="hidden"
                      whileInView="show"
                      viewport={{ once: false, amount: 0.2 }} className="xl:h-[54%] order-2 xl:order-none">
            <form
              method="POST"
              className="flex flex-col gap-6 p-10 bg-white rounded-xl"
              onSubmit={handleSubmit}
            >
              <h3 className="text-4xl text-accent-Default">
                Let's work together
              </h3>
              <p className="text-primaryText/60">Haedara Hasan Salloum</p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <Input
                  name="firstname"
                  type="text"
                  className="placeholder:text-primaryText"
                  placeholder="Firstname"
                  onChange={handleChange}
                />
                <Input
                  name="lastname"
                  type="text"
                  className="placeholder:text-primaryText"
                  placeholder="Lastname"
                  onChange={handleChange}
                />
                <Input
                  name="email"
                  type="email"
                  className="placeholder:text-primaryText"
                  placeholder="Email address"
                  onChange={handleChange}
                />
                <Input
                  name="phone"
                  type="text"
                  placeholder="Phone number"
                  className="placeholder:text-primaryText"
                  onChange={handleChange}
                />
              </div>
              <Select
                onValueChange={(value) =>
                  setFormData({ ...formData, service: value })
                }
                className="w-full placeholder:text-primaryText"
              >
                <SelectTrigger className="w-full placeholder:text-primaryText">
                  <SelectValue
                    placeholder="Select a service"
                    className={`${
                      formData.service ? "text-primaryText" : "text-primaryText"
                    }`}
                  />
                </SelectTrigger>
                <SelectContent>
                  <SelectGroup>
                    <SelectLabel className="text-primaryText">
                      Select a service
                    </SelectLabel>
                    <SelectItem className="text-primaryText" value="Front-End Development">
                      Front-End Development
                    </SelectItem>
                    <SelectItem className="text-primaryText" value="Correcting Code Errors">
                      Correcting Code Errors
                    </SelectItem>
                    <SelectItem className="text-primaryText" value="Logo Design">Logo Design</SelectItem>
                    <SelectItem className="text-primaryText" value="Video Design">Video Design</SelectItem>
                  </SelectGroup>
                </SelectContent>
              </Select>

              <Textarea
                name="message"
                className="h-[200px] placeholder:text-primaryText"
                placeholder="Type your message here"
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
          <motion.div variants={fadeIn("left", 0.2)} 
                      initial="hidden"
                      whileInView="show"
                      viewport={{ once: false, amount: 0.2 }} className="flex items-center order-1 xl:order-none mb-8 xl:mb-0 xl:justify-end">
            <ul className="flex flex-col gap-10">
              {info.map((item, index) => {
                return (
                  <li key={index} className="flex items-center gap-6">
                    <div className="w-[52px] h-[52px] xl:w-[72px] xl:h-[72px] bg-accent-hover text-accent-Default rounded-md flex items-center justify-center">
                      <div className="text-[28px]">{item.icon}</div>
                    </div>
                    <div className="flex-1">
                      <p className="text-primaryText">{item.title}</p>
                      <h3 className="text-xl text-primaryText/60">
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
