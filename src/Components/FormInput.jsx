const FormInput = ({ type = "text", placeholder = "", className = "", icon = null, value, onChange }) => {
  if (type === "note") {
    return (
      <div className="relative">
        <textarea className=" pt-4 w-full pl-14 h-30 bg-(--secondory-color) outline-none  transition-all duration-300 rounded-xl" type="note" placeholder={placeholder} name="note" value={value} onChange={onChange}></textarea>
        <div className='w-fit absolute top-7 -translate-y-1/2 left-4 text-(--primary-color) text-xl'>
        {icon}
      </div>
      </div>
    )
  }
  return (
    <div className='relative'>
      <input type={type} placeholder={placeholder} value={value} onChange={onChange} className={`w-full pl-14 h-14 bg-(--secondory-color) outline-none  transition-all duration-300 rounded-xl  ${className}`} />
      <div className='w-fit absolute top-1/2 -translate-y-1/2 left-4 text-(--primary-color) text-xl'>
        {icon}
      </div>
    </div>
  )
}

export default FormInput