import Link from 'next/link'
import React from 'react'
import { Cursor, useTypewriter } from 'react-simple-typewriter'
import BackgroundCircles from './BackgroundCircles'
import { useState, useEffect } from 'react'


type Props = {}

function Hero({}: Props) {
  let elementHolder;
  let [currentId, setCurrentId] = useState('none');

  useEffect(() => {
    elementHolder = document.getElementById(currentId);
    elementHolder?.scrollIntoView({behavior: 'smooth'});
  },[currentId])



  function scrollToElement(id: string){
    setCurrentId(id);
  }





    const [text, count] = useTypewriter({
        words: [
            "Hi I'm Gabriel",
            'This is my Portafolio', 
            "<Built with Next.js />"],
            loop: true,
            delaySpeed: 2000
    })
  return (
    <div className='h-screen flex flex-col space-y-7 items-center justify-center 
      text-center overflow-hidden'>
      <BackgroundCircles/>
        <img
          className='relative rounded-full h-45 w-40 nx-auto object-cover'
          src="https://avatars.githubusercontent.com/u/10700498?v=4" 
          alt="image not found" />
          <div className='z-20'>
            <h2 
            className='text-sm uppercase text-gray-500 pb-2 tracking-[15px]'
            >
              Softwate Engineer
            </h2>
            <h1 className='text-5xl lg:text-6xl font-semibold scroll-px-10'>
              <span className='mr-3'>{text}</span>
              <Cursor cursorColor='#F7AB0A'/>
            </h1>
          <div className='pt-5'>
              <button className='heroButton' onClick={() => scrollToElement('about')}>About</button>

              <button className='heroButton' onClick={() => scrollToElement('experience')}>Experience</button>
  
              <button className='heroButton' onClick={() => scrollToElement('skills')}>Skills</button>
  
              <button className='heroButton' onClick={() => scrollToElement('projects')}>Projects</button>
          </div>
        </div>
      
    </div>
  )
}

export default Hero