import React from "react";
import { motion } from "framer-motion";

type Props = {};

export default function About({}: Props) {
  return (
    <div
      className="flex flex-col relative h-screen text-center md:text-left md:flex-row
    max-w-7xl px-10 justify-evenly mx-auto items-center"
    >
      <h3
        className="absolute top-24 uppercase tracking-[20px] 
            text-gray-500 text-2xl bottom-24"
      >
        About
      </h3>

      <motion.img
        initial={{
          x: -200,
          opacity: 0,
        }}
        transition={{
          duration: 1.2,
        }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        src="https://gh.sanlam.com/uploads/leadership/1653651818-rowland-jones.jpg"
        className="-mb-24 mt-24 md:mb-0 flex-shrink-0 w-56 h-56 rounded-full
        object-cover md:rounded-lg md:w-64 md:h-95 xl:w-[300px] xl:h-[400px]"
      />

      <div className="space-y-10 px-0 md:px-10 mt-20">
        <h4 className="text-4xl font-semibold">
          Here is a{" "}
          <span className="underline decoration-[#F7AB0A]">little</span>{" "}
          background
        </h4>
        <p className="text-base">
          I'm, Rowland, also know by friends as Kwekku or Kay for short. Here's
          a little bit about me... I've been in the IT field for over 12 years
          in diverse industries handling diverse Projects from Software
          implementations to Managing the whole Infrastrucure. I make
          organizations WIN by expertly weaving Information Technology,
          Processes & People together. Top performer || Critical thinker ||
          Excellent team player || Pay Attention to Details
        </p>
      </div>
    </div>
  );
}
