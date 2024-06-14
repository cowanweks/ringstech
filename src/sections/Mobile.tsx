import "@styles/Mobile.scss"
import ItemCard from "@components/itemcard/ItemCard"
import { NavLink } from "react-router-dom"

//
import Image1 from "@assets/phones/image1.jpg"
import Image2 from "@assets/phones/image2.jpg"
import Image3 from "@assets/phones/Image3.jpg"
import Image4 from "@assets/phones/image4.jpg"
import Image5 from "@assets/phones/nonshop_gray.webp"
import Image6 from "@assets/phones/nonshop_violet.webp"
import Image7 from "@assets/phones/nonshop_violet.webp"


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

export default function Mobiles() {

	return (
		<section id="Mobiles" className="">
			<div className="flex justify-between">
				<h1 className="font-bold text-lg">MOBILES</h1>

				<ul className="flex font-medium  gap-x-6">
					<li className="text-[#ff7701] cursor-pointer hover:text-[#ff7701] my-0 leading-10">
						<NavLink to="">All PHONES</NavLink>
					</li>
					<li className="my-0 leading-10 cursor-pointer hover:text-[#ff7701]"><NavLink to="">GALAXY NOTE PHONES</NavLink></li>
					<li className="my-0 leading-10 cursor-pointer hover:text-[#ff7701]"><NavLink to="">GALAXY S PHONES</NavLink></li>
					<li className="my-0 leading-10 cursor-pointer hover:text-[#ff7701]"><NavLink to="">GALAXY FOLD PHONES</NavLink></li>
				</ul>
			</div>

			<div className="mobiles grid grid-cols-4">

				{items.map((item) => <ItemCard title={item.title} price={item.price} image={item.image} description={item.description} />)}
			</div>
			<div className="flex items-center justify-center">
				<NavLink to="/shop" className="h-14 leading-[12px] p-4 text-xl rounded-none bg-white text-black border-2 border-[#ff7701]
				hover:bg-white hover:border-blue-500">LOAD MORE PRODUCTS</NavLink>
			</div>
		</section>
	)
}