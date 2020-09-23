import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { ShopContext } from "../../App";
import logo2 from "../../images/logo2.png";

const Header = () => {
	const {
		cart: [cartItems, setCartItems],
	} = useContext(ShopContext);

	// const totalItems = cartItems.reduce((total, item) => total + +item.quantity, 0);
	const totalItems = cartItems.reduce((total, item) => total + +item.quantity, 0);

	return (
		<header className="ho-header sticky-top">
			<nav className="navbar sticky-top navbar-expand-md navbar-light bg-light">
				<Link to="/" className="navbar-brand">
					<div className="logo">
						<img src={logo2} alt="logo dark" />
					</div>
				</Link>
				<button
					className="navbar-toggler"
					type="button"
					data-toggle="collapse"
					data-target="#navbarTogglerDemo02"
					aria-controls="navbarTogglerDemo02"
					aria-expanded="false"
					aria-label="Toggle navigation"
				>
					<span className="navbar-toggler-icon"></span>
				</button>

				<div className="collapse navbar-collapse" id="navbarTogglerDemo02">
					<ul className="navbar-nav ml-auto mt-2 mt-lg-0">
						<li className="nav-item active">
							<Link to="/order" className="nav-link">
								<div className="cart-icon">
									<i className="fas fa-shopping-cart"></i>
									{cartItems.length > 0 && <span>{totalItems}</span>}
								</div>
							</Link>
						</li>
						{/* <li className="nav-item">
							<Link to="/login" className="nav-link">
								Login
							</Link>
						</li> */}
						<li className="nav-item">
							<Link to="/login" className="btn btn-danger btn-round btn-round">
								Sign up
							</Link>
						</li>
					</ul>
				</div>
			</nav>
		</header>
	);
};

export default Header;
