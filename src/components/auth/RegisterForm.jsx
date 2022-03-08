import { useState, useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "../../Config/axios";
import { ErrorContext } from "../../contexts/ErrorContext";
import validator from "validator";
import {
	ThemeProvider,
	Box,
	TextField,
	Button,
	Radio,
	RadioGroup,
	FormControlLabel,
} from "@mui/material";
import theme from "../../services/mui_style";

function RegisterForm() {
	const { error, setError } = useContext(ErrorContext);
	const [username, setUsername] = useState("");
	const [password, setPassword] = useState("");
	const [reapeatPassword, setRepeatPassword] = useState("");
	const [email, setEmail] = useState("");
	const [birthDate, setBirthDate] = useState("");
	const [gender, setGender] = useState("");

	const navigate = useNavigate();

	const handleSubmitRegisterForm = async (e) => {
		e.preventDefault();
		setError("");
		if (!validator.isEmpty(username)) {
			console.log("username cannot be empty");
			setError("username cannot be empty");
		}
		if (!validator.isEmail(email)) {
			console.log("the email is in invalid");
			setError("the email is in invalid");
		}
		if (!validator.isEmpty(password) || password.includes(" ")) {
			console.log("password cannot contain white space please create new one");
			setError("password cannot contain white space please create new one");
		}
		if (password.length < 8) {
			setError("password cannot be less than 8 letters");
		}
		if (!validator.isEmpty(birthDate)) {
			setError("select your birth date");
		}
		if (!validator.equals(password, reapeatPassword)) {
			console.log("password and repeat password are not matching");
			setError("password and repeat password are not matching");
		}

		try {
			await axios.post("/users/register", {
				username,
				password,
				confirmPassword: reapeatPassword,
				email,
				birthDate,
				gender,
			});
		} catch (err) {
			setError(err.data.message);
		}
		navigate("/");
	};
	return (
		<div className="container auth_form">
			<h1 className="mt-4">
				<b>Register</b>
			</h1>
			<hr className="w-100" />
			<ThemeProvider theme={theme}>
				<Box component="form" className="d-flex flex-column w-100">
					<TextField
						label="Username"
						variant="outlined"
						color="primary"
						className="my-2 auth_input"
						value={username}
						onChange={(e) => setUsername(e.target.value)}
					/>
					<TextField
						label="Password"
						type="password"
						variant="outlined"
						color="primary"
						className="my-2 auth_input"
						value={password}
						onChange={(e) => setPassword(e.target.value)}
					/>
					<TextField
						label="Repeat password"
						variant="outlined"
						type="password"
						color="primary"
						className="my-2 auth_input"
						value={reapeatPassword}
						onChange={(e) => setRepeatPassword(e.target.value)}
					/>
					<TextField
						label="Email"
						type="email"
						variant="outlined"
						color="primary"
						className="my-2 auth_input"
						value={email}
						onChange={(e) => setEmail(e.target.value)}
					/>
					<div className="d-flex ms-1 my-3 align-items-center justify-content-between">
						<h6 className="font-thirdnary">Date of Birth: </h6>
						<TextField
							label="birthDate"
							id="birthDate"
							variant="outlined"
							color="primary"
							type="date"
							InputLabelProps={{ shrink: true }}
							sx={{ width: "75%" }}
							value={birthDate}
							onChange={(e) => setBirthDate(e.target.value)}
						/>
					</div>
					<div className="d-flex align-items-center">
						<h6 className="font-thirdnary ms-1 me-3">Gender: </h6>
						<RadioGroup
							className="d-flex align-items-center"
							row
							name="row-radio-group"
							value={gender}
							onChange={(e) => setGender(e.target.value)}
						>
							<FormControlLabel
								value="MALE"
								color="primary"
								control={<Radio />}
								label="Male"
								sx={{
									"& .MuiSvgIcon-root": {
										fontSize: "14px",
									},
								}}
							/>
							<FormControlLabel
								value="FEMALE"
								color="primary"
								control={<Radio />}
								label="Female"
								sx={{
									"& .MuiSvgIcon-root": {
										fontSize: "14px",
									},
								}}
							/>
							<FormControlLabel
								value="OTHER"
								color="primary"
								control={<Radio />}
								label="other"
								sx={{
									"& .MuiSvgIcon-root": {
										fontSize: "14px",
									},
								}}
							/>
						</RadioGroup>
					</div>
					<Button
						color="secondary"
						variant="contained"
						className="mt-3"
						onClick={handleSubmitRegisterForm}
					>
						Submit
					</Button>
				</Box>
				<div className=" d-flex justify-content-center mt-4 mb-3">
					<p className="font-thirdnary">Already have account ?</p>
					<Link to="/">
						<p className="font-secondary ms-2">Log in</p>
					</Link>
				</div>
			</ThemeProvider>
		</div>
	);
}

export default RegisterForm;
