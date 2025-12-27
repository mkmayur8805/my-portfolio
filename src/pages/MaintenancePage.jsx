import React from 'react';
import { FaTools, FaInstagram, FaGithub, FaLinkedin } from 'react-icons/fa';

const MaintenancePage = ({ setAdmin }) => {
  return (
    <div className="min-h-screen bg-linear-to-br from-gray-800 via-gray-900 to-black flex items-center justify-center text-white px-8">
      <div className="max-w-xl w-full text-center p-10 rounded-3xl bg-white/5 backdrop-blur-xl shadow-2xl border border-white/10">
        {/* Logo / Name */}
        <h1 className="text-3xl md:text-5xl font-bold tracking-wide mb-3 flex items-center justify-center gap-3">
          <FaTools className="text-yellow-400 animate-bounce" />
          Mayur Kumawat's Portfolio
        </h1>
        <p className="text-sm text-gray-400 mb-6">Frontend Developer • Learner • Creator</p>

        {/* Divider */}
        <div className="w-24 h-1 bg-linear-to-r from-pink-500 to-purple-500 mx-auto mb-8 rounded-full"></div>

        {/* Main Message */}
        <h2 className="text-3xl font-semibold mb-4">This site is Under Construction</h2>
        <p className="text-gray-300 leading-relaxed mb-8">
          Our website is currently under construction. <br />
          Stay tuned for a brand new, professional, and powerful portfolio <span onClick={()=>{setAdmin(true)}}>coming soon!</span>
        </p>

        {/* Animated Loader */}
        <div className="flex justify-center mb-8">
          <div className="w-14 h-14 border-4 border-gray-600 border-t-yellow-400 rounded-full animate-spin"></div>
        </div>

        {/* Countdown or Note */}
        <p className="text-sm text-gray-400 mb-6">
          We're working hard to bring it live. Thank you for your patience!
        </p>

        {/* Social Links */}
        <div className="mt-6 flex justify-center gap-6 text-2xl">
          <a href="#" className="hover:text-pink-500 transition"><FaInstagram /></a>
          <a href="#" className="hover:text-purple-500 transition"><FaGithub /></a>
          <a href="#" className="hover:text-blue-500 transition"><FaLinkedin /></a>
        </div>
      </div>
    </div>
  );
};

export default MaintenancePage;