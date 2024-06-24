import Map from '@sections/Map'
import { Header } from '@sections/Header'
import Footer from '@sections/Footer'
import { Button } from '@shadcn-ui/button'
import CartItem from '@components/cartitem/CartItem'
import { useEffect, useState } from 'react'
import { API_URL, formatPrice } from '@utils/index'
import Cookies from 'js-cookie';
import { Input } from '@shadcn-ui/input'
import { Label } from '@shadcn-ui/label'
import { ICartItem } from '@defines/index'


function getCartTotal(cart: Array<ICartItem>) {

  let cartTotal = 0.0;

  cart.map(item => {
    cartTotal += item.quantity * item.product_unit_price;
  })

  // console.log(cart)
  // console.log(cartTotal)

  return cartTotal;
}


export default function Cart() {

  const cartId = Cookies.get("cart_id")

  const [subTotal, setSubTotal] = useState(0.0)
  const [cartItems, setCartItems] = useState([])
  const [isCartEmpty, setIsCartEmpty] = useState(true);

  const [form, setForm] = useState({
    first_name: '',
    middle_name: '',
    last_name: '',
    street_address: '',
    city: '',
    zip_code: '',
    state_or_province: '',
    email_address: '',
    phone_number: '',
    mpesa_number: ''
  });

  const handleChange = (e: { target: { name: any; value: any; }; }) => {
    const { name, value } = e.target;
    setForm({
      ...form,
      [name]: value
    });
  };

  const handleSubmit = (e: { preventDefault: () => void; }) => {
    e.preventDefault();

    var data = new FormData();
    data.append("first_name", form.first_name);
    data.append("middle_name", form.middle_name);
    data.append("last_name", form.last_name);
    data.append("street_address", form.street_address);
    data.append("city", form.city);
    data.append("zip_code", form.zip_code);
    data.append("state_or_province", form.state_or_province);
    data.append("email_address", form.email_address);
    data.append("phone_number", form.phone_number);
    data.append("mpesa_number", form.mpesa_number);


    fetch(`${API_URL}/cart/checkout?cart_id=${cartId}`, {
      method: "POST",
      body: data
    })
      .then((res) => res.json())
      .then(data => {

        console.log(data)
      })
      .catch(err => console.error(err))

  };

  useEffect(() => {
    setIsCartEmpty(cartItems.length === 0);
  }, [cartItems]);


  useEffect(() => {
    fetch(`${API_URL}/cart?cart_id=${cartId}`, {
      method: "GET",
    })
      .then((res) => res.json())
      .then(data => {
        setCartItems(data)
        setSubTotal(getCartTotal(data))
      })
      .catch(err => console.error(err))
  })


  return (
    <div id='Cart' className="">
      <Header />
      <div className="h-72 mt-10 bg-gradient-to-r from-[#948A30] via-[#3E9161] to-[#707E3E]">
      </div>
      <div className="grid grid-cols-1 md:grid-cols-5 min-h-[100dvh] px-16 py-8 gap-x-6">
        <div className="grid flex-col gap-2 col-span-4">
          {Array.isArray(cartItems) ? cartItems!.map((item, index) => <CartItem key={index} item={item} />) :
            <div className='h-24 leading-10 text-gray-700'>No items in cart</div>}
        </div>

        <div className="flex flex-col gap-8">

          <form onSubmit={handleSubmit} className='flex flex-col gap-y-6'>
            <div className="flex flex-col gap-4 min-w-32 max-h32 p-10 items-center justify-center rounded
            bg-gray-100">
              <h2 className='text-black text-nowrap'>
                Subtotal ({cartItems.length} item{cartItems.length !== 1 ? 's' : ''}):
                <span className='font-bold'>{formatPrice(subTotal)}</span></h2>
              <Button type='submit' className='w-full hover:scale-105' disabled={isCartEmpty}>Checkout</Button>
            </div>

            <h2>Shipping Information</h2>
            <div className="flex flex-col space-y-2">
              <Label htmlFor="first_name" className='py-2'>First Name</Label>
              <Input id="first_name" name="first_name" value={form.first_name} onChange={handleChange} />
            </div>
            <div className="flex flex-col space-y-2">
              <Label htmlFor="middle_name" className='py-2'>Middle Name</Label>
              <Input id="middle_name" name="middle_name" value={form.middle_name} onChange={handleChange} />
            </div>
            <div className="flex flex-col space-y-2">
              <Label htmlFor="last_name" className='py-2'>Last Name</Label>
              <Input id="last_name" name="last_name" value={form.last_name} onChange={handleChange} />
            </div>
            <div className="flex flex-col space-y-2">
              <Label htmlFor="street_address" className='py-2'>Street Address</Label>
              <Input id="street_address" name="street_address" value={form.street_address} onChange={handleChange} />
            </div>
            <div className="flex flex-col space-y-2">
              <Label htmlFor="state_or_province" className='py-2'>State or Province</Label>
              <Input id="state_or_province" name="state_or_province" value={form.state_or_province} onChange={handleChange} />
            </div>
            <div className="flex flex-col space-y-2">
              <Label htmlFor="city" className='py-2'>City</Label>
              <Input id="city" name="city" value={form.city} onChange={handleChange} />
            </div>
            <div className="flex flex-col space-y-2">
              <Label htmlFor="zip_code" className='py-2'>Zip Code</Label>
              <Input id="zip_code" name="zip_code" value={form.zip_code} onChange={handleChange} />
            </div>
            <div className="flex flex-col space-y-2">
              <Label htmlFor="email_address" className='py-2'>Email Address</Label>
              <Input id="email_address" name="email_address" value={form.email_address} onChange={handleChange} />
            </div>
            <div className="flex flex-col space-y-2">
              <Label htmlFor="phone_number" className='py-2'>Phone Number</Label>
              <Input id="phone_number" name="phone_number" value={form.phone_number} onChange={handleChange} />
            </div>
            <div className="flex flex-col space-y-2">
              <Label htmlFor="mpesa_number" className='py-2'>Mpesa Number</Label>
              <Input id="mpesa_number" name="mpesa_number" placeholder='Example, 25412345678' value={form.mpesa_number} onChange={handleChange} />
            </div>
          </form>

        </div>
      </div>
      <div className="h-72 bg-gradient-to-r from-[#948A30] via-[#3E9161] to-[#707E3E]">
      </div>
      <Map />
      <Footer />
    </div>
  )
}