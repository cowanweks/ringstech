import { Button } from "@shadcn-ui/button"
import "@styles/ItemCard.scss"


export default function ItemCard(props: { title: string, description: string, price: number, image: string }) {


	return <div className="product-card">
		<img src={props.image} alt="Product Image" className="product-image" />
		<div className="product-details">
			<h2 className="product-title text-slate-800">{props.title}</h2>
			<p className="product-description">{props.description}</p>
			<p className="product-price">Kshs {props.price}</p>
			<Button className="product-button">Add to Cart</Button>
		</div>
	</div>
}