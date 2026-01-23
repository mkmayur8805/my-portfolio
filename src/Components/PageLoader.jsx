import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

const words = [
  "Developing",
  "Optimizing",
  "Perfecting"
];

const PageLoader = ({ onComplete }) => {
  const wrapperRef = useRef(null);
  const nameRef = useRef(null);
  const roleRef = useRef(null);
  const wordRef = useRef(null);

  useGSAP(() => {
    const tl = gsap.timeline({ onComplete });

    // Name – fast & clean
    tl.fromTo(
      nameRef.current,
      { opacity: 0, y: 20 },
      { opacity: 1, y: 0, duration: 0.35, ease: "power2.out" }
    )

      // Role – subtle
      .fromTo(
        roleRef.current,
        { opacity: 0, y: 10 },
        { opacity: 1, y: 0, duration: 0.25, ease: "power2.out" },
        "-=0.15"
      );

    // Words – fast changing (primary color)
    words.forEach(word => {
      tl.to(wordRef.current, {
        textContent: word,
        duration: 0.12,
        ease: "none"
      })
        .fromTo(
          wordRef.current,
          { opacity: 0, y: 8 },
          { opacity: 1, y: 0, duration: 0.18 }
        )
        .to(
          wordRef.current,
          { opacity: 0, y: -8, duration: 0.18 },
          "+=0.12"
        );
    });

    // Exit – quick slide
    tl.to(wrapperRef.current, {
      yPercent: -100,
      duration: 0.4,
      ease: "power2.inOut"
    });

  }, []);

  return (
    <div
      ref={wrapperRef}
      className="
        fixed inset-0 z-998
        flex flex-col items-center justify-center
        bg-white
        overflow-hidden
      "
    >
      {/* Name */}
      <h1
        ref={nameRef}
        className="text-(--primery-color) text-4xl lg:text-6xl font-bold tracking-[0.35em]"
      >
        MK MAYUR
      </h1>

      {/* Role */}
      <p
        ref={roleRef}
        className="text-zinc-900 mt-3 tracking-widest text-sm lg:text-base"
      >
        Creative Frontend Developer
      </p>

      <h2
        ref={wordRef}
        className="mt-3 text-zinc-800 text-lg lg:text-2xl tracking-widest"
      >
        Developing
      </h2>
    </div>
  );
};

export default PageLoader;
