import { useState } from 'react'
import { Button } from '@shadcn-ui/button'
import { HiPlus as Addicon, HiMinus as MinusIcon } from 'react-icons/hi2'
import { IProduct } from '@defines/index'


function QuantityInput() {

  const [quantity, setQuantity] = useState(1)

  return <span className='flex gap-x-2'>
    <Button onClick={() => {
      quantity >= 2 ? setQuantity(quantity - 1) : setQuantity(1)
    }}>
      <MinusIcon />
    </Button>
    <input disabled type='text' value={quantity} className='w-16 rounded-[5px] px-2 text-center border-[1px] border-black' />
    <Button onClick={() => {
      setQuantity(quantity + 1)
    }} className=''>
      <Addicon />
    </Button>
  </span>
}

export default function CartItem({ item }: { item: IProduct }) {

  return <div id='CartItem' className="grid grid-cols-5 rounded-[4px] bg-white py-8 px-4">
    <img className='h-[200px]' src={item.productImage!} alt="" />
    <div className="description flex flex-col gap-y-2 col-span-3">
      <h2 className='text-black'>{item.description}</h2>
      <p className='text-red-500'>Only {item.inStock} left in stock</p>
      {item.type === 'phone' && (
        <div className="specifications flex flex-col gap-y-4">
          <p><b>RAM: </b>{item.ram}</p>
          <p><b>ROM: </b>{item.rom}</p>
          <p><b>Dispay: </b>{item.display}</p>
          <p><b>Processor: </b>{item.processor}</p>
          <p><b>Camera(s): </b>{item.cameras}</p>
          <p><b>Battery: </b>{item.battery}</p>
          <p><b>Brand: </b> {item.brand}</p>
          <p><b>Model: </b> {item.model}</p>
          <p className='flex items-center gap-x-2'><b>Quantity</b>: <QuantityInput /></p>
        </div>
      )}
      {item.type === 'playstation' && (
        <div>
          <p>Model: {item.model}</p>
          <p>Price: ${item.unitPrice}</p>
        </div>
      )}
    </div>
    <span className='font-bold text-right'>Kshs. {item.unitPrice}</span>
  </div>
}