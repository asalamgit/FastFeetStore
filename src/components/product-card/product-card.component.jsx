import Button from '../button/button.component';
import './product-card.styles.scss';
import { useDispatch, useSelector } from 'react-redux';
import { selectCartItems } from '../../store/cart/cart.selector';
import { addItemToCart } from '../../store/cart/cart.action';
import { Link } from 'react-router-dom';
import { useEffect } from 'react';
// import nike from '../../assets/'
const ProductCard = ({ title, product }) => {
	const { name, price, imageUrl } = product;

	const dispatch = useDispatch();
	const cartItems = useSelector(selectCartItems);

	const addProductToCart = () => dispatch(addItemToCart(cartItems, product));

	return (
		<Link to={`/${title}/${name}`}>
			<div className="product-card-container">
				<div className={`product-card-img-container ${title}`}>
					<img src={imageUrl} alt={`${name}`} />
					<span className="price">{price}€</span>
				</div>
				{/* <div className="footer"> */}
				<span className="name">{name}</span>
				{/* </div> */}
				{/* <Button buttonType='inverted' onClick={addProductToCart}>
        Add to card
      </Button> */}
			</div>
		</Link>
	);
};

export default ProductCard;
