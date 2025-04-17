import React from 'react'
import { SectionWrapper } from '../../hoc'
import { motion } from 'framer-motion'
import { Tilt } from 'react-tilt';

import '@google/model-viewer';


//import dog from '../../assets/Projects/dog.glb'


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


const Projects = () => {
  return (
    <div id='projects'>
      <motion.div variants={textVariant()}>
        <p className='lg:text-[30px] sm:text-[26px] min-[380px]:20px text-[16px] text-[#ABB2BF] ubuntu m-0'>MY WORK</p>
        <h2 className='lg:text-[80px] sm:text-[60px] min-[380px]:50px text-[40px] text-white ubuntu m-0'>Portfolio Models</h2>
      </motion.div>
      <motion.p variants={fadeIn("", "", 0.1, 1)}
        className='poppins text-[17px] text-[#ABB2BF] mt-3 leading-[30px]'>
        Following are the models I’ve created, showcasing a range of skills from hard-surface modeling to texturing and rendering. My workflow includes tools like Autodesk Maya, Substance Painter, ZBrush, Blender, Mudbox, and Photoshop, allowing me to bring any concept to life — from idea to final render. 
      </motion.p>
      <div className='flex flex-wrap gap-7 mt-20'>
        <Tilt className='sm:w-[560px] w-full'>
          <motion.div variants={fadeIn("up", "spring", 0, 0.75)}
            className='pink-green-gradient p-[1px] rounded-2xl shadow-xl shadow-black' >
            <div className='p-5 w-full bg-[#ABB2BF] rounded-2xl'>
              <div className='img-container relative w-full h-[320px] '>
             
              <model-viewer 
                  src='https://minalipatankar.github.io/3d-models/sofa1.glb'
                  alt='project_image' 
                  camera-controls 
                  camera-orbit="0deg 75deg" 
                  style={{ width:'520px',height:'320px'}}
                  >
                </model-viewer>
              </div>
            </div>
          </motion.div>
        </Tilt>
        <Tilt className='sm:w-[560px] w-full'>
          <motion.div variants={fadeIn("up", "spring", 0, 0.75)}
            className='pink-green-gradient p-[1px] rounded-2xl shadow-xl shadow-black' >
            <div className='p-5 w-full bg-[#ABB2BF] rounded-2xl'>
              <div className='img-container relative w-full h-[320px]'>
              <model-viewer 
                  src='https://minalipatankar.github.io/3d-models/tvshell.glb'
                  alt='project_image' 
                  camera-controls 
                  camera-orbit="0deg 75deg" 
                  style={{ width:'520px',height:'320px'}}
                  >
                </model-viewer>
              </div>
            </div>
          </motion.div>
        </Tilt>
        <Tilt className='sm:w-[560px] w-full'>
          <motion.div variants={fadeIn("up", "spring", 0, 0.75)}
            className='pink-green-gradient p-[1px] rounded-2xl shadow-xl shadow-black' >
            <div className='p-5 w-full bg-[#ABB2BF] rounded-2xl'>
              <div className='img-container relative w-full h-[320px]'>
              <model-viewer 
                  src='https://minalipatankar.github.io/3d-models/chair1.glb'
                  alt='project_image' 
                  camera-controls 
                  camera-orbit="0deg 75deg" 
                  style={{ width:'520px',height:'320px'}}
                  >
                </model-viewer>
              </div>
            </div>
          </motion.div>
        </Tilt>

        <Tilt className='sm:w-[560px] w-full'>
          <motion.div variants={fadeIn("up", "spring", 0, 0.75)}
            className='pink-green-gradient p-[1px] rounded-2xl shadow-xl shadow-black' >
            <div className='p-5 w-full bg-[#ABB2BF] rounded-2xl'>
              <div className='img-container relative w-full h-[320px]'>
              <model-viewer 
                  src='https://minalipatankar.github.io/3d-models/sofa2.glb'
                  alt='project_image' 
                  camera-controls 
                  camera-orbit="0deg 75deg" 
                  style={{ width:'520px',height:'320px'}}
                  >
                </model-viewer>
              </div>
            </div>
          </motion.div>
        </Tilt>

        <Tilt className='sm:w-[560px] w-full'>
          <motion.div variants={fadeIn("up", "spring", 0, 0.75)}
            className='pink-green-gradient p-[1px] rounded-2xl shadow-xl shadow-black' >
            <div className='p-5 w-full bg-[#ABB2BF] rounded-2xl'>
              <div className='img-container relative w-full h-[320px] '>
             
              <model-viewer 
                  src='https://minalipatankar.github.io/3d-models/almirah.glb'
                  alt='project_image' 
                  camera-controls 
                  camera-orbit="0deg 75deg" 
                  style={{ width:'520px',height:'320px'}}
                  >
                </model-viewer>
              </div>
            </div>
          </motion.div>
        </Tilt>
        <Tilt className='sm:w-[560px] w-full'>
          <motion.div variants={fadeIn("up", "spring", 0, 0.75)}
            className='pink-green-gradient p-[1px] rounded-2xl shadow-xl shadow-black' >
            <div className='p-5 w-full bg-[#ABB2BF] rounded-2xl'>
              <div className='img-container relative w-full h-[320px]'>
              <model-viewer 
                  src='https://minalipatankar.github.io/3d-models/chair2.glb'
                  alt='project_image' 
                  camera-controls 
                  camera-orbit="0deg 75deg" 
                  style={{ width:'520px',height:'320px'}}
                  >
                </model-viewer>
              </div>
            </div>
          </motion.div>
        </Tilt>
        <Tilt className='sm:w-[560px] w-full'>
          <motion.div variants={fadeIn("up", "spring", 0, 0.75)}
            className='pink-green-gradient p-[1px] rounded-2xl shadow-xl shadow-black' >
            <div className='p-5 w-full bg-[#ABB2BF] rounded-2xl'>
              <div className='img-container relative w-full h-[320px]'>
              <model-viewer 
                  src='https://minalipatankar.github.io/3d-models/bed.glb'
                  alt='project_image' 
                  camera-controls 
                  camera-orbit="180deg 75deg" 
                  style={{ width:'520px',height:'320px'}}
                  >
                </model-viewer>
              </div>
            </div>
          </motion.div>
        </Tilt>

        <Tilt className='sm:w-[560px] w-full'>
          <motion.div variants={fadeIn("up", "spring", 0, 0.75)}
            className='pink-green-gradient p-[1px] rounded-2xl shadow-xl shadow-black' >
            <div className='p-5 w-full bg-[#ABB2BF] rounded-2xl'>
              <div className='img-container relative w-full h-[320px]'>
              <model-viewer 
                  src='https://minalipatankar.github.io/3d-models/rug.glb'
                  alt='project_image' 
                  camera-controls 
                  camera-orbit="0deg 75deg" 
                  style={{ width:'520px',height:'320px'}}
                  >
                </model-viewer>
              </div>
            </div>
          </motion.div>
        </Tilt>
       
      </div>
    </div >
  )
}

export default SectionWrapper(Projects, '#projects')
