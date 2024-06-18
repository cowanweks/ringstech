import '@styles/Footer.scss'
import Product1 from "@assets/1000096387.jpg"
import { FaEnvelope, FaInstagram, FaLinkedin, FaXTwitter } from "react-icons/fa6";
import { HiPhone } from "react-icons/hi2"
import { Link } from "react-router-dom"


function PopularProduct() {

	return (
		<li id='PopularProduct' className='flex gap-4'>
			<img src={Product1} alt="" className='h-[60px]' />
			<div className="about">
				<Link style={{ textDecoration: 'none' }} to='#'><h3 className='title'>LC7 Pro Gimbal</h3></Link>
				<div className="price flex gap-2">
					<span className='previous line-through'>KSh 14,999.00</span>
					<span className='current'>KSh 14,999.00</span>
				</div>
			</div>
		</li>
	)
}

export default function Footer() {

	const email = "samsungphonesandspairecentre@gmail.com"
	const message = `mailto:${email}?subject=Interested in Samsung Phones&body=Hello%20Can%20I%20get%20to%20kow%20about%20the%20Phones%20please!`


	return (
		<section id='Footer' className='p-16 bg-gradient-to-r from-[#948A30] via-[#3E9161] to-[#707E3E]'>
			<div className="categories flex-1">
				<h2>PRODUCT CATEGORIES</h2>
				<ul className='pt-2'>
					<li><Link style={{ textDecoration: 'none' }} to="" className='hover:text-[#ff7701]'>Accessories</Link></li>
					<li><Link style={{ textDecoration: 'none' }} to="" className='hover:text-[#ff7701]'>Camera & Visual</Link></li>
					<li><Link style={{ textDecoration: 'none' }} to="" className='hover:text-[#ff7701]'>Covers & Protectors</Link></li>
					<li><Link style={{ textDecoration: 'none' }} to="" className='hover:text-[#ff7701]'>Devices & Audio</Link></li>
					<li><Link style={{ textDecoration: 'none' }} to="" className='hover:text-[#ff7701]'>Lifestyle</Link></li>
					<li><Link style={{ textDecoration: 'none' }} to="" className='hover:text-[#ff7701]'>Powerbank & Charging</Link></li>
					<li><Link style={{ textDecoration: 'none' }} to="" className='hover:text-[#ff7701]'>Smartphones</Link></li>
					<li><Link style={{ textDecoration: 'none' }} to="" className='hover:text-[#ff7701]'>Smartwatches</Link></li>
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
						<Link target='_blank' to="tel:+254740801606" style={{ textDecoration: 'none' }} className='flex items-center gap-x-2'>
							< HiPhone />
							<span>+254 740 801 606</span>
						</Link>
					</li>
					<li >
						<Link target='_blank' to={message}
							style={{ textDecoration: 'none' }} className='flex items-center gap-x-2'>
							<FaEnvelope />
							<span>samsungphonesandspairecentre@gmail.com</span>
						</Link>
					</li>
					<li>
						<Link target='_blank' to="https://facebook.com" style={{ textDecoration: 'none' }} className='flex items-center gap-x-2'>
							<FaXTwitter />
							<span>@ringstech</span>
						</Link>
					</li>
					<li>
						<Link target='_blank' to="https://instagram.com" style={{ textDecoration: 'none' }} className='flex items-center gap-x-2'>
							<FaInstagram />
							<span>Instagram</span>
						</Link>
					</li>
					<li>
						<Link target='_blank' to="https://linkedin.com" style={{ textDecoration: 'none' }} className='flex items-center gap-x-2'>
							<FaLinkedin />
							<span>LinkedIn</span>
						</Link>
					</li>
				</ul>
			</div>
		</section>);
}