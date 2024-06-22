import { IProduct } from "@defines/index";
import { Button } from "@shadcn-ui/button";
import "@styles/ItemCard.scss";
import { API_URL, formatPrice } from "@utils/index";
import PropTypes from "prop-types";
import { HiOutlineShoppingCart as CartIcon, HiCamera as CameraIcon, HiBookOpen as DescriptionIcon } from "react-icons/hi2";
import { FaMemory as RamIcon, FaMicrochip as ProcessorIcon } from "react-icons/fa";
import { MdBatteryChargingFull as BatteryIcon, MdSmartphone as DisplayIcon } from "react-icons/md";
import { GiProcessor as RomIcon } from "react-icons/gi";
import axios from "axios";



export function addToCart(productId: string) {

  axios
    .post(`${API_URL}/orders/checkout?product_id=${productId}`)
    .then((res) => {
      if (res.status == 201) {
        console.log
      }
    })
    .catch((error) => console.log(error));

}



const ItemCard = (props: IProduct) => {


  return (
    <div className="product-card bg-white shadow-lg overflow-hidden transition-transform transform hover:scale-105 rounded-lg">
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
        <div className="product-description grid grid-cols-1 gap-2 text-sm text-gray-700 mt-2">
          {props.product_category === "phone" && (
            <>
              {props.ram && (
                <span className="flex items-center gap-1 h-fit px-2 py-1 text-center bg-gray-100 rounded-md">
                  <span className="text-red-500">RAM: </span>
                  <RamIcon size={16} /> {props.ram}
                </span>
              )}
              {props.rom && (
                <span className="flex items-center gap-1 h-fit px-2 py-1 text-center bg-gray-100 rounded-md">
                  <span className="text-red-500">ROM: </span>
                  <RomIcon size={16} /> {props.rom}
                </span>
              )}
              {props.cameras && (
                <span className="flex items-center gap-1 h-fit px-2 py-1 text-center flex-wrap bg-gray-100 rounded-md">
                  <span className="text-red-500">Camera: </span>
                  <CameraIcon size={16} /> {props.cameras}
                </span>
              )}
              {props.battery && (
                <span className="flex items-center gap-1 h-fit px-2 py-1 text-center bg-gray-100 rounded-md">
                  <span className="text-red-500">Battery: </span>
                  <BatteryIcon size={16} /> {props.battery}
                </span>
              )}
              {props.display && (
                <span className="flex items-center gap-1 h-fit px-2 py-1 text-center bg-gray-100 rounded-md">
                  <span className="text-red-500">Display: </span>
                  <DisplayIcon size={16} /> {props.display}
                </span>
              )}
              {props.processor && (
                <span className="flex items-center gap-1 h-fit px-2 py-1 text-center bg-gray-100 rounded-md">
                  <span className="text-red-500">Processor: </span>
                  <ProcessorIcon size={16} /> {props.processor}
                </span>
              )}
            </>
          )}
          {props.brand && (
            <span className="flex items-center gap-1 h-fit px-2 py-1 text-center bg-gray-100 rounded-md">
              <span className="text-red-500">Brand: </span>
              {props.brand}
            </span>
          )}
          {props.model && (
            <span className="flex items-center gap-1 h-fit px-2 py-1 text-center bg-gray-100 rounded-md">
              <span className="text-red-500">Model: </span>
              {props.model}
            </span>
          )}
          {props.description && (
            <span className="h-fit px-2 py-1 text-center bg-gray-100 rounded-md">
              <span className="text-red-500">Description: </span>
              <DescriptionIcon size={16} /> {props.description}
            </span>
          )}
        </div>
        <Button
          className="product-button flex gap-x-2 items-center justify-center text-white font-semibold py-2 px-4 rounded mt-4 hover:bg-blue-700 transition-colors"
        >
          <CartIcon size={20} />
          <span>Add to Cart</span>
        </Button>
      </div>
    </div>

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
  available_colors: PropTypes.string,
  product_image: PropTypes.string.isRequired,
  brand: PropTypes.string.isRequired,
  model: PropTypes.string.isRequired,
  battery: PropTypes.string.isRequired,
  cameras: PropTypes.string.isRequired,
  processor: PropTypes.string.isRequired,
  display: PropTypes.string.isRequired,
};

export default ItemCard;
