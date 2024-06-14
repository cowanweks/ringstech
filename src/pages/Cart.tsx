import Map from '@sections/Map'
import Header from '@sections/Header'
import Footer from '@sections/Footer'
import { Button } from '@shadcn-ui/button'
import CartItem, { IProduct } from '@components/cartitem/CartItem'
import Image1 from '@assets/phones/image1.jpg'
import { Link } from 'react-router-dom'


const items: Array<IProduct> = [
  {
    ram: '4GB',
    rom: '128GB',
    type: 'phone',
    inStock: 3,
    model: 'Samsung Galaxy S23 Ultra',
    brand: 'Samsung',
    price: 6.00,
    image: Image1,
    gamesIncluded: [],
    'description': 'WD_BLACK 4TB SN850X NVMe Internal Gaming SSD Solid State Drive - Gen4 PCIe, M.2 2280, Up to 7,300 MB/s - WDS400T2X0E'
  },
  {
    ram: '4GB',
    rom: '128GB',
    type: 'phone',
    inStock: 3,
    model: 'Samsung Galaxy S23 Ultra',
    brand: 'Samsung',
    price: 6.00,
    image: Image1,
    gamesIncluded: [],
    'description': 'WD_BLACK 4TB SN850X NVMe Internal Gaming SSD Solid State Drive - Gen4 PCIe, M.2 2280, Up to 7,300 MB/s - WDS400T2X0E'
  },
  {
    ram: '4GB',
    rom: '128GB',
    type: 'phone',
    inStock: 3,
    model: 'Samsung Galaxy S23 Ultra',
    brand: 'Samsung',
    price: 6.00,
    image: Image1,
    gamesIncluded: [],
    'description': 'WD_BLACK 4TB SN850X NVMe Internal Gaming SSD Solid State Drive - Gen4 PCIe, M.2 2280, Up to 7,300 MB/s - WDS400T2X0E'
  },

]


export default function Cart() {

  const subtotal = items.reduce((total, item) => total + item.price!, 0);

  return (
    <div id='Cart' className="">
      <Header />
      <div className="h-72 mx-16 mt-10 rounded-[4px] bg-white">
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
      <div className="h-72 rounded-[4px] bg-white"></div>
      <Map />
      <Footer />
    </div>
  )
}