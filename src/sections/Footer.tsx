import '@styles/Footer.scss'
import Product1 from "@assets/1000096387.jpg"
import { FaEnvelope, FaInstagram, FaLinkedin, FaXTwitter } from "react-icons/fa6";
import { HiPhone } from "react-icons/hi2"


function PopularProduct() {

	return (
		<li id='PopularProduct' className='flex gap-4'>
			<img src={Product1} alt="" className='h-[60px]' />
			<div className="about">
				<a href='#'><h3 className='title'>LC7 Pro Gimbal</h3></a>
				<div className="price flex gap-2">
					<span className='previous line-through'>KSh 14,999.00</span>
					<span className='current'>KSh 14,999.00</span>
				</div>
			</div>
		</li>
	)
}

export default function Footer() {


	return (
		<section id='Footer' className='p-16'>
			<div className="categories flex-1">
				<h2>PRODUCT CATEGORIES</h2>
				<ul className='pt-2'>
					<li><a href="">Accessories</a></li>
					<li><a href="">Camera & Visual</a></li>
					<li><a href="">Covers & Protectors</a></li>
					<li><a href="">Devices & Audio</a></li>
					<li><a href="">Lifestyle</a></li>
					<li><a href="">Powerbank & Charging</a></li>
					<li><a href="">Smartphones</a></li>
					<li><a href="">Smartwatches</a></li>
				</ul>
			</div>
			<div className="popular flex-1">
				<h2>POPULAR</h2>
				<ul className='pt-2'>
					<PopularProduct />
					<PopularProduct />
					<PopularProduct />
				</ul>
			</div>
			<div className="contact flex-1">
				<h2>CONTACT US</h2>
				<ul className='pt-2'>
					<li >
						<a target='_blank' href="tel:0768676944" className='flex items-center gap-x-2'>
							< HiPhone />
							<span>0768 676 944</span>
						</a>
					</li>
					<li >
						<a target='_blank' href="" className='flex items-center gap-x-2'>
							<FaEnvelope />
							<span>info@xiaomistores.co.ke</span>
						</a>
					</li>
					<li>
						<a target='_blank' href="https://facebook.com" className='flex items-center gap-x-2'>
							<FaXTwitter />
							<span>@ringstech</span>
						</a>
					</li>
					<li>
						<a target='_blank' href="https://instagram.com" className='flex items-center gap-x-2'>
							<FaInstagram />
							<span>Instagram</span>
						</a>
					</li>
					<li>
						<a target='_blank' href="https://linkedin.com" className='flex items-center gap-x-2'>
							<FaLinkedin />
							<span>LinkedIn</span>
						</a>
					</li>
				</ul>
			</div>
		</section>);
}