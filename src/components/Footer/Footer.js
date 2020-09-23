import React from "react";
import logo from "../../images/logo.png";

const Footer = () => {
	return (
		<footer className="rd-footer py-3">
			<div className="container">
				<div className="footer-links py-5">
					<div className="row">
						<div className="col-md-6">
							<div className="footer-logo mb-md-0 mb-4">
								<img src={logo} alt="logo light" />
							</div>
						</div>
						<div className="col-md-6">
							<div className="row">
								<div className="col-6">
									<div className="links text-md-right text-left">
										<a href="/">About Online Food</a>
										<a href="/">About Online Food</a>
										<a href="/">About Online Food</a>
										<a href="/">About Online Food</a>
									</div>
								</div>
								<div className="col-6">
									<div className="links text-md-right text-left">
										<a href="/">About Online Food</a>
										<a href="/">About Online Food</a>
										<a href="/">About Online Food</a>
										<a href="/">About Online Food</a>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
				<div className="copyrights pt-5">
					<div className="row">
						<div className="col-md-5">
							<p className="copyright-info text-md-left text-center">
								&copy; 2020 | build with <span>❤️ &nbsp;</span>
								<a href="https://www.linkedin.com/in/saiefalemon/" target="_blank">
									Saief Al Emon
								</a>
							</p>
						</div>
						<div className="col-md-7">
							<div className="links text-md-right text-center">
								<a href="/">Privacy Policy</a>
								<a href="/">Terms of Use</a>
								<a href="/">Pricing</a>
							</div>
						</div>
					</div>
				</div>
			</div>
		</footer>
	);
};

export default Footer;
