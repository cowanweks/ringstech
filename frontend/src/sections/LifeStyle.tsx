import "@styles/LifeStyle.scss"
import ItemCard from "@components/itemcard/ItemCard"
import { IProduct } from "@defines/index"
import { NavLink } from "react-router-dom"
import { useState, useEffect } from "react"
import axios from "axios"

import Image1 from "@assets/lifestyle/LOB1_Bundle-DT.avif"
import { API_URL } from "@utils/index"


const fallbackItems: Array<IProduct> = [
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
		unitPrice: 6.00,
		productImage: Image1,
		gamesIncluded: [],
		description: 'Samsung Galaxy S24*',
		availableColors: '',
		isAvailable: true,
		productCategory: '',
		productID: '',
		productName: ''
	}

]

export default function LifeStyle() {

	const [data, setData] = useState<IProduct[]>([]);

	useEffect(() => {
		axios.get(`${API_URL}/products/?product_category=lifestyle`)
			.then(res => {
				if (Array.isArray(res.data)) {
					setData(res.data);
				} else {
					console.error('Fetched data is not an array:', res.data);
				}
			})
			.catch(error => console.log(error));
	}, []);


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
				{(data.length > 0 ? data : fallbackItems).map((item, index) => (
					<ItemCard
						key={index}
						display={item.display}
						battery={item.battery}
						brand={item.brand}
						cameras={item.cameras}
						description={item.description}
						inStock={item.inStock}
						isAvailable={item.isAvailable}
						model={item.model}
						ram={item.ram}
						rom={item.rom}
						processor={item.processor}
						gamesIncluded={item.gamesIncluded}
						productCategory={item.productCategory}
						productName={item.productName}
						type={item.type}
						unitPrice={item.unitPrice}
						productImage={item.productImage}
						productID={item.productID}
						availableColors={item.availableColors} />
				))}
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