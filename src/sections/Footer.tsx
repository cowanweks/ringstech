import { FaEnvelope, FaInstagram, FaLinkedin, FaXTwitter } from "react-icons/fa6";
import { HiPhone } from "react-icons/hi2"
import { Link } from "react-router-dom"



export default function Footer() {

	const email = "samsungphonesandspairecentre@gmail.com"
	const message = `mailto:${email}?subject=Interested in Samsung Phones&body=Hello%20Can%20I%20get%20to%20kow%20about%20the%20Phones%20please!`


	return (
		<section id='Footer'
			className='
			flex justify-around
		p-16 bg-gradient-to-r
		 bg-gray-950 flex-col md:flex-row md:justify-center gap-y-6
		 '>
			<div className="categories flex-1">
				<h2 className="text-lg text-white">PRODUCT CATEGORIES</h2>
				<ul className='flex flex-col gap-2 pt-2'>
					<li className=""><Link style={{ textDecoration: 'none' }} to="" className='text-[#ff7701] hover:text-white'>Accessories</Link></li>
					<li><Link style={{ textDecoration: 'none' }} to="" className='text-[#ff7701] hover:text-white'>Camera & Visual</Link></li>
					<li><Link style={{ textDecoration: 'none' }} to="" className='text-[#ff7701] hover:text-white'>Covers & Protectors</Link></li>
					<li><Link style={{ textDecoration: 'none' }} to="" className='text-[#ff7701] hover:text-white'>Devices & Audio</Link></li>
					<li><Link style={{ textDecoration: 'none' }} to="" className='text-[#ff7701] hover:text-white'>Lifestyle</Link></li>
					<li><Link style={{ textDecoration: 'none' }} to="" className='text-[#ff7701] hover:text-white'>Powerbank & Charging</Link></li>
					<li><Link style={{ textDecoration: 'none' }} to="" className='text-[#ff7701] hover:text-white'>Smartphones</Link></li>
					<li><Link style={{ textDecoration: 'none' }} to="" className='text-[#ff7701] hover:text-white'>Smartwatches</Link></li>
				</ul>
			</div>
			<div className="contact flex-1">
				<h2 className="text-lg text-white">CONTACT US</h2>
				<ul className='flex flex-col gap-2 pt-2'>
					<li className="">
						<Link target='_blank' to="tel:+254740801606" style={{ textDecoration: 'none' }} className='flex items-center gap-x-2 text-[#ff7701] hover:text-white'>
							< HiPhone />
							<span className="">+254 740 801 606</span>
						</Link>
					</li>
					<li >
						<Link target='_blank' to={message}
							style={{ textDecoration: 'none' }} className='flex items-center gap-x-2 text-[#ff7701] hover:text-white'>
							<FaEnvelope />
							<span className="">samsungphonesandspairecentre@gmail.com</span>
						</Link>
					</li>
					<li>
						<Link target='_blank' to="https://facebook.com" style={{ textDecoration: 'none' }} className='flex items-center gap-x-2 text-[#ff7701] hover:text-white'>
							<FaXTwitter />
							<span className="">@ringstech</span>
						</Link>
					</li>
					<li>
						<Link target='_blank' to="https://instagram.com" style={{ textDecoration: 'none' }} className='flex items-center gap-x-2 text-[#ff7701] hover:text-white'>
							<FaInstagram />
							<span className="">Instagram</span>
						</Link>
					</li>
					<li>
						<Link target='_blank' to="https://linkedin.com" style={{ textDecoration: 'none' }} className='flex items-center gap-x-2 text-[#ff7701] hover:text-white'>
							<FaLinkedin />
							<span className="">LinkedIn</span>
						</Link>
					</li>
				</ul>
			</div>
		</section>);
}