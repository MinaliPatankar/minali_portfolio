import React from 'react'
import { motion } from 'framer-motion'
import { SectionWrapper } from '../../hoc'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPalette } from '@fortawesome/free-solid-svg-icons'
import { faFilm } from '@fortawesome/free-solid-svg-icons'
import { faCubes } from '@fortawesome/free-solid-svg-icons'
import { faCube } from '@fortawesome/free-solid-svg-icons'
// import {  } from '@fortawesome/free-brands-svg-icons'
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';

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
const Experience = () => {
  return (
    <div id='experience'>
      <motion.div variants={textVariant()}>
        <p className='lg:text-[30px] sm:text-[26px] min-[380px]:20px text-[16px] text-[#ABB2BF] ubuntu m-0'>WHAT I HAVE DONE SO FAR...</p>
        <h2 className='lg:text-[80px] sm:text-[60px] min-[380px]:50px text-[40px] text-white ubuntu m-0'>Work Experience</h2>
      </motion.div>
      <VerticalTimeline>
        <VerticalTimelineElement
          className="vertical-timeline-element--work poppins "
          contentStyle={{ background: 'black', color: '#fff' }}
          contentArrowStyle={{ borderRight: '7px solid  black' }}
          date="January, 2025 - present"
          iconStyle={{ background: '#282C33', color: 'white' }}
          icon={<FontAwesomeIcon icon={faCubes} />}
        >
          <h3 className="vertical-timeline-element-title text-[#B98ACDce]">3D Modeling and Texturing Artist</h3>
          <h4 className="vertical-timeline-element-subtitle text-[#B98ACDce]">Mushroom World Group, Bhopal</h4>
          <ul className='list-disc text-[#ABB2BF]'>
            <li>Edited and enhanced video projects using Adobe Premiere Pro, After Effects, and Final Cut Pro, focusing on seamless transitions, special effects, and dynamic visual storytelling.</li>
            <li>Designed and textured realistic 3D product models using tools like Autodesk Maya, Substance Painter, ZBrush, and Blender, ensuring high detail and visual appeal.</li>
            <li>Conducted regular trend analysis of viral and high-performing video content on platforms like YouTube, Instagram, and TikTok.</li>
            <li>Created high-quality product visuals and animations to support digital marketing campaigns, enhancing brand visibility and engagement.</li>
            <li>Produced photorealistic 3D visuals and motion graphics for product showcases used in digital ads and social media promotions.</li>
          </ul>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work poppins"
          contentStyle={{ background: 'black', color: '#fff' }}
          contentArrowStyle={{ borderRight: '7px solid  black' }}
          date="June, 2022 - September, 2024"
          iconStyle={{ background: '#282C33', color: 'white' }}
          icon={<FontAwesomeIcon icon={faCube} />}
        >
          <h3 className="vertical-timeline-element-title  text-[#B98ACDce]">3D Modeling and Texturing Artist</h3>
          <h4 className="vertical-timeline-element-subtitle  text-[#B98ACDce]">Techokarft Production, Pune</h4>
          <ul className='list-disc text-[#ABB2BF]'>
            <li>Techokraft is a growing IT outsourcing company known for offering a range of customized web and animation solutions like website design, web development, 2D/3D Animation, E learning solutions and web marketing services aimed at supporting business locally as well as globally.</li>
            <li>We deliver technology solutions that help clients to increase the effectiveness of their IT initiatives.</li>
            <li>Worked on daily tasks and projects in Maya ,Blender ,Substence Painter softwares.</li>
            <li>Attended project based on hard surface modeling and Texturing.</li>
            <li>Worked For Safat Homes , Enersys , Hassyan power plant and many more other projects.</li>
            <li>Worked on project based on 3D realistic background.</li>
          </ul>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work poppins"
          contentStyle={{ background: 'black', color: '#fff' }}
          contentArrowStyle={{ borderRight: '7px solid  black' }}
          date="October, 2021 - May, 2022"
          iconStyle={{ background: '#282C33', color: 'white' }}
          icon={<FontAwesomeIcon icon={faPalette} />}
        >
          <h3 className="vertical-timeline-element-title text-[#B98ACDce]">Motion Graphics Video Editor</h3>
          <h4 className="vertical-timeline-element-subtitle text-[#B98ACDce]">SKY TV(27X4 SATELLITE HINDI NEWS CHANNEL), Bhopal</h4>
          <ul className='list-disc text-[#ABB2BF]'>
            <li>Worked directly with the newsroom team to edit and update live news descriptions, ensuring accurate and timely visual storytelling.</li>
            <li>Designed the logo to reflect the channel’s bold identity and national tone, optimized for use in broadcast intros, promos, and digital platforms.</li>
            <li>Worked across a wide range of video templates, customizing motion graphics, transitions, and effects to deliver high-quality, polished video results for broadcast and digital use.</li>
            <li>Collaborated with the graphic design team to create custom animations, motion graphics, and visual assets for video projects and digital campaigns.</li>
          </ul>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work poppins"
          contentStyle={{ background: 'black', color: '#fff' }}
          contentArrowStyle={{ borderRight: '7px solid  black' }}
          date="April, 2020 - September, 2021"
          iconStyle={{ background: '#282C33', color: 'white' }}
          icon={<FontAwesomeIcon icon={faFilm} />}
        >
          <h3 className="vertical-timeline-element-title  text-[#B98ACDce]">Senior Motion Graphics Video Editor</h3>
          <h4 className="vertical-timeline-element-subtitle  text-[#B98ACDce]">M.P BOARD SECONDARY EDUCATION, BHOPAL</h4>
          <ul className='list-disc text-[#ABB2BF]'>
            <li>Produced and edited video content that was broadcast on DD National (Doordarshan), maintaining high technical and creative standards for national television.</li>
            <li>Edited video content by adding relevant graphics, images, and visual elements to enhance storytelling and viewer engagement.</li>
            <li>Researched and sourced relevant learning materials to support lesson objectives and enhance student engagement.</li>
            <li>Edited educational videos by incorporating clear visual aids, animations, and engaging content to make complex chapters easy to understand for students.</li>
            <li>Designed graphic voice-over layouts, integrating visuals and audio elements to create cohesive and engaging multimedia presentations.</li>
            <li>Created eye-catching thumbnails for social media posts, ensuring visual consistency and alignment with brand identity.</li>
          </ul>
        </VerticalTimelineElement>
      </VerticalTimeline>
    </div>
  )
}

export default SectionWrapper(Experience, '#experience')
