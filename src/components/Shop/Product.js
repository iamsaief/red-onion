import React from "react";
import { Link } from "react-router-dom";

const Product = ({ product }) => {
	const { title, desc, price, imgUrl, id } = product;
	return (
		<div className="col-lg-4 col-md-6">
			<div className="rd-product-card">
				<Link to={`product/${id}`}>
					<img src={imgUrl} alt="breakfast 1" />
					<h4 className="title">{title}</h4>
					<p className="desc">{desc}</p>
					<h3 className="price">${price}</h3>
				</Link>
			</div>
		</div>
	);
};

export default Product;
