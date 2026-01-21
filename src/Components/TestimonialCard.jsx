import Para from '../Components/Para'
import { FaStar } from "react-icons/fa";
const TestimonialCard = ({obj}) => {
    const stars = obj.stars;
    return (
        <div className='z-10 flex flex-col bg-white p-5 rounded shadow-lg hover:shadow-2xl hover:-translate-y-2 transition-all duration-300'>
            <div className='flex gap-4'>
                <div className='bg-black max-w-22 max-h-22 min-w-22 min-h-22 rounded-full overflow-hidden'>
                    <img className='h-full w-full' src="https://images.unsplash.com/photo-1595152452543-e5fc28ebc2b8?q=80&w=580&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
                </div>
                <div className='flex flex-col justify-start gap-1 mt-2'>
                    <h4 className='text-xl font-semibold font-dm-sans leading-none text-nowrap'>{obj.name}</h4>
                    <h5 className='text-base font-dm-sans text-(--primery-color)/50 text-nowrap'>{obj.title}</h5>
                    <div className="relative flex gap-1">
                        <div className="flex gap-1 text-yellow-500 z-20">
                            {[...Array(stars)].map((_, i) => (
                                <FaStar key={`active-${i}`} />
                            ))}
                        </div>
                        <div className="absolute left-0 top-0 flex gap-1 text-zinc-200 z-10">
                            {[...Array(5)].map((_, i) => (
                                <FaStar key={`bg-${i}`} />
                            ))}
                        </div>
                    </div>
                </div>
            </div>
            <div className='w-full flex flex-col items-center'>
                <Para className="pl-3 text-base! font-dm-sans mt-3" text={obj.feedback} />
            </div>
        </div>
    )
}

export default TestimonialCard