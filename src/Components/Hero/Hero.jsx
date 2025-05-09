import React from 'react'
import './Hero.css'
import photo from '../../assets/minali_photo.jpg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub, faLinkedin,faYoutube } from '@fortawesome/free-brands-svg-icons'


const Hero = () => {
  return (
    <section className='relative w-full h-screen mx-auto overflow-y-hidden'>
      <div className='absolute inset-0 sm:w-[80%] px-[3rem] top-[70px] mx-auto flex items-start gap-5'>
        <div className="flex flex-col justify-center items-center">
          <div className="glowing-circle w-5 h-5 rounded-full"></div>
          <div className='w-1 sm:h-48 h-32 pink-gradient'></div>
        </div>
        <div>
          <h1 className='min-[450px]:text-4xl md:text-6xl text-3xl font-bold'>Hi, I'm <span className='text-[#B98ACD]'>Minali</span></h1>
          <p className='description text-[#ABB2BF] mt-2 text-xl'>3D Modeling & Texturing Artist | Video Editor & Visual Storyteller</p>
          
          <p className='description  mt-2 text-sm'>I’m a 3D Modeling & Texturing Artist and Video Editor <br /> with a keen eye for detail and a passion for visual storytelling.<br/> From realistic assets to cinematic edits, I craft immersive visuals that elevate any project.</p>
          <div className="buttons flex max-[1166px]:flex-col max-[1166px]:items-start mt-32 items-center gap-12 max-md:hidden">
            <a href="https://minalipatankar.github.io/3d-models/Minali_Resume.pdf"  target="_blank" rel="noopener noreferrer"><button className='text-2xl max-lg:text-xl border border-[#C778DD] p-4 rounded-xl hover:bg-[#C778DD]'>Download CV</button></a>
            <a href="https://www.linkedin.com/in/minali-patankar-a874b9214" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faLinkedin} size='2xl' beat className='max-[1166px]:mx-16 hover:text-[#C778DD] cursor-pointer' /></a>
            <a href="https://www.youtube.com/@3D_Models-products" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faYoutube} size='2xl' beat className='max-[1166px]:mx-16 hover:text-[#C778DD] cursor-pointer' /></a>
            </div>
          <div className="md:flex w-96  mt-8 hidden summary">
            <div className="w-1/2 first flex items-center gap-2">
              <span className='text-6xl'>3</span>
              <p className='text-s leading-4 text-[#ABB2BF]'>Years of experience as 3D Modeling and Texturing Artist</p>
            </div>
            <div className="w-1/2 second ml-4 flex items-center gap-2">
              <span className='text-6xl'>330</span>
              <p className='text-s leading-4 text-[#ABB2BF]'>plus projects completed</p>
            </div>
          </div>
          <div className="md:flex w-96 mt-8 hidden summary">
            <div className="w-1/2 first flex items-center gap-2">
              <span className='text-6xl'>2</span>
              <p className='text-s leading-4 text-[#ABB2BF]'>Years of experience as Motion Graphics Video Editor</p>
            </div>
            <div className="w-1/2 second ml-4 flex items-center gap-2">
              <span className='text-6xl'>13</span>
              <p className='text-s leading-4 text-[#ABB2BF]'>plus brands and micro-influencers</p>
            </div>

          </div>
          <div className="mobile-buttons hidden max-md:flex absolute bottom-24 items-center gap-5 text-lg">
          <a href="https://minalipatankar.github.io/3d-models/Minali_Resume.pdf"  target="_blank" rel="noopener noreferrer"><button className='text-2xl max-lg:text-xl border border-[#C778DD] p-4 rounded-xl hover:bg-[#C778DD]'>Download CV</button></a>
            <a href="https://www.linkedin.com/in/minali-patankar-a874b9214" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faLinkedin} size='2xl' beat className='max-[1166px]:mx-16 hover:text-[#C778DD] cursor-pointer' /></a>
            <a href="https://www.youtube.com/@3D_Models-products" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faYoutube} size='2xl' beat className='max-[1166px]:mx-16 hover:text-[#C778DD] cursor-pointer' /></a>
          </div>
        </div>
        <div className="circle absolute rounded-full mt-12 lg:top-20 top-48 max-[380px]:w-56 max-[380px]:h-56 max-md:w-64 max-md:h-64 max-lg:w-80 max-lg:h-80 max-md:ml-6 max-lg:ml-60 lg:right-16 w-96 h-96 bg-cover bg-no-repeat"></div>
        <div className="photo-container rounded-full mt-12 lg:top-20 top-48 max-[380px]:w-56 max-[380px]:h-56 max-md:w-64 max-md:h-64 max-lg:w-80 max-lg:h-80 max-md:ml-6 max-lg:ml-60 lg:right-16 absolute w-96 h-96 bg-cover bg-no-repeat" style={{ backgroundImage: `url(${photo})` }}></div>

      </div>
    </section>

  )
}

export default Hero
