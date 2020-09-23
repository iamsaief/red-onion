import React from "react";
import AboutUs from "../AboutUs/AboutUs";
import Banner from "../Banner/Banner";
import Shop from "../Shop/Shop";

const Home = () => {
	return (
		<div className="ro-home">
			<Banner></Banner>
			<Shop></Shop>
			<AboutUs></AboutUs>
		</div>
	);
};

export default Home;
