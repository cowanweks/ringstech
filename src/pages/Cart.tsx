import Map from '@sections/Map'
import {Header} from '@sections/Header'
import Footer from '@sections/Footer'
import { Button } from '@shadcn-ui/button'
import  { IProduct } from '@defines/index'
import CartItem from '@components/cartitem/CartItem'
import Image1 from '@assets/phones/image1.jpg'
import { Link } from 'react-router-dom'


const items: Array<IProduct> = [
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
    description: 'Samsung Galaxy S24*'
  },
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
    description: 'Samsung Galaxy S24*'
  },
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
    description: 'Samsung Galaxy S24*'
  },
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
    description: 'Samsung Galaxy S24*'
  },

]


export default function Cart() {

  const subtotal = items.reduce((total, item) => total + item.unitPrice!, 0);

  return (
    <div id='Cart' className="">
      <Header />
      <div className="h-72 mt-10 bg-gradient-to-r from-[#948A30] via-[#3E9161] to-[#707E3E]">
      </div>
      <div className="grid grid-cols-5 min-h-[100dvh] px-16 py-8 gap-x-6">
        <div className="flex flex-col gap-2 col-span-4">
          {items.map((item, index) => <CartItem key={index} item={item} />)}
        </div>

        <div className="flex flex-col gap-8">
          <div className="flex flex-col gap-4 h-[100px] items-center justify-center rounded  bg-white">
            <h2 className='text-black'>Subtotal ({items.length} item{items.length !== 1 ? 's' : ''}): <span className='font-bold'>${subtotal.toFixed(2)}</span></h2>
            <Link to="/checkout"><Button className='w-[150px]'>Proceed to checkout</Button></Link>
          </div>
        </div>
      </div>
      <div className="h-72 bg-gradient-to-r from-[#948A30] via-[#3E9161] to-[#707E3E]"></div>
      <Map />
      <Footer />
    </div>
  )
}