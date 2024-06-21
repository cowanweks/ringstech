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
import { useSearchParams } from 'react-router-dom';




export default function Shop() {
  const [data, setData] = useState<IProduct[]>([]);
  // const location = useLocation();
  const [searchParams] = useSearchParams();
  const category = searchParams.get('category');

  useEffect(() => {
    if (category) {
      fetchProducts(category);
    } else {

    }
  }, [category]);

  const fetchProducts = async (category: string) => {
    try {
      const response = await fetch(`${API_URL}/products/?category=${category}`);
      const data = await response.json();
      setData(data);
    } catch (error) {
      console.error('Error fetching products:', error);
    }
  };


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
              in_stock={item.in_stock}
              model={item.model}
              ram={item.ram}
              rom={item.rom}
              processor={item.processor}
              product_category={item.product_category}
              product_name={item.product_name}
              product_unit_price={item.product_unit_price}
              product_image={item.product_image}
              available_colors={item.available_colors}
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
