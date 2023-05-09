import { useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './routes/home/home.component';
import Navigation from './routes/navigation/navigation.component';
import Authentication from './routes/authentication/authentication.component';
import Checkout from './routes/checkout/checkout.component';
import { useDispatch } from 'react-redux';
import { createUserDocumentFromAuth, onAuthStateChangedListener } from './utils/firebase/firebase.utils';
import { setCurrentUser } from './store/user/user.action';
import { getCategoriesAndDocuments } from './utils/firebase/firebase.utils';
import { setCategories } from './store/categories/categories.action';
import Category from './routes/category/category.component';
import NotFound from './routes/NotFound/NotFound';
import Product from './routes/product/product.component';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const App = () => {
	const dispatch = useDispatch();

	useEffect(() => {
		const getCategoriesMap = async () => {
			const categoriesArray = await getCategoriesAndDocuments('categories');
			// console.log(categoriesArray)
			dispatch(setCategories(categoriesArray));
		};

		getCategoriesMap();
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	useEffect(() => {
		const unsubscribe = onAuthStateChangedListener((user) => {
			if (user) {
				createUserDocumentFromAuth(user);
			}

			dispatch(setCurrentUser(user));
		});

		return unsubscribe;
	}, [dispatch]);

	return (
		<>
			<Routes>
				<Route path="/" element={<Navigation />}>
					<Route index element={<Home />} />
					<Route path=":category" element={<Category />} />
					<Route path=":category/:product" element={<Product />} />
					<Route path="auth" element={<Authentication />} />
					<Route path="checkout" element={<Checkout />} />
					<Route path="*" element={<NotFound />} />
				</Route>
			</Routes>
			<ToastContainer theme="colored" autoClose={1000}/>
		</>
	);
};

export default App;
