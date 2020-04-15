import React from "react";
import "./styles.css";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import Header from "../../components/header";
import BookList from "../../components/booklist";

const Browse = props => {
	return (
		<div className="browse">
			<Header />
			<div className="sections">
				<BookList title="Top Rated"/>
				<BookList title="Popular"/>
				<BookList title="Recommended"/>
			</div>
		</div>
	);
};
export default Browse;
