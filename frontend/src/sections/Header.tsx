import "@styles/Header.scss";
// import BrandLogo from "@assets/xiaomi-kenya.jpeg"
import { Button } from "@shadcn-ui/button"
import { Link } from "react-router-dom";
import { useState } from "react";


function NavBar() {

  const [showMenu, setShowMenu] = useState(false);

  return (
    <nav id="NavBar" className="flex h-16 items-center justify-between px-4  bg-gradient-to-r from-[#948A30] via-[#3E9161] to-[#707E3E]">
      <Link to="/" className="no-underline">
        <img src={""} alt="RingsTech" className="h-16 sm:h-16 mr-8 cursor-pointer" />
      </Link>

      <button onClick={() => setShowMenu(!showMenu)} className="sm:hidden">
        {showMenu ? (
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
          </svg>
        ) : (
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 5.25h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5" />
          </svg>
        )}
      </button>

      <ul className={`navs flex-col sm:flex sm:flex-row gap-x-8 items-center ${showMenu ? 'block' : 'hidden'}`}>
        <li className="nav_item mb-0 cursor-pointer text-[#C5C6C7]">
          <Link to="/shop">SHOP</Link>
        </li>
        <li className="nav_item mb-0 text-[#C5C6C7]"><Link to="/shop">SMARTPHONES</Link></li>
        <li className="nav_item mb-0 text-[#C5C6C7]"><Link to="/shop">ACCESSORIES</Link></li>
        <li className="nav_item mb-0 text-[#C5C6C7]"><Link to="/shop">COVERS & PROTECTORS</Link></li>
        <li className="nav_item mb-0 text-[#C5C6C7]"><Link to="/repairs">REPAIRS</Link></li>
        <li className="nav_item mb-0 text-[#C5C6C7]"><Link to="/shop">LIFESTYLE</Link></li>
        <li className="nav_item mb-0 text-[#C5C6C7]">
          <Link to="/trackorder">
            <Button className="flex gap-x-2">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z" />
              </svg>
              <span>TRACK ORDER</span>
            </Button>
          </Link>
        </li>
        <li className="inline-flex gap-x-8 items-center mb-0">
          <button>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="#C5C6C7" className="w-6 h-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
            </svg>
          </button>
          <Link to="/cart">
            <button className="">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="#C5C6C7" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z" />
              </svg>
            </button>
          </Link>
          <span className="text-[#C5C6C7]">0/KSH 0.00</span>
        </li>
        <li className="nav_item inline-flex gap-x-2 mb-0 cursor-pointer text-[#C5C6C7]">
          <Link to="/signin" className="text-sm">
            <Button >SIGNIN</Button>
          </Link>
          <Link to="/signup" className="text-sm">
            <Button >SIGNUP</Button>
          </Link>
        </li>
      </ul>
    </nav>
  );
}

export default function Header() {


  return (
    <div id="Header" className="sticky top-0 bg-[#027353]" style={{zIndex: 1}}>

      <div className="flex items-center h-12 px-2  border-b-[1px] border-[rgba(255,255,254,0.2)]">
        <ul className="flex items-center gap-x-4">
          <li className="nav_item mb-0 cursor-pointer
          text-[#C5C6C7] pr-4 border-r-[1px]">
            <Link to="tel:0768676944" className="flex gap-x-2 no-underline" style={{ textDecoration: 'none' }}>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="#ff7701" className="size-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z" />
              </svg>
              <span>0768676944</span>
            </Link>
          </li>
          <li className="nav_item inline-flex gap-x-2 mb-0 cursor-pointer text-[#C5C6C7]">
            <Link to="mailto:info@ringstech.com" className="flex gap-x-2" style={{ textDecoration: 'none' }}>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="#ff7701" className="size-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75" />
              </svg>
              <span>info@ringstech.com</span>
            </Link>
          </li>
        </ul>
      </div>

      <NavBar />
    </div>);
}