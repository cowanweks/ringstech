import ProductForm from "@pages/ProductForm"
import { Header } from "@sections/Header"
// import { Header } from '@sections/Header';
// import { Input } from "@shadcn-ui/input"
// import { Label } from "@shadcn-ui/label"
// import { Button } from "@shadcn-ui/button"


export default function Admin() {


  return <div className="">
    <Header />
    <div className="flex justify-center py-16 bg-gray-100">
      <ProductForm />
    </div>
  </div>
}