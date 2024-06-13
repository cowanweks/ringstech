import "@styles/Accessories.scss"
import ItemCard from "@components/itemcard/ItemCard"
import Image1 from "@assets/accessories/africa-en-silicone-cover-with-s-pen-galaxy-s21-ultra-5g-ef-pg99ptbegww-384115466.avif"
import { NavLink } from "react-router-dom"
// import { Button } from "@shadcn-ui/button"

export default function Accessories() {


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
				<ItemCard title="Galaxy S21 Ultra 5G Silicone Cover with S Pen" price={5000.05} image={Image1} description="his is a brief description of the product. It highlights the main features and benefits." />
				<ItemCard title="Galaxy S21 Ultra 5G Silicone Cover with S Pen" price={5000.05} image={Image1} description="his is a brief description of the product. It highlights the main features and benefits." />
				<ItemCard title="Galaxy S21 Ultra 5G Silicone Cover with S Pen" price={5000.05} image={Image1} description="his is a brief description of the product. It highlights the main features and benefits." />
				<ItemCard title="Galaxy S21 Ultra 5G Silicone Cover with S Pen" price={5000.05} image={Image1} description="his is a brief description of the product. It highlights the main features and benefits." />
				<ItemCard title="Galaxy S21 Ultra 5G Silicone Cover with S Pen" price={5000.05} image={Image1} description="his is a brief description of the product. It highlights the main features and benefits." />
				<ItemCard title="Galaxy S21 Ultra 5G Silicone Cover with S Pen" price={5000.05} image={Image1} description="his is a brief description of the product. It highlights the main features and benefits." />
				<ItemCard title="Galaxy S21 Ultra 5G Silicone Cover with S Pen" price={5000.05} image={Image1} description="his is a brief description of the product. It highlights the main features and benefits." />
				<ItemCard title="Galaxy S21 Ultra 5G Silicone Cover with S Pen" price={5000.05} image={Image1} description="his is a brief description of the product. It highlights the main features and benefits." />
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