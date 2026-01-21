import { IoCall } from "react-icons/io5";
import { IoMail } from "react-icons/io5";
import { FaLocationDot } from "react-icons/fa6";
import { IoLogoReact } from "react-icons/io5";
import { FaXTwitter } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";
import { SiWhatsapp } from "react-icons/si";
import { FaYoutube } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { useSelector } from "react-redux";
import { href, Link } from "react-router-dom";
import { useNavigate, useLocation } from "react-router-dom";

const Footer = () => {
  let menu = useSelector((state) => state.MenuSlice.MenuItems);
  let navigate = useNavigate();
  let location = useLocation();
  const handleClick = (item) => {
    if (item.type === "route") navigate(item.path);
    if (item.type === "section") {
      if (location.pathname !== "/") {
        navigate(`/?scrollTo=${item.target}`);
      } else {
        document.getElementById(item.target)?.scrollIntoView({ behavior: "smooth" });
      }
    }
  };
  return (
    <footer className='bg-[#222222]  text-[#656565] pt-30'>
      <div className="flex p-8 lg:px-30">
        <div className="text-[8vw] lg:text-9xl font-semibold text-white leading-none font-dm-sans">
          <h2>Let's have a</h2>
          <h2 className="italic text-(--primery-color)">conversation</h2>
        </div>
        <div className="flex items-center justify-center">
          <img className="w-[8vw] lg:h-5 lg:mt-24 mx-5" src="https://inexa-html-demos.vercel.app/assets/imgs/icon/line.png" alt="" />
          <Link to="/contact">
            <div className=" flex items-center justify-center text-black rounded-full font-semibold bg-white hover:text-(--primery-color) hover:scale-105 shadow-white transition-all p-2 h-[13.5vw] w-[13.5vw] text-center lg:h-30 lg:w-30 duration-300 hover:-translate-y-2 cursor-pointer">
              <h5 className="text-[70%] lg:text-base italic">Let's Talk</h5>
            </div>
          </Link>
        </div>
      </div>
      <div className=' flex lg:flex-row flex-col gap-12 lg:gap-30 p-8 lg:px-30 py-20'>
        <div>
          <div className="flex items-center justify-start gap-2 lg:text-3xl text-[7vw] leading-7 font-dm-sans cursor-pointer">
            <IoLogoReact className="text-6xl text-(--primery-color)" />
            <h2 className="font-medium text-white">Mayur <br /> Kumawat</h2>
          </div>
          <p className='w-80 mt-4'>Building clean, modern web interfaces with a strong focus on performance, responsiveness, and usability. Passionate about creating reliable digital experiences that balance design precision with scalable, production-ready development.
          </p>
          <div className='flex gap-4 mt-6'>
            <FaXTwitter onClick={()=> window.open("https://twitter.com", "_blank")} className="hover:text-(--primery-color) transform-all duration-300" />
            <FaInstagram onClick={()=> window.open("https://instagram.com", "_blank")} className="hover:text-(--primery-color) transform-all duration-300" />
            <FaGithub onClick={()=> window.open("https://github.com", "_blank")} className="hover:text-(--primery-color) transform-all duration-300" />
            <SiWhatsapp onClick={()=> window.open(`https://wa.me/917448046577?text=${encodeURIComponent("Hello Mayur, I am contacting you from your portfolio.")}`, "_blank")} className="hover:text-(--primery-color) transform-all duration-300" />
            <FaYoutube onClick={()=> window.open("https://youtube.com", "_blank")} className="hover:text-(--primery-color) transform-all duration-300" />
          </div>
        </div>
        <div>
          <h4 className='text-white font-semibold text-xl'>Get in touch</h4>
          <div onClick={() => {window.location.href = "mailto:mkmayur4480@gmail.com" ,"_blank"}} className='flex gap-2 items-center mt-4'>
            <IoMail className='text-white' />
            <p className='cursor-pointer hover:text-(--primery-color) uppercase transform-all duration-300'>mkmayur4480@gmail.com</p>
          </div>
          <div onClick={() => {window.location.href = "tel:+917448046577" ,"_blank"}} className='flex gap-2 items-center mt-4'>
            <IoCall className='text-white' />
            <p className='cursor-pointer hover:text-(--primery-color) transform-all duration-300'>+91 7448046577</p>
          </div>
          <div className='flex gap-2 items-center mt-4'>
            <FaLocationDot className='text-white' />
            <p className='cursor-pointer hover:text-(--primery-color) uppercase transform-all duration-300'>nashik, mh, India-423301</p>
          </div>
        </div>
        <div>
          <h4 className='text-white font-semibold text-xl'>Essectial</h4>
          {menu.map((e, index) => (<div key={index} className='flex gap-2 items-center mt-4'>
            <p onClick={()=> handleClick(e)} className='cursor-pointer hover:text-(--primery-color) transform-all duration-300'><Link to={e.link}>{e.item}</Link></p>
          </div>))}
          <div className='flex gap-2 items-center mt-4'>
            <p className='cursor-pointer hover:text-(--primery-color) transform-all duration-300'><Link to="/privacy-policy">Privacy Policy</Link></p>
          </div>
        </div>
      </div>
      <div className='bg-[#212529] text-center p-4 lg:text-base text-[4.2vw]'>
        <p>&copy; {new Date().getFullYear()} <span className='text-white font-semibold cursor-pointer hover:text-(--primery-color) transform-all duration-300'>Mayurkumawat.me</span> | All rights reserved.</p>
        <h2 className='mt-2 lg:mt-0 text-(--primery-color) font-semibold cursor-pointer hover:text-white transform-all duration-300 inline-block'>Code by Mayur Kumawat</h2>
      </div>
    </footer>
  )
}

export default Footer