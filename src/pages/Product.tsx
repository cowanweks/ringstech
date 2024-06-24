import Footer from "@sections/Footer";
import { Header } from "@sections/Header";
import Map from "@sections/Map";
import { FaCartPlus as AddCartIcon } from "react-icons/fa6"
import { HiOutlineInformationCircle as WarnIcon, HiOutlineStar as RateIcon } from "react-icons/hi2"
import { Button } from "@shadcn-ui/button";
import { useLocation } from "react-router-dom";
import { API_URL, formatPrice } from "@utils/index";
import Cookies from 'js-cookie';

async function addToCart(product_id: string) {

	const cart_id = Cookies.get("cart_id")

	fetch(`${API_URL}/cart?product_id=${product_id}&quantity=1&cart_id=${cart_id}&color=black`, {
		method: "POST"
	}).then(res => res.json())
		.then(msg => console.log(msg))
		.catch(err => console.error(err))

}


function ProductInformation() {

	const { state } = useLocation();

	return <section className="grid grid-cols-1 md:grid-cols-3 min-h-dvh bg-white">
		<img src={`${API_URL}/images/?id=${state.product_image}`} alt="" className="" />
		<div className="flex flex-col gap-y-2 px-4 py-10">
			<p id="product_description" className="min-h-fit h-8">{state.product_name}</p>
			<p className="py-2">Brand: <span>{state.brand}</span></p>
			<p className="py-2">Model: <span>{state.model}</span></p>
			<p className="py-2">{formatPrice(state.product_unit_price)}</p>
			<p className="flex items-center gap-x-2 py-2 text-red-500">
				{state.in_stock < 10 && <>
					<WarnIcon size={16} className="" />
					<span>3 units left"</span>
				</>}
			</p>
			<div id="rate_card" className="flex gap-x-2 py-4">
				<RateIcon className="fill-orange-400 stroke-none" size={24} />
				<RateIcon className="fill-orange-400 stroke-none" size={24} />
				<RateIcon className="fill-orange-400 stroke-none" size={24} />
				<RateIcon className="fill-orange-400 stroke-none" size={24} />
				<RateIcon className="fill-gray-300 stroke-none" size={24} />
			</div>
			<div className="available_colors flex gap-x-2 py-4">
				{/*{state.available_colors.map((color: string, index: number) => (
					<button key={index} className="inline-block cursor-pointer h-12 w-12 rounded-full
				 hover:border-gray-400 hover:border-2 hover:scale-105" style={{ background: color }}>

					</button>
				))}*/}
			</div>
			<Button onClick={() => addToCart(state.product_id)} className="flex items-center gap-x-4 h-12 w-full bg-[#ff7701] hover:bg-[#ff7701] hover:opacity-80">
				<AddCartIcon size={16} />
				<span>ADD TO CART</span>
			</Button>

			<div className="product_details flex flex-col gap-y-4 py-4">
				<h2 className="pb-4 border-b-2">Product Details</h2>
				{state.product_category != "phone" ? <>
					{state.ram ? <p className="flex gap-x-2 text-gray-500">RAM: <span className="text-red-500">{state.ram}</span>{state.rom ? <>ROM : <span className="text-red-500">{state.rom}</span></> : ""}</p> : ""}
					{state.display ? <div className="flex gap-x-2 text-gray-500">Display: <span className="text-red-500">{state.display}</span></div> : ""}
					{state.battery ? <div className="flex gap-x-2 text-gray-500">Battery: <span className="text-red-500">{state.battery}</span></div> : ""}
					{state.cameras ? <div className="flex gap-x-2 text-gray-500">Camera: <span className="text-red-500">{state.cameras}</span></div> : ""}
				</> : ""}
			</div>
		</div>
	</section>

}


export default function ProductPage() {


	return <div className="bg-gray-200">
		<Header />
		<ProductInformation />
		<Map />
		<Footer />
	</div>
}