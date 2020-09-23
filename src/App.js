import React, { createContext, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Home from "./components/Home/Home";
import Header from "./components/Header/Header";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Footer from "./components/Footer/Footer";
import ProductDetails from "./components/Shop/ProductDetails";
import Order from "./components/Order/Order";

export const ShopContext = createContext();

function App() {
	const [cartItems, setCartItems] = useState([]);
	const [loggedInUser, setLoggedInUser] = useState([]);
	return (
		<ShopContext.Provider
			value={{
				cart: [cartItems, setCartItems],
				user: [loggedInUser, setLoggedInUser],
			}}
		>
			<Router>
				<Header></Header>
				<Switch>
					<Route exact path="/">
						<Home></Home>
					</Route>
					<Route path="/product/:id">
						<ProductDetails></ProductDetails>
					</Route>
					<Route path="/order">
						<Order></Order>
					</Route>
				</Switch>
				<Footer></Footer>
			</Router>
		</ShopContext.Provider>
	);
}

export default App;
