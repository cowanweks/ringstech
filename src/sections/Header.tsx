import "@styles/Header.scss";
import BrandLogo from "@assets/xiaomi-kenya.jpeg"
import { Button } from "@shadcn-ui/button"
import {
  Drawer, DrawerTrigger, DrawerContent, DrawerHeader, DrawerTitle, DrawerDescription
  , DrawerClose, DrawerFooter
} from "@shadcn-ui/drawer"
import { Input } from "@shadcn-ui/input";


function NavBar() {

  return (
    <nav id="NavBar" className="flex items-center justify-between px-4">
      <a href="/"><img src={BrandLogo} alt="" className="h-16 mr-8 cursor-pointer"></img></a>

      <ul className="navs flex gap-x-8 items-center">
        <li className="nav_item inline mb-0 cursor-pointer text-black"><a href="/shop">SHOP</a></li>
        <li className="nav_item inline mb-0 cursor-pointer text-black"><a href="#">SMARTPHONES</a></li>
        <li className="nav_item inline mb-0 cursor-pointer text-black"><a href="#">POWERBANKS</a></li>
        <li className="nav_item inline mb-0 cursor-pointer text-black"><a href="#">ACCESSORIES</a></li>
        <li className="nav_item inline mb-0 cursor-pointer text-black"><a href="#">COVERS & PROTECTORS</a></li>
        <li className="inline-flex gap-x-6 items-center mb-0">
          <Drawer>
            <DrawerTrigger>
              <button><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="#000" className="size-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
              </svg>
              </button>
            </DrawerTrigger>
            <DrawerContent>
              <div className="mx-auto w-full max-w-sm">
                <DrawerHeader>
                  <DrawerTitle>Search</DrawerTitle>
                  <DrawerDescription>Search for a product</DrawerDescription>
                </DrawerHeader>

                <div className="flex w-full max-w-sm items-center space-x-2">
                  <Input type="keyword" placeholder="Enter Search keyword" />
                  <Button type="submit">Search</Button>
                </div>

                <DrawerFooter>
                  <DrawerClose asChild>
                    <Button variant="outline" type="submit">Cancel</Button>
                  </DrawerClose>
                </DrawerFooter>
              </div>
            </DrawerContent>
          </Drawer>
          <a href="/cart">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="#000" className="size-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z" />
            </svg>
          </a>
          <span className="text-black">0/KSH 0.00</span>
        </li>
      </ul>
    </nav>
  );
}

export default function Header() {


  return (
    <div id="Header" className="sticky top-0 bg-white">
      <NavBar />
    </div>);
}