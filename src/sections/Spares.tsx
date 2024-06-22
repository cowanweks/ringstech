import { useState } from "react"
import { HiMenu as MenuIcon, HiX as CloseIcon } from "react-icons/hi";
import { Button } from "@shadcn-ui/button"
import { FaWhatsapp as WhatsappIcon } from "react-icons/fa6"

import Image1 from "@public/spares/photo_2024-06-22_13-01-42 (2).jpg"
import Image2 from "@public/spares/photo_2024-06-22_13-01-42.jpg"
import Image3 from "@public/spares/photo_2024-06-22_13-01-43.jpg"
import Image4 from "@public/spares/photo_2024-06-22_13-01-44 (2).jpg"
import Image5 from "@public/spares/photo_2024-06-22_13-01-44 (3).jpg"
import Image6 from "@public/spares/photo_2024-06-22_13-01-44.jpg"
import Image7 from "@public/spares/photo_2024-06-22_13-01-46.jpg"


const items = [
	{
		image: Image1,
		"description": "Hello"
	},
	{
		image: Image2,
		service: "",
		description: ""
	},
	{
		image: Image3,
		service: "",
		description: ""
	},
	{
		image: Image4,
		service: "",
		description: ""
	},
	{
		image: Image5,
		service: "",
		description: ""
	},
	{
		image: Image6,
		service: "",
		description: ""
	},
	{
		image: Image7,
		service: "",
		description: ""
	},
]

function ItemsCard(item: { image: string | undefined, service: string | undefined, description: string | undefined }) {

	return <div className="bg-gray-200">
		<div className="h-[56.25vw]">
			<img src={item.image} alt="" className="" />
		</div>
		<div className="">
			<p className="description py-4">
				{item.service}
			</p>
			<p className="description py-4">
				{item.description}
			</p>
			<div className="py-2 flex gap-x-4 justify-center">
				<a href="">
					<Button>
						<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
							<path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z" />
						</svg>
						<span>Call</span>
					</Button>
				</a>
				<a href="">
					<Button>
						<WhatsappIcon />
						<span>Chat Us</span>
					</Button>
				</a>
			</div>
		</div>
	</div>
}

export default function Spares() {

	const [isOpen, setIsOpen] = useState(false);

	const toggleMenu = () => {
		setIsOpen(!isOpen);
	};


	return (
		<section id="Spares" className="min-h-dvh px-4 py-16">
			<div className="bg-white shadow-md">
				<div className="container mx-auto mb-16 border px-6 py-3 flex justify-between items-center">
					<h1 className="font-bold text-lg">SPARES</h1>
					<div className="md:hidden z-10">
						<button onClick={toggleMenu} className="text-gray-800 focus:outline-none">
							{isOpen ? <CloseIcon size={24} /> : <MenuIcon size={24} />}
						</button>
					</div>
					<ul className={`flex-col md:flex md:flex-row font-medium gap-x-6 absolute md:static w-full md:w-auto bg-white md:bg-transparent ${isOpen ? 'flex' : 'hidden'} md:flex`}>
						<a onClick={toggleMenu} href="" className="text-[#ff7701] cursor-pointer hover:text-[#ff7701] my-0 leading-10">
							<li className="py-2 md:py-0 px-6 md:px-0">ALL</li>
						</a>
						<a onClick={toggleMenu} href="" className="my-0 leading-10 cursor-pointer hover:text-[#ff7701]">
							<li className="py-2 md:py-0 px-6 md:px-0">GEARS & DEVICES</li>
						</a>
						<a onClick={toggleMenu} href="" className="my-0 leading-10 cursor-pointer hover:text-[#ff7701]">
							<li className="py-2 md:py-0 px-6 md:px-0">AUDIO</li>
						</a>
						<a onClick={toggleMenu} href="" className="my-0 leading-10 cursor-pointer hover:text-[#ff7701]">
							<li className="py-2 md:py-0 px-6 md:px-0">CAMERA & VISUAL</li>
						</a>
						<a onClick={toggleMenu} href="" className="my-0 leading-10 cursor-pointer hover:text-[#ff7701]">
							<li className="py-2 md:py-0 px-6 md:px-0">POWERBANK & CHARGING</li>
						</a>
					</ul>
				</div>
			</div>

			<div className="spares grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
				{items.length > 0 ? items.map((item, index) => (<ItemsCard service={item.service} image={item.image} description={item.description} key={index} />)) : ""}
			</div>
		</section>
	)
}