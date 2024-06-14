import "@styles/LifeStyle.scss"
import ItemCard from "@components/itemcard/ItemCard"
import { NavLink } from "react-router-dom"
// import { Button } from "@shadcn-ui/button"

import Image1 from "@assets/lifestyle/LOB1_Bundle-DT.avif"
import Image2 from "@assets/lifestyle/LOB1_Bundle-DT.avif"
import Image3 from "@assets/lifestyle/LOB1_Bundle-DT.avif"
import Image4 from "@assets/lifestyle/LOB1_Bundle-DT.avif"
import Image5 from "@assets/lifestyle/LOB1_Bundle-DT.avif"
import Image6 from "@assets/lifestyle/LOB1_Bundle-DT.avif"
import Image7 from "@assets/lifestyle/LOB1_Bundle-DT.avif"


const items = [
	{
		title: "Galaxy S23 Ultra",
		price: 5000.05,
		image: Image1,
		description: "his is a brief description of the product. It highlights the main features and benefits."
	},
	{
		title: "Galaxy S23 Ultra",
		price: 5000.05,
		image: Image2,
		description: "his is a brief description of the product. It highlights the main features and benefits."
	},
	{
		title: "Galaxy S23 Ultra",
		price: 5000.05,
		image: Image3,
		description: "his is a brief description of the product. It highlights the main features and benefits."
	},
	{
		title: "Galaxy S23 Ultra",
		price: 5000.05,
		image: Image4,
		description: "his is a brief description of the product. It highlights the main features and benefits."
	},
	{
		title: "Galaxy S23 Ultra",
		price: 5000.05,
		image: Image5,
		description: "his is a brief description of the product. It highlights the main features and benefits."
	},
	{
		title: "Galaxy S23 Ultra",
		price: 5000.05,
		image: Image6,
		description: "his is a brief description of the product. It highlights the main features and benefits."
	},
	{
		title: "Galaxy S23 Ultra",
		price: 5000.05,
		image: Image7,
		description: "his is a brief description of the product. It highlights the main features and benefits."
	},
]

export default function LifeStyle() {


	return (
		<section id="LifeStyle">
			<div className="flex justify-between">
				<h1 className="font-bold text-lg">LIFESTYLE</h1>

				<ul className="flex font-medium gap-x-6">
					<li className="text-[#ff7701] cursor-pointer hover:text-[#ff7701]">
						<NavLink to="">ALL LIFESTYLE</NavLink>
					</li>
					<li className="cursor-pointer hover:text-[#ff7701]"><NavLink to="">GEARS & DEVICES</NavLink></li>
					<li className="cursor-pointer hover:text-[#ff7701]"><NavLink to="">AUDIO</NavLink></li>
					<li className="cursor-pointer hover:text-[#ff7701]"><NavLink to="">CAMERA & VISUAL</NavLink></li>
					<li className="cursor-pointer hover:text-[#ff7701]"><NavLink to="">POWERBANK & CHARGING</NavLink></li>
				</ul>
			</div>

			<div className="grid grid-cols-4">
				{items.map((item) => <ItemCard title={item.title} price={item.price} image={item.image} description={item.description} />)}

			</div>
			<div className="flex items-center justify-center">
				<NavLink to="/shop" className="h-14 leading-[12px] p-4 text-xl rounded-none bg-white text-black border-2 border-[#ff7701]
				hover:bg-white hover:border-blue-500">
					LOAD MORE PRODUCTS
				</NavLink>
			</div>

		</section>
	)
}