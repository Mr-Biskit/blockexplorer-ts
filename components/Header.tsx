"use client";

import { SocialIcon } from "react-social-icons";
import { motion } from "framer-motion";
import Link from "next/link";

export default function Header() {
  return (
    <header className="sticky top-0 flex items-start justify-between  p-5 max-w-7xl mx-auto xl:items-center  z-20">
      <motion.div
        initial={{
          x: -500,
          opacity: 0,
          scale: 0.5,
        }}
        animate={{
          x: 0,
          opacity: 1,
          scale: 1,
        }}
        transition={{
          duration: 2.5,
        }}
        className="flex flex-row items-center"
      >
        {/* Social Icons */}

        <SocialIcon
          url="https://github.com/Mr-Biskit"
          fgColor="#3F403D"
          bgColor="transparent"
          className="hover:opacity-20 hover:bg-creme rounded-full"
        />
        <SocialIcon
          url="https://twitter.com/mr__biskit"
          fgColor="#3F403D"
          bgColor="transparent"
          className="hover:opacity-20 hover:bg-creme rounded-full "
        />
        <SocialIcon
          url="https://www.linkedin.com/in/gabriel-vince-017059214/"
          fgColor="#3F403D"
          bgColor="transparent"
          className="hover:opacity-20 hover:bg-creme rounded-full "
        />
      </motion.div>

      <motion.div
        initial={{
          x: 500,
          opacity: 0,
          scale: 0.5,
        }}
        animate={{
          x: 0,
          opacity: 1,
          scale: 1,
        }}
        transition={{
          duration: 2.5,
        }}
        className="flex flex-row items-center text-gray-300 cursor-pointer "
      >
        <SocialIcon
          network="email"
          fgColor="#3F403D"
          bgColor="transparent"
          className="hover:opacity-20 hover:bg-creme rounded-full cursor-pointer"
          url="http://localhost:3000/#contact"
        />
        <Link href="#contact">
          <p className="font-block uppercase hidden md:inline-flex text-sm text-[#3F403D] pr-2">
            Get In Touch
          </p>
        </Link>
      </motion.div>
    </header>
  );
}
