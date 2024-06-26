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

  if (Cookies.get("cart_id") == undefined) {

    const response = await fetch(`${API_URL}/create_cart`, {
      method: "GET"
    })

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status} - ${response.body}`);
    }

    const data = await response.json()

    Cookies.set("cart_id", data.cart_id)

    return data.cart_id;

  }


  return Cookies.get("cart_id");
}
