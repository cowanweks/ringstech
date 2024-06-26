import { type ClassValue, clsx } from "clsx";
import Cookies from "js-cookie";
import { twMerge } from "tailwind-merge";



let API_URL: string;

// API_URL = 'http://127.0.0.1:3000/ringstech/api/v1'

API_URL = 'https://samsungrepair-backend-35d7356462b8.herokuapp.com/ringstech/api/v1'


function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
};

export { cn, API_URL }

export const formatPrice = (price: number) => {
  return new Intl.NumberFormat('en-KE', {
    style: 'currency',
    currency: 'KES',
  }).format(price);
};


export async function createCart() {

  const cart_id = Cookies.get("cart_id");

  if (Cookies.get("cart_id") != undefined) {

          fetch(`${API_URL}/check_cart?cart_id=${cart_id}`,{ method: "GET"})
          .then(res=> res.json()).catch(error => {

              fetch(`${API_URL}/create_cart`, { method: "GET"}).then(res.json()).then(res=>{

                  Cookies.set("cart_id", res.cart_id)

              }).catch(error => {

                  throw new Error(`HTTP error! status: ${response.status} - ${response.body}`);
               })
          })

    }else {

    fetch(`${API_URL}/create_cart`, { method: "GET"}).catch(error => {

      throw new Error(`HTTP error! status: ${response.status} - ${response.body}`);
    })

    const data = await response.json()

    Cookies.set("cart_id", data.cart_id)

    }
}
