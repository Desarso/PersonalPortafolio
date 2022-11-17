import React from "react";
import Link from 'next/link'
import Chess from './images/chessBoard.jpg';
import Arrow from '../components/Arrow';
import { motion } from "framer-motion";

type Props = {};

function Projects({}: Props) {
  const projects = [1, 2, 3, 4, 5];

  return (
    <motion.div
      initial={{opacity: 0}}
      whileInView={{opacity: 1}}
      transition={{duration: 1.5}}
      className="h-screen relative flex overflow-hidden flex-col
        text-left  max-w-full justify-evenly mx-auto items-center  z-0
        
        "
    >
     
      <h3 className="absolute ml-3 top-24 uppercase tracking-[20px] text-gray-500 text-2xl">
        Projects
      </h3>
      <div
        className="relative w-full flex overflow-x-scroll
        overflow-y-hidden snap-x snap-mandatory z-20 scroll-smooth"
      >
        {projects.map((project, i) => (
          <div
          id={`project-${i+1}`}
          key={i}
            className="w-screen flex-shrink-0 snap-center
                    flex flex-col space-y-5 items-center justify-center
                     p-20 md:pd-44 h-screen"
          >
            <motion.img src={Chess.src}
            initial={{
              y: -300,
              opacity: 0,
            }}
            transition={{ duration: 1.2 }}
            whileInView={{opacity: 1,y: 0}}
            viewport={{once: true}}

            className="w-[50vmin] aspect-square max-h-[50vh] md:max-w-[540px]   rounded-3xl shadow-2xl mt-[20vh]"/>
            
            <div className="space-y-10 px-0 md:px-10 max-width-6xl">
              <h4 className="text-4xl font-semibold text-center">
               <span className="underline decoration-[#F7AB0A]/50">Case Study {i + 1} of {projects.length}: </span> 
                    UPS clone
              </h4>
              <div 
              className=" text-lg text-center- md:text-left flex flex-row items-center relative">
                {
                  i != 0 && (
                    <Link href={`#project-${i}`}>
                    <div className=" hidden sm:block selection:w-[6vh] h-[6vh] absolute arrow left-arrow -left-20
                    "
                    >
                      <Arrow/>
                    </div>
                    </Link>
                  )
                }
               
               

                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sequi earum ab aliquid nobis quos ea tempora, necessitatibus consectetur voluptatum distinctio minus voluptates laboriosam, a quia ut cumque sit dicta adipisci.
       

                {
                  i != projects.length - 1 && (
                    <Link href={`#project-${i+2}`}>
                    <div className="w-[6vh] h-[inherit] absolute arrow right-arrow
                      -right-20 hidden sm:block
                    "
                     >
                      <Arrow/>
                    </div>
                    </Link>
                  )
                }
              
              
                </div>
            </div>
          </div>
        ))}
      </div>
      <div className="w-full absolute top-[30%] bg-[#F7AB0A]/10 left-0 h-[50vh] w -skew-y-12"></div>
    </motion.div>
  );
}

export default Projects;
