import '@styles/App.scss'
import Map from '@sections/Map'
import Hero from '@sections/Hero'
import Header from '@sections/Header'
import Footer from '@sections/Footer'
import Mobiles from '@sections/Mobile'
import Accessories from '@sections/Accessories'



export default function App() {


  return (
    <div className="">
      <Header />
      <Hero />
      <Mobiles />
      <Accessories />
      <Map />
      <Footer />
    </div>
  )
}