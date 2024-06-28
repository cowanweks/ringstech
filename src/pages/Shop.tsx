import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationNext,
  PaginationPrevious,
  PaginationLink,
  PaginationEllipsis,
} from '@shadcn-ui/pagination';
import { Header } from '@sections/Header';
import Footer from '@sections/Footer';
import Map from '@sections/Map';
import ItemCard from '@components/itemcard/ItemCard';
import { IProduct } from '@defines/index';
import { useEffect, useState } from 'react';
import { API_URL } from '@utils/index';
import { useSearchParams } from 'react-router-dom';


export default function Shop() {


  const [data, setData] = useState<IProduct[]>([]);
  const [searchParams] = useSearchParams();
  const category = searchParams.get('category');


  useEffect(() => {

    const fetchProducts = async (category: string | null) => {

      if (category == null) {
        const response = await fetch(`${API_URL}/products`);
        const data = await response.json();
        setData(data);
      } else {
        const response = await fetch(`${API_URL}/products/?category=${category}`);
        const data = await response.json();
        setData(data);
      }
    }

    fetchProducts(category);

  }, [category]);


  return (
    <div id="Shop" className="bg-gray-200">
      <Header />

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 pt-12 items-center">
        {data.length > 0
          ? data.map((item, index) => (
            <ItemCard
              key={index}
              display={item.display}
              battery={item.battery}
              brand={item.brand}
              cameras={item.cameras}
              description={item.description}
              in_stock={item.in_stock}
              model={item.model}
              ram={item.ram}
              rom={item.rom}
              processor={item.processor}
              product_category={item.product_category}
              product_name={item.product_name}
              product_unit_price={item.product_unit_price}
              product_image={item.product_image}
            />
          ))
          : ''}
      </div>
      <Pagination className="h-16 py-16 flex justify-center">
        <PaginationContent>
          <PaginationItem>
            <PaginationPrevious href="#" className="text-gray-500" />
          </PaginationItem>
          <PaginationItem>
            <PaginationLink href="#" className="bg-[#ff7701] text-[#c5c6c7]">
              1
            </PaginationLink>
          </PaginationItem>
          <PaginationItem>
            <PaginationLink href="#" className="text-gray-500">
              2
            </PaginationLink>
          </PaginationItem>
          <PaginationItem>
            <PaginationLink href="#" className="text-gray-500">
              3
            </PaginationLink>
          </PaginationItem>
          <PaginationItem>
            <PaginationEllipsis />
          </PaginationItem>
          <PaginationItem>
            <PaginationNext href="#" className="text-gray-500" />
          </PaginationItem>
        </PaginationContent>
      </Pagination>
      <Map />
      <Footer />
    </div>
  );
}
