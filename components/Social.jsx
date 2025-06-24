import React from "react";
import Link from "next/link";
import { FaGithub, FaFacebook, FaWhatsapp, FaTelegram } from "react-icons/fa";

const socials = [
  { icon: <FaGithub />, path: "https://github.com/ahmad655656" },
  { icon: <FaWhatsapp />, path: "https://wa.me/+963983796029" },
  { icon: <FaFacebook />, path: "https://www.facebook.com/HaedaraSalloum" },
  { icon: <FaTelegram />, path: "https://t.me/+963983796029" },  
];

const Social = ({ containerStyles, iconStyles }) => {
  return (
    <div className={containerStyles}>
      {socials.map((item, index) => {
        return <Link key={index} className={iconStyles} href={item.path}>{item.icon}</Link>;
      })}
    </div>
  );
};

export default Social;
