import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { ShopContext } from "../../App";

const Order = () => {
	const {
		cart: [cartItems, setCartItems],
	} = useContext(ShopContext);

	const updateCart = (productId) => (event) => {
		const newCount = event.target.value;

		setCartItems((prevProducts) => {
			let updatedState = prevProducts.map((product) => {
				if (product.id === productId) {
					return { ...product, quantity: newCount };
				}
				return product;
			});
			return updatedState;
		});
	};

	const renderCartItems = () => {
		return cartItems.map(({ title, price, id, quantity, imgUrl }) => (
			<div className="item" key={id}>
				<img src={imgUrl} alt="" />
				<div>
					<h4>{title}</h4>
					<h3>${price}</h3>
					<h5>Delivery free</h5>
				</div>
				<div>
					<input
						type="number"
						name="quantity"
						value={quantity}
						min="1"
						className="form-control"
						onChange={updateCart(id)}
					/>
				</div>
			</div>
		));
	};

	const renderPriceSection = () => {
		const totalItems = cartItems.reduce((total, item) => total + +item.quantity, 0);
		const totalPrice = cartItems.reduce((total, item) => total + +item.price * +item.quantity, 0);
		const tax = 5;
		const deliveryCharge = 2;

		return (
			<>
				<div className="order-cart-price">
					<div>
						<p>
							Subtotal . <span>{totalItems} items</span>
						</p>
						<p>${parseFloat(totalPrice).toFixed(2)}</p>
					</div>
					<div>
						<p>Tax</p>
						<p>${parseFloat(tax).toFixed(2)}</p>
					</div>
					<div>
						<p>Delivery charge</p>
						<p>${parseFloat(deliveryCharge).toFixed(2)}</p>
					</div>
					<div className="total">
						<p>Total</p>
						<p>${parseFloat(totalPrice + tax + deliveryCharge).toFixed(2)}</p>
					</div>
				</div>
				<div className="order-cart-checkout rd-shop-checkout">
					<Link to="/delivery">
						<button className="btn btn-danger rd-primary" disabled={!cartItems.length && true}>
							Place Order
						</button>
					</Link>
				</div>
			</>
		);
	};

	const handleDeliveryDetails = (e) => {
		e.preventDefault();
	};

	return (
		<section className="rd-order-details">
			<div className="container">
				<div className="row">
					<div className="col-md-7">
						<div className="order-delivery">
							<div className="rd-form-title">
								<h2>Edit Delivery Details</h2>
							</div>
							<form className="rd-form py-5" onSubmit={handleDeliveryDetails}>
								{/* <div className="form-group">
									<select className="form-control">
										<option selected>Open this select menu</option>
										<option value="delivery-type-1">Type One</option>
										<option value="delivery-type-2">Type Two</option>
										<option value="delivery-type-3">Type Three</option>
									</select>
								</div> */}
								<div className="form-group">
									<input type="text" className="form-control" name="city" placeholder="City" />
								</div>
								<div className="form-group">
									<input type="text" className="form-control" name="zipcode" placeholder="Zip code" />
								</div>
								<div className="form-group">
									<textarea
										className="form-control"
										name="address"
										placeholder="Full Address"
									></textarea>
								</div>
								<button className="btn btn-danger rd-primary">Save and continue</button>
							</form>
						</div>
					</div>
					<div className="col-md-5">
						<div className="order-cart">
							<div>
								<p>
									From <strong>Gulshan Plaza Restaura GPR</strong>
								</p>
								<p>Arriving Time 20-30 min</p>
								<p>Road #35, House #45</p>
							</div>
							<div className="order-cart-items">
								{cartItems.length ? (
									renderCartItems()
								) : (
									<strong style={{ color: "#e1143e" }}>Cart is Empty</strong>
								)}
							</div>
							{cartItems.length > 0 && renderPriceSection()}
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Order;
