import "@styles/Mobile.scss"
import ItemCard from "@components/itemcard/ItemCard"
import { NavLink } from "react-router-dom"

//
import Image1 from "@assets/phones/image1.jpg"
import Image2 from "@assets/phones/image2.jpg"
import Image3 from "@assets/phones/Image3.jpg"
import Image4 from "@assets/phones/image4.jpg"

export default function Mobiles() {

	return (
		<section id="Mobiles" className="">
			<div className="flex justify-between">
				<h1 className="font-bold text-lg">MOBILES</h1>

				<ul className="flex font-medium  gap-x-6">
					<li className="text-black cursor-pointer hover:text-[#000] my-0 leading-10">
						<NavLink to="">All PHONES</NavLink>
					</li>
					<li className="my-0 leading-10 cursor-pointer hover:text-[#000]"><NavLink to="">GALAXY NOTE PHONES</NavLink></li>
					<li className="my-0 leading-10 cursor-pointer hover:text-[#000]"><NavLink to="">GALAXY S PHONES</NavLink></li>
					<li className="my-0 leading-10 cursor-pointer hover:text-[#000]"><NavLink to="">GALAXY FOLD PHONES</NavLink></li>
				</ul>
			</div>

			<div className="mobiles grid grid-cols-4">
				<ItemCard title="Galaxy S23 Ultra" price={5000.05} image={Image1} description="his is a brief description of the product. It highlights the main features and benefits." />
				<ItemCard title="Galaxy S24 Ultra" price={5000.05} image={Image2} description="his is a brief description of the product. It highlights the main features and benefits." />
				<ItemCard title="Galaxy S23 Ultra" price={5000.05} image={Image1} description="his is a brief description of the product. It highlights the main features and benefits." />
				<ItemCard title="Galaxy S24 Ultra" price={5000.05} image={Image2} description="his is a brief description of the product. It highlights the main features and benefits." />
				<ItemCard title="Galaxy S24 Ultra" price={5000.05} image={Image3} description="his is a brief description of the product. It highlights the main features and benefits." />
				<ItemCard title="Galaxy S24 Ultra" price={5000.05} image={Image2} description="his is a brief description of the product. It highlights the main features and benefits." />
				<ItemCard title="Galaxy S24 Ultra" price={5000.05} image={Image4} description="his is a brief description of the product. It highlights the main features and benefits." />
				<ItemCard title="Galaxy S24 Ultra" price={5000.05} image={Image2} description="his is a brief description of the product. It highlights the main features and benefits." />
				<ItemCard title="Galaxy S24 Ultra" price={5000.05} image={Image4} description="his is a brief description of the product. It highlights the main features and benefits." />
				<ItemCard title="Galaxy S24 Ultra" price={5000.05} image={Image2} description="his is a brief description of the product. It highlights the main features and benefits." />
			</div>
			<div className="flex items-center justify-center">
				<NavLink to="/shop" className="h-14 leading-[12px] p-4 text-xl rounded-none bg-white text-black border-2 border-[#ff7701]
				hover:bg-white hover:border-blue-500">LOAD MORE PRODUCTS</NavLink>
			</div>
		</section>
	)
}