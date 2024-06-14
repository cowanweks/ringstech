import { Button } from "@shadcn-ui/button"
import "@styles/ItemCard.scss"
import { IProduct } from "@components/cartitem/CartItem"


export default function ItemCard({ item }: { item: IProduct }) {


	return <div className="product-card bg-[#707E3E]">
		<img src={item?.image} alt="Product Image" className="product-image" />
		<div className="product-details">
			<h2 className="product-title text-slate-800">{item?.description}</h2>
			<p className="product-description text-black">
				{item?.cameras}
				{item?.battery}
				{item?.display}
				{item?.processor}
				{item?.description}
			</p>
			<p className="product-price">Kshs {item?.price}</p>
			<Button className="product-button">Add to Cart</Button>
		</div>
	</div>
}