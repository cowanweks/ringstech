import BrandLogo from "@assets/logo.jpg";
import { Link } from "react-router-dom";
import { useState, } from "react";
import { Button } from "@shadcn-ui/button";
import { HoverCard, HoverCardContent, HoverCardTrigger } from "@shadcn-ui/hover-card"


const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };


  return (
    <nav className="bg-white shadow-md z-10">
      <div className="container mx-auto px-2 h-16 flex justify-between items-center">
        <a href="/home">
          <img src={BrandLogo} alt="Samsung Store" className="h-16" />
        </a>
        <div className="hidden md:flex md:h-auto space-x-6">
          <a href="/#" className="text-gray-600 leading-10 hover:text-[#ff7701] transition ease-in-out hover:scale-105">SMARTPHONES</a>
          <a href="/#" className="text-gray-600 leading-10 hover:text-[#ff7701] transition ease-in-out  hover:scale-105">ACCESSORIES</a>
          <a href="/#" className="text-gray-600 leading-10 hover:text-[#ff7701] transition ease-in-out  hover:scale-105">COVERS</a>
          <HoverCard>
            <HoverCardTrigger asChild>
              <button className="block px-3 py-2 text-base text-gray-600  hover:text-[#ff7701]">
                REPAIRS
              </button>
            </HoverCardTrigger>
            <HoverCardContent className="w-auto flex flex-col gap-y-4 bg-gray-100">
              <div className="flex flex-col">
                <div className="h-10 border-b mb-2">We Offer the following Services</div>
                <div className="h-8 border-b mb-2">1: Screen Replacement</div>
                <div className="h-8 border-b mb-2">2: Battery Replacement</div>
                <div className="h-8 border-b mb-2">3: Camera Repair & Replacement</div>
                <div className="h-8 border-b mb-2">4: Charging Port Repair</div>
                <div className="h-8 border-b mb-2">5: Water Damage Repair</div>
                <div className="h-8 border-b mb-2">6: Software Troubleshooting</div>
                <div className="h-8 border-b mb-2">7: Button Repair (power, volume, home button)</div>
                <div className="h-8">8: Speaker or Microphone Repair</div>
              </div>
            </HoverCardContent>
          </HoverCard>
          <Link to="/track" className="text-gray-600 leading-10 hover:text-[#ff7701] transition ease-in-out  hover:scale-105">
            <Button className="flex gap-x-2">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z" />
              </svg>
              <span className="">TRACK</span>
            </Button>
          </Link>
          <HoverCard>
            <HoverCardTrigger asChild>
              <img width="24" height="24" src="https://img.icons8.com/material-sharp/24/mpesa.png" alt="mpesa" />
            </HoverCardTrigger>
            <HoverCardContent className="w-80 flex flex-col gap-y-4">
              <span className="text-green-400">PayBill No: <span className="text-red-500">247 247</span></span>
              <span className="text-green-400">ACcount No: <span className="text-red-500">353 562</span></span>
            </HoverCardContent>
          </HoverCard>
        </div>
        <div className="md:hidden">
          <button onClick={toggleMenu} className="text-gray-800 focus:outline-none">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16m-7 6h7"}></path>
            </svg>
          </button>
        </div>
      </div>
      <div className={`md:hidden ${isOpen ? 'block' : 'hidden'}`}>
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
          <Link to="shop" className="block px-3 py-2 rounded-md text-base font-medium text-gray-600 hover:text-[#ff7701] hover:bg-gray-100">
            SMARTPHONES
          </Link>
          <Link to="shop" className="block px-3 py-2 rounded-md text-base font-medium text-gray-600 hover:text-[#ff7701] hover:bg-gray-100">
            ACCESSORIES
          </Link>
          <Link to="/shop" className="block px-3 py-2 rounded-md text-base font-medium text-gray-600 hover:text-[#ff7701] hover:bg-gray-100">
            COVERS
          </Link>
          <HoverCard>
            <HoverCardTrigger asChild>
              <button className="block px-3 py-2 w-full text-left rounded-md text-base font-medium text-gray-600 hover:text-[#ff7701] hover:bg-gray-100">
                REPAIRS
              </button>
            </HoverCardTrigger>
            <HoverCardContent className="w-auto flex flex-col gap-y-4 bg-gray-100">
              <div className="h-10 border-b mb-2">We Offer the following Services</div>
              <div className="h-8 border-b mb-2">1: Screen Replacement</div>
              <div className="h-8 border-b mb-2">2: Battery Replacement</div>
              <div className="h-8 border-b mb-2">3: Camera Repair & Replacement</div>
              <div className="h-8 border-b mb-2">4: Charging Port Repair</div>
              <div className="h-8 border-b mb-2">5: Water Damage Repair</div>
              <div className="h-8 border-b mb-2">6: Software Troubleshooting</div>
              <div className="h-8 border-b mb-2">7: Button Repair (power, volume, home button)</div>
              <div className="h-8">8: Speaker or Microphone Repair</div>
            </HoverCardContent>
          </HoverCard>
          <Link to="/track" className="block px-3 py-2 rounded-md text-base font-medium text-gray-600 hover:text-[#ff7701] hover:bg-gray-100">
            TRACK
          </Link>
          <HoverCard>
            <HoverCardTrigger asChild>
              <button className="flex gap-x-4 w-full px-3 py-2 rounded-md text-base font-medium text-gray-600 hover:text-[#ff7701] hover:bg-gray-100">
                <img width="24" height="24" src="https://img.icons8.com/material-sharp/24/mpesa.png" alt="mpesa" />
                <span>PayBill</span>
              </button>
            </HoverCardTrigger>
            <HoverCardContent className="w-80 flex flex-col gap-y-4">
              <span className="text-green-400 font-bold">PayBill No: <span className="text-red-500">247 247</span></span>
              <span className="text-green-400 font-bold">ACcount No: <span className="text-red-500">353 562</span></span>
            </HoverCardContent>
          </HoverCard>
        </div>
      </div>
    </nav>
  );
};

export function Header() {
  return (
    <div id="Header" className="sticky top-0 z-20 bg-gray-100">
      <NavBar />
    </div>
  );
}
