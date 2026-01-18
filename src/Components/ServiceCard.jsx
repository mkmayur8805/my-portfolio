import Para from './Para'

const ServiceCard = ({ service }) => {
    return (
        <div className='w-full bg-white  rounded hover:scale-105 duration-300 cursor-pointer p-3 lg:p-5 '>
            <div className='w-full shadow-lg bg-center rounded overflow-hidden'>
                <img className='object-cover' src={service.imgLink} alt={service.description} />
            </div>
            <h2 className='text-2xl font-semibold my-4'>{service.title}</h2>
            <Para className="lg:text-sm" text={service.description} />
        </div>
    )
}

export default ServiceCard