import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Bar = ({ tech, percentage }) => {
  const barRef = useRef(null);
  const numRef = useRef(null);

  useEffect(() => {
    if (!barRef.current || !numRef.current) return;

    const ctx = gsap.context(() => {
      const counter = { val: 0 };

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: barRef.current,
          start: "top 90%",
          once: true,
        },
      });

      tl.to(counter, {
        val: percentage,
        duration: 1.2,
        ease: "power2.out",
        onUpdate: () => {
          if (numRef.current) {
            numRef.current.textContent =
              Math.round(counter.val) + "%";
          }
        },
      }).to(
        barRef.current,
        {
          width: percentage + "%",
          duration: 1.2,
          ease: "power2.out",
        },
        0
      );
    });

    return () => {
      ctx.revert(); // 🔥 kills timeline + ScrollTrigger safely
    };
  }, [percentage]);

  return (
    <div className="text-black select-none my-14">
      <div className="relative w-full h-1 rounded-full bg-gray-200">
        <h4
          ref={numRef}
          className="absolute right-0 bottom-2 font-semibold"
        >
          0%
        </h4>

        <h4 className="absolute left-0 bottom-2 font-semibold">
          {tech}
        </h4>

        <div
          ref={barRef}
          className="absolute top-0 left-0 h-1 w-0 rounded-full bg-(--primery-color)"
        />
      </div>
    </div>
  );
};

export default Bar;
