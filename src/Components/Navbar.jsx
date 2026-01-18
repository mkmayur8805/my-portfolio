import { IoLogoReact } from "react-icons/io5";
import { TbMenuDeep } from "react-icons/tb";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { openMenu } from "../redux/MenuSlice";


gsap.registerPlugin(ScrollTrigger);

const Navbar = () => {
  let menu = useSelector((state) => state.MenuSlice.MenuItems);
  console.log(menu);
  const navRef = useRef(null);
  const buttonRef = useRef(null);
  const menuRef = useRef([]);
  const logoRef = useRef(null);
  const lastScrollY = useRef(0);
  const heroPassed = useRef(false);
  const dispatch = useDispatch();
  useGSAP(() => {
    const tl = gsap.timeline();

    tl.fromTo(navRef.current,
      { y: -100, opacity: 0 },
      { y: 0, opacity: 1,background:"transparent", duration: 1, ease: "power2.out" }
    )
      .fromTo(menuRef.current,
        { y: -50, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1,
          ease: "power2.out",
          stagger: 0.1
        },
        "-=0.8"
      )
      .fromTo(buttonRef.current,
        { y: -50, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1,
          ease: "power2.out"
        },
        "-=0.6"
      );

    gsap.to(logoRef.current, {
      rotate: 360,
      duration: 5,
      repeat: -1,
      ease: "linear",
      delay: 2.5,
    });

    ScrollTrigger.create({
      trigger: "#hero",
      start: "bottom top",
      onEnter: () => (heroPassed.current = true),
      onLeaveBack: () => (heroPassed.current = false),
    });

    const handleScroll = () => {
      if (!heroPassed.current) return;

      const current = window.scrollY;

      if (current > lastScrollY.current) {
        gsap.to(navRef.current, {
          y: "-100%",
          duration: 0.4,
          ease: "power2.out",
        });
      } else {
        gsap.to(navRef.current, {
          y: 0,
          duration: 0.4,
          ease: "power2.out",
        });
      }

      lastScrollY.current = current;
    };

    ScrollTrigger.create({
      trigger: "#hero",
      start: "top top",
      end: "bottom top",

      onEnter: () => {
        gsap.to(navRef.current, {
          backgroundColor: "transparent",
          boxShadow: "none",
          duration: 0.3,
        });
      },

      onLeave: () => {
        gsap.to(navRef.current, {
          backgroundColor: "#ffffff",
          boxShadow: "0 4px 20px rgba(0,0,0,0.1)",
          duration: 0.3,
        });
      },

      onEnterBack: () => {
        gsap.to(navRef.current, {
          backgroundColor: "transparent",
          boxShadow: "none",
          duration: 0.3,
        });
      },
    });


    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      ScrollTrigger.getAll().forEach(st => st.kill());
    };

  }, []);
  

  return (
    <nav
      ref={navRef}
      className="fixed top-0 left-0 w-full z-50 text-zinc-800 flex justify-between px-8 lg:px-30 py-2 items-center bg-white"
    >
      <div
        
        className="flex gap-2 items-center cursor-pointer"
      >
        <IoLogoReact ref={logoRef} className="lg:text-6xl text-[12vw] text-(--primery-color)" />
      </div>

      <ul className="hidden lg:flex gap-7 items-center">
        {menu.map((e, idx) => (
          <li
            ref={el => (menuRef.current[idx] = el)}
            key={idx}
            onClick={menu.onclick}
            className="cursor-pointer text-lg font-semibold hover:text-(--primery-color) transition-all duration-300 hover:-translate-y-1"
          >
            {e.item}
          </li>
        ))}
      </ul>

      <button
        ref={buttonRef}
        className="hidden lg:flex px-6 py-3 rounded-2xl border border-zinc-200 font-semibold bg-white hover:bg-(--primery-color) hover:text-white transition-all duration-300 shadow-lg"
      >
        Lets' Talk
      </button>
      <div onClick={() => { console.log("open menu"); dispatch(openMenu()) }} className="lg:hidden">
        <TbMenuDeep className="text-[9vw] text-(--primery-color) cursor-pointer" />
      </div>
    </nav>
  );
};

export default Navbar;
