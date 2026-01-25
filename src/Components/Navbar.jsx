import { IoLogoReact } from "react-icons/io5";
import { TbMenuDeep } from "react-icons/tb";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { openMenu } from "../redux/MenuSlice";
import { useNavigate, useLocation } from "react-router-dom";

gsap.registerPlugin(ScrollTrigger);

const Navbar = () => {
  const menu = useSelector(state => state.MenuSlice.MenuItems);
  const dispatch = useDispatch();

  const navRef = useRef(null);
  const buttonRef = useRef(null);
  const menuRefEls = useRef([]);
  const logoRef = useRef(null);

  const lastScrollY = useRef(0);
  const heroPassed = useRef(false);

  const navigate = useNavigate();
  const location = useLocation();

  useGSAP(() => {
    // 🔹 Entry animation
    const tl = gsap.timeline();

    tl.fromTo(
      navRef.current,
      { y: -100, opacity: 0 },
      { y: 0, opacity: 1, duration: 1, ease: "power2.out" }
    );

    tl.fromTo(
      menuRefEls.current,
      { y: -40, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.8, stagger: 0.1 },
      "-=0.6"
    );

    tl.fromTo(
      buttonRef.current,
      { y: -40, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.8 },
      "-=0.6"
    );

    gsap.to(logoRef.current, {
      rotate: 360,
      duration: 5,
      repeat: -1,
      ease: "linear",
      delay: 2
    });

    // 🔥 HERO SECTION TRACK
    ScrollTrigger.create({
      trigger: "#hero",
      start: "top top",
      end: "bottom top",

      onEnter: () => {
        heroPassed.current = false;
        gsap.set(navRef.current, {
          y: 0,
          backgroundColor: "transparent",
          backdropFilter: "blur(0px)",
          boxShadow: "0 0px 0px rgba(0, 0, 0, 0.05)",
        });
      },

      onEnterBack: () => {
        heroPassed.current = false;
        gsap.set(navRef.current, {
          y: 0,
          backgroundColor: "transparent",
          backdropFilter: "blur(0px)",
          boxShadow: "0 0px 0px rgba(0, 0, 0, 0.05)",
        });
      },

      onLeave: () => {
        heroPassed.current = true;

        gsap.set(navRef.current, {
          y: 0,
          backgroundColor: "rgba(255,255,255,0.6)",
          boxShadow: "0 4px 30px rgba(0, 0, 0, 0.05)",
          backdropFilter: "blur(4px)",
        });
      }
    });


    const handleScroll = () => {
      const current = window.scrollY;

      if (!heroPassed.current) {
        lastScrollY.current = current;
        return;
      }

      gsap.to(navRef.current, {
        y: current > lastScrollY.current ? "-100%" : 0,
        duration: 0.35,
        ease: "power2.out",
        overwrite: "auto",
      });

      lastScrollY.current = current;
    };


    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      ScrollTrigger.getAll().forEach(st => st.kill());
    };
  }, []);

  const handleClick = (item) => {
    if (item.type === "route") navigate(item.path);

    if (item.type === "section") {
      if (location.pathname !== "/") {
        navigate(`/?scrollTo=${item.target}`);
      } else {
        document
          .getElementById(item.target)
          ?.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  return (
    <nav
      ref={navRef}
      className="fixed top-0 left-0 w-full z-50 flex justify-between px-8 lg:px-30 py-2 items-center bg-transparent"
    >

      <div className="flex gap-2 items-center cursor-pointer">
        <IoLogoReact
          ref={logoRef}
          className="lg:text-6xl text-[12vw] text-(--primery-color)"
        />
      </div>


      <ul className="hidden lg:flex gap-7 items-center">
        {menu.map((e, idx) => (
          idx === 6 ? null : (
          <li
            key={idx}
            ref={el => (menuRefEls.current[idx] = el)}
            onClick={() => handleClick(e)}
            className="cursor-pointer text-lg fw-500 hover:text-(--primery-color) transition-all duration-300 hover:-translate-y-1"
          >
            {e.item}
          </li>
          )))}
      </ul>

 
      <button
        ref={buttonRef}
        onClick={() => handleClick(menu.find(m => m.item === "Contact"))}
        className="hidden lg:flex px-6 py-3 rounded-2xl border border-zinc-200 fw-500 bg-white hover:bg-(--primery-color) hover:text-white transition-all duration-300 shadow-lg"
      >
        Lets' Talk
      </button>


      <div className="lg:hidden" onClick={() => dispatch(openMenu())}>
        <TbMenuDeep className="text-[9vw] text-(--primery-color) cursor-pointer" />
      </div>
    </nav>
  );
};

export default Navbar;
