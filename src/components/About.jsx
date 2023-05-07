import React from 'react'
import Tilt from "react-tilt";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { services } from "../constants";
// import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";
import { SectionWrapper } from "../hoc";

const ServiceCard = ({ index, title, icon }) => {
  return (
    <Tilt className="xs:w-[250px] w-full">
      <motion.div 
      variants={fadeIn("right", "spring", 0.5 * index, 0,75)}
      className="w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card"
      >

        <div options={{
          max: 45,
          scale:1,
          speed:450,
        }}
        className="bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col"
        >
          <img src={icon} alt={title} className="w-16 h-16 object-contain" />
          <h3 className='text-white test-[20px] font-bold text-center'> {title} </h3>
        </div>

      </motion.div>
    </Tilt>
  )
}

const About = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={`${styles.heroSubText}`}> Introduction </p>
        <h2 className={`${styles.heroHeadText}`}> Overview.</h2>
      </motion.div>

      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className="mt-4 text-secondary text-[17px]leading-[30px] max-w-5xl"
      >
        I'm a skilled blockchain developer with experience in Solidity, TypeScript and
        JavaScript, specializing in frameworks like React, Next.js, and Hardhat.
        I'm passionate about creating efficient, scalable, and user-friendly
        solutions on the blockchain to solve real-world problems. I collaborate
        closely with clients to bring their ideas to life. Let's work together
        to build innovative blockchain solutions!
      </motion.p>

      <div className="mt-20 flex flex-wrap gap-10">
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>
    </>
  );
}

export default SectionWrapper(About, "about");