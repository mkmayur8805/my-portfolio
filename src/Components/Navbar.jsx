import { IoLogoReact } from "react-icons/io5";
const Navbar = ({ menu }) => {
  return (
    <nav className="text-zinc-800 flex justify-between px-10 py-3 items-center">
      <div className="text-4xl flex gap-2 items-center justify-center cursor-pointer">
        <IoLogoReact className="text-6xl text-(--primery-color)" />
      </div>
      <ul className="flex gap-7 items-center">
        {menu.map((e, idx) =>
          <li className="cursor-pointer text-lg font-semibold hover:text-(--primery-color)" key={idx}>{e.item}</li>
        )}
      </ul>
      <button className="px-6 h-fit py-3 rounded-2xl border border-zinc-200 font-semibold bg-white hover:bg-(--primery-color) hover:text-white transition-all duration-300 hover:border-(--primery-color)">
        Lets' Talk
      </button>
    </nav>
  );
};

export default Navbar;
