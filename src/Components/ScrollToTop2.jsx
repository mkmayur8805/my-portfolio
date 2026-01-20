import { useRef } from "react";
import { FaArrowUp } from "react-icons/fa";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

const ScrollToTop2 = () => {
  const btnRef = useRef(null);
  const iconRef = useRef(null);

  useGSAP(() => {
    // 🔹 Initial hidden state
    gsap.set(btnRef.current, {
      x: 120,
      opacity: 0
    });

    gsap.set(iconRef.current, {
      transformOrigin: "50% 50%",
      rotation: 0
    });

    ScrollTrigger.create({
      trigger: "#hero",
      start: "top top",
      end: "bottom top",

      // 🔹 HERO मध्ये → hide
      onEnter: () => {
        gsap.to(btnRef.current, {
          x: 120,
          opacity: 0,
          duration: 0.3,
          ease: "power2.out",
          overwrite: "auto"
        });
      },

      onEnterBack: () => {
        gsap.to(btnRef.current, {
          x: 120,
          opacity: 0,
          duration: 0.3,
          ease: "power2.out",
          overwrite: "auto"
        });
      },

      // 🔥 HERO बाहेर → show + rotate
      onLeave: () => {
        gsap.to(btnRef.current, {
          x: 0,
          opacity: 1,
          duration: 0.4,
          ease: "power2.out",
          overwrite: "auto"
        });

        // ✅ CLEAN ROTATION (no accumulation)
        gsap.fromTo(
          iconRef.current,
          { rotation: 0 },
          {
            rotation: 360,
            duration: 0.6,
            ease: "power2.out",
            overwrite: "auto"
          }
        );
      }
    });
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  };

  const handleMouseEnter = () => {
    gsap.fromTo(
      iconRef.current,
      { rotation: 0, scale: 1 },
      {
        rotation: 360,
        scale: 1.15,
        duration: 0.4,
        ease: "power2.out",
        overwrite: "auto"
      }
    );
  };

  const handleMouseLeave = () => {
    gsap.to(iconRef.current, {
      scale: 1,
      duration: 0.2,
      ease: "power2.out",
      overwrite: "auto"
    });
  };

  return (
    <button
      ref={btnRef}
      onClick={scrollToTop}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className="
        fixed bottom-6 right-6 z-50
        w-12 h-12 rounded-full
        bg-white/90
        text-(--primery-color)
        flex items-center justify-center
        cursor-pointer
        shadow-xl
        border border-(--primery-color)
      "
    >
      <FaArrowUp ref={iconRef} />
    </button>
  );
};

export default ScrollToTop2;
