import React from 'react'
import { motion } from 'framer-motion';
import  nextImage  from './images/nextjs-icon.svg'

type Props = {}

function ExperienceCard({}: Props) {
  return (
    <article className='flex flex-col rounded-lg items-center space-y-3 flex-shrink-0
           pb-0 w-[90vw] h-[98%] md:w-[45%] md:h-[98%] xl:w-[30%] xl-h-[10vh] snap-center md:snap-start xl:snap-start bg-[#292929] p-10'>
        <motion.img 
            initial={{
                y: -100,
                opacity: 0.
            }}
            transition={{duration: 1.2}}
            whileInView={{ opacity: 1, y: 0}}
            viewport={{ once: true}}
            className='w-[9vh] h-[9vh] rounded-full xl:w-[200px] xl:h-[200px] 
            object-cover object-center'
        src="https://1000logos.net/wp-content/uploads/2016/10/Amazon-logo-meaning.jpg" 
        alt="" />
        <div className='px-0 md:px-5'>
            <h4 className='text-[4vh] font-light'>Worked Somewhere</h4>
            <p className='font-bold text-2xl mt-1'>Amazon</p>
            <div className='flex space-x-3 my-1'>
                <img 
                    className='h-10 w-10 rounded-full'
                    src={nextImage.src} alt="" />
                <img 
                    className='h-10 w-10 rounded-full'
                    src={nextImage.src} alt="" />
                <img 
                    className='h-10 w-10 rounded-full'
                    src={nextImage.src} alt="" />
                {/* all tech used */}
            </div>
            <p className='uppercase py-5 text-gray-300'>Started... Ended...</p>

            <ul className='list-disc space-y-4 ml-5 text-lg'>
                <li>Summary Points</li>
                <li>Summary Points</li>
                <li>Summary Points</li>
                <li>Summary Points</li>
            </ul>
        </div>
    </article>
  )
}

export default ExperienceCard