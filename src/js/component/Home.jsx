import React from "react";
import BodyContainer from "./BodyContainer";
import Footer from "./Footer";
import Navbar from "./navbar";

//create your first component
const Home = () => {
	return (
		<>
			<Navbar/>
			<BodyContainer />
			<Footer />
		</>
	);
};

export default Home;
