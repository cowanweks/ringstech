import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";


export const API_URL = 'http://127.0.0.1:3000/ringstech/api/v1'


export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
};
