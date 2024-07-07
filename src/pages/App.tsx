import Map from "@sections/Map";
import Hero from "@sections/Hero";
import { Header } from "@sections/Header";
import Footer from "@sections/Footer";
import Mobiles from "@sections/Mobile";
import LifeStyle from "@sections/LifeStyle";
import Accessories from "@sections/Accessories";
import CoversProtectors from "@sections/CoversProtectors";
import Repairs from "@sections/Repairs";
import Spares from "@sections/Spares";
import BrandLogo from "@public/logo.jpg";
import { NavLink } from "react-router-dom";
import { Input } from "@shadcn-ui/input";
import {
  HiOutlineMagnifyingGlass as SearchIcon,
  HiOutlineChevronLeft as PreviousIcon,
  HiOutlineChevronRight as NextIcon,
} from "react-icons/hi2";
import { Button } from "@shadcn-ui/button";

export default function App() {
  return (
    <div className="bg-white">
      <Header />
      <div className="flex items-center gap-x-8 px-4 h-44">
        <NavLink to="/">
          <img src={BrandLogo} alt="Samsung Store" className="w-32" />
        </NavLink>

        <div className="flex items-center relative w-full">
          <button className="h-full w-12 absolute bg-transparent cursor-default">
            <SearchIcon size={16} className="text-gray-500 mx-auto" />
          </button>
          <Input
            placeholder="Search your dream item"
            className="h-14 px-12 text-lg rounded-none"
          />
        </div>
        <Button className="h-14 w-64 rounded-none bg-blue-800">Search</Button>
      </div>
      <Hero />
      <div className="flex flex-col items-center md:flex-row md:justify-center gap-x-10 px-4 py-16">
        <NavLink
          to="/shop?category=phone"
          className="flex flex-col items-center w-72 hover:scale-105"
        >
          <div className="h-64 w-64 rounded-full">
            <img
              src="/phones/a55.webp"
              alt=""
              className="h-full rounded-full bg-gray-100 object-contain"
            />
          </div>
          <span className="py-4 text-[#ff7701]"> SMARTPHONES </span>
        </NavLink>
        <NavLink
          to="/shop?category=accessory"
          className="flex flex-col items-center w-72 hover:scale-105"
        >
          <div className="h-64 w-64 rounded-full">
            <img
              src="/phones/a55.webp"
              alt=""
              className="h-full rounded-full bg-gray-100 object-contain"
            />
          </div>
          <span className="py-4 text-[#ff7701]"> ACCESSORIES </span>
        </NavLink>
        <NavLink
          to="/shop?category=lifestyle"
          className="flex flex-col items-center w-72 hover:scale-105"
        >
          <div className="h-64 w-64 rounded-full">
            <img
              src="/phones/a55.webp"
              alt=""
              className="h-full rounded-full bg-gray-100 object-contain"
            />
          </div>
          <span className="py-4 text-[#ff7701]"> LIFESTYLE </span>
        </NavLink>
        <NavLink
          to="/shop?category=covers_protectors"
          className="flex flex-col items-center w-72 hover:scale-105"
        >
          <div className="h-64 w-64 rounded-full">
            <img
              src="/phones/a55.webp"
              alt=""
              className="h-full rounded-full bg-gray-100 object-contain"
            />
          </div>
          <span className="py-4 text-[#ff7701]"> COVERS and PROTECTORS </span>
        </NavLink>
      </div>
      <div className="h-96 relative">
        <h2 id="Recently_viewed" className="px-12 font-semibold">
          RECENTLY VIEWED
        </h2>
        <div className="h-full w-full px-4">
          <button
            className="
            flex justify-center items-center
            absolute h-10 w-10 left-12 top-[50%] bg-gray-200 text-center
            hover:bg-blue-600 hover:text-white
            transition-all ease-in
            rounded
            "
          >
            <PreviousIcon size={16} />
          </button>
          <button
            className="
            flex justify-center items-center
            absolute h-10 w-10 right-12 top-[50%] bg-gray-200 text-center
            hover:bg-blue-600 hover:text-white
            transition-all ease-in
            rounded
            "
          >
            <NextIcon size={16} />
          </button>
        </div>
      </div>
      <Mobiles />
      <Accessories />
      <CoversProtectors />
      <LifeStyle />
      <Spares />
      <Repairs />
      <Map />
      <Footer />
    </div>
  );
}
