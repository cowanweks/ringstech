import '@styles/App.scss'
import Header from '@sections/Header'
import Footer from '@sections/Footer'
import Map from '@sections/Map'
import ItemCard from '@components/itemcard/ItemCard'
import {
  Pagination, PaginationContent, PaginationItem, PaginationNext,
  PaginationPrevious, PaginationLink, PaginationEllipsis
} from '@shadcn-ui/pagination'
import { Button } from '@shadcn-ui/button'
import Image1 from "@assets/phones/nonshop_violet.webp"
import Image2 from "@assets/phones/nonshop_gray.webp"

export default function Shop() {


  return (
    <div className="">
      <Header />
      <div className="flex">
        <div className="filters w-[600px]">Filters</div>

        <div className="items flex flex-col py-8">

          {/*<div id='search_input' className="px-6">
            <span className='flex'>
              <input type='search' className='h-[32px] px-2' />
              <Button className='h-10 bg-red-700'>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="#fff" className="size-6">
                  <path strokeLinecap="round" strokeLinejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
                </svg>
              </Button>
            </span>
          </div>*/}

          <div className="flex flex-wrap">
            <ItemCard title="Galaxy S23 Ultra" price={5000.05} image={Image1} description="his is a brief description of the product. It highlights the main features and benefits." />
            <ItemCard title="Galaxy S24 Ultra" price={5000.05} image={Image2} description="his is a brief description of the product. It highlights the main features and benefits." />
            <ItemCard title="Galaxy S23 Ultra" price={5000.05} image={Image1} description="his is a brief description of the product. It highlights the main features and benefits." />
            <ItemCard title="Galaxy S24 Ultra" price={5000.05} image={Image2} description="his is a brief description of the product. It highlights the main features and benefits." />
            <ItemCard title="Galaxy S24 Ultra" price={5000.05} image={Image2} description="his is a brief description of the product. It highlights the main features and benefits." />
            <ItemCard title="Galaxy S24 Ultra" price={5000.05} image={Image2} description="his is a brief description of the product. It highlights the main features and benefits." />
            <ItemCard title="Galaxy S24 Ultra" price={5000.05} image={Image2} description="his is a brief description of the product. It highlights the main features and benefits." />
            <ItemCard title="Galaxy S24 Ultra" price={5000.05} image={Image2} description="his is a brief description of the product. It highlights the main features and benefits." />
            <ItemCard title="Galaxy S24 Ultra" price={5000.05} image={Image2} description="his is a brief description of the product. It highlights the main features and benefits." />
          </div>
          <div className="pt-2 pb-2">
            <Pagination>
              <PaginationContent className='h-16'>
                <PaginationItem>
                  <PaginationPrevious href="#" />
                </PaginationItem>
                <PaginationItem>
                  <PaginationLink href="#" className='text-white bg-[#ff7701]'>1</PaginationLink>
                </PaginationItem>
                <PaginationItem>
                  <PaginationLink href="#" isActive>
                    2
                  </PaginationLink>
                </PaginationItem>
                <PaginationItem>
                  <PaginationLink href="#">3</PaginationLink>
                </PaginationItem>
                <PaginationItem>
                  <PaginationEllipsis />
                </PaginationItem>
                <PaginationItem>
                  <PaginationNext href="#" />
                </PaginationItem>
              </PaginationContent>
            </Pagination>
          </div>
        </div>
      </div>
      <Map />
      <Footer />
    </div>
  )
}