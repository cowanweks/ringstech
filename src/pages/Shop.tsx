import Header from '@sections/Header'
import Footer from '@sections/Footer'
import Map from '@sections/Map'
import ItemCard from '@components/itemcard/ItemCard'
import {
  Pagination, PaginationContent, PaginationItem, PaginationNext,
  PaginationPrevious, PaginationLink, PaginationEllipsis
} from '@shadcn-ui/pagination'
// import { Button } from '@shadcn-ui/button'
import Image1 from "@assets/phones/nonshop_violet.webp"
import Image2 from "@assets/phones/nonshop_gray.webp"

export default function Shop() {


  return (
    <div className="">
      <Header />
      <div className="grid grid-cols-4">
        <div className="filters">Filters</div>

        <div className="items col-span-3">

          <div className="grid grid-cols-3">
            <ItemCard title="Galaxy S23 Ultra" price={5000.05} image={Image1} description="his is a brief description of the product. It highlights the main features and benefits." />
            <ItemCard title="Galaxy S24 Ultra" price={5000.05} image={Image2} description="his is a brief description of the product. It highlights the main features and benefits." />
            <ItemCard title="Galaxy S23 Ultra" price={5000.05} image={Image1} description="his is a brief description of the product. It highlights the main features and benefits." />
            <ItemCard title="Galaxy S24 Ultra" price={5000.05} image={Image2} description="his is a brief description of the product. It highlights the main features and benefits." />
            <ItemCard title="Galaxy S24 Ultra" price={5000.05} image={Image2} description="his is a brief description of the product. It highlights the main features and benefits." />
            <ItemCard title="Galaxy S24 Ultra" price={5000.05} image={Image2} description="his is a brief description of the product. It highlights the main features and benefits." />
            <ItemCard title="Galaxy S24 Ultra" price={5000.05} image={Image2} description="his is a brief description of the product. It highlights the main features and benefits." />
            <ItemCard title="Galaxy S24 Ultra" price={5000.05} image={Image2} description="his is a brief description of the product. It highlights the main features and benefits." />
            <ItemCard title="Galaxy S24 Ultra" price={5000.05} image={Image2} description="his is a brief description of the product. It highlights the main features and benefits." />
            <ItemCard title="Galaxy S24 Ultra" price={5000.05} image={Image2} description="his is a brief description of the product. It highlights the main features and benefits." />
          </div>
          <Pagination className='h-16 py-16'>
            <PaginationContent>
              <PaginationItem>
                <PaginationPrevious href="#" className='text-black' />
              </PaginationItem>
              <PaginationItem>
                <PaginationLink href="#" className='bg-[#ff7701] text-white'>1</PaginationLink>
              </PaginationItem>
              <PaginationItem>
                <PaginationLink href="#" className=' text-black'>2</PaginationLink>
              </PaginationItem>
              <PaginationItem>
                <PaginationLink href="#" className='text-black'>3</PaginationLink>
              </PaginationItem>
              <PaginationItem>
                <PaginationEllipsis />
              </PaginationItem>
              <PaginationItem>
                <PaginationNext href="#" className='text-black' />
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