import { div } from "framer-motion/client";
import { Link } from "react-router-dom";

const Error404Page = () => {
  return (
    <div className="relative">
      <div className=" absolute top-0 right-0 z-[999] w-full min-h-screen flex flex-col items-center justify-center bg-grid text-center px-6">
      
      {/* Big 404 Text */}
      <h1 className="text-[12vw] lg:text-[10rem] font-bold text-(--primery-color) mb-4 animate-pulse">
        404
      </h1>

      {/* Heading */}
      <h2 className="text-3xl lg:text-5xl font-semibold mb-2">Page Not Found</h2>

      {/* Subtext */}
      <p className="text-[1rem] lg:text-lg mb-6 max-w-lg mx-auto text-gray-700">
        Oops! The page you are looking for does not exist or has been moved.
      </p>

      {/* Button to Home */}
      <Link
        to="/"
        className="inline-block bg-(--primery-color) text-white px-8 py-3 rounded-2xl font-semibold shadow-lg hover:bg-orange-500 hover:scale-105 transform transition-all duration-300"
      >
        Go Back Home
      </Link>
    </div>
    </div>
  );
};

export default Error404Page;
