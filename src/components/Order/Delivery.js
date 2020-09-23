import React from "react";

const Delivery = () => {
	return (
		<section className="rd-order-complete py-5">
			<div className="container">
				<div className="row">
					<div className="col-md-8">
						<div className="order-map">
							<img src="https://i.ibb.co/Xb8XT2H/ordercomplete-map.jpg" alt="map image" />
						</div>
					</div>
					<div className="col-md-4">
						<div className="order-info mt-md-0 mt-4">
							<img src="https://i.ibb.co/0ngVpZn/delivary-bike.png" alt="bike" />
							<div className="location">
								<div>
									<h4>Your Location</h4>
									<h5>107 RD No 8</h5>
								</div>
								<div>
									<h4>Shop Address</h4>
									<h5>Gulshan Plaza Restaura GPR</h5>
								</div>
							</div>
							<div className="time">
								<h2>09:30</h2>
								<h3>Estimated delivary time</h3>
							</div>
							<div className="delivaryman">
								<img src="https://i.ibb.co/tzfs6wx/delivary-helmet.png" alt="helmet icon" />
								<div>
									<h5>Hamin</h5>
									<h6>Your rider</h6>
								</div>
							</div>
							<button className="btn btn-danger btn-round">Contact</button>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Delivery;
