import {
  RiNextjsFill,
  RiRemixRunFill,
  RiJavascriptFill
} from "react-icons/ri";
import {
  FaReact,
  FaAngular,
  FaCss3Alt,
  FaPython,
  FaNodeJs,
  FaGithub,
  FaFigma
} from "react-icons/fa";
import { TiHtml5 } from "react-icons/ti";
import { BiLogoTypescript } from "react-icons/bi";
import { SiMongodb, SiExpress, SiVite } from "react-icons/si";
import { TbBrandRedux, TbBrandDjango } from "react-icons/tb";

import { useRef, useEffect } from "react";
import gsap from "gsap";

const hoverClass =
  "hover:text-(--primery-color) hover:-translate-y-2 hover:scale-105 transition-all duration-300";

const IconsSlide = () => {
  const sliderRef = useRef(null);
  const tweenRef = useRef(null);

  useEffect(() => {
    tweenRef.current = gsap.to(sliderRef.current, {
      xPercent: -50,
      duration: 15,
      ease: "linear",
      repeat: -1,
    });

    const handleWheel = (e) => {
      tweenRef.current.timeScale(e.deltaY > 0 ? 1 : -1);
    };

    window.addEventListener("wheel", handleWheel);
    return () => window.removeEventListener("wheel", handleWheel);
  }, []);

  return (
    <div className="overflow-hidden w-full my-10">
      <div
        ref={sliderRef}
        className="flex gap-10 py-3 text-7xl text-zinc-800 w-max"
      >
        <RiNextjsFill className={hoverClass} />
        <FaReact className={hoverClass} />
        <FaAngular className={hoverClass} />
        <RiRemixRunFill className={hoverClass} />
        <TiHtml5 className={hoverClass} />
        <FaCss3Alt className={hoverClass} />
        <RiJavascriptFill className={hoverClass} />
        <BiLogoTypescript className={hoverClass} />
        <FaPython className={hoverClass} />
        <SiMongodb className={hoverClass} />
        <FaNodeJs className={hoverClass} />
        <SiExpress className={hoverClass} />
        <FaGithub className={hoverClass} />
        <TbBrandRedux className={hoverClass} />
        <TbBrandDjango className={hoverClass} />
        <SiVite className={hoverClass} />
        <FaFigma className={hoverClass} />

        {/* duplicate icons for seamless loop */}
        <RiNextjsFill className={hoverClass} />
        <FaReact className={hoverClass} />
        <FaAngular className={hoverClass} />
        <RiRemixRunFill className={hoverClass} />
        <TiHtml5 className={hoverClass} />
        <FaCss3Alt className={hoverClass} />
      </div>
    </div>
  );
};

export default IconsSlide;
