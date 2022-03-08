import { useState } from "react";
import { Button, TextField, ThemeProvider } from "@mui/material";
import theme from "../../services/mui_style";
export default function PlayStageAccountSetting() {
	const [username, setUsername] = useState("");
	const [email, setEmail] = useState("");
	const [oldPassword, setOldPassword] = useState("");
	const [newPassword, setNewPassword] = useState("");
	const [repeatNewPassword, setRepeatNewPassword] = useState("");
	const [editUsername, setEditUsername] = useState(false);
	const [editEmail, setEditEmail] = useState(false);
	const [editPassword, setEditPassword] = useState(false);

	return (
		<ThemeProvider theme={theme}>
			<div className="setting_container flex-column-center justify-content-start my-4">
				{/* account info */}
				<div className="setting_input_box">
					<h4>
						<strong>Account information</strong>
					</h4>
				</div>

				{/* username */}
				<div className="setting_input_box">
					<h4>
						<strong>Username</strong>
					</h4>
					{!editUsername && <h4 className="font-thirdnary">Oakleyster</h4>}

					{editUsername && (
						<div className="d-flex flex-column align-items-center justify-content-center">
							<div>
								<TextField
									label="username"
									variant="outlined"
									color="primary"
									sx={{ width: "400px" }}
									value={username}
									onChange={(e) => setUsername(e.target.value)}
								/>
							</div>

							{/* buttons save & discards */}
							<div className="my-3">
								<Button
									onClick={() => {
										setUsername("");
										setEditUsername(false);
									}}
									className="mx-4"
									variant="contained"
									color="primary"
								>
									<strong>Discard Changes</strong>
								</Button>
								<Button className="mx-4" variant="contained" color="secondary">
									<strong>Save Changes</strong>
								</Button>
							</div>
						</div>
					)}

					<button
						className="btn btn-secondary border-0 bg-transparent"
						onClick={() => setEditUsername(!editUsername)}
					>
						edit
					</button>
				</div>
				{/* email */}
				<div className="setting_input_box">
					<h4>
						<strong>E-mail</strong>
					</h4>
					{!editEmail && (
						<h4 className="font-thirdnary">anan.piyapanee@gmail.com</h4>
					)}

					{editEmail && (
						<div className="d-flex flex-column align-items-center justify-content-center">
							<div>
								<TextField
									label="email"
									variant="outlined"
									color="primary"
									value={email}
									onChange={(e) => setEmail(e.target.value)}
									sx={{ width: "400px" }}
								/>
							</div>

							{/* buttons save & discards */}
							<div className="my-3">
								<Button
									onClick={() => {
										setEmail("");
										setEditEmail(false);
									}}
									className="mx-4"
									variant="contained"
									color="primary"
								>
									<strong>Discard Changes</strong>
								</Button>
								<Button className="mx-4" variant="contained" color="secondary">
									<strong>Save Changes</strong>
								</Button>
							</div>
						</div>
					)}

					<button
						className="btn btn-secondary border-0 bg-transparent"
						onClick={() => setEditEmail(!editEmail)}
					>
						edit
					</button>
				</div>

				{/* password */}
				<div className="setting_input_box">
					<h4>
						<strong>Password</strong>
					</h4>
					{!editPassword && <h4 className="font-thirdnary">**********</h4>}

					{editPassword && (
						<div className="d-flex flex-column align-items-center justify-content-center">
							<div className="d-flex flex-column align-items-center">
								<TextField
									className="my-2"
									autoComplete="new-password"
									sx={{ width: "400px" }}
									type="password"
									label="old-password"
									variant="outlined"
									color="primary"
									value={oldPassword}
									onChange={(e) => setOldPassword(e.target.value)}
								/>
								<TextField
									className="my-2"
									autoComplete="new-password"
									sx={{ width: "400px" }}
									type="password"
									label="new-password"
									variant="outlined"
									color="primary"
									value={newPassword}
									onChange={(e) => setNewPassword(e.target.value)}
								/>
								<TextField
									className="my-2"
									autoComplete="new-password"
									sx={{ width: "400px" }}
									type="password"
									label="repeat-new-password"
									variant="outlined"
									color="primary"
									value={repeatNewPassword}
									onChange={(e) => setRepeatNewPassword(e.target.value)}
								/>
							</div>

							{/* buttons save & discards */}
							<div className="my-3">
								<Button
									onClick={() => {
										setOldPassword("");
										setNewPassword("");
										setRepeatNewPassword("");
										setEditPassword(false);
									}}
									className="mx-4"
									variant="contained"
									color="primary"
								>
									<strong>Discard Changes</strong>
								</Button>
								<Button className="mx-4" variant="contained" color="secondary">
									<strong>Save Changes</strong>
								</Button>
							</div>
						</div>
					)}

					<button
						className="btn btn-secondary border-0 bg-transparent"
						onClick={() => setEditPassword(!editPassword)}
					>
						edit
					</button>
				</div>
			</div>
		</ThemeProvider>
	);
}
