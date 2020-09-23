import React, { useContext, useState } from "react";
import { useParams } from "react-router-dom";
import { ShopContext } from "../../App";
import { fakeData } from "../../fakeData";

const ProductDetails = () => {
	const { cart } = useContext(ShopContext);
	const [cartItems, setCartItems] = cart;

	const { id } = useParams();

	const selectedProduct = fakeData.find((item) => item.id === id);
	const { title, longDesc, price, imgUrl } = selectedProduct;

	const [quantity, setQuantity] = useState(1);
	const handleChangeQuantity = ({ target }) => {
		// console.log(target.name, target.value);
		setQuantity(target.value);
	};
	const handleAddToCart = (e) => {
		e.preventDefault();
		/* 
		let isExist = cartItems.find((item) => item.id === id);
		if (!isExist) {
			const newCart = [
				...cartItems,
				{
					title,
					id,
					quantity: Number(quantity),
					price,
				},
			];
			setCartItems(newCart);
		} else {
			let newQuantity = Number(quantity);
			isExist.quantity = newQuantity;
			console.log(quantity, isExist.quantity, "card q", cartItems.quantity);
			let index = cartItems.indexOf(isExist.id);
			cartItems[index] = isExist;

			const newCart = [{ ...cartItems }];
			setCartItems(newCart);
		}
		console.log("is exists =>", isExist); */
	};
	console.log("cart =>", cartItems);

	return (
		<section className="rd-product-details">
			<div className="container">
				<div className="row">
					<div className="col-md-6">
						<div className="product-details-info">
							<h2>{title}</h2>
							<p>{longDesc} </p>

							<form className="addtocart" onSubmit={handleAddToCart}>
								<div className="form-group">
									<h3>${price}</h3>
									<input
										type="number"
										name="quantity"
										min="1"
										className="form-control"
										defaultValue={quantity}
										onChange={handleChangeQuantity}
									/>
								</div>
								<button className="btn btn-danger btn-round">
									<i className="fas fa-shopping-cart"></i> Add
								</button>
							</form>

							<div className="product-details-thumbs-sm">
								<img src={imgUrl} alt="" />
								<img src={imgUrl} alt="" />
							</div>
						</div>
					</div>
					<div className="col-md-6">
						<div className="product-details-thumb">
							<img src={imgUrl} alt="" />
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default ProductDetails;
