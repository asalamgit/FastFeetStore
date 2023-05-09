import { useState, useEffect, Fragment } from 'react';
import { useParams } from 'react-router-dom';
import { selectCategoriesMap } from '../../store/categories/categories.selector';
import { useSelector } from 'react-redux';

import './product.styles.scss';

const sizes = [39, 40, 41, 42, 43, 44, 45, 46, 47, 48];

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
				<h3>{productInfo.name}</h3>
				<h4>{productInfo.price} €</h4>
				<div className="select-sizes">
					<p>Select size</p>
					<div className="sizes">
						{sizes.map((size) => (
							<p className="size">{size}</p>
						))}
					</div>
				</div>
			</div>
		</div>
	);
};

export default Product;
