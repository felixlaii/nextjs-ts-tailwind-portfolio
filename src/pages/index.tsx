import Image from 'next/image'
import { Inter } from 'next/font/google'
import { RiDoubleQuotesL, RiServiceFill, RiServiceLine } from "react-icons/ri";
import { HiOfficeBuilding, HiOutlineOfficeBuilding } from "react-icons/hi";
import { MdCamera, MdOutlineCamera } from "react-icons/md";
import { useAnimation, motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useEffect, useState } from "react";
import Skills from './skills';
import About from './about';
import Projects from './projects';
import Hero from '@/components/Hero';
const inter = Inter({ subsets: ['latin'] })


const Home: React.FC = () => {
  const controls = useAnimation()

  return (
    <div className="relative">
      <Hero />
      <section id="about">
        {/* <h2>About</h2> */}
        <About/>
      </section>
      <section id="skills">
        {/* <h2>Skills</h2> */}
        <Skills/>
      </section>
      <section id="projects">
        <Projects />
      </section>
    </div>
  )
}
 export default Home;