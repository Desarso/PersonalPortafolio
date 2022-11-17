import React from "react";
import Arrow from './images/arrow.svg';
import Link from 'next/link'

type Props = {};

function Projects({}: Props) {
  const projects = [1, 2, 3, 4, 5];

  return (
    <div
      className="h-screen relative flex overflow-hidden flex-col
        text-left  max-w-full justify-evenly mx-auto items-center  z-0"
    >
      //md:flex-row
      <h3 className="absolute xl:pl-[70px] top-24 uppercase tracking-[20px] text-gray-500 text-2xl">
        Projects
      </h3>
      <div
        className="relative w-full flex overflow-x-scroll
        overflow-y-hidden snap-x snap-mandatory z-20 scroll-smooth"
      >
        {projects.map((project, i) => (
          <div
          key={i}
            className="w-screen flex-shrink-0 snap-center
                    flex flex-col space-y-5 items-center justify-center
                     p-20 md:pd-44 h-screen"
          >
            <img src="" alt="" />
            <div className="space-y-10 px-0 md:px-10 max-width-6xl">
              <h4 className="text-4xl font-semibold text-center">
               <span className="underline decoration-[#F7AB0A]/50">Case Study {i + 1} of {projects.length}: </span> 
                    UPS clone
              </h4>
              <div 
              id={`project-${i}`}
              className=" text-lg text-center- md:text-left flex flex-row items-center relative">
                {
                  i != 0 && (
                    <Link href={`#project-${i-1}`}>
                    <div className=" hidden sm:block selection:w-[6vh] h-[6vh] absolute arrow left-arrow -left-20
                    "
                    >
                      <img src={Arrow.src} alt="" className="h-[inherit]"/>
                    </div>
                    </Link>
                  )
                }
               
               

                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sequi earum ab aliquid nobis quos ea tempora, necessitatibus consectetur voluptatum distinctio minus voluptates laboriosam, a quia ut cumque sit dicta adipisci.
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur quidem at aliquam veritatis autem? Ipsum molestiae error nulla facere voluptatibus sint commodi, incidunt earum adipisci saepe, hic, harum veniam consequuntur!

                {
                  i != projects.length - 1 && (
                    <Link href={`#project-${i+1}`}>
                    <div className="w-[6vh] h-[inherit] absolute arrow right-arrow
                      -right-20 hidden sm:block
                    "
                     >
                      <img src={Arrow.src} alt="" className="h-[inherit]"/>
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
    </div>
  );
}

export default Projects;
