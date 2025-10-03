import Image from "next/image";
import { FaIdBadge } from "react-icons/fa";
import { FaGraduationCap } from "react-icons/fa";
import {
  FaGithub,
  FaFacebook,
  FaWhatsapp,
  FaTelegram,
  FaInstagram,
} from "react-icons/fa";

export const ads = [
  {
    id: 0,
    image: (
      <Image 
        src="/asset/ad1.jpg"
        alt="Ad 1"
        width={400}
        height={400}
        className="sm:w-[18rem] sm:h-[14rem] md:w-[28rem] md:h-[19rem] w-[20rem] h-[15rem] mx-auto object-cover shadow-4xl"
      />
    ),
    title: "50% Off Architectural Design",
    description:
      "Take advantage of our special offer on all architectural design services using the latest software for guaranteed quality and professionalism.",
    date: new Date().toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
    }),
  },
  {
    id: 1,
    image: (
      <Image
        src="/asset/ad2.jpg"
        alt="Ad 2"
        width={400}
        height={400}
        className="sm:w-[18rem] sm:h-[14rem] md:w-[28rem] md:h-[19rem] w-[15rem] h-[15rem] mx-auto object-cover shadow-4xl"
      />
    ),
    date: new Date().toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
    }),

    title: "Luxury Interior Design",
    description:
      "Get a unique interior design that reflects your style, with exclusive discounts for a limited time.",
  },
  {
    id: 1,
    image: (
      <Image
        src="/asset/ad3.jpg"
        alt="Ad 3"
        width={400}
        height={400}
        className="sm:w-[18rem] sm:h-[14rem] md:w-[28rem] md:h-[19rem] w-[15rem] h-[15rem] mx-auto object-cover shadow-4xl"
      />
    ),
    date: new Date().toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
    }),

    title: "3D Visualization Services",
    description:
      "Special offers on 3D visualization to bring your projects to life with the best visual quality.",
  },
  {
    id: 4,
    image: <Image src="/ads/ad4.png" alt="Ad 4" width={200} height={120} />,
    title: "Exclusive Packages for Companies",
    description:
      "Special deals for companies and engineering offices to enhance efficiency and deliver professional designs.",
  },
];

