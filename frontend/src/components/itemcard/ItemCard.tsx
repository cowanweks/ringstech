import { Button } from "@shadcn-ui/button"
import "@styles/ItemCard.scss"
import { IProduct } from "@defines/index"
import { API_URL } from "@utils/index"
import PropTypes from 'prop-types'

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

	// console.log(parseJSON(availableColors!))

	return <div className="product-card bg-white shadow-lg  overflow-hidden transition-transform transform hover:scale-105">
		<img
			src={`${API_URL}/images/${productImage}`}
			alt="Product Image"
			className="product-image w-full h-48 object-cover"
		/>
		<div className="product-details p-4">
			<p className="product-title px-2 text-lg font-bold text-red-600 mt-2">{productName}</p>
			<p className="product-price text-lg font-bold text-green-600 mt-2">
				{unitPrice && <span className="h-6 px-2 py-1 text-center">Kshs {unitPrice}</span>}
			</p>
			<p className="product-description flex flex-wrap gap-2 text-sm text-gray-700 mt-2">
				{rom && <span className="h-6 px-2 py-1 text-center">{rom}</span>}
				{ram && <span className="h-6 px-2 py-1 text-center">{ram}</span>}
				{brand && <span className="h-6 px-2 py-1 text-center">{brand}</span>}
				{model && <span className="h-6 px-2 py-1 text-center">{model}</span>}
				{cameras && <span className="h-6 px-2 py-1 text-center">{cameras}</span>}
				{battery && <span className="h-6 px-2 py-1 text-center">{battery}</span>}
				{display && <span className="h-6 px-2 py-1 text-center">{display}</span>}
				{processor && <span className="h-6 px-2 py-1 text-center">{processor}</span>}
				{productCategory && <span className="h-6 px-2 py-1 text-center">{productCategory}</span>}
				{description && <span className="h-6 px-2 py-1 text-center">{description}</span>}
			</p>

			<div className="product-price text-lg font-bold text-green-600 mt-2">
				{availableColors &&
					<span className="flex items-center gap-x-2 h-6 px-2 py-1 text-center">Colors:
						<button className="h-10 w-10 rounded-full border-2"></button>
					</span>
				}
			</div>

			<Button className="product-button bg-yellow-500 text-white font-semibold py-2 px-4 rounded mt-4 hover:bg-yellow-600">
				Add to Cart
			</Button>
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