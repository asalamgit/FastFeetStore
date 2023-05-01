import './directory-item.styles.scss';

const DirectoryItem = ({ category }) => {
	const { imageUrl, title } = category;
	return (
		<div className="directory-item-container">
			<div className="img-container">
				<img src={imageUrl} alt="nike" />
			</div>
			<h2>{title}</h2>
		</div>
	);
};

export default DirectoryItem;
