import { Outlet } from 'react-router-dom';

import Directory from '../../components/directory/directory.component';

const Home = () => {
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
			title: 'Sauconi',
			imageUrl: 'https://www.coolshoes.com/uploads/1/0/7/5/107516375/published/saucony-white.png',
		},
    {
			id: 8,
			title: 'Brooks',
			imageUrl: 'https://cdn.shopify.com/s/files/1/0607/7903/6861/collections/Logo-Brooks-padding.png?v=1664835549',
		},
	];

	return (
		<div>
			<Directory categories={categories} />
			{/* <Outlet /> */}
		</div>
	);
};

export default Home;
