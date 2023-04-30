import { Fragment } from 'react';
import { Link, Outlet } from 'react-router-dom';
import FastFeetLogo from '../../assets/Logo.png';
import { signOutUser } from '../../utils/firebase/firebase.utils';
import CartIcon from '../../components/cart-icon/cart-icon.component';
import CartDropdown from '../../components/cart-dropdown/cart-dropdown.component';
import { useSelector } from 'react-redux';
import { selectCurrentUser } from '../../store/user/user.selector';
import { selectIsCartOpen } from '../../store/cart/cart.selector';
import './navigation.styles.scss'

const Navigation = () => {
	const currentUser = useSelector(selectCurrentUser);
	const isCartOpen = useSelector(selectIsCartOpen);

	return (
		<>
      <div className="NavigationContainer">
        <Link to="/" className="LogoContainer">
          {/* <FastFeetLogo className="logo" /> */}
					<img src={FastFeetLogo}/>
					{/* RUNSALES */}
        </Link>
        <div className="NavLinks">
          <Link to="/shop" className="NavLink">
            SHOP
          </Link>
          {currentUser ? (
            <span className="NavLink" onClick={signOutUser}>
              SIGN OUT
            </span>
          ) : (
            <Link to="/auth" className="NavLink">
              SIGN IN
            </Link>
          )}
          <CartIcon />
        </div>
        {isCartOpen && <CartDropdown />}
      </div>
      <Outlet />
    </>
	);
};

export default Navigation;
