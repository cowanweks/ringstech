import Map from '@sections/Map'
import { Header } from '@sections/Header'
import Footer from '@sections/Footer'
import { Button } from '@shadcn-ui/button'
import { ICartItem } from '@defines/index'
import CartItem from '@components/cartitem/CartItem'
import Image1 from '@assets/phones/image1.jpg'


const items: Array<ICartItem> = [
  {
    item_name: "Samsung Galaxy S24",
    item_color: "",
    quantity: 2,
    in_stock: 3,
    model: 'Samsung Galaxy S24*',
    brand: 'Samsung',
    item_price: 6.00,
    item_image: Image1,
    item_description: 'Samsung Galaxy S24*'
  },
  {
    item_name: "Samsung Galaxy S24",
    item_color: "",
    quantity: 2,
    in_stock: 3,
    model: 'Samsung Galaxy S24*',
    brand: 'Samsung',
    item_price: 6.00,
    item_image: Image1,
    item_description: 'Samsung Galaxy S24*'
  },
]


export default function Cart() {

  const subtotal = items.reduce((total, item) => total + item.item_price!, 0);

  return (
    <div id='Cart' className="">
      <Header />
      <div className="h-72 mt-10 bg-gradient-to-r from-[#948A30] via-[#3E9161] to-[#707E3E]">
      </div>
      <div className="grid grid-cols-1 md:grid-cols-5 min-h-[100dvh] px-16 py-8 gap-x-6">
        <div className="grid flex-col gap-2 col-span-4">
          {items.map((item, index) => <CartItem key={index} item={item} />)}
        </div>

        <div className="flex flex-col gap-8">
          <div className="flex flex-col gap-4 min-w-32 max-h32 p-10 items-center justify-center rounded

            bg-gray-100">
            <h2 className='text-black text-nowrap'>Subtotal ({items.length} item{items.length !== 1 ? 's' : ''}): <span className='font-bold'>${subtotal.toFixed(2)}</span></h2>
            <Button className='w-full hover:scale-105'>Checkout</Button>
          </div>
        </div>
      </div>
      <div className="h-72 bg-gradient-to-r from-[#948A30] via-[#3E9161] to-[#707E3E]"></div>
      <Map />
      <Footer />
    </div>
  )
}