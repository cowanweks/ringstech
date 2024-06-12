import "@styles/Accessories.scss"
import ItemCard from "@components/itemcard/ItemCard"
import Image1 from "@assets/accessories/africa-en-silicone-cover-with-s-pen-galaxy-s21-ultra-5g-ef-pg99ptbegww-384115466.avif"
import { NavLink } from "react-router-dom"

export default function Accessories() {


	return (
		<section id="Accessories">
			<div className="flex justify-between">
				<h1 className="font-bold text-lg">ACCESSORIES</h1>

				<ul className="flex font-medium gap-x-6">
					<li className="text-black cursor-pointer">
						<a href="">ALL ACCESSORIES</a>
					</li>
					<li className="cursor-pointer"><a href="">GEARS & DEVICES</a></li>
					<li className="cursor-pointer"><a href="">AUDIO</a></li>
					<li className="cursor-pointer"><a href="">CAMERA & VISUAL</a></li>
					<li className="cursor-pointer"><a href="">POWERBANK & CHARGING</a></li>
				</ul>
			</div>

			<div className="h-[80%] flex justify-center">
				<ItemCard title="Galaxy S21 Ultra 5G Silicone Cover with S Pen" price={5000.05} image={Image1} description="his is a brief description of the product. It highlights the main features and benefits." />
				<ItemCard title="Galaxy S21 Ultra 5G Silicone Cover with S Pen" price={5000.05} image={Image1} description="his is a brief description of the product. It highlights the main features and benefits." />
				<ItemCard title="Galaxy S21 Ultra 5G Silicone Cover with S Pen" price={5000.05} image={Image1} description="his is a brief description of the product. It highlights the main features and benefits." />
				<ItemCard title="Galaxy S21 Ultra 5G Silicone Cover with S Pen" price={5000.05} image={Image1} description="his is a brief description of the product. It highlights the main features and benefits." />
			</div>
			<div className="flex items-center justify-center">
				<NavLink to="/shop" className="h-14 leading-[12px] p-4 text-xl rounded-none bg-white text-black border-2 border-[#ff7701]
				hover:bg-white hover:border-blue-500">LOAD MORE PRODUCTS</NavLink>
			</div>

		</section>
	)
}