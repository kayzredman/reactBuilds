import { Link } from "framer";
import React from "react";
import { Cursor, useTypewriter } from "react-simple-typewriter";
import BackgroundCircles from "./BackgroundCircles";

type Props = {};

export default function ({}: Props) {
  const [text, count] = useTypewriter({
    words: [
      "Hi the name is Kwekku",
      "Guy who loves coffee milk shake.tsx",
      "<ButLovesToCodeMore />",
    ],
    loop: true,
    delaySpeed: 2000,
  });

  return (
    <div className="h-screen flex flex-col space-y-8 items-center justify-center text-center overflow-hidden">
      <BackgroundCircles />
      <img
        className="relative rounded-full h-32 w-32 mx-auto object-cover"
        src="data:image/jpeg;base64,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"
        alt=""
      />
      <div className="z-20">
        <h2 className="text-sm uppercase text-gray-300 pb-2 tracking-[15px]">
          SOftware Engineer
        </h2>
        <h1 className="text-3xl lg:text-3xl font-semibold px-3">
          <span>{text}</span>
          <Cursor cursorColor="#F7AB0B" />
        </h1>
        <div className="pt-5">
          <Link href="#about">
            <button className="heroButton">About</button>
          </Link>
          <Link href="#experience">
            <button className="heroButton">Experience</button>
          </Link>
          <Link href="#skills">
            <button className="heroButton">Skills</button>
          </Link>
          <Link href="#projects">
            <button className="heroButton">Projects</button>
          </Link>
        </div>
      </div>
    </div>
  );
}
