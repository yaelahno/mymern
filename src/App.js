import React from "react";
import "assets/scss/style.scss";
import { BrowserRouter as Router, Route } from "react-router-dom";
import LandingPage from "pages/LandingPage";
import DetailsPage from "pages/DetailsPage";

const App = (props) => {
	return (
		<div className="App">
			<Router>
				<Route exact path="/" component={LandingPage} />
				<Route path="/properties/:id" component={DetailsPage} />
			</Router>
		</div>
	);
};

export default App;
