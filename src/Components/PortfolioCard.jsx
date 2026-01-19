import { Link } from "react-router-dom"
const PortfolioCard = ({ title, description, link, img }) => {
    return (
        <div className="w-full">
            <Link to={link} target="_blank" rel="noopener noreferrer">
                <div className="relative overflow-hidden rounded-lg">
                    <img className="hover:scale-105 duration-300" src={img} alt={title} />
                    <div className="absolute top-0 left-0 w-full h-full bg-black/30 opacity-0 hover:opacity-100  duration-300 flex items-center justify-center">
                        <button className="capitalize px-6 py-3 bg-white text-black font-semibold rounded-lg hover:-translate-y-1 duration-300">
                            more info
                        </button>
                    </div>
                </div>
                <h2 className="text-3xl font-semibold mt-4">{title}</h2>
                <p className="mt-2 text-2xl text-(--primery-color)">{description}</p>
            </Link>
        </div>
    )
}

export default PortfolioCard