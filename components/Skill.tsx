import React from "react";
import { motion } from "framer-motion";
import photo from "./images/firebase.png";

type Props = {
  directionLeft?: boolean;
};

function Skill({ directionLeft }: Props) {
  return (
    <div className="group relative flex cursor-pointer">
      <motion.img
        initial={{
          x: directionLeft ? -200 : 200,
        }}
        transition={{ duration: 1 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{once: true}}
        src={photo.src}
        className=" rounded-full border-gray-500
        object-cover w-[13vh] h-[13vh] xl:w-[15vh] xl:h-[15vh]
        filter group-hover:grayscale transition duration-300
        ease-in-out z-0"
      />
      <div className="absolute opacity-0 group-hover:opacity-80 
        transition duration-300 ease-in-out
        group-hover:bg-white h-[100%] w-[100%] rounded-full
        ">
        <div className="flex items-center justify-center h-full">
            <p className="text 3xl font-bold text-black opacity-100">100%</p>
        </div>
      </div>
    </div>
  );
}

export default Skill;
