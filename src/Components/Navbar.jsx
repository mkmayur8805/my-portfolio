const Navbar = ({menu}) => {
  return (
    <div className="w-full flex justify-center items-center text-gray-50">
        <nav className="mt-10 border border-zinc-800">
            <ul className="flex gap-10">
                {menu.map((menu, index) => (
                    <li key={index} className="inline-block text-sm text-zinc-400 cursor-pointer">{menu.item}</li>
                ))}
            </ul>
        </nav>

    </div>
  )
}

export default Navbar