import { useState } from "react";
import { Button, ThemeProvider, Modal, TextField } from "@mui/material";
import theme from "../../services/mui_style";
import val from "../../assets/images/logo/Riot.png";
import val_thumbnail from "../../assets/images/background_image/val_thumbnail.jpeg";

export default function GameAccountSetting() {
	const [showAddRiotAccount, setShowAddRiotAccount] = useState(false);
	const [riotAccout, setRiotAccout] = useState("dsaf");
	const [inGameName, setInGameName] = useState("");
	const [tag, setTag] = useState("");

	const handleShowModal = () => setShowAddRiotAccount(true);
	const handleCloseModal = () => setShowAddRiotAccount(false);

	const handleConnectButton = () => {
		handleCloseModal();
	};

	return (
		<ThemeProvider theme={theme}>
			<div className="setting_container flex-column-center justify-content-start my-4">
				{/* account info */}
				<div className="setting_input_box">
					<h4>
						<strong>Game Account information</strong>
					</h4>
				</div>

				{!riotAccout ? (
					<div className="riot_account_container">
						<h4 className="font-thirdnary ms-4">Connect Your Riot Id now</h4>
						<Button
							className="me-3"
							variant="contained"
							color="secondary"
							onClick={handleShowModal}
						>
							Add Account
						</Button>
					</div>
				) : (
					<div className="riot_account_display ">
						<img
							src={val_thumbnail}
							alt="val thumbnail"
							className="val_thumbnail_setting  mx-3 my-3"
						/>

						<div className="d-flex flex-column align-items-start mx-4 my-3">
							<div>
								<h2>
									<strong>Valorant</strong>
								</h2>
							</div>
							<div className="d-flex">
								<h4 className="font-thirdnary">Nickname:</h4>
								<h4>HEE Oakleyster</h4>
							</div>
							<div className="d-flex">
								<h4 className="font-thirdnary">tag: </h4>
								<h4># 0000</h4>
							</div>
						</div>
					</div>
				)}
			</div>
			<div>
				<Modal
					open={showAddRiotAccount}
					onClose={handleCloseModal}
					className="flex-column-center"
				>
					<div className="modal_add_account flex-column center">
						<div className="d-flex justify-content-end align-items-center">
							<button
								className="btn btn-secondary bg-transparent border-0 font-thirdnary me-2 mt-2"
								onClick={handleCloseModal}
							>
								Close
							</button>
						</div>

						{/* title */}
						<div className="d-flex justify-content-center">
							<h4 className="mx-1">
								<strong className="font-secondary">Connect </strong>
							</h4>
							<h4 className="font-thirdnary mx-1">
								<strong> Your Game</strong>
							</h4>
						</div>
						<div className="d-flex justify-content-center my-2">
							<img
								src={val}
								alt="Riot logo"
								className="modal_add_account_image"
							/>
						</div>
						<div className="d-flex justify-content-center mt-4 mb-3">
							<TextField
								sx={{ width: "350px" }}
								label="In-game name"
								color="primary"
								variant="outlined"
								value={inGameName}
								onChange={(e) => setInGameName(e.target.value)}
							/>
						</div>
						<div className="d-flex justify-content-center my-2">
							<TextField
								sx={{ width: "350px" }}
								label="tag"
								color="primary"
								variant="outlined"
								value={tag}
								onChange={(e) => setTag(e.target.value)}
							/>
						</div>

						<div className="d-flex justify-content-center mt-4 mb-2">
							<Button
								variant="contained"
								color="secondary"
								onClick={handleConnectButton}
							>
								<strong>Connect</strong>
							</Button>
						</div>
					</div>
				</Modal>
			</div>
		</ThemeProvider>
	);
}
