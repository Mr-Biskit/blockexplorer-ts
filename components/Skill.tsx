"use client ";
import { motion } from "framer-motion";
import React from "react";
import { CheckIcon } from "@heroicons/react/24/solid";
import urlFor from "../lib/urlFor";
import { Skill } from "../typings";

type Props = {
  skill: Skill;
  directionLeft?: boolean;
};

function Skill({ skill, directionLeft }: Props) {
  return (
    <div className="group relative flex cursor-pointer">
      <motion.img
        initial={{
          x: directionLeft ? -200 : 200,
          opacity: 0,
        }}
        transition={{ duration: 1 }}
        whileInView={{ opacity: 1, x: 0 }}
        src={urlFor(skill?.image).url()}
        className="rounded-full border-5 border-creme object-cover w-16 h-16 md:w-24 md:h-24 filter group-hover:grayscale transition duration-300 ease-in-out"
      />
      <div
        className="absolute opacity-0 group-hover:opacity-80 transition duration-300 ease-in-out group-hover:bg-creme/70 h-16 w-16 md:w-24 md:h-24
      rounded-full z-0"
      >
        <div className="flex items-center justify-center h-full">
          <p className=" text-center font-bold text-lightPurple">
            {skill?.title}
          </p>
        </div>
      </div>
    </div>
  );
}

export default Skill;
