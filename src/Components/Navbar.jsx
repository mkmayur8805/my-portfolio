import { IoLogoReact } from "react-icons/io5";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { useRef } from "react";
const Navbar = ({ menu }) => {
  const navRef = useRef(null);
  const buttonRef = useRef(null);
  const menuRef = useRef([]);
  const logoRef = useRef([]);
  const tl1 = gsap.timeline();
  useGSAP(() => {
    tl1.fromTo(navRef.current, {
      y: -100, opacity: 0
    },
      {
        y: 0, opacity: 1,
        duration: 1,
        ease: "power2.out"
      });
    tl1.fromTo(menuRef.current, {
      y: -50, opacity: 0
    },
      {
        y: 0, opacity: 1,
        duration: 1,
        ease: "power2.out",
        stagger: 0.1,
        delay: -1
      });
    tl1.fromTo(buttonRef.current, {
      y: -50, opacity: 0
    },
      {
        y: 0, opacity: 1,
        duration: 1,
        ease: "power2.out",
        delay: -0.5
      });
    setTimeout(() => {
      gsap.to(logoRef.current, {
        rotate: 360,
        duration: 5,
        repeat: -1,
        ease: "linear",
      });
    }, 2500);

  }, []);

  return (
    <nav ref={navRef} className="text-zinc-800 flex justify-between px-8 lg:px-30 py-3 items-center overflow-x-hidden">
      <div ref={logoRef} className="text-4xl flex gap-2 items-center justify-center cursor-pointer">
        <IoLogoReact className="text-6xl text-(--primery-color)" />
      </div>
      <ul className="hidden lg:flex gap-7 items-center">
        {menu.map((e, idx) =>
          <li ref={el => menuRef.current[idx] = el} className="cursor-pointer text-lg font-semibold hover:text-(--primery-color) transition-all duration-300 hover:shadow-black hover:-translate-y-1 hover:text-shadow-lg" key={idx}>{e.item}</li>
        )}
      </ul>
      <button ref={buttonRef} className="px-6 h-fit py-3 rounded-2xl border border-zinc-200 font-semibold bg-white hover:bg-(--primery-color) hover:text-white transition-all duration-300 hover:border-(--primery-color) shadow-lg">
        Lets' Talk
      </button>
    </nav>
  );
};

export default Navbar;
