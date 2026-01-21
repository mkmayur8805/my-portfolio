import Para from './Para'

const ServiceCard = ({ service }) => {
    return (
        <div className='w-full bg-white shadow-lg rounded hover:shadow-xl hover:scale-105 duration-300 cursor-pointer p-3 lg:p-5 transition-all'>
            <div className='w-full bg-center border border-(--primery-color)/10 rounded overflow-hidden'>
                <img className='object-cover hover:scale-105 duration-300' src={service.imgLink} alt={service.description} />
            </div>
            <h2 className='lg:text-2xl text-[7vw] leading-tight font-semibold lg:my-2 my-4'>{service.title}</h2>
            <Para className="lg:text-sm" text={service.description} />
            <div>
                {service.tags.map((tag, index) => (
                    <span key={index} className="lg:text-xs border border-(--primery-color) text-(--primery-color) px-2  rounded-full mr-2 py-[2px] inline-block mt-2 hover:text-white hover:bg-(--primery-color) duration-300 transition-all">{tag}</span>
                ))}
            </div>
        </div>
    )
}

export default ServiceCard