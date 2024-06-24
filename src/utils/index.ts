import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";



let API_URL: string;

API_URL = 'http://127.0.0.1:3000/ringstech/api/v1'
// API_URL = "https://samsungstore-c7ac99ad89a4.herokuapp.com/ringstech/api/v1/"

// API_URL = 'https://samsungrepair-backend-35d7356462b8.herokuapp.com/ringstech/api/v1/'


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
