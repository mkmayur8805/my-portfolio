import Para from '../Components/Para'
import { FaStar } from "react-icons/fa";
const TestimonialCard = () => {
    const stars = 4;
    return (
        <div className='flex flex-col items-center lg:w-1/4 h-125 bg-white p-5 rounded shadow-lg hover:shadow-2xl hover:-translate-y-2 transition-all duration-300'>
            <div className=' bg-black w-22 h-22 rounded-full overflow-hidden mb-4'>
                <img className='h-full w-full' src="https://images.unsplash.com/photo-1595152452543-e5fc28ebc2b8?q=80&w=580&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
            </div>
            <div className='mt-3 w-full border-t border-zinc-200 flex flex-col items-center pt-3'>
                <h4 className='text-2xl font-semibold font-dm-sans mt-3'>Prasad Patil</h4>
                <h5 className='text-lg font-dm-sans text-(--primery-color)'>CEO</h5>
                <div className="relative flex gap-1 my-5">
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

                <Para className=" pl-3 font-dm-sans mt-3" text="Mayur delivered a professional and well-structured website aligned with our business needs. The execution was clear, consistent, and timely. We are satisfied with the overall quality of work." />
            </div>
        </div>
    )
}

export default TestimonialCard