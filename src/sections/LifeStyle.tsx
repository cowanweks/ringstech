import ItemCard from "@components/itemcard/ItemCard"
import { IProduct } from "@defines/index"
import { NavLink } from "react-router-dom"
import { useState, useEffect } from "react"
import axios from "axios"
import { API_URL } from "@utils/index"
import { HiMenu as MenuIcon, HiX as CloseIcon } from "react-icons/hi";


export default function LifeStyle() {

	const [data, setData] = useState<IProduct[]>([]);
	const [isOpen, setIsOpen] = useState(false);

	const toggleMenu = () => {
		setIsOpen(!isOpen);
	};

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

	const items = data.slice(0, 6);

	return (
		<section id="LifeStyle" className="min-h-dvh px-4 py-8">
			<div className="bg-white shadow-md">
				<div className="container mx-auto px-6 py-3 flex justify-between items-center">
					<h1 className="font-bold text-lg">LIFESTYLE</h1>
					<div className="md:hidden">
						<button onClick={toggleMenu} className="text-gray-800 focus:outline-none">
							{isOpen ? <CloseIcon size={24} /> : <MenuIcon size={24} />}
						</button>
					</div>
					<ul className={`flex-col md:flex md:flex-row font-medium gap-x-6 absolute md:static w-full md:w-auto bg-white md:bg-transparent ${isOpen ? 'flex' : 'hidden'} md:flex`}>
						<NavLink to="" className="text-[#ff7701] cursor-pointer hover:text-[#ff7701] my-0 leading-10">
							<li className="py-2 md:py-0 px-6 md:px-0">ALL</li>
						</NavLink>
						<NavLink to="" className="my-0 leading-10 cursor-pointer hover:text-[#ff7701]">
							<li className="py-2 md:py-0 px-6 md:px-0">GEARS & DEVICES</li>
						</NavLink>
						<NavLink to="" className="my-0 leading-10 cursor-pointer hover:text-[#ff7701]">
							<li className="py-2 md:py-0 px-6 md:px-0">AUDIO</li>
						</NavLink>
						<NavLink to="" className="my-0 leading-10 cursor-pointer hover:text-[#ff7701]">
							<li className="py-2 md:py-0 px-6 md:px-0">CAMERA & VISUAL</li>
						</NavLink>
						<NavLink to="" className="my-0 leading-10 cursor-pointer hover:text-[#ff7701]">
							<li className="py-2 md:py-0 px-6 md:px-0">POWERBANK & CHARGING</li>
						</NavLink>
					</ul>
				</div>
			</div>

			<div className="accessories grid grid-cols-1 sm:grid-cols-1 sm:items-center
       md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-2">
				{items.length > 0 ? items.map((item, index) => (
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
			{items.length > 0 ?
				<div className="flex items-center justify-center my-8">
					<NavLink to="/shop" className="h-14 leading-[12px] p-4 text-xl rounded-none bg-white text-black border-2 border-[#ff7701]
				hover:bg-white hover:border-blue-500">LOAD MORE PRODUCTS</NavLink>
				</div> : ""
			}

		</section>
	)
}