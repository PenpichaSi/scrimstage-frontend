import { useState, useContext } from "react";
import { ThemeProvider } from "@mui/material/styles";
import theme from "../../services/mui_style";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import { Link, useNavigate } from "react-router-dom";
import { FormControl } from "@mui/material";

function RegisterForm() {
	const [gender, setGender] = useState(null);

	const handleChangeGender = (e) => {
		setGender(e.target.value);
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
					/>
					<TextField
						label="Password"
						type="password"
						variant="outlined"
						color="primary"
						className="my-2 auth_input"
					/>
					<TextField
						label="Repeat password"
						variant="outlined"
						color="primary"
						className="my-2 auth_input"
					/>
					<TextField
						label="Email"
						type="email"
						variant="outlined"
						color="primary"
						className="my-2 auth_input"
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
						/>
					</div>
					<div className="d-flex align-items-center">
						<h6 className="font-thirdnary ms-1 me-3">Gender: </h6>
						<RadioGroup
							className="d-flex align-items-center"
							row
							name="row-radio-group"
							value={gender}
							onChange={handleChangeGender}
						>
							<FormControlLabel
								value="male"
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
								value="female"
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
								value="other"
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
					<Button color="secondary" variant="contained" className="mt-3">
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
