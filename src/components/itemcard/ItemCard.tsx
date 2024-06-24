import { IProduct } from "@defines/index";
import "@styles/ItemCard.scss";
import { API_URL, formatPrice } from "@utils/index";
import PropTypes, { string } from "prop-types";
import { Link } from "react-router-dom";


const ItemCard = (props: IProduct) => {


  return (
    <Link to="/product" state={props} className="product-card bg-white shadow-lg overflow-hidden transition-transform transform hover:scale-105 rounded-lg">
      <div className="h-[200px]">
        <img
          src={`${API_URL}/images/?id=${props.product_image}`}
          alt="Product Image"
          className="product-image transition-transform duration-500 hover:scale-110 w-fit max-h-full max-w-full"
        />
      </div>
      <div className="product-details p-4">
        <p className="product-title text-xl font-bold text-gray-800">
          {props.product_name}
        </p>
        <p className="product-price text-lg font-bold text-green-600 mt-2">
          {props.product_unit_price && (
            <span className="px-2 py-1 text-center">{formatPrice(props.product_unit_price)}</span>
          )}
        </p>
      </div>
    </Link>

  );
};

ItemCard.propTypes = {
  product_id: PropTypes.string,
  rom: PropTypes.string,
  ram: PropTypes.string,
  type: PropTypes.string,
  description: PropTypes.string.isRequired,
  product_name: PropTypes.string.isRequired,
  product_unit_price: PropTypes.number.isRequired,
  product_category: PropTypes.string.isRequired,
  available_colors: PropTypes.arrayOf(string),
  product_image: PropTypes.string.isRequired,
  brand: PropTypes.string.isRequired,
  model: PropTypes.string.isRequired,
  battery: PropTypes.string.isRequired,
  cameras: PropTypes.string.isRequired,
  processor: PropTypes.string.isRequired,
  display: PropTypes.string.isRequired,
};

export default ItemCard;
