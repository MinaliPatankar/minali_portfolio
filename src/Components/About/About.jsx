import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { Tilt } from 'react-tilt'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPalette } from '@fortawesome/free-solid-svg-icons'
import { faClapperboard } from '@fortawesome/free-solid-svg-icons'
import { faCubes } from '@fortawesome/free-solid-svg-icons'
import { faFilm } from '@fortawesome/free-solid-svg-icons'
import  {SectionWrapper}  from '../../hoc'


const textVariant = (delay) => {
  return {
    hidden: {
      y: -50,
      opacity: 0,
    },
    show: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        duration: 1.25,
        delay: delay,
      },
    },
  };
};

const fadeIn = (direction, type, delay, duration) => {
  return {
    hidden: {
      x: direction === "left" ? 100 : direction === "right" ? -100 : 0,
      y: direction === "up" ? 100 : direction === "down" ? -100 : 0,
      opacity: 0,
    },
    show: {
      x: 0,
      y: 0,
      opacity: 1,
      transition: {
        type: type,
        delay: delay,
        duration: duration,
        ease: "easeOut",
      },
    },
  };
};


const About = () => {
  return (
    <div id='about'>
      <motion.div variants={textVariant()}>
        <p className='lg:text-[30px] sm:text-[26px] min-[380px]:20px text-[16px] text-[#ABB2BF] ubuntu m-0'>INTRODUCTION</p>
        <h2 className='lg:text-[80px] sm:text-[60px] min-[380px]:50px text-[40px] text-white ubuntu m-0'>Overview</h2>
      </motion.div>
      <motion.p variants={fadeIn("", "", 0.1, 1)}
        className='poppins text-[17px] text-[#ABB2BF] mt-5 leading-[30px]'>
        I’m a passionate <span className='text-[#B98ACDce]'> 3D Modeling & Texturing Artist </span> and <span className='text-[#B98ACDce]'>Video Editor & Visual Storyteller </span>with hands-on experience in creating high-quality 3D assets, textures, and cinematic visuals. I specialize in crafting immersive content for games, films, and digital media using industry-standard tools like <span className='text-[#B98ACDce]'>Autodesk Maya, Autodesk 3Ds Max, Adobe Substance Painter, ZBrush, </span> and <span className='text-[#B98ACDce]'>Blender </span>  .<br/> As a video editor, I bring stories to life through seamless edits, visual effects, and color grading using <span className='text-[#B98ACDce]'>Adobe Premiere Pro, Adobe Photoshop, Adobe After Effects, DaVinci Resolve </span>.<br/>Whether it’s creating detailed 3D environments or delivering dynamic video content, I’m dedicated to visual storytelling and bringing creative visions to reality.
      </motion.p>
      <div className='flex flex-wrap gap-10 mt-20'>
        <Tilt className='min-[300px]:w-[250px] w-full'>
          <motion.div variants={fadeIn("right", "spring", "0", 0.75)}
            className='w-full pink-green-gradient p-[1px] rounded-[20px] shadow-xl shadow-black'>
            <div options={{ max: 45, scale: 1, speed: 450 }} className='bg-black rounded-[20px] py-5 px-12 min-h-[280px] flex flex-col justify-evenly items-center'>
              <FontAwesomeIcon  icon={faCubes} className='text-8xl text-[#ABB2BF]' />
              <h3 className='poppins text-center text-white text-sm font-bold'>3D Modeling & Texturing</h3>
            </div>
          </motion.div>
        </Tilt>
        <Tilt className='min-[300px]:w-[250px] w-full'>
          <motion.div variants={fadeIn("right", "spring", "0.5", 0.75)}
            className='w-full pink-green-gradient p-[1px] rounded-[20px] shadow-xl shadow-black'>
            <div options={{ max: 45, scale: 1, speed: 450 }} className='bg-black rounded-[20px] py-5 px-12 min-h-[280px] flex flex-col justify-evenly items-center'>
              <FontAwesomeIcon icon={faPalette} className='text-8xl text-[#ABB2BF]' />
              <h3 className='poppins text-white text-sm font-bold'>Graphic Designer</h3>
            </div>
          </motion.div>
        </Tilt>
        <Tilt className='min-[300px]:w-[250px] w-full'>
          <motion.div variants={fadeIn("right", "spring", "1", 0.75)}
            className='w-full pink-green-gradient p-[1px] rounded-[20px] shadow-xl shadow-black'>
            <div options={{ max: 45, scale: 1, speed: 450 }} className='bg-black rounded-[20px] py-5 px-12 min-h-[280px] flex flex-col justify-evenly items-center'>
              <FontAwesomeIcon icon={faClapperboard} className='text-8xl text-[#ABB2BF]' />
              <h3 className='poppins text-white text-sm font-bold'>Video Editing</h3>
            </div>
          </motion.div>
        </Tilt>
        <Tilt className='min-[300px]:w-[250px] w-full'>
          <motion.div variants={fadeIn("right", "spring", "2", 0.75)}
            className='w-full pink-green-gradient p-[1px] rounded-[20px] shadow-xl shadow-black'>
            <div options={{ max: 45, scale: 1, speed: 450 }} className='bg-black rounded-[20px] py-5 px-12 min-h-[280px] flex flex-col justify-evenly items-center'>
              <FontAwesomeIcon icon={faFilm} className='text-8xl text-[#ABB2BF]' />
              <h3 className='poppins text-white text-sm font-bold'>Visual Storyteller</h3>
            </div>
          </motion.div>
        </Tilt>
      </div>
    </div>
  )
}

export default SectionWrapper(About, "#about")
