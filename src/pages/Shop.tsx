import { Header } from '@sections/Header';
import Footer from '@sections/Footer';
import Map from '@sections/Map';
import ItemCard from '@components/itemcard/ItemCard';
import { IProduct } from '@defines/index';
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationNext,
  PaginationPrevious,
  PaginationLink,
  PaginationEllipsis,
} from '@shadcn-ui/pagination';
import { useEffect, useState } from 'react';
import { API_URL } from '@utils/index';
import axios from 'axios';

export default function Shop() {
  const [data, setData] = useState<IProduct[]>([]);

  useEffect(() => {
    axios
      .get(`${API_URL}/products/?product_category=phone`)
      .then((res) => {
        if (Array.isArray(res.data)) {
          setData(res.data);
        } else {
          console.error('Fetched data is not an array:', res.data);
        }
      })
      .catch((error) => console.log(error));
  }, []);

  return (
    <div className="">
      <Header />

      <div className="grid grid-cols-1 md:grid-cols-3 pt-12 items-center">
        {data.length > 0
          ? data.map((item, index) => (
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
              availableColors={item.availableColors}
            />
          ))
          : ''}
      </div>
      <Pagination className="h-16 py-16 flex justify-center">
        <PaginationContent>
          <PaginationItem>
            <PaginationPrevious href="#" className="text-[#c5c6c7]" />
          </PaginationItem>
          <PaginationItem>
            <PaginationLink href="#" className="bg-[#ff7701] text-[#c5c6c7]">
              1
            </PaginationLink>
          </PaginationItem>
          <PaginationItem>
            <PaginationLink href="#" className="text-[#c5c6c7]">
              2
            </PaginationLink>
          </PaginationItem>
          <PaginationItem>
            <PaginationLink href="#" className="text-[#c5c6c7]">
              3
            </PaginationLink>
          </PaginationItem>
          <PaginationItem>
            <PaginationEllipsis />
          </PaginationItem>
          <PaginationItem>
            <PaginationNext href="#" className="text-[#c5c6c7]" />
          </PaginationItem>
        </PaginationContent>
      </Pagination>
      <Map />
      <Footer />
    </div>
  );
}
