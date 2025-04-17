import React from 'react'
import { photoshop,max , afterEffect, blender, davinci, maya, mudbox, nuke, premier, substance, zbrush } from '../../assets/skills'
import SphereCanvas from '../Canvas/Sphere'
import { SectionWrapper } from '../../hoc'

const skills = [
  {
    name: "Adobe Photoshop",
    icon: photoshop,
  },
  {
    name: "Adobe Premier Pro",
    icon: premier,
  },
  {
    name: "Adobe After Effect",
    icon: afterEffect,
  },
  {
    name: "Autodesk Maya",
    icon: maya,
  },
  {
    name: "Adobe Substance Painter",
    icon: substance,
  },
  {
    name: "Autodesk Mudbox",
    icon: mudbox,
  },
  {
    name: "Autodesk 3Ds Max",
    icon: max,
  },
  {
    name: "Adobe Nuke",
    icon: nuke,
  },
  {
    name: "Blender",
    icon: blender
  },
  {
    name: "ZBrush",
    icon: zbrush
  },
  {
    name: "Davinci resolve",
    icon: davinci
  },
  // {
  //   name: "Java",
  //   icon: java
  // },
  // {
  //   name: "Spring Boot",
  //   icon: spring
  // }
]
const Skills = () => {
  return (
    <div>
      <p className='lg:text-[30px] sm:text-[26px] min-[380px]:20px text-[16px] text-[#ABB2BF] ubuntu m-0 mb-6'>My Skills</p>
      <div className='flex flex-row flex-wrap justify-center gap-10 items-center'>
        {skills.map((skill) => (
          <div className='w-36 h-28' key={skill.name}>
            <SphereCanvas icon={skill.icon} />
            <div className='ml-4 text-center'>{skill.name}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SectionWrapper(Skills, '#skills')
