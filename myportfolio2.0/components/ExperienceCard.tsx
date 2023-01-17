import React from "react";
import { motion } from "framer-motion";

type Props = {};

export default function ExperienceCard({}: Props) {
  return (
    <article
      className="flex flex-col rounded-lg items-center space-y-7 flex-shrink-0 w-[500px] md:w-[600px] xl:w=[900px] snap-center bg-[#292929] p-10 
                        hover:opacity-100 opacity-40 cursor-pointer transition-opacity duration-200 overflow-hidden"
    >
      <motion.img
        initial={{
          y: -100,
          opacity: 0,
        }}
        transition={{ duration: 1.2 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="w-32 h-32 rounded-full xl:w-[200px] xl:h-[200px] object-cover object-center"
        src="https://res.cloudinary.com/crunchbase-production/image/upload/c_lpad,f_auto,q_auto:eco,dpr_1/v1504241874/ojpytk0rasufeqeu1knx.png"
        alt=""
      />

      <div className="px-0 md:px-10">
        <h4 className="text-4xl font-light">CTO OF NOTSGATE INT.</h4>
        <p className="font-bold text-2xl mt-1">NOTSGATE</p>
        <div className="flex space-x-2 my-2">
          <img
            className="h-7 w-15 rounded-full"
            src="https://www.freepnglogos.com/uploads/javascript-png/javascript-logo-transparent-logo-javascript-images-3.png"
            alt=""
          />
          <img
            className="h-7 w-15 rounded-full"
            src="https://www.freepnglogos.com/uploads/javascript-png/javascript-logo-transparent-logo-javascript-images-3.png"
            alt=""
          />
          <img
            className="h-7 w-15 rounded-full"
            src="https://www.freepnglogos.com/uploads/javascript-png/javascript-logo-transparent-logo-javascript-images-3.png"
            alt=""
          />
        </div>
        <p className="uppercase py-5 test-gray-300">
          {" "}
          Started work... -Ended...
        </p>

        <ul className="list-disc space-y-4 ml-5 text-lg">
          <li>Summary of points Summary of points </li>
          <li>Summary of points Summary of points </li>
          <li>Summary of points Summary of points </li>
          <li>Summary of points Summary of points </li>
          <li>Summary of points Summary of points </li>
        </ul>
      </div>
    </article>
  );
}
