import React from 'react';
import { motion } from 'framer-motion';
import ExperienceCard from './ExperienceCard';

type Props = {}

function Experience({}: Props) {
  return (
    <motion.div 
    className='h-screen flex relative overflow-hidden flex-col text-lft md:flex-row
    max-w-full px-10 justify-evenly mx-auto items-center'
    initial={{opacity:0,}}
    whileInView={{opacity:1}}
    transition={{duration: 1.5}}
    >
        <h3 className='absolute top-[12vh] uppercase tracking-[20px] text-gray-500 text-2xl'>
            Experience
        </h3>

        <div className='w-full mt-[17vh] flex space-x-[17vw] md:space-x-[10%] xl:space-x-[3.3%] xl:ml-[1%] overflow-x-scroll h-[80%] md:h-[80%] xl:h-[80vh]
            p-0 snap-x snap-mandatory'>
            <ExperienceCard/>
            <ExperienceCard/>
            <ExperienceCard/>
            <ExperienceCard/>
        </div>
    </motion.div>
  )
}

export default Experience