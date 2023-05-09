import ProductCard from '../product-card/product-card.component';
import { Link } from 'react-router-dom';
import './category-preview.styles.scss';
import { useEffect } from 'react';

const CategoryPreview = ({ title, products }) => {
	// useEffect(() => {
	// 	console.log('products === ', JSON.stringify(products));
	// }, []);

	return (
		<div className="category-preview-container">
			<div className="category-preview-header">
				<div className="title">
					<p>{title.toUpperCase()}</p>
				</div>
				<Link to={`${title}`}>
					<button>See more</button>
				</Link>
			</div>
			<div className="preview">
				{products
					.filter((_, idx) => idx < 4)
					.map((product) => (
						<ProductCard key={product.id} product={product} title={title} />
					))}
			</div>
		</div>
	);
};

export default CategoryPreview;
