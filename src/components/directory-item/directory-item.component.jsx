import './directory-item.styles.scss';
import { Link } from 'react-router-dom';

const DirectoryItem = ({ category }) => {
	const { imageUrl, title } = category;
	return (
		<Link to={title.toLowerCase()} className="NavLink">
			<div className="directory-item-container">
				<div className="img-container">
					<img src={imageUrl} alt={title} />
				</div>
				<h2>{title}</h2>
			</div>
		</Link>
	);
};

export default DirectoryItem;
