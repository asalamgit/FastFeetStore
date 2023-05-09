import { Outlet } from 'react-router-dom';
import CategoryPreview from '../../components/category-preview/category-preview.component';
import { selectCategoriesMap } from '../../store/categories/categories.selector';
import { useSelector } from 'react-redux';
import './home.styles.scss';

import Directory from '../../components/directory/directory.component';

const categories = [
	{
		id: 1,
		title: 'Nike',
		imageUrl: 'https://essm-basket.fr/wp-content/uploads/2018/06/Nike-Logo-PNG.png',
	},
	{
		id: 2,
		title: 'Adidas',
		imageUrl: 'https://companieslogo.com/img/orig/ADS.DE.D-06dd1c21.png?t=1635011710',
	},
	{
		id: 3,
		title: 'Puma',
		imageUrl: 'https://chelsfieldlakes.co.uk/wp-content/uploads/2017/08/puma-logo-white.png',
	},
	{
		id: 4,
		title: 'Asics',
		imageUrl: 'https://static.wixstatic.com/media/fed9d3_807732447e434748827cadec26f9a197~mv2.png/v1/fill/w_560,h_196,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/Asics%20(White%201).png',
	},
	{
		id: 5,
		title: 'Mizuno',
		imageUrl: 'https://www.tccommunications.co.uk/wp-content/uploads/2016/09/mizuno-logo-white-v2-500x350.png',
	},
	{
		id: 6,
		title: 'New Balance',
		imageUrl: 'https://www.freepnglogos.com/uploads/new-balance-png-logo/live-event-sports-streams-new-balance-png-logo-4.png',
	},
	{
		id: 7,
		title: 'Saucony',
		imageUrl: 'https://www.coolshoes.com/uploads/1/0/7/5/107516375/published/saucony-white.png',
	},
	{
		id: 8,
		title: 'Brooks',
		imageUrl: 'https://cdn.shopify.com/s/files/1/0607/7903/6861/collections/Logo-Brooks-padding.png?v=1664835549',
	},
];

const Home = () => {
	const categoriesMap = useSelector(selectCategoriesMap);

	function handleScroll() {
		const sectionDestination = document.querySelector('#brands');
		sectionDestination.scrollIntoView({ behavior: 'smooth' });
	}

	function handleScroll2() {
		const sectionDestination = document.querySelector('#categories-preview');
		sectionDestination.scrollIntoView({ behavior: 'smooth' });
	}

	return (
		<div className="home">
			<div className="main-img-container">
				<img src="https://hips.hearstapps.com/hmg-prod/images/first-sun-jogging-royalty-free-image-858538028-1549395748.jpg?crop=1.00xw:0.817xh;0,0.0914xh&resize=1200:*" alt="runner" />
				<div className="text-container">
					<div className="text">
						<h1>FastFeetStore</h1>
						<p>Welcome to our website dedicated to running enthusiasts! We have gathered for you a selection of the best running shoes available online, so that you can find the perfect pair to accompany you on all your runs.</p>
					<div className='buttons-container'>
						<button onClick={handleScroll}>Discover our shoe brands</button>
						<button onClick={handleScroll2}>Preview shoes</button>
					</div>
					</div>
				</div>
			</div>
			<div id="brands">
				<h2>Discover our shoe brands</h2>
				<Directory categories={categories} />
			</div>
			{/* <Outlet /> */}
			<div className="separator"></div>
			<div id="categories-preview">
				<h2>Preview shoes</h2>
				{Object.keys(categoriesMap).map((title) => {
					const products = categoriesMap[title];
					return <CategoryPreview key={title} title={title} products={products} />;
				})}
			</div>
		</div>
	);
};

export default Home;
