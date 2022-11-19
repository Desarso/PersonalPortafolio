import React from 'react';
import { motion } from 'framer-motion';
import aboutImage from './images/newAbout.jpg'

type Props = {}

function About({}: Props) {
  return (
    <motion.div
    initial={{opacity:0,}}
    whileInView={{opacity:1}}
    transition={{duration: 1.5}}
    className='flex flex-col relative h-screen text-center md:text-left 
            md:flex-row max-w-7xl px-10 justify-evenly mx-auto items-center'
    >
        <h3 className='absolute xl:pl-[70px] top-24 uppercase tracking-[20px] text-gray-500 text-2xl'>
            About
        </h3>

        <motion.img
        initial={{
            x:-200,
            opacity: 0,
        }}
        whileInView={{
            x:0,
            opacity: 1,
        }}
        viewport={{
            once: true,
        }}
        transition={{
            duration: 1.2,
        }}
        key = {aboutImage.src}
        src={aboutImage.src}
        className="about-image -mb-[20vh] mt-[5vh] md:mb-[10vh] flex-shrink-0 w-36 h-36 rounded-full object-cover 
         md:rounded-lg md:w-64 md:h-[40vh] xl:w-[500px] xl:h-[72vh]"
        />

        <div className='about-title space-y-10 px-0 md:px-10 mt-[5vh]'>
            <h4 className='text-4xl font-semibold'>
                    Here&apos;s a 
                 little background
            </h4>
            <p className='text-base'>
                My name is Gabriel Malek, I&apos;m a self taught web developer, long-time tech enthusiast, currently working on my CS bachelors degree at CSUS.
                My love of coding started with a passion project working on a chrome extension
                while working in tech repair. I build applications for the web, I love the idea of making fast performing,
                fully fledged applications for the browser, using technologies that can scale.
            </p>    
        </div>        
    </motion.div>
  )
}

export default About
