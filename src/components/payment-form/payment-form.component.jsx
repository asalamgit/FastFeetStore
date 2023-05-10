import { useState } from 'react';
import { CardElement, useStripe, useElements } from '@stripe/react-stripe-js';
import { useSelector } from 'react-redux';
import { toast } from 'react-toastify';
import { selectCartTotal } from '../../store/cart/cart.selector';
import { selectCurrentUser } from '../../store/user/user.selector';
import { clearCart } from '../../store/cart/cart.action';
import './payment-form.styles.scss';
import { useDispatch } from 'react-redux';

const PaymentForm = () => {
	const stripe = useStripe();
	const elements = useElements();
	const amount = useSelector(selectCartTotal);
	const currentUser = useSelector(selectCurrentUser);
	const [isProcessingPayment, setIsProcessingPayment] = useState(false);
	const dispatch = useDispatch();

	const paymentHandler = async (e) => {
		e.preventDefault();
		if (!stripe || !elements) {
			return;
		}
		setIsProcessingPayment(true);
		const response = await fetch('/.netlify/functions/create-payment-intent', {
			method: 'post',
			headers: {
				'Content-Type': 'application/json',
				Accept: 'application/json',
			},
			body: JSON.stringify({ amount: amount * 100 }),
		}).then((res) => {
			return res.json();
		});

		const clientSecret = response.paymentIntent.client_secret;

		const paymentResult = await stripe.confirmCardPayment(clientSecret, {
			payment_method: {
				card: elements.getElement(CardElement),
				billing_details: {
					name: currentUser ? currentUser.displayName : 'Guest',
				},
			},
		});

		setIsProcessingPayment(false);

		if (paymentResult.error) {
			toast.error(paymentResult.error.message);
		} else {
			if (paymentResult.paymentIntent.status === 'succeeded') {
				dispatch(clearCart());
				toast.success('Payment Successful!');
			}
		}
	};

  const CARD_ELEMENT_OPTIONS = {
    style: {
      base: {
        color: "#ffffff",
        "::placeholder": {
          color: "#aab7c4",
        },
      },
    },
  };

	return (
		<div className="payment-form-container">
			<form className="form-container" onSubmit={paymentHandler}>
				<h2>Credit Card Payment:</h2>
				<CardElement options={CARD_ELEMENT_OPTIONS}/>
				<button className="payment-button">{isProcessingPayment ? <div className="loading-spinner" /> : 'Pay Now'}</button>
			</form>
		</div>
	);
};
export default PaymentForm;
