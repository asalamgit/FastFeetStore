import { useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './routes/home/home.component';
import Navigation from './routes/navigation/navigation.component';
import Authentication from './routes/authentication/authentication.component';
import Checkout from './routes/checkout/checkout.component';
import { useDispatch, useSelector } from 'react-redux';
import { createUserDocumentFromAuth, onAuthStateChangedListener } from './utils/firebase/firebase.utils';
import { setCurrentUser } from './store/user/user.action';
import { getCategoriesAndDocuments } from './utils/firebase/firebase.utils';
import { setCategories } from './store/categories/categories.action';
import Category from './routes/category/category.component';
import NotFound from './routes/NotFound/NotFound';
import Product from './routes/product/product.component';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { selectIsCartOpen } from './store/cart/cart.selector';
import { setIsCartOpen } from './store/cart/cart.action';

const App = () => {
	const dispatch = useDispatch();
	const isCartOpen = useSelector(selectIsCartOpen);

	useEffect(() => {
		const getCategoriesMap = async () => {
			const categoriesArray = await getCategoriesAndDocuments('categories');
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

	const toggleIsCartOpen = () => {
		if (isCartOpen) dispatch(setIsCartOpen(!isCartOpen));
	};

	return (
		<div onClick={toggleIsCartOpen}>
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
			<ToastContainer theme="colored" autoClose={1000} />
		</div>
	);
};

export default App;
