const SectionTag = ({tag , className}) => {
  return (
    <h2 className={`capitalize text-lg text-(--primery-color) border border-(--primery-color) px-1 rounded-sm inline-block hover:text-white hover:bg-(--primery-color) transition-colors duration-300 cursor-default ${className}`}>{tag}</h2>
  )
}

export default SectionTag