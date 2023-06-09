import CategoryItem from '../directory-item/directory-item.component';

import './directory.styles.scss';

const Directory = ({ categories }) => {
	return (
		<div className="directory-container">
			<div className="categories-line">
				<div className="categories-line-column categories-line-left">
					<CategoryItem key={categories[0].id} category={categories[0]} />
					<CategoryItem key={categories[1].id} category={categories[1]} />
				</div>
				<div className="categories-line-column categories-line-right">
					<CategoryItem key={categories[2].id} category={categories[2]} />
					<CategoryItem key={categories[3].id} category={categories[3]} />
				</div>
			</div>
			<div className="categories-line">
				<div className="categories-line-column categories-line-left">
					<CategoryItem key={categories[4].id} category={categories[4]} />
					<CategoryItem key={categories[5].id} category={categories[5]} />
				</div>
				<div className="categories-line-column categories-line-right">
					<CategoryItem key={categories[6].id} category={categories[6]} />
					<CategoryItem key={categories[7].id} category={categories[7]} />
				</div>
			</div>
		</div>
	);
};

export default Directory;
