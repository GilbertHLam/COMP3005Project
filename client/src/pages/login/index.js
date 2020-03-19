import React from "react";
import "./styles.css";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";

const Login = props => {
	return (
		<div className="login">
			<div className="center">
				<Typography variant="h1">Look Inna Book</Typography>
				<form>
					<TextField
						required
						id="login"
						label="User Name"
						defaultValue=""
					/>
					<br></br>
					<TextField
						required
						id="password"
						label="Password"
						type="password"
						autoComplete="current-password"
					/>
					<div className="buttonContainer">
						<Button variant="contained" color="primary">
							Login as buyer
						</Button>
						<Button variant="contained" color="secondary">
							Login as seller
						</Button>
					</div>
				</form>
			</div>
		</div>
	);
};
export default Login;
