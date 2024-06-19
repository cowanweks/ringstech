import Map from '@sections/Map'
import Hero from '@sections/Hero'
import { Header } from '@sections/Header'
import Footer from '@sections/Footer'
import Mobiles from '@sections/Mobile'
import LifeStyle from '@sections/LifeStyle'
import Accessories from '@sections/Accessories'



export default function App() {


  return (
    <div className="">
      <Header />
      <Hero />
      <Mobiles />
      <Accessories />
      <LifeStyle />
      <Map />
      <Footer />
    </div>
  )
}