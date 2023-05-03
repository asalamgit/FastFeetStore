import ProductCard from '../product-card/product-card.component';
import { Link } from 'react-router-dom';
import './category-preview.styles.scss';
import { useEffect } from 'react';

const CategoryPreview = ({ title, products }) => {
	// useEffect(() => {
	// 	console.log('products === ', products);
	// }, []);

	return (
		<div className="category-preview-container">
			<div className="category-preview-header">
				<h2>
					<Link className="title" to={title}>
						{title.toUpperCase()}
					</Link>
					<button>See more</button>
				</h2>
			</div>
			<div className="preview">
				{products
					.filter((_, idx) => idx < 4)
					.map((product) => (
						<ProductCard key={product.id} product={product} />
					))}
			</div>
		</div>
	);
};

export default CategoryPreview;
