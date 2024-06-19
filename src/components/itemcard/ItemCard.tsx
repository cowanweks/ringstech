import { IProduct } from "@defines/index";
import { Button } from "@shadcn-ui/button";
import "@styles/ItemCard.scss";
import { API_URL } from "@utils/index";
import PropTypes from "prop-types";
import { HiDevicePhoneMobile as PhoneIcon, HiCamera as CameraIcon, HiBookOpen as DescriptionIcon } from "react-icons/hi2";
import { FaMemory as RamIcon, FaMicrochip as ProcessorIcon } from "react-icons/fa";
import { MdBatteryChargingFull as BatteryIcon, MdSmartphone as DisplayIcon } from "react-icons/md";
import { GiProcessor as RomIcon } from "react-icons/gi";


const formatPrice = (price: number) => {
  return new Intl.NumberFormat('en-KE', {
    style: 'currency',
    currency: 'KES',
  }).format(price);
};


const ItemCard = (props: IProduct) => {
  const phone = "+254757668191";

  return (
    <div className="product-card max-h-max bg-white shadow-lg overflow-hidden transition-transform transform hover:scale-105 rounded-lg">
      <img
        src={`${API_URL}/images/?id=${props.productImage}`}
        alt="Product Image"
        className="product-image w-full h-96 object-cover"
      />
      <div className="product-details p-4">
        <p className="product-title text-xl font-bold text-gray-800 mt-2">
          {props.productName}
        </p>
        <p className="product-price text-lg font-bold text-green-600 mt-2">
          {props.unitPrice && (
            <span className="px-2 py-1 text-center">{formatPrice(props.unitPrice)}</span>
          )}
        </p>
        <p className="product-description grid grid-cols-1 gap-2 text-sm text-gray-700 mt-2">
          {props.ram && (
            <span className="flex items-center gap-1 h-fit px-2 py-1 text-center">
              <span className="text-red-500">RAM: </span>
              <RamIcon size={16} /> {props.ram}
            </span>
          )}
          {props.rom && (
            <span className="flex items-center gap-1 h-fit px-2 py-1 text-center">
              <span className="text-red-500">ROM: </span>
              <RomIcon size={16} /> {props.rom}
            </span>
          )}
          {props.brand && (
            <span className="flex items-center gap-1 h-fit px-2 py-1 text-center">
              <span className="text-red-500">Brand: </span>
              {props.brand}
            </span>
          )}
          {props.model && (
            <span className="flex items-center gap-1 h-fit px-2 py-1 text-center">
              <span className="text-red-500">Model: </span>
              {props.model}
            </span>
          )}
          {props.cameras && (
            <span className="flex items-center gap-1 h-fit px-2 py-1 text-center flex-wrap">
              <span className="text-red-500">Camera: </span>
              <CameraIcon size={16} /> {props.cameras}
            </span>
          )}
          {props.battery && (
            <span className="flex items-center gap-1 h-fit px-2 py-1 text-center">
              <span className="text-red-500">Battery: </span>
              <BatteryIcon size={16} /> {props.battery}
            </span>
          )}
          {props.display && (
            <span className="flex items-center gap-1 h-fit px-2 py-1 text-center">
              <span className="text-red-500">Display: </span>
              <DisplayIcon size={16} /> {props.display}
            </span>
          )}
          {props.processor && (
            <span className="flex items-center gap-1 h-fit px-2 py-1 text-center">
              <span className="text-red-500">Processor</span>
              <ProcessorIcon size={16} /> {props.processor}
            </span>
          )}
          {props.description && (

            <span className="h-fit px-2 py-1 text-center">
              <span className="text-red-500"> Description</span>
              <DescriptionIcon size={16} /> {props.description}</span>
          )}
        </p>
        {props.availableColors && (
          <div className="product-colors flex items-center gap-x-2 mt-2">
            <span className="text-gray-700">Colors:</span>
            {props.availableColors.split(",").map((color, index) => (
              <button
                key={index}
                className="h-8 w-8 rounded-full border-2"
                style={{ backgroundColor: color }}
              ></button>
            ))}
          </div>
        )}

        <a href={`tel:${phone}`}>
          <Button className="product-button flex gap-x-2 items-center text-white font-semibold py-2 px-4 rounded mt-4 hover:bg-yellow-600">
            <PhoneIcon size={20} />
            <span>Inquire</span>
          </Button>
        </a>
      </div>
    </div>

  );
};

ItemCard.propTypes = {
  rom: PropTypes.string,
  ram: PropTypes.string,
  type: PropTypes.string,
  description: PropTypes.string.isRequired,
  productName: PropTypes.string.isRequired,
  unitPrice: PropTypes.number.isRequired,
  productCategory: PropTypes.string.isRequired,
  availableColors: PropTypes.string,
  productImage: PropTypes.string.isRequired,
  brand: PropTypes.string.isRequired,
  model: PropTypes.string.isRequired,
  battery: PropTypes.string.isRequired,
  cameras: PropTypes.string.isRequired,
  processor: PropTypes.string.isRequired,
  display: PropTypes.string.isRequired,
};

export default ItemCard;
