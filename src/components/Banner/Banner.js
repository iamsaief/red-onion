import React from "react";

const Banner = () => {
	return (
		<section className="rd-banner">
			<div className="container">
				<div className="rd-banner-search">
					<h2 className="display-4 mb-4">Best food waiting for your belly</h2>
					<div className="form-group">
						<input type="search" placeholder="Search food items" className="form-control" />
						<button className="btn btn-danger btn-round btn-round" type="button" id="button-addon2">
							Search
						</button>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Banner;
