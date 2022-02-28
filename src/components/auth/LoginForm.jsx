import { useState, useContext } from "react";
import { ThemeProvider } from "@mui/material/styles";
import theme from "../../services/mui_style";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { Link, useNavigate } from "react-router-dom";

function LoginForm() {
	const [username, setUsername] = useState(null);
	const [password, setPassword] = useState(null);

	const navigate = useNavigate();

	// const handleSubmitLoginForm = () => {

	// }
	return (
		<div className="container auth_form">
			<h1 className="mt-4">
				<b>Log in</b>
			</h1>
			<hr className="w-100" />
			<ThemeProvider theme={theme}>
				<Box component="form" className="d-flex flex-column w-100">
					<TextField
						label="username"
						variant="outlined"
						className="my-2 login_input"
						color="primary"
						value={username}
						onChange={(e) => setUsername(e.target.value)}
					/>
					<TextField
						label="password"
						type="password"
						className="my-2 login_input"
						color="primary"
						value={password}
						onChange={(e) => setPassword(e.target.value)}
					/>
				</Box>

				<div className="d-flex justify-content-start w-100 ms-3 ">
					<p className="font-secondary mt-1">forget password</p>
				</div>
				<Button variant="contained" color="secondary">
					Log in
				</Button>
				<div className=" d-flex justify-content-center mt-4 mb-3">
					<p className="font-thirdnary">Don't have PlayStage account ?</p>
					<Link to="/register">
						<p className="font-secondary ms-2">Sign Up</p>
					</Link>
				</div>
			</ThemeProvider>
		</div>
	);
}

export default LoginForm;
