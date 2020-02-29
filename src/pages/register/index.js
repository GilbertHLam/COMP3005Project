import React from "react";
import "./styles.css";
import {
	Typography,
	Button,
	TextField,
	FormControl,
	InputLabel,
	Select,
	MenuItem
} from "@material-ui/core";

const Register = props => {
	const [role, setRole] = React.useState("");

	const inputLabel = React.useRef(null);
	const [labelWidth, setLabelWidth] = React.useState(0);
	React.useEffect(() => {
		setLabelWidth(inputLabel.current.offsetWidth);
	}, []);

	const handleChange = event => {
		setRole(event.target.value);
	};

	return (
		<div className="register">
			<div className="center">
				<Typography variant="h1">Look Inna Book</Typography>
				<form>
					<TextField
						required
						id="email"
						label="Email"
						defaultValue=""
					/>
					<br></br>
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
					<br></br>
					<FormControl>
						<InputLabel ref={inputLabel} id="role">
							Role
						</InputLabel>
						<Select
							labelId="role"
							id="role"
							value={role}
							onChange={handleChange}
							labelWidth={labelWidth}
						>
							<MenuItem value="Buyer">Buyer</MenuItem>
							<MenuItem value="Seller">Seller</MenuItem>
						</Select>
					</FormControl>
					<div className="buttonContainer">
						<Button variant="contained" color="primary">
							Register
						</Button>
					</div>
				</form>
			</div>
		</div>
	);
};
export default Register;
