import './checkout-item.styles.scss';
import { useDispatch, useSelector } from 'react-redux';
import { clearItemFromCart, addItemToCart, removeItemFromCart } from '../../store/cart/cart.action';
import { selectCartItems } from '../../store/cart/cart.selector';

const CheckoutItem = ({ cartItem }) => {
	const { name, imageUrl, price, quantity, id, sizeChoose } = cartItem;

	const dispatch = useDispatch();
	const cartItems = useSelector(selectCartItems);

	const clearItemHandler = () => dispatch(clearItemFromCart(cartItems, cartItem));
	const addItemHandler = () => dispatch(addItemToCart(cartItems, cartItem));
	const removeItemHandler = () => dispatch(removeItemFromCart(cartItems, cartItem));

	const findCategory = () => {
		if (id >= 100 && id < 200) return 'nike';
		else if (id >= 200 && id < 300) return 'adidas';
		else if (id >= 300 && id < 400) return 'puma';
		else if (id >= 400 && id < 500) return 'asics';
		else if (id >= 500 && id < 600) return 'brooks';
		else if (id >= 600 && id < 700) return 'mizuno';
		else if (id >= 700 && id < 800) return 'newbalance';
		else if (id >= 800 && id < 900) return 'saucony';
	};

	return (
		<div className="checkout-item-container">
			<div className={`img-container  ${findCategory()}`}>
				<img src={imageUrl} alt={`${name}`} />
			</div>
			<div className="product-info">
				<span className="name"> Name : {name} </span>
				<span className="size"> Size : {sizeChoose} </span>
				<span className="price"> Price : {price} €</span>
				<span className="sub-total"> Subtotal : {price * quantity} €</span>
			</div>
			<div className='action'>
			<span className="quantity">
				<div className="arrow" onClick={removeItemHandler}>
					&#10094;
				</div>
				<span className="value">{quantity}</span>
				<div className="arrow" onClick={addItemHandler}>
					&#10095;
				</div>
			</span>
			<div className="remove-button" onClick={clearItemHandler}>
				<span class="material-symbols-outlined">delete</span>
			</div>
			</div>
		</div>
	);
};

export default CheckoutItem;
