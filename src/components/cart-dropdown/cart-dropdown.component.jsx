import CartItem from '../cart-item/cart-item.component';
import './cart-dropdown.styles.scss';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { selectCartItems, selectIsCartOpen } from '../../store/cart/cart.selector';
import { setIsCartOpen } from '../../store/cart/cart.action';

const CartDropdown = () => {
	const navigate = useNavigate();
	const cartItems = useSelector(selectCartItems);
	const dispatch = useDispatch();
	const isCartOpen = useSelector(selectIsCartOpen);

	const toggleIsCartOpen = () => dispatch(setIsCartOpen(!isCartOpen));

	const goToCheckoutHandler = () => {
		navigate('/checkout');
		toggleIsCartOpen();
	};

	return (
		<div className="cart-dropdown-container">
			<div className="cart-items">{cartItems.length ? cartItems.map((cartItem) => <CartItem key={cartItem.id} cartItem={cartItem} />) : <span className="empty-message">Your cart is empty</span>}</div>
			<button onClick={goToCheckoutHandler}>GO TO CHECKOUT</button>
		</div>
	);
};

export default CartDropdown;
