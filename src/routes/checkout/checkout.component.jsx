import { useSelector } from 'react-redux';
import { selectCartItems, selectCartTotal } from '../../store/cart/cart.selector';
import CheckoutItem from '../../components/checkout-item/checkout-item.component';
import PaymentForm from '../../components/payment-form/payment-form.component';
import './checkout.styles.scss';

const Checkout = () => {
	const cartItems = useSelector(selectCartItems);
	const cartTotal = useSelector(selectCartTotal);

	return (
		<div className="checkout-container">
			{cartTotal > 0 ? (
				<>
					{cartItems.map((cartItem) => (
						<CheckoutItem key={`${cartItem.id} + ${cartItem.sizeChoose}`} cartItem={cartItem} />
					))}
					<div className="total">TOTAL: {cartTotal} €</div>
					<PaymentForm />
				</>
			) : (
				<h1>Your cart is empty</h1>
			)}
		</div>
	);
};

export default Checkout;
