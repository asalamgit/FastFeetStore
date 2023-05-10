import './product-card.styles.scss';
import { Link } from 'react-router-dom';
const ProductCard = ({ title, product }) => {
	const { name, price, imageUrl } = product;

	return (
		<Link to={`/${title}/${name}`}>
			<div className="product-card-container">
				<div className={`product-card-img-container ${title}`}>
					<img src={imageUrl} alt={`${name}`} />
					<span className="price">{price}€</span>
				</div>
				<span className="name">{name}</span>
			</div>
		</Link>
	);
};

export default ProductCard;
