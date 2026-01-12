const Bar = ({tech, percentage,key}) => {
  return (
    <div key={key} className="text-black">
      <div className="h-1 relative w-full rounded-full bg-gray-200 my-14">
        <h4 className="absolute right-0 bottom-2 font-semibold mt-2">{percentage}</h4>
        <h4 className="absolute left-0 bottom-2 font-semibold mt-2">{tech}</h4>
        
        <div className="absolute top-0 left-0 h-1 rounded-full bg-(--primery-color) " style={{width: percentage}}></div>
      </div>
    </div>
  )
}

export default Bar