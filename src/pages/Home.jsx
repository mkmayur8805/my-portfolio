import Navbar from "../Components/Navbar"

const Home = ({menu}) => {
  return (
    <div className='w-full h-screen'>
        <Navbar menu={menu} />
    </div>
  )
}

export default Home