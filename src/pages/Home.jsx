import Navbar from "../Components/Navbar"

const Home = ({menu, setMenu}) => {
  return (
    <div className='w-full h-screen'>
        <Navbar menu={menu} setMenu={setMenu} />
    </div>
  )
}

export default Home