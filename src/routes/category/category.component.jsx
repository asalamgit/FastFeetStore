import { useState, useEffect, Fragment } from 'react';
import { useParams } from 'react-router-dom';
import { selectCategoriesMap } from '../../store/categories/categories.selector';
import { useSelector } from 'react-redux';
import runningPicture from '../../assets/runningPicture4.png'
import ProductCard from '../../components/product-card/product-card.component';

import './category.styles.scss';

const Category = () => {
	const { category } = useParams();
	const categoriesMap = useSelector(selectCategoriesMap);
	const [products, setProducts] = useState(categoriesMap[category]);

	useEffect(() => {
		setProducts(categoriesMap[category]);
	}, [category, categoriesMap]);

	return (
		<Fragment>
			<div className="main-img-container">
				<img src={runningPicture} alt="runner" />
				<div className="text-container">
					<div className="text">
						<h1>{category.toUpperCase()}</h1>
					</div>
				</div>
			</div>
			<div className="category-container">{products && products.map((product) => <ProductCard key={product.id} product={product} title={category} />)}</div>
		</Fragment>
	);
};

export default Category;
