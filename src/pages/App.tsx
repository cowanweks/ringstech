import Map from '@sections/Map'
import Hero from '@sections/Hero'
import Header from '@sections/Header'
import Footer from '@sections/Footer'
import Mobiles from '@sections/Mobile'
import LifeStyle from '@sections/LifeStyle'
import Accessories from '@sections/Accessories'



export default function App() {


  return (
    <div className="">
      <Header />
      <Hero />
      <div className="h-72 bg-gradient-to-r from-[#948A30] via-[#3E9161] to-[#707E3E]"></div>
      <Mobiles />
      <div className="h-72 bg-gradient-to-r from-[#948A30] via-[#3E9161] to-[#707E3E]"></div>
      <Accessories />
      <div className="h-72 bg-gradient-to-r from-[#948A30] via-[#3E9161] to-[#707E3E]"></div>
      <LifeStyle />
      <div className="h-72 bg-gradient-to-r from-[#948A30] via-[#3E9161] to-[#707E3E]"></div>
      <Map />
      <Footer />
    </div>
  )
}