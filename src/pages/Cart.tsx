import Map from '@sections/Map'
import Header from '@sections/Header'
import Footer from '@sections/Footer'
import { Button } from '@shadcn-ui/button'
import Oppo from "@assets/1000063042-1-800x800.jpg"
import { useState } from 'react'

function QuantityInput() {

  const [quantity, setQuantity] = useState(1)

  return <span className='flex gap-x-2'>
    <Button onClick={() => {
      quantity >= 2 ? setQuantity(quantity + 1) : setQuantity(1)
    }}>
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
        <path strokeLinecap="round" strokeLinejoin="round" d="M5 12h14" />
      </svg>
    </Button>
    <input type='text' value={quantity} className='w-16 rounded-[5px] px-2 text-center border-[1px] border-black' />
    <Button onClick={() => {
      setQuantity(quantity + 1)
    }}>
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
      </svg>
    </Button>
  </span>
}

function CartItem() {

  return <div id='CartItem' className="grid grid-cols-5 rounded-[2px] bg-white py-8 px-4">
    <img className='h-[200px]' src={Oppo} alt="" />
    <div className="description flex flex-col gap-y-2 col-span-3">
      <h2 className='text-black'>WD_BLACK 4TB SN850X NVMe Internal Gaming SSD Solid State Drive - Gen4 PCIe, M.2 2280, Up to 7,300 MB/s - WDS400T2X0E</h2>
      <p className='text-red-500'>Only 3 left in stock</p>
      <div className="specifications flex flex-col gap-y-4">
        <p><b>RAM: </b>4GB</p>
        <p><b>ROM: </b> 64GB</p>
        <p className='flex items-center gap-x-2'><b>Quantity</b>: <QuantityInput /></p>
      </div>
    </div>
    <span className='font-bold text-right'>Kshs. 307.99</span>
  </div>
}



export default function Cart(props: {items: Array<{}>}) {

  return (
    <div id='Cart' className="">
      <Header />
      <div className="grid grid-cols-5 min-h-[100dvh] p-4 gap-x-6">
        <div className="flex flex-col gap-2 col-span-4">
          <h1 className='text-black flex gap-4'>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="#000" className="size-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z" />
            </svg>
            <b className=''>Shopping Cart</b>
          </h1>
          <CartItem />
          <CartItem />
          <CartItem />
          <CartItem />
          <CartItem />
          <CartItem />
          <CartItem />
          <CartItem />
        </div>

        <div className="flex flex-col gap-8 mt-8">
          <div className="flex flex-col gap-4 h-[100px] items-center justify-center rounded  bg-white">
            <h2 className='text-black'>Subtotal (1 item): <span className=' font-bold'>$307.99</span></h2>
            <Button className='w-[150px]'>Proceed to checkout</Button>
          </div>

        </div>
      </div>
      <Map />
      <Footer />
    </div>
  )
}