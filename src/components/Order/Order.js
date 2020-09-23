import React from "react";

const Order = () => {
	return (
		<section className="rd-order-details">
			<div className="container">
				<div className="row">
					<div className="col-md-7">
						<div className="order-delivery">
							<div className="rd-form-title">
								<h2>Edit Delivery Details</h2>
							</div>
							<form className="rd-form py-5">
								<div className="form-group">
									{/* <select className="form-control">
										<option selected>Open this select menu</option>
										<option value="delivery-type-1">Type One</option>
										<option value="delivery-type-2">Type Two</option>
										<option value="delivery-type-3">Type Three</option>
									</select> */}
								</div>
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
								<div className="item">
									<img src="./images/lunch/lunch1.png" alt="" />
									<div>
										<h4>Butter Naan</h4>
										<h3>$40</h3>
										<h5>Delivery free</h5>
									</div>
									<div>
										<input
											type="number"
											name="quantity"
											defaultValue="1"
											min="1"
											className="form-control"
										/>
									</div>
								</div>
							</div>
							<div className="order-cart-price">
								<div>
									<p>
										Subtotal . <span>4 items</span>
									</p>
									<p>$320.00</p>
								</div>
								<div>
									<p>Tax</p>
									<p>$5.00</p>
								</div>
								<div>
									<p>Delivery charge</p>
									<p>$2.00</p>
								</div>
								<div className="total">
									<p>Total</p>
									<p>$327.00</p>
								</div>
							</div>
							<div className="order-cart-checkout rd-shop-checkout">
								<button className="btn btn-danger" disabled>
									Place Order
								</button>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Order;
