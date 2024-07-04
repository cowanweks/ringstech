import ProductForm from "@pages/ProductForm"
import Footer from "@sections/Footer"
import { Header } from "@sections/Header"
import Map from "@sections/Map"


export default function Admin() {


  return <div className="">
    <Header />
    <div className="flex justify-center py-16 bg-gray-100">
      <ProductForm />
    </div>
    <Map />
    <Footer />
  </div>
}