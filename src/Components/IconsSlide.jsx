import {
  RiNextjsFill,
  RiRemixRunFill,
  RiJavascriptFill,
} from "react-icons/ri";
import {
  FaReact,
  FaAngular,
  FaCss3Alt,
  FaPython,
  FaNodeJs,
  FaGithub,
  FaFigma,
} from "react-icons/fa";
import { TiHtml5 } from "react-icons/ti";
import { BiLogoTypescript } from "react-icons/bi";
import { SiMongodb, SiExpress, SiVite } from "react-icons/si";
import { TbBrandRedux, TbBrandDjango } from "react-icons/tb";
import { TbBrandOpenai } from "react-icons/tb";
import { SiClaude } from "react-icons/si";
import { SiGooglegemini } from "react-icons/si";

import { useRef, useEffect } from "react";
import gsap from "gsap";

const hoverClass =
  "hover:text-(--primery-color) hover:-translate-y-2 hover:scale-105 transition-all duration-300";

const IconsSlide = () => {
  const sliderRef = useRef(null);
  const tweenRef = useRef(null);
  const speedSetter = useRef(null);

  useEffect(() => {
    // base infinite marquee
    tweenRef.current = gsap.to(sliderRef.current, {
      xPercent: -50,
      duration: 18,
      ease: "linear",
      repeat: -1,
    });

    // smooth timeScale controller (NO JERKS)
    speedSetter.current = gsap.quickTo(
      tweenRef.current,
      "timeScale",
      {
        duration: 0.5,
        ease: "power3.out",
      }
    );

    let lastTouchY = 0;

    const handleWheel = (e) => {
      speedSetter.current(e.deltaY > 0 ? 1 : -1);
    };

    const handleTouchStart = (e) => {
      lastTouchY = e.touches[0].clientY;
    };

    const handleTouchMove = (e) => {
      const currentY = e.touches[0].clientY;
      speedSetter.current(currentY < lastTouchY ? 1 : -1);
      lastTouchY = currentY;
    };

    window.addEventListener("wheel", handleWheel, { passive: true });
    window.addEventListener("touchstart", handleTouchStart, { passive: true });
    window.addEventListener("touchmove", handleTouchMove, { passive: true });

    return () => {
      window.removeEventListener("wheel", handleWheel);
      window.removeEventListener("touchstart", handleTouchStart);
      window.removeEventListener("touchmove", handleTouchMove);
      tweenRef.current.kill();
    };
  }, []);

  return (
    <div className="overflow-hidden w-full my-10 touch-manipulation">
      <div
        ref={sliderRef}
        className="flex gap-10 py-3 text-5xl lg:text-7xl text-zinc-800 w-max"
      >
        {/* icons */}
        <RiNextjsFill className={hoverClass} />
        <FaReact className={hoverClass} />
        <FaAngular className={hoverClass} />
        <RiRemixRunFill className={hoverClass} />
        <TiHtml5 className={hoverClass} />
        <FaCss3Alt className={hoverClass} />
        <RiJavascriptFill className={hoverClass} />
        <BiLogoTypescript className={hoverClass} />
        <TbBrandOpenai className={hoverClass} />
        <FaPython className={hoverClass} />
        <SiMongodb className={hoverClass} />
        <FaNodeJs className={hoverClass} />
        <SiExpress className={hoverClass} />
        <FaGithub className={hoverClass} />
        <SiClaude className={hoverClass} />
        <SiGooglegemini className={hoverClass} />
        <TbBrandRedux className={hoverClass} />
        <TbBrandDjango className={hoverClass} />
        <SiVite className={hoverClass} />
        <FaFigma className={hoverClass} />

        {/* duplicate for seamless loop */}
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
