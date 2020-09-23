import React from "react";

const AboutUs = () => {
	return (
		<section className="ho-about-us py-5">
			<div className="container">
				<div className="ho-about-us-intro">
					<div className="row">
						<div className="col-md-6">
							<h3>Why Choose Us</h3>
							<p>
								Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus sunt nobis
								corrupti a pariatur maiores aliquam veniam odio qui omnis hic fuga plac
							</p>
						</div>
					</div>
				</div>
				<div className="ho-about-us-cards py-5">
					<div className="row">
						<div className="col-md-4">
							<div className="about-us-card mb-lg-0 mb-4">
								<img
									src={require("../../images/Image/adult-blur-blurred-background-687824.png")}
									alt=""
								/>
								<div className="content">
									<div className="icon">
										<i className="fas fa-shopping-cart"></i>
									</div>
									<div className="info">
										<h4>A Good Auto Responder</h4>
										<p>
											Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis corrupti
											quo officiis,
										</p>
										<a href="/about-us">
											See more <i className="fas fa-arrow-right"></i>
										</a>
									</div>
								</div>
							</div>
						</div>
						<div className="col-md-4">
							<div className="about-us-card mb-lg-0 mb-4">
								<img src={require("../../images/Image/chef-cook-food-33614.png")} alt="" />
								<div className="content">
									<div className="icon">
										<i className="fas fa-shopping-cart"></i>
									</div>
									<div className="info">
										<h4>A Good Auto Responder</h4>
										<p>
											Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis corrupti
											quo officiis,
										</p>
										<a href="/about-us">
											See more <i className="fas fa-arrow-right"></i>
										</a>
									</div>
								</div>
							</div>
						</div>
						<div className="col-md-4">
							<div className="about-us-card mb-lg-0 mb-4">
								<img
									src={require("../../images/Image/architecture-building-city-2047397.png")}
									alt=""
								/>
								<div className="content">
									<div className="icon">
										<i className="fas fa-shopping-cart"></i>
									</div>
									<div className="info">
										<h4>A Good Auto Responder</h4>
										<p>
											Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis corrupti
											quo officiis,
										</p>
										<a href="/about-us">
											See more <i className="fas fa-arrow-right"></i>
										</a>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default AboutUs;
