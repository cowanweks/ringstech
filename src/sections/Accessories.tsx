import "@styles/Accessories.scss"
import { useEffect, useState } from "react"
import ItemCard from "@components/itemcard/ItemCard"
import { IProduct, } from "@defines/index"
import { NavLink } from "react-router-dom"
import axios from "axios";
import { API_URL } from "@utils/index"



export default function Accessories() {

	const [data, setData] = useState<IProduct[]>([]);

	useEffect(() => {
		axios.get(`${API_URL}/products/?product_category=accessory`)
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
		<section id="Accessories">
			<div className="flex justify-between">
				<h1 className="font-bold text-lg">ACCESSORIES</h1>

				<ul className="flex font-medium gap-x-6">
					<li className="text-[#ff7701] cursor-pointer hover:text-[#ff7701]">
						<NavLink to="">ALL ACCESSORIES</NavLink>
					</li>
					<li className="cursor-pointer hover:text-[#ff7701]"><NavLink to="">GEARS & DEVICES</NavLink></li>
					<li className="cursor-pointer hover:text-[#ff7701]"><NavLink to="">AUDIO</NavLink></li>
					<li className="cursor-pointer hover:text-[#ff7701]"><NavLink to="">CAMERA & VISUAL</NavLink></li>
					<li className="cursor-pointer hover:text-[#ff7701]"><NavLink to="">POWERBANK & CHARGING</NavLink></li>
				</ul>
			</div>

			<div className="grid grid-cols-4">
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