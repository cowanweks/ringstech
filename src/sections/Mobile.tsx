import "@styles/Mobile.scss"
import ItemCard from "@components/itemcard/ItemCard"
import Image1 from "@assets/phones/nonshop_violet.webp"
import Image2 from "@assets/phones/nonshop_gray.webp"
import { NavLink } from "react-router-dom"
export default function Mobiles() {


	return (
		<section id="Mobiles" className="">
			<div className="flex justify-between">
				<h1 className="font-bold text-lg">MOBILES</h1>

				<ul className="flex font-medium  gap-x-6">
					<li className="text-black my-0 leading-10">All PHONES</li>
					<li className="my-0 leading-10"><a href="">MI PHONES</a></li>
					<li className="my-0 leading-10"><a href="">POCO PHONES</a></li>
					<li className="my-0 leading-10"><a href="">REDMI PHONES</a></li>
					<li className="my-0 leading-10"><a href="">TOP SELLERS</a></li>
				</ul>
			</div>

			<div className="h-[80%] flex justify-center">
				<ItemCard title="Galaxy S23 Ultra" price={5000.05} image={Image1} description="his is a brief description of the product. It highlights the main features and benefits." />
				<ItemCard title="Galaxy S24 Ultra" price={5000.05} image={Image2} description="his is a brief description of the product. It highlights the main features and benefits." />
				<ItemCard title="Galaxy S23 Ultra" price={5000.05} image={Image1} description="his is a brief description of the product. It highlights the main features and benefits." />
				<ItemCard title="Galaxy S24 Ultra" price={5000.05} image={Image2} description="his is a brief description of the product. It highlights the main features and benefits." />
			</div>
			<div className="flex items-center justify-center">
				<NavLink to="/shop" className="h-14 leading-[12px] p-4 text-xl rounded-none bg-white text-black border-2 border-[#ff7701]
				hover:bg-white hover:border-blue-500">LOAD MORE PRODUCTS</NavLink>
			</div>
		</section>
	)
}