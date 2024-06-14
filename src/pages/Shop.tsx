import Header from '@sections/Header'
import Footer from '@sections/Footer'
import Map from '@sections/Map'
import ItemCard from '@components/itemcard/ItemCard'
import { IProduct } from '@components/cartitem/CartItem'
import {
  Pagination, PaginationContent, PaginationItem, PaginationNext,
  PaginationPrevious, PaginationLink, PaginationEllipsis
} from '@shadcn-ui/pagination'
// import { Button } from '@shadcn-ui/button'
import Image1 from "@assets/phones/nonshop_violet.webp"


const items: Array<IProduct> = [
  {
    type: '',
    model: '',
    price: 5000.05,
    inStock: 3,
    image: Image1,
    description: "Galaxy S23 Ultra"
  },
  {
    type: '',
    model: '',
    price: 5000.05,
    inStock: 3,
    image: Image1,
    description: "Galaxy S23 Ultra"
  },
  {
    type: '',
    model: '',
    price: 5000.05,
    inStock: 3,
    image: Image1,
    description: "Galaxy S23 Ultra"
  },
  {
    type: '',
    model: '',
    price: 5000.05,
    inStock: 3,
    image: Image1,
    description: "Galaxy S23 Ultra"
  },
]

export default function Shop() {


  return (
    <div className="">
      <Header />
      <div className="grid grid-cols-4">
        <div className="filters">Filters</div>

        <div className="items col-span-3">

          <div className="grid grid-cols-3">
            {items.map((item, index) => <ItemCard key={index} item={item} />)}

          </div>
          <Pagination className='h-16 py-16'>
            <PaginationContent>
              <PaginationItem>
                <PaginationPrevious href="#" className='text-[#c5c6c7]' />
              </PaginationItem>
              <PaginationItem>
                <PaginationLink href="#" className='bg-[#ff7701] text-[#c5c6c7]'>1</PaginationLink>
              </PaginationItem>
              <PaginationItem>
                <PaginationLink href="#" className='text-[#c5c6c7]'>2</PaginationLink>
              </PaginationItem>
              <PaginationItem>
                <PaginationLink href="#" className='text-[#c5c6c7]'>3</PaginationLink>
              </PaginationItem>
              <PaginationItem>
                <PaginationEllipsis />
              </PaginationItem>
              <PaginationItem>
                <PaginationNext href="#" className='text-[#c5c6c7]' />
              </PaginationItem>
            </PaginationContent>
          </Pagination>
        </div>
      </div>
      <Map />
      <Footer />
    </div>
  )
}