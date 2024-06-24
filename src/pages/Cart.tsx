import Map from '@sections/Map'
import { Header } from '@sections/Header'
import Footer from '@sections/Footer'
import { Button } from '@shadcn-ui/button'
import CartItem from '@components/cartitem/CartItem'
import { useEffect, useState } from 'react'
import { API_URL } from '@utils/index'
import Cookies from 'js-cookie';
import { Input } from '@shadcn-ui/input'
import { Label } from '@shadcn-ui/label'


export default function Cart() {

  const subTotal = 0.0
  // const [subTotal, setSubTotal] = useState(0.0)
  const [cartItems, setCartItems] = useState([])
  const [cartId, setCartId] = useState('');
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

    fetch(`${API_URL}/cart/checkout?cart_id=${cartId}`, {
      method: "POST",
      body: JSON.stringify(form)
    })
      .then((res) => res.json())
      .then(data => {
        setCartItems(data)
        console.log(data)
      })
      .catch(err => console.error(err))

  };

  useEffect(() => {
    setIsCartEmpty(cartItems.length === 0);
  }, [cartItems]);


  useEffect(() => {
    const cart_id = Cookies.get("cart_id");
    setCartId(cart_id!)

  }, [])

  useEffect(() => {
    // fetch(`${API_URL}/cart?cart_id=${cartId}`, {
    //   method: "GET",
    // })
    //   .then((res) => res.json())
    //   .then(data => {
    //     setCartItems(data)
    //     console.log(data)
    //   })
    //   .catch(err => console.error(err))
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
              <h2 className='text-black text-nowrap'>Subtotal ({cartItems.length} item{cartItems.length !== 1 ? 's' : ''}): <span className='font-bold'>${subTotal.toFixed(2)}</span></h2>
              <Button type='submit' className='w-full hover:scale-105' disabled={isCartEmpty}>Checkout</Button>
            </div>

            <h2>Shipping Information</h2>
            <div className="flex flex-col space-y-2">
              <Label htmlFor="firstName" className='py-2'>First Name</Label>
              <Input id="firstName" name="firstName" value={form.first_name} onChange={handleChange} />
            </div>
            <div className="flex flex-col space-y-2">
              <Label htmlFor="middleName" className='py-2'>Middle Name</Label>
              <Input id="middleName" name="middleName" value={form.middle_name} onChange={handleChange} />
            </div>
            <div className="flex flex-col space-y-2">
              <Label htmlFor="lastName" className='py-2'>Last Name</Label>
              <Input id="lastName" name="lastName" value={form.last_name} onChange={handleChange} />
            </div>
            <div className="flex flex-col space-y-2">
              <Label htmlFor="streetAddress" className='py-2'>Street Address</Label>
              <Input id="streetAddress" name="streetAddress" value={form.street_address} onChange={handleChange} />
            </div>
            <div className="flex flex-col space-y-2">
              <Label htmlFor="stateOrProvince" className='py-2'>State or Province</Label>
              <Input id="stateOrProvince" name="stateOrProvince" value={form.state_or_province} onChange={handleChange} />
            </div>
            <div className="flex flex-col space-y-2">
              <Label htmlFor="city" className='py-2'>City</Label>
              <Input id="city" name="city" value={form.city} onChange={handleChange} />
            </div>
            <div className="flex flex-col space-y-2">
              <Label htmlFor="zipCode" className='py-2'>Zip Code</Label>
              <Input id="zipCode" name="zipCode" value={form.zip_code} onChange={handleChange} />
            </div>
            <div className="flex flex-col space-y-2">
              <Label htmlFor="emailAddress" className='py-2'>Email Address</Label>
              <Input id="emailAddress" name="emailAddress" value={form.email_address} onChange={handleChange} />
            </div>
            <div className="flex flex-col space-y-2">
              <Label htmlFor="phoneNumber" className='py-2'>Phone Number</Label>
              <Input id="phoneNumber" name="phoneNumber" value={form.phone_number} onChange={handleChange} />
            </div>
            <div className="flex flex-col space-y-2">
              <Label htmlFor="mpesaNumber" className='py-2'>Mpesa Number</Label>
              <Input id="mpesaNumber" name="mpesaNumber" placeholder='Example, 25412345678' value={form.mpesa_number} onChange={handleChange} />
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