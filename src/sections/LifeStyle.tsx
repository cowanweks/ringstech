import "@styles/LifeStyle.scss"
import ItemCard from "@components/itemcard/ItemCard"
import { IProduct } from "@components/cartitem/CartItem"
import { NavLink } from "react-router-dom"

import Image1 from "@assets/lifestyle/LOB1_Bundle-DT.avif"


const items: Array<IProduct> = [
	{
		ram: '8GB',
		battery: '4000mAh',
		cameras: '50MP (main), 12MP (ultra-wide), 10MP (telephoto)',
		display: '6.1-inch Dynamic AMOLED 2X',
		processor: 'Snapdragon 8 Gen 2',
		rom: '128GB/256GB',
		type: 'phone',
		inStock: 3,
		model: 'Samsung Galaxy S24*',
		brand: 'Samsung',
		price: 6.00,
		image: Image1,
		gamesIncluded: [],
		description: 'Samsung Galaxy S24*'
	},
	{
		ram: '8GB',
		battery: '4000mAh',
		cameras: '50MP (main), 12MP (ultra-wide), 10MP (telephoto)',
		display: '6.1-inch Dynamic AMOLED 2X',
		processor: 'Snapdragon 8 Gen 2',
		rom: '128GB/256GB',
		type: 'phone',
		inStock: 3,
		model: 'Samsung Galaxy S24*',
		brand: 'Samsung',
		price: 6.00,
		image: Image1,
		gamesIncluded: [],
		'description': 'Samsung Galaxy S24*'
	},
	{
		ram: '8GB',
		battery: '4000mAh',
		cameras: '50MP (main), 12MP (ultra-wide), 10MP (telephoto)',
		display: '6.1-inch Dynamic AMOLED 2X',
		processor: 'Snapdragon 8 Gen 2',
		rom: '128GB/256GB',
		type: 'phone',
		inStock: 3,
		model: 'Samsung Galaxy S24*',
		brand: 'Samsung',
		price: 6.00,
		image: Image1,
		gamesIncluded: [],
		'description': 'Samsung Galaxy S24*'
	},
	{
		ram: '8GB',
		battery: '4000mAh',
		cameras: '50MP (main), 12MP (ultra-wide), 10MP (telephoto)',
		display: '6.1-inch Dynamic AMOLED 2X',
		processor: 'Snapdragon 8 Gen 2',
		rom: '128GB/256GB',
		type: 'phone',
		inStock: 3,
		model: 'Samsung Galaxy S24*',
		brand: 'Samsung',
		price: 6.00,
		image: Image1,
		gamesIncluded: [],
		'description': 'Samsung Galaxy S24*'
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
				{items.map((item, index) => <ItemCard key={index} item={item} />)}

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