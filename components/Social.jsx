import React from "react";
import Link from "next/link";

import { socials } from "@/app/data";

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
