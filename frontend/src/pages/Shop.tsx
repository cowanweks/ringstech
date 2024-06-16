import Header from '@sections/Header'
import Footer from '@sections/Footer'
import Map from '@sections/Map'
import ItemCard from '@components/itemcard/ItemCard'
import { IProduct } from '@defines/index'
import {
  Pagination, PaginationContent, PaginationItem, PaginationNext,
  PaginationPrevious, PaginationLink, PaginationEllipsis
} from '@shadcn-ui/pagination'
import Image1 from "@assets/phones/nonshop_violet.webp"
import { useEffect, useState } from 'react'
import { API_URL } from "@utils/index"
import axios from 'axios'


const fallbackItems: Array<IProduct> = [
  {
    ram: '8GB',
    battery: '4000mAh',
    cameras: '50MP (main), 12MP (ultra-wide), 10MP (telephoto)',
    display: '6.1-inch Dynamic AMOLED 2X',
    processor: 'Snapdragon 8 Gen 2',
    rom: '128GB/256GB',
    type: 'phone',
    inStock: 3,
    model: 'Samsung Galaxy S24*',
    brand: 'Samsung',
    unitPrice: 6.00,
    productImage: Image1,
    description: 'Samsung Galaxy S24*',
    availableColors: '',
    productCategory: '',
    productName: ''
  }

]

export default function Shop() {

  const [data, setData] = useState<IProduct[]>([]);

  useEffect(() => {
    axios.get(`${API_URL}/products/?product_category=phone`)
      .then(res => {
        if (Array.isArray(res.data)) {
          setData(res.data);
        } else {
          console.error('Fetched data is not an array:', res.data);
        }
      })
      .catch(error => console.log(error));
  }, []);

  return (
    <div className="">
      <Header />
      <div className="grid grid-cols-4">
        <div className="filters">Filters</div>

        <div className="items col-span-3">

          <div className="grid grid-cols-3">
            {(data.length > 0 ? data : fallbackItems).map((item, index) => (
              <ItemCard
                key={index}
                display={item.display}
                battery={item.battery}
                brand={item.brand}
                cameras={item.cameras}
                description={item.description}
                inStock={item.inStock}
                model={item.model}
                ram={item.ram}
                rom={item.rom}
                processor={item.processor}
                productCategory={item.productCategory}
                productName={item.productName}
                unitPrice={item.unitPrice}
                productImage={item.productImage}
                availableColors={item.availableColors} />
            ))}

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