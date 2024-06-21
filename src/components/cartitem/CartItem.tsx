import { useEffect, useState } from 'react'
import { Button } from '@shadcn-ui/button'
import { HiPlus as Addicon, HiMinus as MinusIcon } from 'react-icons/hi2'
import { ICartItem } from '@defines/index'
import axios from 'axios'
import { API_URL } from '@utils/index'




function QuantityInput() {

  const [quantity, setQuantity] = useState(1)

  useEffect(() => {
    axios
      .get(`${API_URL}/orders/`)
      .then((res) => {
        if (Array.isArray(res.data)) {
          console.log(res.data)
        } else {
          console.error('Fetched data is not an array:', res.data);
        }
      })
      .catch((error) => console.log(error));
  }, []);

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

export default function CartItem({ item }: { item: ICartItem }) {

  return <div id='CartItem' className="grid grid-cols-1 gap-y-4 md:grid-cols-5 rounded-[4px] bg-white py-8 px-4">
    <img className='h-1/2' src={item.item_image!} alt="" />
    <div className="description flex flex-col gap-y-2 col-span-3">
      <h2 className='text-black'>{item.item_name}</h2>
      <p className='text-red-500'>Only {item.in_stock} left in stock</p>
        <div className="specifications flex flex-col gap-y-4">
        <p><b>Color</b>{item.item_color}</p>
        <p><b>Description</b>{item.item_description}</p>
          <p><b>Brand: </b> {item.brand}</p>
          <p><b>Model: </b> {item.model}</p>
          <p className='flex items-center gap-x-2'><b>Quantity</b>: <QuantityInput /></p>
        </div>
     </div>
    <span className='font-bold text-right'>Kshs. {item.item_price?.toFixed(2)}</span>
  </div>
}