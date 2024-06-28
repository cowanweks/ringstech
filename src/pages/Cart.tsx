import { useEffect, useState, SetStateAction } from "react";
import Map from "@sections/Map";
import { Header } from "@sections/Header";
import Footer from "@sections/Footer";
import { Button } from "@shadcn-ui/button";
import CartItem from "@components/cartitem/CartItem";
import { API_URL, formatPrice } from "@utils/index";
import Cookies from "js-cookie";
import { Input } from "@shadcn-ui/input";
import { Label } from "@shadcn-ui/label";
import { ICartItem } from "@defines/index";


function getCartTotal(cart: Array<ICartItem>) {
  return cart.reduce((total, item) => total + item.quantity * item.product_unit_price, 0);
}

export default function Cart() {
  const [subTotal, setSubTotal] = useState(0.0);
  const [cartId, setCartId] = useState<SetStateAction<undefined | string>>(undefined);
  const [cartItems, setCartItems] = useState<ICartItem[]>([]);
  const [waitTransaction, setWaitTransaction] = useState(false);

  const [form, setForm] = useState({
    first_name: "",
    middle_name: "",
    last_name: "",
    street_address: "",
    city: "",
    zip_code: "",
    state_or_province: "",
    email_address: "",
    phone_number: "",
    mpesa_number: "",
  });

  useEffect(() => {
    const cart_id = Cookies.get("cart_id");
    if (cart_id) {
      setCartId(cart_id);
      console.log(cartId)
    }
  }, []);

  useEffect(() => {
    if (cartId) {
      const fetchCartData = async () => {
        try {
          const response = await fetch(`${API_URL}/cart/${cartId}`, {
            method: "GET",
          });

          if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
          }

          const data = await response.json();
          setCartItems(data);
        } catch (error) {
          console.error("Error fetching cart data:", error);
        }
      };

      fetchCartData();
    }
  }, [cartId]);

  useEffect(() => {
    const subTotal = getCartTotal(cartItems);
    setSubTotal(subTotal);
  }, [cartItems]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setForm((prevForm) => ({
      ...prevForm,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const headers = new Headers();
    const data = new FormData();

    Object.entries(form).forEach(([key, value]) => {
      data.append(key, value);
    });

    const response = await fetch(`${API_URL}/cart/checkout/${cartId}`, {
      method: "POST",
      headers: headers,
      body: data,
    });

    if (!response.ok) {
      throw new Error("Error " + response.body);
    }

    setWaitTransaction(true);
  };

  return (
    <div id="Cart" className="bg-gray-50 min-h-screen flex flex-col">
      <Header />
      <div className="grid grid-cols-1 lg:grid-cols-3 min-h-[100vh] px-4 lg:px-16 py-8 lg:gap-x-2">
        <div className="col-span-2 flex flex-col gap-y-2">
          {Array.isArray(cartItems) && cartItems.length > 0 ? (
            cartItems.map((item, index) => <CartItem key={index} item={item} />)
          ) : (
            <div className="h-24 leading-10 text-gray-700">No items in cart</div>
          )}
        </div>
        <div className="flex flex-col gap-8">
          <form onSubmit={handleSubmit} className="flex flex-col gap-y-6">
            <div className="flex flex-col gap-4 p-6 items-center justify-center rounded-lg bg-white shadow-md">
              <h2 className="text-black">
                Subtotal ({cartItems.length} item{cartItems.length !== 1 ? "s" : ""}):{" "}
                <span className="font-bold">{formatPrice(subTotal)}</span>
              </h2>
              <Button
                disabled={waitTransaction}
                type="submit"
                className="w-full hover:scale-105 transition-transform"
              >
                Checkout
              </Button>
            </div>

            <h2 className="text-lg font-semibold">Shipping Information</h2>
            {Object.keys(form).map((key) => (
              <div key={key} className="flex flex-col space-y-2">
                <Label htmlFor={key} className="py-2">
                  {key.replace("_", " ")}
                </Label>
                <Input
                  id={key}
                  name={key}
                  value={form[key as keyof typeof form]}
                  onChange={handleChange}
                />
              </div>
            ))}
          </form>
        </div>
      </div>
      <Map />
      <Footer />
    </div>
  );
}
