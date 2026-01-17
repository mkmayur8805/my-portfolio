import { BsArrowUpRight } from "react-icons/bs";
import gsap from "gsap";
import { useEffect, useRef, useState } from "react";
import Para from "./Para";

const ServicesCard = () => {
  const [expanded, setExpanded] = useState(false);
  const [isDesktop, setIsDesktop] = useState(false);

  const iconRef = useRef(null);
  const headerRef = useRef(null);
  const textRef = useRef(null);
  const cardRef = useRef(null);

  /* ------------------ viewport detect (safe) ------------------ */
  useEffect(() => {
    const check = () => setIsDesktop(window.innerWidth > 767);
    check();
    window.addEventListener("resize", check);
    return () => window.removeEventListener("resize", check);
  }, []);

  /* ------------------ initial GSAP setup (desktop only) ------------------ */
  useEffect(() => {
    if (!isDesktop) return;

    const ctx = gsap.context(() => {
      gsap.set(iconRef.current, { scale: 0 });
      gsap.set(textRef.current, { x: -70 });
    }, headerRef);

    return () => ctx.revert();
  }, [isDesktop]);

  /* ------------------ hover animations ------------------ */
  const handleEnter = () => {
    if (!isDesktop) return;

    gsap.to(iconRef.current, {
      scale: 1,
      duration: 0.3,
      ease: "power3.out",
    });

    gsap.to(textRef.current, {
      x: 0,
      duration: 0.3,
      ease: "power3.out",
    });
  };

  const handleLeave = () => {
    if (!isDesktop) return;

    gsap.to(iconRef.current, {
      scale: 0,
      duration: 0.3,
      ease: "power3.out",
    });

    gsap.to(textRef.current, {
      x: -70,
      duration: 0.3,
      ease: "power3.out",
    });
  };

  /* ------------------ expand / collapse ------------------ */
  const toggleExpand = () => {
    const el = cardRef.current;
    
    setExpanded(prev => {
      const open = !prev;

      gsap.to(el, {
        height: open ? "auto" : 0,
        opacity: open? 1: 0,
        duration: 0.4,
        ease: "power3.out",
      });

      return open;
    });
  };

  return (
    <div className="relative">
      {/* HEADER */}
      <div
        ref={headerRef}
        onMouseEnter={handleEnter}
        onMouseLeave={handleLeave}
        onClick={toggleExpand}
        className="relative border-b border-gray-400 cursor-pointer flex items-center gap-2 overflow-hidden lg:h-16 lg:py-4 lg:my-0 -my-5"
      >
        <BsArrowUpRight
          ref={iconRef}
          className="text-(--primery-color) text-[6vw] lg:text-6xl"
        />

        <h2
          ref={textRef}
          className=" text-mk uppercase whitespace-nowrap text-[6vw] lg:text-7xl"
        >
          Responsive UI
        </h2>
      </div>

      {/* CONTENT */}
      <div
        ref={cardRef}
        className="h-0 opacity-0 overflow-hidden w-full flex flex-col lg:flex-row gap-10 py-10"
      >
        <div className="lg:w-1/2 overflow-hidden rounded-xl">
          <img
            src="https://inexa-html-demos.vercel.app/assets/imgs/services/service-3.png"
            alt="Service"
            className="hover:scale-105 transition-transform duration-300"
          />
        </div>

        <div className="lg:w-1/2 flex flex-col gap-6 justify-center">
          <h3 className="text-4xl font-semibold font-dm-sans">
            Website Design: Crafting attractive, user-friendly layouts
          </h3>

          <Para text="I specialize in creating visually appealing and user-friendly website designs that enhance user experience and engagement." />

          <button className="px-6 w-fit py-3 rounded-2xl border border-zinc-200 font-semibold bg-white hover:bg-(--primery-color) hover:text-white transition-all duration-300 hover:-translate-y-2 hover:border-(--primery-color) hover:shadow-lg">
            Let&apos;s Talk
          </button>
        </div>
      </div>
    </div>
  );
};

export default ServicesCard;
