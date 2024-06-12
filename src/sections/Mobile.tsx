import "@styles/Mobile.scss"
import ItemCard from "@components/itemcard/ItemCard"

export default function Mobiles() {


	return (
		<section id="Mobiles" className="">
			<div className="flex justify-between">
				<h1 className="font-bold text-lg">MOBILES</h1>

				<ul className="flex font-medium  gap-x-6">
					<li className="text-black my-0 leading-10">All PHONES</li>
					<li className="my-0 leading-10"><a href="">MI PHONES</a></li>
					<li className="my-0 leading-10"><a href="">POCO PHONES</a></li>
					<li className="my-0 leading-10"><a href="">REDMI PHONES</a></li>
					<li className="my-0 leading-10"><a href="">TOP SELLERS</a></li>
				</ul>
			</div>

			<div className="h-[80%] flex justify-center">
				<ItemCard title="My product" price={50.00} image="https://via.placeholder.com/300x200" description="his is a brief description of the product. It highlights the main features and benefits." />
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