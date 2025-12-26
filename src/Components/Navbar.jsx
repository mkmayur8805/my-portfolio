const Navbar = ({ menu, setMenu }) => {
  return (
    <div className="w-full flex justify-center items-center text-zinc-400">
      <nav className="mt-10 border border-zinc-800 rounded-full">
        <ul className="flex gap-4 font-semibold text-sm">
          {menu.map((item, index) => (
            <li
              key={index}
              className={`px-4 py-1 m-2 rounded-full
                ${item.isopen ? "bg-zinc-800 text-zinc-50" : ""}
                cursor-pointer hover:text-zinc-50`}
              onClick={() => {
                const newMenu = menu.map((m, idx) =>
                  idx === index
                    ? { ...m, isopen: true }
                    : { ...m, isopen: false }
                );
                setMenu(newMenu);
              }}
            >
              {item.item}
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
