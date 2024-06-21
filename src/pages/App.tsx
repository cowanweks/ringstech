import Map from '@sections/Map'
import Hero from '@sections/Hero'
import { Header } from '@sections/Header'
import Footer from '@sections/Footer'
import Mobiles from '@sections/Mobile'
import LifeStyle from '@sections/LifeStyle'
import Accessories from '@sections/Accessories'
import CoversProtectors from '@sections/CoversProtectors'
import { Link } from 'react-router-dom'



export default function App() {


  return (
    <div className="">
      <Header />
      <Hero />
      <div className='grid grid-cols-1 gap-4 px-16 py-16 md:grid-cols-2 md:gap-x-16'>
        <Link to="/shop?category=accessory" className='h-16 leading-[48px] hover:border-[#ff7701] hover:scale-105 text-center border-2 border-gray-600'>ACCESSORIES</Link>
        <Link to="/shop?category=phone" className='h-16 leading-[48px]  hover:border-[#ff7701] hover:scale-105  text-center border-2 border-gray-600'>SMARTPHONES</Link>
        <Link to="/shop?category=lifestyle" className='h-16  hover:border-[#ff7701] leading-[48px] hover:scale-105  text-center border-2 border-gray-600'>LIFESTYLE</Link>
        <Link to="/shop?category=covers_protectors" className='h-16 leading-[48px]  hover:border-[#ff7701] hover:scale-105  text-center border-2 border-gray-600'>COVERS & PROTECTORS</Link>
      </div>
      <Mobiles />
      <Accessories />
      <CoversProtectors />
      <LifeStyle />
      <Map />
      <Footer />
    </div>
  )
}