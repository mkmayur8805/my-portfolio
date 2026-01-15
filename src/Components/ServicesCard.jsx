import { BsArrowUpRight } from "react-icons/bs";
import gsap from "gsap";
import Para from "./Para";
import { useEffect, useRef ,useState} from "react";

const ServicesCard = () => {
    const [expanded, setExpanded] = useState(false)
    const iconRef = useRef(null);
    const divRef = useRef(null);
    const textRef = useRef(null);
    const cardRef = useRef(null);

    useEffect(() => {
        const ctx = gsap.context(() => {
            gsap.set(iconRef.current, { scale: 0 });
        });

        return () => ctx.revert();
    }, []);

    const handleEnter = () => {
        gsap.to(iconRef.current, {
            scale: 1,
            duration: 0.3,
            ease: "power3.out",
        });

        gsap.to(divRef.current, {
            height: 100,
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
        gsap.to(iconRef.current, {
            scale: 0,
            duration: 0.3,
            ease: "power3.out",
        });

        gsap.to(divRef.current, {
            height: "5vw",
            duration: 0.3,
            ease: "power3.out",
        });

        gsap.to(textRef.current, {
            x: -70,
            duration: 0.3,
            ease: "power3.out",
        });
    };
    const handleClick = () => {
        setExpanded(!expanded);
        if (expanded) {
        gsap.to(cardRef.current, {
            height: "auto",
            opacity: 1,
            duration: 0.5,
            ease: "power3.out",
        });} else {
            gsap.to(cardRef.current, {
                height: 0,
                opacity: 0,
                duration: 0.5,
                ease: "power3.out",
            });
        }
    }

    return (
        <div>
            <div
                ref={divRef}
                onClick={handleClick}
                onMouseEnter={handleEnter}
                onMouseLeave={handleLeave}
                className="border-b border-gray-400 cursor-pointer flex items-center gap-1 overflow-hidden h-16"
            >
                <BsArrowUpRight
                    ref={iconRef}
                    className="text-(--primery-color) text-7xl mt-6"
                />

                <h2 ref={textRef} className="text-mk text-[6vw] mt-4">
                    Responsive UI Development
                </h2>
            </div>
            <div ref={cardRef} className="h-0 opacity-0 overflow-y-hidden w-full gap-20 flex py-10">
                <div className="w-1/2 overflow-hidden rounded-xl">
                    <img className="hover:scale-105 transition-transform duration-300" src="https://inexa-html-demos.vercel.app/assets/imgs/services/service-3.png" alt="" />
                </div>
                <div className="w-1/2 flex flex-col gap-6 justify-center">
                    <h3 className="text-4xl font-semibold font-dm-sans">Website Design: Crafting attractive, user-friendly layouts</h3>
                    <Para text="I specialize in creating visually appealing and user-friendly website designs that enhance user experience and engagement." />
                    <button className="px-6 w-fit py-3 rounded-2xl border border-zinc-200 font-semibold bg-white hover:bg-(--primery-color) hover:text-white transition-all duration-300 hover:-translate-y-2 hover:border-(--primery-color) hover:shadow-lg">
                        Lets' Talk
                    </button>
                </div>
            </div>
        </div>
    );
};

export default ServicesCard;
