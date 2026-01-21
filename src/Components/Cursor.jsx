import { useGSAP } from "@gsap/react";
import { useRef } from "react";
import gsap from "gsap";

const Cursor = () => {
  const cursorRef = useRef(null);

  useGSAP(() => {
    // Center cursor
    gsap.set(cursorRef.current, {
      xPercent: -50,
      yPercent: -50,
    });

    const xTo = gsap.quickTo(cursorRef.current, "x", {
      duration: 0.25,
      ease: "power3.out",
    });

    const yTo = gsap.quickTo(cursorRef.current, "y", {
      duration: 0.25,
      ease: "power3.out",
    });

    const moveCursor = (e) => {
      xTo(e.clientX);
      yTo(e.clientY);
    };

    window.addEventListener("mousemove", moveCursor);

    // 🔥 EVENT DELEGATION FOR IMG
    const handleHover = (e) => {
      if (e.target.tagName === "IMG") {
        gsap.to(cursorRef.current, {
          scale: 1.5,
          duration: 0.25,
          ease: "power2.out",
          overwrite: "auto",
        });
      } else {
        gsap.to(cursorRef.current, {
          scale: 1,
          duration: 0.25,
          ease: "power2.out",
          overwrite: "auto",
        });
      }
    };

    window.addEventListener("mouseover", handleHover);

    return () => {
      window.removeEventListener("mousemove", moveCursor);
      window.removeEventListener("mouseover", handleHover);
    };
  }, []);

  return (
    <div
      ref={cursorRef}
      className="
        hidden lg:block
        h-3 w-3 rounded-full
        bg-(--primery-color)
        fixed pointer-events-none z-[999]
      "
    />
  );
};

export default Cursor;
