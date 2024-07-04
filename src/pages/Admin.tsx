import ProductForm from "@pages/ProductForm"
import Footer from "@sections/Footer"
import { Header } from "@sections/Header"
import Map from "@sections/Map"
import { useEffect } from "react"
// import { useNavigate } from "react-router-dom"


export default function Admin() {

  // const navigate = useNavigate();

  useEffect(() => {
    // navigate("/signin")

  }, [])


  return <div className="">
    <Header />
    <div className="flex justify-center py-16 bg-gray-100">
      <ProductForm />
    </div>
    <Map />
    <Footer />
  </div>
}