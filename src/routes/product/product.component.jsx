import { useState} from 'react';
import { useParams } from 'react-router-dom';
import { selectCategoriesMap } from '../../store/categories/categories.selector';
import { useDispatch, useSelector } from 'react-redux';
import { selectCartItems } from '../../store/cart/cart.selector';
import { addItemToCart } from '../../store/cart/cart.action';
import './product.styles.scss';
import { toast } from 'react-toastify';

const sizes = [39, 40, 41, 42, 43, 44, 45, 46, 47];

const Product = () => {
	const { category, product } = useParams();
	const [sizeChoose, setSizeChoose] = useState(39);
	const categoriesMap = useSelector(selectCategoriesMap);
	const [productInfo] = useState(categoriesMap[category].find((element) => element.name === product));
	const dispatch = useDispatch();
	const cartItems = useSelector(selectCartItems);

	const addProductToCart = () => {
		dispatch(addItemToCart(cartItems, { ...productInfo, sizeChoose }));
		toast.success('Product add to cart')
	};

	return (
		<div className="product">
			<div className={`img-container  ${category}`}>
				<img src={productInfo.imageUrl} alt={product} />
			</div>
			<div className="product-info">
				<h3>
					{category.toUpperCase()} {productInfo.name}
				</h3>
				<h4>{productInfo.price} €</h4>
				<div className="select-sizes">
					<h5>Select size</h5>
					<div className="sizes">
						{sizes.map((size) => (
							<div key={size} onClick={() => setSizeChoose(size)} className={`size ${size === sizeChoose && 'activeSize'}`}>
								{size}
							</div>
						))}
					</div>
				</div>
				<button onClick={addProductToCart}>Add to Cart</button>
			</div>
		</div>
	);
};

export default Product;
