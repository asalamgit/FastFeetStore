import { useEffect } from 'react';
import './cart-item.styles.scss';

const CartItem = ({ cartItem }) => {
	const { imageUrl, price, name, quantity, id, size } = cartItem;

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

	// useEffect(()=>{
	//   console.log("cartitem == ", cartItem)
	// },[])

	return (
		<div className="cart-item-container">
			<div className={`img-container  ${findCategory()}`}>
				<img src={imageUrl} alt={`${name}`} />
			</div>
			{/* <div className="item-details">
				<span className="name">{name}</span>
				<span className="price">
					{quantity} x {price} €
				</span>
			</div> */}
		</div>
	);
};

export default CartItem;
