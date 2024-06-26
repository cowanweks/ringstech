import { useState } from 'react'
import { Button } from '@shadcn-ui/button'
import { HiPlus as Addicon, HiMinus as MinusIcon } from 'react-icons/hi2'
import { ICartItem } from '@defines/index'
import { API_URL } from '@utils/index'
import { formatPrice } from "@utils/index"



export default function CartItem({ item }: { item: ICartItem }) {

  const [quantity, setQuantity] = useState(1)

  // useEffect(() => {
  //   axios
  //     .get(`${API_URL}/orders/`)
  //     .then((res) => {
  //       if (Array.isArray(res.data)) {
  //         // console.log(res.data)
  //       } else {
  //         console.error('Fetched data is not an array:', res.data);
  //       }
  //     })
  //     .catch((error) => console.log(error));
  // }, []);

  return <div id='CartItem' className="grid grid-cols-1 gap-y-6 md:grid-cols-2  rounded-[4px] bg-white py-8 px-4 ">
    <div className="max-h-[56.25vw] lg:col-span-1">
      <img className='' src={`${API_URL}/images/?id=${item.product_image}`} alt="" />
    </div>
    <div className="description flex flex-col gap-y-2 px-8">
      <h2 className='text-black'>{item.product_name}</h2>
      <p className='text-red-500'>Only {item.in_stock} items left in stock</p>
      <div className="specifications flex flex-col gap-y-4">
        <p><b>Color: </b>{item.color}</p>
        <p><b>Brand: </b> {item.brand}</p>
        <p><b>Model: </b> {item.model}</p>
        <p className='flex items-center gap-x-2'><b>Quantity</b>:
          <span className='flex gap-x-2'>
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
        </p>
      </div>
    </div>
    <div className='font-bold text-right col-span-2 text-gray-700'>{formatPrice(item.product_unit_price)}</div>
  </div>
}