export const courses = [
  {
    id: 1,
    title: "Architectural Design Basics",
    teacher: "Eng. mais Kejani",
    role: "Professor of Architecture",
    price: "$149",
    image:
      "https://images.unsplash.com/photo-1501594907352-04cda38ebc29?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
    teacherImg: "/asset/edited-photo.png",
    academicYear: "1st Year",
    time: "10-12 AM",
    kids: "40 Students",
    description:
      "This course introduces students to the fundamental principles of architectural design and creative thinking. \
They will learn how to approach architectural problems through conceptual sketches, models, and spatial analysis. \
The course emphasizes visual communication, proportion, form, and the relationship between people and space. \
By the end of the course, students will be able to create simple architectural projects that demonstrate a clear understanding \
of design elements, site analysis, and user needs. It provides the essential foundation for more advanced architectural studies.",
  },
  {
    id: 2,
    title: "Structural Systems & Materials",
    teacher: "Eng. mais Kejani",
    role: "Structural Engineer",
    price: "$199",
    image:
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
    teacherImg: "/asset/edited-photo.png",
    academicYear: "2nd Year",
    time: "2-4 PM",
    kids: "35 Students",
    description:
      "This course focuses on the study of structural systems and construction materials used in modern architecture. \
Students will explore how buildings stand, resist loads, and maintain stability under different conditions. \
The curriculum includes steel, concrete, wood, and composite materials, highlighting their physical properties, \
advantages, and limitations. Case studies of real-world projects are analyzed to understand the balance between aesthetics \
and structural integrity. Students will also learn about environmentally friendly building materials and construction technologies. \
By the end, they will be able to design structural frameworks and select suitable materials for small to medium-sized projects.",
  },
  {
    id: 3,
    title: "Urban Planning & Sustainable Design",
    teacher: "Eng. mais Kejani",
    role: "Urban Planner",
    price: "$179",
    image:
      "https://images.unsplash.com/photo-1503387762-592deb58ef4e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
    teacherImg: "/asset/edited-photo.png",
    academicYear: "3rd Year",
    time: "11-1 PM",
    kids: "28 Students",
    description:
      "This course introduces students to the theories and practices of urban planning with a strong focus on sustainability. \
It explores the challenges of rapid urbanization, population growth, and environmental impact. Students will study zoning, \
land use, transportation networks, and public spaces while examining how architecture contributes to the overall urban fabric. \
Sustainable strategies such as green building, renewable energy integration, and waste management are emphasized. \
Through projects and simulations, students will design urban spaces that encourage social interaction, economic growth, \
and ecological balance. By the end, students will have the knowledge to contribute to modern smart city initiatives \
and eco-friendly urban developments.",
  },
];
export const navLinks = [
  {
    name: "home",
    href: "/",
  },
  {
    name: "advertisements",
    href: "/advertisements",
  },
  {
    name: "resume",
    href: "/resume",
  },
  {
    name: "courses",
    href: "/courses",
  },
  {
    name: "contact",
    href: "/contact",
  },
  {
    name: "articles",
    href: "/articles",
  },
];
export const stats = [
  {
    num: 16,
    text: "Years of Experience",
  },
  {
    num: 30,
    text: "Projects Completed",
  },
  {
    num: 10,
    text: "Technologies mastered",
  },
  {
    num: 41,
    text: "The age",
  },
];
export const about = {
  title: "Aboute me",
  description:
    "I'm a full stack developer with a passion for building scalable and efficient applications.",
  info: [
    {
      fieldName: "Name",
      fieldValue: "Mais Mustafa Kejani",
    },
    {
      fieldName: "Phone",
      fieldValue: "(+963) 937 944 041",
    },
    {
      fieldName: "Experience",
      fieldValue: "16+ Years",
    },
    {
      fieldName: "WhatsApp",
      fieldValue: "(+963) 937 944 041",
    },
    {
      fieldName: "Nationality",
      fieldValue: "Syrian",
    },
    {
      fieldName: "Email",
      fieldValue: "maiskejani2222@gmail.com",
    },
    {
      fieldName: "Freelance",
      fieldValue: "Available",
    },
    {
      fieldName: "Languages",
      fieldValue: "Arabic , English",
    },
  ],
};
export const experience = {
  icon: <FaIdBadge />,
  title: "My experience",
  description:
    "I am an Architectural Engineer with extensive experience in both design and construction fields.",
  items: [
    {
      company: "Tartous University ",
      position: "Teacher",
      duration: "10 Years",
    },
    {
      company: "Porto Tartous ",
      position: "Architecture ",
      duration: "2 Years",
    },
    {
      company: "Abc Company ",
      position: "Architecture ",
      duration: "2 Year",
    },
    {
      company: "Shop Drawing Designer ",
      position: "Architecture ",
      duration: "16 Years",
    },
    {
      company: "Building Contractor ",
      position: "contractor ",
      duration: "6 Years",
    },
  ],
};
export const education = {
  icon: <FaGraduationCap />,
  title: "My education",
  description:
    "I have a Bachelor's degree in Computer Science from the University of Latakia.",
  items: [
    {
      institution: "University of Latakia",
      degree: "Architectural Engineering Certificate",
      duration: "2009",
    },
  ],
};
export const skills = {
  title: "My skills",
  description:
    "AutoCAD (2D & 3D drafting and detailing) Revit (BIM modeling and documentation) 3ds Max with V-Ray (3D visualization and rendering) Photoshop (post-production and presentation) SketchUp (conceptual modeling) Lumion / Enscape (real-time rendering and animations)",
  skilList: [
    {
      icon: (
        <Image
          src="/asset/AutoCad-removebg-preview.png"
          alt=""
          width={100}
          height={50}
        />
      ),
      name: "AutoCAD",
    },
    {
      icon: (
        <Image
          src="/asset/Revit-removebg-preview.png"
          alt=""
          width={100}
          height={50}
        />
      ),
      name: "Revit",
    },
    {
      icon: (
        <Image
          src="/asset/lumion-removebg-preview.png"
          alt=""
          width={100}
          height={50}
        />
      ),
      name: "Lumion",
    },
    {
      icon: (
        <Image
          src="/asset/3DMax-removebg-preview.png"
          alt=""
          width={100}
          height={50}
        />
      ),
      name: "3ds Max",
    },
    {
      icon: (
        <Image
          src="/asset/vray-removebg-preview (1).png"
          alt=""
          width={100}
          height={50}
        />
      ),
      name: "V-Ray",
    },
    {
      icon: (
        <Image
          src="/asset/freedrawing-removebg-preview.png"
          alt=""
          width={100}
          height={50}
        />
      ),
      name: "Free drawing",
    },
  ],
};
export const articles = [
  {
    title: "Use TailwindCSS with Gatsby (with Emotion or styled-components)",
    tags: ["#gatsby", "#tailwindcss", "#css"],
    description:
      "Learn how to use TailwindCSS with Gatsby along with Emotion or styled-components perfectly.",
    date: new Date("2023-10-01"), // مثال تاريخ ثابت
  },
  {
    title: "Understanding React Hooks Deeply",
    tags: ["#react", "#hooks", "#javascript"],
    description:
      "A detailed guide on React hooks and how to use them efficiently in your projects.",
    date: new Date("2023-11-15"),
  },
  {
    title: "Building Responsive UI with TailwindCSS",
    tags: ["#tailwindcss", "#css", "#responsive"],
    description:
      "Learn to build fully responsive user interfaces using TailwindCSS classes.",
    date: new Date("2024-01-05"),
  },
];
export const socials = [
  {
    icon: <FaInstagram />,
    path: "https://www.instagram.com/maiskejani?igsh=NWg1ajE5cTdsMzh2",
  },
  { icon: <FaWhatsapp />, path: "https://wa.me/+0937944041" },
  {
    icon: <FaFacebook />,
    path: "https://www.facebook.com/mais.kejani?mibextid=ZbWKwL",
  },
  { icon: <FaTelegram />, path: "https://t.me/+eLHJf6cNLqRjNTc0" },
];
