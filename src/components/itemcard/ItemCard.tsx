import { Button } from "@shadcn-ui/button"
import "@styles/ItemCard.scss"
import { IProduct } from "@defines/index"
import { API_URL } from "@utils/index"
import PropTypes from 'prop-types'
import { FaWhatsapp as WhatsupIcon } from "react-icons/fa"


const ItemCard: React.FC<IProduct> = ({
	rom,
	description,
	productName,
	unitPrice,
	productCategory,
	availableColors,
	productImage,
	brand,
	model,
	battery,
	cameras,
	processor,
	display,
	ram,
}) => {

	const phone = "+254757668191"
	const message = `https://wa.me/${phone}?text=Can%20I%20get%20to%20know%20about
	 ${productName}%20with%20${ram}%20RAM%20and%20${rom}%20ROM?`

	return <div className="product-card max-h-max bg-white shadow-lg  overflow-hidden transition-transform transform hover:scale-105">
		{/*<img
			src={`/phones/${productImage}`}
			alt="Product Image"
			className="product-image w-full h-64 object-cover"
		/>*/}
		<img
			src={`${API_URL}/uploads?image=${productImage}`}
			alt="Product Image"
			className="product-image w-full h-64 object-cover"
		/>

		<div className="product-details p-4">
			<p className="product-title px-2 text-lg font-bold text-red-600 mt-2">{productName}</p>
			<p className="product-price text-lg font-bold text-green-600 mt-2">
				{unitPrice && <span className="h-6 px-2 py-1 text-center">Kshs {unitPrice}</span>}
			</p>
			<p className="product-description flex flex-wrap gap-2 text-sm text-gray-700 mt-2">
				{rom && <span className="h-6 px-1 py-1 text-center">{rom}</span>}
				{ram && <span className="h-6 px-1 py-1 text-center">{ram}</span>}
				{brand && <span className="h-6 px-1 py-1 text-center">{brand}</span>}
				{model && <span className="h-6 px-1 py-1 text-center">{model}</span>}
				{cameras && <span className="h-6 px-1 py-1 text-center">{cameras}</span>}
				{battery && <span className="h-6 px-1 py-1 text-center">{battery}</span>}
				{display && <span className="h-6 px-1 py-1 text-center">{display}</span>}
				{processor && <span className="h-6 px-1 py-1 text-center">{processor}</span>}
				{productCategory && <span className="h-6 px-1 py-1 text-center">{productCategory}</span>}
				{description && <span className="h-6 px-2 py-1 text-center">{description}</span>}
			</p>

			<div className="product-price text-lg font-bold text-green-600 mt-2">
				{availableColors &&
					<span className="flex items-center gap-x-2 h-6 px-2 py-1 text-center">Colors:
						<button className="h-10 w-10 rounded-full border-2"></button>
					</span>
				}
			</div>

			{/*<Button className="product-button bg-yellow-500 text-white font-semibold py-2 px-4 rounded mt-4 hover:bg-yellow-600">
				Add to Cart
			</Button>*/}

			<a href={message}>
				<Button className="product-button flex gap-x-4 bg-green-500 text-white font-semibold py-2 px-4 rounded mt-4 hover:bg-yellow-600">
					<WhatsupIcon size={20} />
					<span>Inquire</span>
				</Button>
			</a>
		</div>
	</div>
}

ItemCard.propTypes = {
	rom: PropTypes.string,
	ram: PropTypes.string,
	type: PropTypes.string,
	description: PropTypes.string.isRequired,
	productName: PropTypes.string.isRequired,
	unitPrice: PropTypes.number.isRequired,
	productCategory: PropTypes.string.isRequired,
	availableColors: PropTypes.string.isRequired,
	productImage: PropTypes.string.isRequired,
	brand: PropTypes.string.isRequired,
	model: PropTypes.string.isRequired,
	battery: PropTypes.string.isRequired,
	cameras: PropTypes.string.isRequired,
	processor: PropTypes.string.isRequired,
	display: PropTypes.string.isRequired,
};


export default ItemCard