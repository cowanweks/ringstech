import "@styles/Mobile.scss"
import ItemCard from "@components/itemcard/ItemCard"
import { NavLink } from "react-router-dom"
import { IProduct } from "@components/cartitem/CartItem"

//
import Image1 from "@assets/phones/image1.jpg"


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

				{items.map((item) => <ItemCard item={item} />)}
			</div>
			<div className="flex items-center justify-center">
				<NavLink to="/shop" className="h-14 leading-[12px] p-4 text-xl rounded-none bg-white text-black border-2 border-[#ff7701]
				hover:bg-white hover:border-blue-500">LOAD MORE PRODUCTS</NavLink>
			</div>
		</section>
	)
}