import "@styles/Mobile.scss"
import ItemCard from "@components/itemcard/ItemCard"
import { NavLink } from "react-router-dom"
import { IProduct } from "@defines/index"
import { useState, useEffect } from "react"
import axios from "axios"
import { API_URL } from "@utils/index"

export default function Mobiles() {

	const [data, setData] = useState<IProduct[]>([]);

	useEffect(() => {
		axios.get(`${API_URL}/products/?product_category=phone`)
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

			<div className="mobiles grid grid-rows-1 grid-cols-4">
				{data.length > 0 ? data.map((item, index) => (
					<ItemCard
						key={index}
						display={item.display}
						battery={item.battery}
						brand={item.brand}
						cameras={item.cameras}
						description={item.description}
						inStock={item.inStock}
						model={item.model}
						ram={item.ram}
						rom={item.rom}
						processor={item.processor}
						productCategory={item.productCategory}
						productName={item.productName}
						unitPrice={item.unitPrice}
						productImage={item.productImage}
						availableColors={item.availableColors} />
				)) : ""}
			</div>
			{data.length > 0 ?
				<div className="flex items-center justify-center">
					<NavLink to="/shop" className="h-14 leading-[12px] p-4 text-xl rounded-none bg-white text-black border-2 border-[#ff7701]
				hover:bg-white hover:border-blue-500">LOAD MORE PRODUCTS</NavLink>
				</div> : ""
			}

		</section>
	)
}