import { useState } from "react";
import { Modal, ThemeProvider, TextField, Button } from "@mui/material";
import theme from "../../services/mui_style";

export default function ModalCreateTeam({
	handleShowCreateTeam,
	handleCloseCreateTeam,
	showModalCreateTeam,
}) {
	const [teamName, setTeamName] = useState("");
	const [teamTag, setTeamTag] = useState("");
	return (
		<div>
			<ThemeProvider theme={theme}>
				<Modal
					open={showModalCreateTeam}
					onClose={handleCloseCreateTeam}
					className="flex-column-center"
				>
					<div className="modal_add_account flex-column-center">
						<div className="d-flex justify-content-end align-items-center">
							<button
								className="btn btn-secondary bg-transparent border-0 font-thirdnary me-2 mt-2"
								onClick={handleCloseCreateTeam}
							>
								Close
							</button>
						</div>

						{/* title */}
						<div className="d-flex justify-content-center">
							<h4 className="mx-1">
								<strong className="font-secondary">Create </strong>
							</h4>
							<h4 className="font-thirdnary mx-1">
								<strong> Your Team</strong>
							</h4>
						</div>
						<div className="d-flex justify-content-center mt-3">
							<h4>Create your team to level up your game standard</h4>
						</div>
						<div className="d-flex justify-content-center mt-4 mb-3">
							<TextField
								sx={{ width: "350px" }}
								label="Team name"
								color="primary"
								variant="outlined"
								value={teamName}
								onChange={(e) => setTeamName(e.target.value)}
							/>
						</div>
						<div className="d-flex justify-content-center my-2">
							<TextField
								sx={{ width: "350px" }}
								label="Team tag"
								color="primary"
								variant="outlined"
								value={teamTag}
								onChange={(e) => setTeamTag(e.target.value)}
							/>
						</div>
						<hr style={{ borderTop: "2px solid #ffffff", width: "70%" }} />
						<div className="d-flex justify-content-center mt-2 mb-2">
							<Button
								variant="contained"
								color="secondary"
								onClick={handleCloseCreateTeam}
							>
								<strong>Connect</strong>
							</Button>
						</div>
					</div>
				</Modal>
			</ThemeProvider>
		</div>
	);
}
