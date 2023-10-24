import Image from 'next/image'
import { Inter } from 'next/font/google'
import { RiDoubleQuotesL, RiServiceFill, RiServiceLine } from "react-icons/ri";
import { HiOfficeBuilding, HiOutlineOfficeBuilding } from "react-icons/hi";
import { MdCamera, MdOutlineCamera } from "react-icons/md";
import { useAnimation, motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useEffect, useState } from "react";
import Skills from './skills';

const inter = Inter({ subsets: ['latin'] })

export const fadeIn = {
  visible: {
    opacity: 1,
    transition: { duration: 0.5, delay: 1.25 },
    filter: "blur(0)",
  },
  hidden: {
    opacity: 0,
    filter: "blur(40px)",
  },
};

const Home: React.FC = () => {
  const controls = useAnimation()

  return (
    <div>
      <section id="about">
        <h2>About</h2>
      </section>
      <section id="skills">
        <h2>Skills</h2>
        <Skills/>
      </section>
    </div>
  )
}
 export default Home;