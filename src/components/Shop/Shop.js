import React, { useContext, useState } from "react";
import Product from "./Product";
import { fakeData } from "../../fakeData";
import { ShopContext } from "../../App";
import { Link } from "react-router-dom";

const Shop = () => {
	const menuItems = fakeData;

	const initCategory = menuItems.filter((item) => item.category === "breakfast");
	const categoriesBtn = [...new Set(menuItems.map((item) => item.category))];
	const [displayCategory, setDisplayCategory] = useState(initCategory);

	const handleToggleCategory = (category) => {
		const newCategory = menuItems.filter((item) => item.category === category);
		setDisplayCategory(newCategory);
	};

	const {
		cart: [cartItems, setCartItems],
	} = useContext(ShopContext);

	return (
		<section className="rd-shop py-5 text-center">
			<div className="container">
				<div className="rd-shop-filter">
					{categoriesBtn.map((cat) => (
						<button key={cat + 1} className="btn" onClick={() => handleToggleCategory(cat)}>
							{cat}
						</button>
					))}
				</div>
				<div className="rd-shop-products py-5">
					<div className="row">
						{displayCategory.map((item) => (
							<Product key={item.id} product={item}></Product>
						))}
					</div>
				</div>
				<div className="rd-shop-checkout">
					<Link to="/order">
						<button className="btn btn-danger rd-primary" disabled={!cartItems.length && true}>
							Checkout Your Food
						</button>
					</Link>
				</div>
			</div>
		</section>
	);
};

export default Shop;
