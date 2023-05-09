import { useState, useEffect, Fragment } from 'react';
import { useParams } from 'react-router-dom';
import { selectCategoriesMap } from '../../store/categories/categories.selector';
import { useSelector } from 'react-redux';

import './product.styles.scss';

const sizes = [39, 40, 41, 42, 43, 44, 45, 46, 47];

const Product = () => {
	const { category, product } = useParams();
	const categoriesMap = useSelector(selectCategoriesMap);
	const [productInfo] = useState(categoriesMap[category].find((element) => element.name === product));

	return (
		<div className="product">
			<div className={`img-container  ${category}`}>
				<img src={productInfo.imageUrl} alt={product} />
			</div>
			<div className="product-info">
				<h3>{category.toUpperCase()} {productInfo.name}</h3>
				<h4>{productInfo.price} €</h4>
				<div className="select-sizes">
					<h5>Select size</h5>
					<div className="sizes">
						{sizes.map((size) => (
							<div className="size">{size}</div>
						))}
					</div>
				</div>
				<button>Add to Cart</button>
			</div>
		</div>
	);
};

export default Product;
