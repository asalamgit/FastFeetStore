import './directory-item.styles.scss';
import { Link } from 'react-router-dom';
import nike from '../../assets/logo/nike.png';

let src = '../../assets/logo/nike.png';
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
