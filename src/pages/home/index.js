import React from "react";
import "./styles.css";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";

const Home = props => {
	return (
		<div className="home">
			<div className="center">
				<Typography variant="h1">Look Inna Book</Typography>
				<Typography variant="h2">Online Bookstore</Typography>
				<div style={{marginTop:"64px"}}>
				<Typography variant="h3">Log in as:</Typography>
				</div>
				<div className="buttonContainer">
					<Button variant="contained" color="primary">
						Buyer
					</Button>
					<Button variant="contained" color="secondary">
						Seller
					</Button>
				</div>
			</div>
		</div>
	);
};
export default Home;
