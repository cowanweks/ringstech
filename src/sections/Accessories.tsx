import "@styles/Accessories.scss"
import ItemCard from "@components/itemcard/ItemCard"

export default function Accessories() {


	return (
		<section id="Accessories">
			<div className="flex justify-between">
				<h1 className="font-bold text-lg">ACCESSORIES</h1>

				<ul className="flex font-medium gap-x-6">
					<li className="text-black cursor-pointer">
						<a href="">ALL ACCESSORIES</a>
					</li>
					<li className="cursor-pointer"><a href="">GEARS & DEVICES</a></li>
					<li className="cursor-pointer"><a href="">AUDIO</a></li>
					<li className="cursor-pointer"><a href="">CAMERA & VISUAL</a></li>
					<li className="cursor-pointer"><a href="">POWERBANK & CHARGING</a></li>
				</ul>
			</div>

			<div className="h-[80%] flex justify-center">
				<ItemCard title="My product" price={50.05} image="https://via.placeholder.com/300x200" description="his is a brief description of the product. It highlights the main features and benefits." />
				<ItemCard title="My product" price={50.00} image="https://via.placeholder.com/300x200" description="his is a brief description of the product. It highlights the main features and benefits." />
				<ItemCard title="My product" price={50.00} image="https://via.placeholder.com/300x200" description="his is a brief description of the product. It highlights the main features and benefits." />
				<ItemCard title="My product" price={50.00} image="https://via.placeholder.com/300x200" description="his is a brief description of the product. It highlights the main features and benefits." />
			</div>
			<div className="flex items-center justify-center">
				<a href="/shop" className="h-14 leading-[12px] p-4 text-xl rounded-none bg-white text-black border-2 border-[#ff7701]
				hover:bg-white hover:border-blue-500">LOAD MORE PRODUCTS</a>
			</div>

		</section>
	)
}